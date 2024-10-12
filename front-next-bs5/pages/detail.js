// import React from 'react'
// import { useState, useEffect } from 'react'
import { FaStar, FaShoppingBag } from 'react-icons/fa'
import { TiMinus } from 'react-icons/ti'
import { IoMdAdd } from 'react-icons/io'
import ReviewIndex from '@/components/review'
import AddReview from '@/components/review/add-review'

export default function Detail() {
  // const { reviews, setReviews } = useState([])

  // // 與伺服器作fetch獲得資料
  // const getReviews = async () => {
  //   const url = 'http://localhost:3005/api/reviews'

  //   // 使用try-catch語句，讓和伺服器連線的程式能作錯誤處理
  //   try {
  //     const res = await fetch(url)
  //     const resData = await res.json()

  //     if (resData.status === 'success') {
  //       // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)，呈現資料
  //       // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
  //       if (Array.isArray(resData.data.reviews)) {
  //         setReviews(resData.data.reviews)
  //       }
  //     }
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  // useEffect(() => {
  //   getReviews()
  // }, [])

  return (
    <>
      {/* Spinner Start */}
      {/* <div
        id="spinner"
        className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary" role="status" />
      </div> */}
      {/* Spinner End */}

      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop Detail</h1>
      </div>
      {/* Single Page Header end */}

      {/* {reviews.map((v, i) => {
        return (
          <li key={v.id}>
            {v.user}
          </li>
        )
      })} */}

      {/* Single Product Start */}
      <div className="container-fluid py-5 mt-5">
        <div className="container py-5">
          <div className="row g-4 mb-5">
            <div className="col-lg-8 col-xl-9">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="border rounded">
                    <a href="#">
                      <img
                        src="/images/product/device/耳機.png"
                        className="img-fluid rounded"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h4 className="fw-bold mb-3">Earphone</h4>
                  <p className="mb-3">Category: Electronic Product</p>
                  <h5 className="fw-bold mb-3">33,5 $</h5>
                  <div className="d-flex mb-4">
                    <FaStar />
                    <FaStar />
                    {/* <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" /> */}
                    <i className="fa fa-star" />
                  </div>
                  <>
                    <p className="mb-4">產品介紹</p>
                    <p className="mb-4">
                      陶醉於音樂的樂趣，體驗不間斷的通話，享受長達60小時的播放時間，一切盡在一副耳罩式耳機中
                      - 配備混合主動降噪功能，獨享個人的音樂寧靜天地。
                      聲音名片深邃浸潤的低音，強而有力的主動降噪。在廣闊的音景中，品味音樂交響的奇妙。
                    </p>
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
                        <FaShoppingBag />
                        加入購物車
                      </a>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-5 py-2 mb-4 text-primary"
                      >
                        <FaShoppingBag />
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
      {/* Single Product End */}

      {/* 買家評論 Start */}
      <ReviewIndex />
      <AddReview />
      {/* 買家評論 End */}

      {/* 購買其他商品 Start */}
      <div className="container-fluid col-lg-7 row g-4 py-5 mx-auto">
        <h1 className="fw-bold mb-0">購買其他商品</h1>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="/images/product/device/耳機1.png"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Sale
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Mini</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$30.99</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="/images/product/device/耳機1.png"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Sale
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Mini</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$30.99</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="/images/product/device/耳機1.png"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Sale
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Mini</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$30.99</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 購買其他商品 End */}

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
