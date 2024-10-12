import express from 'express'
const router = express.Router()
// 資料庫使用
import { Op } from 'sequelize'
import sequelize from '#configs/db.js'
const { De_Product } = sequelize.models
// 上傳檔案用使用express-fileupload
// import fileUpload from 'express-fileupload'
// import cors from 'cors'
// import bodyParser from 'body-parser'
// import morgan from 'morgan'
// import _ from 'lodash'
// 測試增加
// import path from 'path'

// Eddie: cb(null, 'public/uploads/') -------------------------------------------------------- //
// 檔案上傳處理 multer套件
// import multer from 'multer'
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // 設定儲存位置
//     cb(null, 'public/uploads/')
//   },
//   filename: function (req, file, cb) {
//     // 取得副檔名
//     const mimeToExt = {
//       'image/jpeg': 'jpg',
//       'image/png': 'png',
//       'image/gif': 'gif',
//       // 添加其他 MIME 類型和相應的副檔名
//     }
//     // 新檔名為 日期(毫秒).副檔名
//     cb(null, `${Date.now()}.${mimeToExt[file.mimetype]}`)
//   },
// })

// const upload = multer({
//   storage: storage,
//   // limits: { fileSize: 1024 * 1024 * 5 }, // 例如：限制檔案大小為5MB
// })

// Eddie:-------------------------------------------------------- //

// const app = express()
// 啟動檔案上傳
// app.use(
//   fileUpload({
//     createParentPath: true,
//   })
// )
// 加入其它的middleware
// app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(morgan('dev'))
// 您可以透過 /static 路徑字首，來載入 uploads 目錄中的檔案。
// /Users/elly/Documents/web-next-bs5/public/images/product/device
// app.use('../public/uploads', express.static('../public/uploads'))
// 檢查空物件, 轉換req.params為數字
// import { getIdParam } from '#db-helpers/db-tool.js'
// 上傳檔案用使用multer
// import multer from 'multer'
// import path from 'path'
// import { fileURLToPath } from 'url'
// import fs from 'fs'

// 獲取當前模組的 URL
// const __filename = fileURLToPath(import.meta.url)
// // 獲取當前模組的目錄路徑
// const __dirname = path.dirname(__filename)
// const reactPath = path.join(
//   __dirname,
//   '../../web-next-bs5/public/images/product/device'
// )
// console.log(reactPath)
// 确保前端文件夹存在
// if (!fs.existsSync(reactPath)) {
//   fs.mkdirSync(reactPath, { recursive: true })
// }

// multer的設定值 - START
// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     // 存放目錄
//     callback(null, reactPath)
//   },
//   filename: function (req, file, callback) {
//     // 經授權後，req.user帶有會員的id
//     const newFilename = Date.now() + path.extname(file.originalname)
//     callback(null, newFilename)
//     // 新檔名由表單傳來的req.body.newFilename決定
//   },
// })
// const upload = multer({ storage: storage })
// multer的設定值 - END

// GET - 得到所有資料
router.get('/', async function (req, res) {
  const products = await De_Product.findAll({ logging: console.log })
  // 處理如果沒找到資料

  // 標準回傳JSON
  return res.json({ status: 'success', data: { products } })
})

// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
router.get('/:id', async function (req, res) {
  // 轉為數字
  const id = Number(req.params.id)

  const product = await De_Product.findByPk(id, {
    raw: true,
  })

  return res.json({ status: 'success', data: { product } })
})

// req.body資料範例
// [
//   {
//     "id": 1,
//     "name":"ASUS G614JVR 16吋2K電競筆電",
//     "category":"筆記型電腦",
//     "brand":"ASUS",
//     "info":"i9-14900HX/RTX4060/16G/1TB SSD/ROG Strix G16",
//     "price":63000,
//     "photo":"ASUS G614JVR 16吋2K電競筆電$63000.png",
//     "size":"16吋",
//     "tag": "hot"
//   }
// ]

// Eddie: -------------------------------------------------------- //
// POST - 新增商品資料
// router.post('/upload', upload.single('photo'), async function (req, res) {
//   if (!req.file || !req.file.filename === 'photo') {
//     return res.send({
//       status: false,
//       message: 'No file uploaded',
//     })
//   }

//   console.log('req.file', req.file)
//   console.log('req.body', req.body)
//   const nowPhotoName = req.file.filename

//   const newProduct = req.body

//   De_Product.findOrCreate({
//     where: {
//       [Op.or]: [{ name: newProduct.name }, { price: newProduct.price }],
//     },
//     defaults: {
//       name: newProduct.name,
//       category: newProduct.category,
//       brand: newProduct.brand,
//       info: newProduct.info,
//       price: newProduct.price,
//       photo: nowPhotoName,
//       size: newProduct.size,
//       tag: newProduct.tag,
//     },
//   })
//     .then(([product, created]) => {
//       if (!created) {
//         return res.json({ status: 'error', message: '建立失敗' })
//       }

//       return res.status(201).json({
//         status: 'success',
//         data: null,
//       })
//     })
//     .catch((error) => {
//       console.error(error)
//       res.status(500).send('Server Error')
//     })
// })
// Eddie: -------------------------------------------------------- //
router.post('/insert', async function (req, res) {
  const newProduct = req.body

  const [product, created] = await De_Product.findOrCreate({
    where: {
      [Op.or]: [{ name: newProduct.name }, { price: newProduct.price }],
    },
    defaults: {
      name: newProduct.name,
      category: newProduct.category,
      brand: newProduct.brand,
      info: newProduct.info,
      price: newProduct.price,
      photo: newProduct.photo,
      size: newProduct.size,
      tag: newProduct.tag,
    },
  })
  // 新增失敗 created=false 代表沒新增
  if (!created) {
    return res.json({ status: 'error', message: '商品上架失敗' })
  }

  return res.status(201).json({
    status: 'success',
    data: null,
  })
})

export default router
