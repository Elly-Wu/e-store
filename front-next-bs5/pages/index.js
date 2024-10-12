// pages/index.js
import Link from 'next/link'
import Image from 'next/image'
import PlaceholderText from '@/components/common/placeholder-text'

export default function Home() {
  return (
    <>
      {/* Spinner Start */}
      {/* <div
        id="spinner"
        className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary" role="status" />
      </div> */}
      {/* Spinner Start */}

      {/* Hero Start */}
      <div className="container-fluid py-5 mb-5 ">
        <div className="col-md-12 col-lg-12">
          <div
            id="carouselId"
            className="carousel slide position-relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active rounded">
                <img
                  src="/images/heroes/未命名設計1.png"
                  className="img-fluid w-100 h-100 bg-secondary rounded"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item rounded">
                <img
                  src="/images/heroes/未命名設計 (1).png"
                  className="img-fluid w-100 h-100 rounded"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item rounded">
                <img
                  src="/images/heroes/未命名設計 (1).png"
                  className="img-fluid w-100 h-100 rounded"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item rounded">
                <img
                  src="/images/heroes/未命名設計 (1).png"
                  className="img-fluid w-100 h-100 rounded"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item rounded">
                <img
                  src="/images/heroes/未命名設計 (1).png"
                  className="img-fluid w-100 h-100 rounded"
                  alt="Second slide"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* 商品分類鈕小圖 start */}
      <section className="ftco-section">
        <div className="container">
          <div className="row no-gutters ftco-services">
            <div className="col-md-2 col-sm-3 col-4 text-center d-flex align-self-stretch ftco-animate ">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-shipped" />
                </div>
                <div className="media-body ">
                  <Link href="/notebook-shop">
                    <img
                      src="/images/product/device/ASUS G614JVR 16吋2K電競筆電$63000.png"
                      alt=""
                      style={{ width: 90 }}
                    />
                    <h5 className="heading">筆記型電腦</h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-6 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-shipped" />
                </div>
                <div className="media-body">
                  <Link href="/PC-shop.html">
                    <img
                      src="/images/product/device/PC.png"
                      alt=""
                      style={{ width: 90 }}
                    />
                    <h5 className="heading">桌上型電腦</h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-6 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-shipped" />
                </div>
                <div className="media-body">
                  <Link href="/earphone-shop.html">
                    <img
                      src="/images/product/device/耳機1.png"
                      alt=""
                      style={{ width: 90 }}
                    />
                    <h5 className="heading">耳機</h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-6 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-diet" />
                </div>
                <div className="media-body">
                  <div className="media-body">
                    <Link href="/tablet-shop.html">
                      <img
                        src="/images/product/device/Apple iPad 第10代 (2022) Wifi 10.9吋 平板.png"
                        alt=""
                        style={{ width: 90 }}
                      />
                      <h5 className="heading">平板電腦</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-6 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-award" />
                </div>
                <div className="media-body">
                  <div className="media-body">
                    <Link href="/cellphone-shop.html">
                      <img
                        src="/images/product/device/手機.png"
                        alt=""
                        style={{ width: 90 }}
                      />
                      <h5 className="heading">手機</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-6 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-customer-service" />
                </div>
                <div className="media-body">
                  <Link href="videogame-shop.html">
                    <img
                      src="/images/product/device/遊戲機1.png"
                      alt=""
                      style={{ width: 90 }}
                    />
                    <h5 className="heading">遊戲機</h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-6 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                  <span className="flaticon-customer-service" />
                </div>
                <div className="media-body">
                  <Link href="moniter-shop.html">
                    <img
                      src="/images/product/device/GIGABYTE GS27F .png"
                      alt=""
                      style={{ width: 90 }}
                    />
                    <h5 className="heading">顯示器</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 商品分類鈕小圖 end */}

      {/* 推薦商品 Start */}
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-class text-center">
            <div className="row g-4">
              <div className="col-lg-4 text-start">
                <h1>推薦商品</h1>
              </div>
              <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  <li className="nav-item">
                    <Link
                      className="d-flex m-2 py-2 bg-light rounded-pill active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <span className="text-dark" style={{ width: 130 }}>
                        桌上型電腦
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="d-flex py-2 m-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <span className="text-dark" style={{ width: 130 }}>
                        筆記型電腦
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <span className="text-dark" style={{ width: 130 }}>
                        耳機
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-4"
                    >
                      <span className="text-dark" style={{ width: 130 }}>
                        手機
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/images/product/device/PC.png"
                              className="img-fluid w-100 rounded-top border border-secondary"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            桌上型電腦
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>桌上型電腦</h4>
                            <p>
                              I7 12700/8G/512GM.2/550W 電腦天堂 桌上型電腦
                              繪圖主機 文書 電競 PC
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $ 15500
                              </p>
                              <Link
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{' '}
                                加入購物車
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/images/product/device/PC.png"
                              className="img-fluid w-100 rounded-top border border-secondary"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            桌上型電腦
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>桌上型電腦</h4>
                            <p>
                              I7 12700/8G/512GM.2/550W 電腦天堂 桌上型電腦
                              繪圖主機 文書 電競 PC
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $ 15500
                              </p>
                              <Link
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{' '}
                                加入購物車
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/images/product/device/PC.png"
                              className="img-fluid w-100 rounded-top border border-secondary"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            桌上型電腦
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>桌上型電腦</h4>
                            <p>
                              I7 12700/8G/512GM.2/550W 電腦天堂 桌上型電腦
                              繪圖主機 文書 電競 PC
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $ 15500
                              </p>
                              <Link
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{' '}
                                加入購物車
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/images/product/device/PC.png"
                              className="img-fluid w-100 rounded-top border border-secondary"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            桌上型電腦
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>桌上型電腦</h4>
                            <p>
                              I7 12700/8G/512GM.2/550W 電腦天堂 桌上型電腦
                              繪圖主機 文書 電競 PC
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $ 15500
                              </p>
                              <Link
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{' '}
                                加入購物車
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/images/product/device/PC.png"
                              className="img-fluid w-100 rounded-top border border-secondary"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            桌上型電腦
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>桌上型電腦</h4>
                            <p>
                              I7 12700/8G/512GM.2/550W 電腦天堂 桌上型電腦
                              繪圖主機 文書 電競 PC
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $ 15500
                              </p>
                              <Link
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{' '}
                                加入購物車
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/images/product/device/PC.png"
                              className="img-fluid w-100 rounded-top border border-secondary"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            桌上型電腦
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>桌上型電腦</h4>
                            <p>
                              I7 12700/8G/512GM.2/550W 電腦天堂 桌上型電腦
                              繪圖主機 文書 電競 PC
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $ 15500
                              </p>
                              <Link
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{' '}
                                加入購物車
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/images/product/device/PC.png"
                              className="img-fluid w-100 rounded-top border border-secondary"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            桌上型電腦
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>桌上型電腦</h4>
                            <p>
                              I7 12700/8G/512GM.2/550W 電腦天堂 桌上型電腦
                              繪圖主機 文書 電競 PC
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $ 15500
                              </p>
                              <Link
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{' '}
                                加入購物車
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/images/product/device/PC.png"
                              className="img-fluid w-100 rounded-top border border-secondary"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            桌上型電腦
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>桌上型電腦</h4>
                            <p>
                              I7 12700/8G/512GM.2/550W 電腦天堂 桌上型電腦
                              繪圖主機 文書 電競 PC
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $ 15500
                              </p>
                              <Link
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{' '}
                                加入購物車
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/images/product/device/ASUS G614JVR 16吋2K電競筆電$63000.png"
                              className="img-fluid w-100 rounded-top border border-secondary"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            筆記型電腦
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>ASUS G614JVR 16吋2K電競筆電</h4>
                            <p>
                              (i9-14900HX/RTX4060/16G/1TB SSD/ROG Strix G16)
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $ 63000
                              </p>
                              <Link
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{' '}
                                加入購物車
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/images/product/device/ASUS G614JVR 16吋2K電競筆電$63000.png"
                              className="img-fluid w-100 rounded-top border border-secondary"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            筆記型電腦
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>ASUS G614JVR 16吋2K電競筆電</h4>
                            <p>
                              (i9-14900HX/RTX4060/16G/1TB SSD/ROG Strix G16)
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $ 63000
                              </p>
                              <Link
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />{' '}
                                加入購物車
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/images/product/device/耳機1.png"
                              className="img-fluid w-100 rounded-top border border-secondary"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            耳機
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>GM180 PLUS有線電競耳機</h4>
                            <p>小巧半入耳式設計 更貼耳 配戴更舒適</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $ 699
                              </p>
                              <Link
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />
                                加入購物車
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/images/product/device/耳機1.png"
                              className="img-fluid w-100 rounded-top border border-secondary"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            耳機
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>GM180 PLUS有線電競耳機</h4>
                            <p>小巧半入耳式設計 更貼耳 配戴更舒適</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $ 699
                              </p>
                              <Link
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />
                                加入購物車
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-4" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/images/product/device/cellphone.png"
                              className="img-fluid w-100 rounded-top border border-secondary"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            手機
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Apple iPhone 15 Pro 256GB </h4>
                            <p>Apple iPhone 15 Pro 256GB A17 PRO </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $ 39,188
                              </p>
                              <Link
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />
                                加入購物車
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/images/product/device/cellphone.png"
                              className="img-fluid w-100 rounded-top border border-secondary"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: 10, left: 10 }}
                          >
                            手機
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Apple iPhone 15 Pro 256GB </h4>
                            <p>Apple iPhone 15 Pro 256GB A17 PRO </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $ 39,188
                              </p>
                              <Link
                                href="#"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary" />
                                加入購物車
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 推薦商品 End */}

      <style global jsx>
        {`
          .hero-header {
            background: linear-gradient(
                rgba(248, 223, 173, 0.1),
                rgba(248, 223, 173, 0.1)
              ),
              url(../images/heroes/hero-img.jpg);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
          }
           {
            /* Fruit Start */
          }
          a {
            text-decoration: none;
          }
          .fruite .tab-class .nav-item a.active {
            background: var(--bs-secondary) !important;
          }
           
        `}
      </style>
    </>
  )
}
