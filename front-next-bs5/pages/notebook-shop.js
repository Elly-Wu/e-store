import React from 'react'
import Link from 'next/link'

export default function NotebookShop() {
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

      {/* 1st. 過濾排序  */}
      <div className="container-fluid fruite py-5">
        <div className="col-lg-12">
          <div className="row g-4">
            <div className="col-xl-3" />
            <div className="col-4" />
            <div className="col-xl-3">
              <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                <label htmlFor="fruits">價格:</label>
                <select
                  id="fruits"
                  name="fruitlist"
                  className="border-0 form-select-sm bg-light me-3"
                  form="fruitform"
                >
                  <option value="volvo">價格</option>
                  <option value="volvo">低-高</option>
                  <option value="volvo">高-低</option>
                </select>
              </div>
            </div>
          </div>
          {/* sidebar */}
          <div className="row g-4">
            <div className="col-lg-2">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <h4>Categories</h4>
                    <ul className="list-unstyled fruite-categorie">
                      <li>
                        <div className="d-flex justify-content-between fruite-name">
                          <Link href="/all-shop">全部</Link>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between fruite-name">
                          <Link href="/notebook-shop">筆記型電腦</Link>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between fruite-name">
                          <Link href="/earphone-shop.html">耳機</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* 商品列表 */}
            <div className="col-lg-8">
              <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-6 col-xl-4">
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
                      <p>(i9-14900HX/RTX4060/16G/1TB SSD/ROG Strix G16)</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$ 63000</p>
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
                <div className="col-md-6 col-lg-6 col-xl-4">
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
                      <p>(i9-14900HX/RTX4060/16G/1TB SSD/ROG Strix G16)</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$ 63000</p>
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
                <div className="col-md-6 col-lg-6 col-xl-4">
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
                      <p>(i9-14900HX/RTX4060/16G/1TB SSD/ROG Strix G16)</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$ 63000</p>
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
                <div className="col-md-6 col-lg-6 col-xl-4">
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
                      <p>(i9-14900HX/RTX4060/16G/1TB SSD/ROG Strix G16)</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$ 63000</p>
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
                <div className="col-md-6 col-lg-6 col-xl-4">
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
                      <p>(i9-14900HX/RTX4060/16G/1TB SSD/ROG Strix G16)</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$ 63000</p>
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
                <div className="col-md-6 col-lg-6 col-xl-4">
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
                      <p>(i9-14900HX/RTX4060/16G/1TB SSD/ROG Strix G16)</p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$ 63000</p>
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
      </div>
    </>
  )
}
