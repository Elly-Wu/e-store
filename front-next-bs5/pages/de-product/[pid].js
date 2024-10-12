import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import Loader from '@/components/loader'
import { size } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import { TiMinus } from 'react-icons/ti'
import { IoMdAdd } from 'react-icons/io'
import ReviewIndex from '@/components/review'
import AddReview from '@/components/review/add-review'

/* 
{
    "id": 1,
    "name":"ASUS G614JVR 16吋2K電競筆電",
    "category":"筆記型電腦",
    "brand":"ASUS",
    "info":"i9-14900HX/RTX4060/16G/1TB SSD/ROG Strix G16",
    "price":63000,
    "photo":"ASUS G614JVR 16吋2K電競筆電$63000.png",
    "size":"16吋",
    "tag": "hot"
  },
 */
// 資料夾中 [pid].js 檔案代表這個路由中
export default function Detail() {
  const router = useRouter()
  const [product, setProduct] = useState({
    id: 1,
    name: '',
    category: '',
    brand: '',
    info: '',
    price: 63000,
    photo: '',
    size: '',
    tag: '',
  })

  const [isLoading, setIsLoading] = useState(true)

  // 與伺服器fetch獲得資料
  const getProduct = async (pid) => {
    const url = 'http://localhost:3005/api/de-products/' + pid

    // 搭配try-catch, 讓和伺服器連線的程式能做錯誤處理
    try {
      const res = await fetch(url)
      const resData = await res.json()

      // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)，呈現資料
      // 確定資料是純物件資料類型才設定到狀態中(最基本的保護)
      if (resData.status === 'success') {
        setProduct(resData.data.product)
        // 關閉載入動畫，1.5再關閉
        // setTimeout(() => {
        //   setIsLoading(false)
        // }, 1500)
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    console.log('render router.query=', router.query)
  })

  // 樣式3: didMount + didUpdate
  useEffect(() => {
    if (router.isReady) {
      // router.query
      console.log(router.query)
      getProduct(router.query.pid)
    }
    // 註解掉eslint的警告一行
    // eslint-disable-next-line
  }, [router.isReady])

  return (
    <>
      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop Detail</h1>
      </div>
      {/* Single Page Header end */}
      <div className="container-fluid py-5 mt-5">
        <div className="container py-5">
          <div className="row g-4 mb-5">
            <div className="col-lg-8 col-xl-9">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="border rounded">
                    <Link href="#">
                      <Image
                        className="card-img-top"
                        src={`/images/product/device/${
                          product.photo.split(',')[0]
                        }`}
                        alt="..."
                        width={300}
                        height={200}
                        placeholder="blur"
                        blurDataURL={`/images/product/device/${
                          product.photo.split(',')[0]
                        }`}
                        style={{ width: '100%', height: 'auto' }} // optional
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h4 className="fw-bold mb-3">名稱: {product.name}</h4>
                  <p className="mb-3">分類: {product.category}</p>
                  <p className="mb-3">品牌: {product.brand}</p>
                  <p className="mb-3">標籤: {product.tag}</p>
                  <h5 className="fw-bold mb-3">價格: {product.price}</h5>
                  <div className="d-flex mb-4">
                    {/* <FaStar />
                    <FaStar /> */}
                    {/* <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" /> */}
                    <i className="fa fa-star" />
                  </div>
                  <>
                    <p className="mb-4">單品介紹</p>
                    <p className="mb-4">{product.info}</p>
                    <p className="mb-3">規格: {product.size}</p>
                    <div
                      className="input-group quantity mb-5"
                      style={{ width: 100 }}
                    >
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                          <TiMinus />
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm text-center border-0"
                        defaultValue={1}
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                          <IoMdAdd />
                        </button>
                      </div>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-5 py-2 mb-4 text-primary"
                      >
                        {/* <FaShoppingBag /> */}
                        加入購物車
                      </a>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-5 py-2 mb-4 text-primary"
                      >
                        {/* <FaShoppingBag /> */}
                        直接購買
                      </a>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* single product end */}

      {/* 買家評論 Start */}
      <ReviewIndex />
      <AddReview />
      {/* 買家評論 End */}

      <style global jsx>
        {`
          .page-header {
            position: relative;
            background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(../images/product/food/cart-page-header-img.jpg);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
          }
        `}
      </style>
    </>
  )
}
