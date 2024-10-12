import React from 'react'
import { TiMinus } from 'react-icons/ti'
import { IoMdAdd } from 'react-icons/io'
import { ImCross } from 'react-icons/im'

export default function Cart() {
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

      {/* Cart Page Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">產品</th>
                  <th scope="col">名稱</th>
                  <th scope="col">價格</th>
                  <th scope="col">數量</th>
                  <th scope="col">總計</th>
                  <th scope="col">移除</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src="/images/product/device/PC.png"
                        className="img-fluid me-5 rounded-circle"
                        style={{ width: 80, height: 80 }}
                        alt=""
                      />
                    </div>
                  </th>
                  <td>
                    <p className="mb-0 mt-4">
                      I7 12700/8G/512GM.2/550W 電腦天堂 桌上型電腦 繪圖主機 文書
                      電競
                    </p>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">$ 15500</p>
                  </td>
                  <td>
                    <div
                      className="input-group quantity mt-4"
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
                  </td>
                  <td>
                    <p className="mb-0 mt-4">$ 15500</p>
                  </td>
                  <td>
                    <button className="btn btn-md rounded-circle bg-light border mt-4">
                      <ImCross />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src="/images/product/device/ASUS G614JVR 16吋2K電競筆電$63000.png"
                        className="img-fluid me-5 rounded-circle"
                        style={{ width: 80, height: 80 }}
                        alt=""
                      />
                    </div>
                  </th>
                  <td>
                    <p className="mb-0 mt-4">ASUS G614JVR 16吋2K電競筆電</p>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">$ 63000</p>
                  </td>
                  <td>
                    <div
                      className="input-group quantity mt-4"
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
                  </td>
                  <td>
                    <p className="mb-0 mt-4">$ 63000</p>
                  </td>
                  <td>
                    <button className="btn btn-md rounded-circle bg-light border mt-4">
                      <ImCross />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src="/images/product/device/耳機1.png"
                        className="img-fluid me-5 rounded-circle"
                        style={{ width: 80, height: 80 }}
                        alt=""
                      />
                    </div>
                  </th>
                  <td>
                    <p className="mb-0 mt-4">GM180 PLUS有線電競耳機</p>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">$ 699</p>
                  </td>
                  <td>
                    <div
                      className="input-group quantity mt-4"
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
                  </td>
                  <td>
                    <p className="mb-0 mt-4">$ 699</p>
                  </td>
                  <td>
                    <button className="btn btn-md rounded-circle bg-light border mt-4">
                      <ImCross />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row g-4 justify-content-end">
            <div className="col-8" />
            <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
              <div className="bg-light rounded">
                <div className="p-4">
                  <h1 className="display-6 mb-4">總計</h1>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="mb-0 me-4">運費</h5>
                    <p className="mb-0">$ 0</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-0 me-4">商品價格</h5>
                    <div className="">
                      <p className="mb-0">$ 79199</p>
                    </div>
                  </div>
                  <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                    <h5 className="mb-0 ps-4 me-4">總計</h5>
                    <p className="mb-0 ps-4 me-4">$ 79199</p>
                  </div>
                  <button
                    className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                    type="button"
                  >
                    Proceed Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
