import express from 'express'
const router = express.Router()
// 資料庫使用
import { Op } from 'sequelize'
import sequelize from '#configs/db.js'
const { Member } = sequelize.models
// 資料庫直接使用 mysql 查詢
import db from '#configs/mysql.js'
// 密碼編碼和檢查比對用
import { generateHash, compareHash } from '##/db-helpers/password-hash.js'

router.get('/:id', async function (req, res) {
  // 轉為數字
  const id = Number(req.params.id)

  // 檢查是否為授權會員，只有授權會員可以存取自己的資料

  // 用一般sql
  // const [rows] = await db.query(`SELECT * FROM WHERE id=?`, [id])
  // const member = rows[0]

  // ORM
  const member = await Member.findByPk(id, {
    raw: true, // 只需要資料表中資料
  })

  // 不回傳密碼
  delete member.password

  return res.json({ status: 'success', data: { member } })
})

// 使用一般mysql+SQL的語法
router.post('/', async function (req, res) {
  // req.body資料範例
  // {
  //   "id": 1,
  //   "name": "維納斯",
  //   "username": "venus",
  //   "password": "11111",
  //   "email": "venus@test.com"
  // }

  // 要新增的會員資料
  const newMember = req.body

  // 檢查從前端來的資料哪些為必要(name, username...)
  if (
    !newMember.username ||
    !newMember.email ||
    !newMember.name ||
    !newMember.password
  ) {
    return res.json({ status: 'error', message: '缺少必要資料' })
  }

  // 先檢查username或是email不能有相同的
  const [rows] = await db.query(
    `SELECT * FROM member WHERE username = ? OR email = ?`,
    [newMember.username, newMember.email]
  )
  console.log(rows)

  if (rows.length > 0) {
    return res.json({
      status: 'error',
      message: '建立會員失敗，有重覆的帳號或email',
    })
  }

  // 以下是準備新增會員
  // 1. 進行密碼編碼
  const passwordHash = await generateHash(newMember.password)

  // 2. 新增到資料表
  const [rows2] = await db.query(
    `INSERT INTO member(name, username, password, email, created_at, updated_at) VALUES(?, ?, ?, ?, NOW(), NOW())`,
    [newMember.name, newMember.username, passwordHash, newMember.email]
  )
  console.log(rows2)

  if (!rows2.insertId) {
    return res.json({
      status: 'error',
      message: '建立會員失敗，資料庫錯誤',
    })
  }

  // 成功建立會員的回應
  // 狀態`201`是建立資料的標準回應，
  // 如有必要可以加上`Location`會員建立的uri在回應標頭中，或是回應剛建立的資料
  // res.location(`/users/${user.id}`)
  return res.status(201).json({
    status: 'success',
    data: null,
  })
})

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Members' })
// })

export default router
