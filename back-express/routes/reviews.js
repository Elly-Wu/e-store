import express from 'express'
const router = express.Router()
// 資料庫使用
import { Op } from 'sequelize'
import sequelize from '#configs/db.js'
const { Review } = sequelize.models
// 資料庫直接使用 mysql 查詢
import db from '#configs/mysql.js'

// GET - 得到所有資料
router.get('/', async function (req, res) {
  const reviews = await Review.findAll({ logging: console.log })
  // 處理如果沒找到資料

  // 標準回傳JSON
  return res.json({ status: 'success', data: { reviews } })
})

// POST- 增加評論
router.post('/', async function (req, res) {
  // req.body資料範例

  // 要新增資料
  const newReview = req.body

  // 檢查從前端來的資料哪些為必要(name, username...)
  if (!newReview.user || !newReview.shop || !newReview.rating) {
    return res.json({ status: 'error', message: '缺少用戶、商家、或星等資料' })
  }

  const [review, created] = await Review.findOrCreate({
    where: {
      [Op.or]: [{ user: newReview.user }, { shop: newReview.shop }],
    },
    defaults: {
      u_photo: newReview.u_photo,
      user: newReview.user,
      shop: newReview.shop,
      comment: newReview.comment,
      rating: newReview.rating,
    },
  })

  // 新增失敗 created=false 代表沒新增
  if (!created) {
    return res.json({ status: 'error', message: '評論失敗' })
  }

  return res.status(201).json({
    status: 'success',
    data: null,
  })
})

// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
// router.get('/:id', async function (req, res) {
//   // 轉為數字
//   const id = Number(req.params.id)

//   const review = await Review.findByPk(id, {
//     raw: true,
//   })

//   return res.json({ status: 'success', data: { review } })
// })

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Reviews' })
// })

export default router
