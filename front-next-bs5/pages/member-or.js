import React from 'react'
import { FaUser, FaDollarSign } from 'react-icons/fa6'
import { FaShoppingBag } from 'react-icons/fa'
import { GiShop } from 'react-icons/gi'


export default function Member() {
  return (
    <>
      <div className="container-fluid full-height-container ">
        <div className="row ">
          {/* Sidebar */}
          <div className="col-md-3 sidebar full-height-container ">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="./member">
                  <FaUser />
                  個人資料
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./member-cou">
                  <FaDollarSign />
                  商店優惠券
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./member-or">
                  <FaShoppingBag />
                  訂單
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./de-product/add-product">
                <GiShop />
                  上架商品
                </a>
              </li>
            </ul>
          </div>
          {/* Main content */}
          <div className="col-md-9 main-content full-height-container">
            <div className="content-wrapper">
              <h2 className="content-title">您沒有任何訂單</h2>
              <p className="content-subtitle">您還未購物或還沒有訂單</p>
              <a href="./index.html">
                <button className="btn shop-button shop-button">
                  繼續購物！
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>
        {`
          .bgclor {
            background: linear-gradient(to bottom, #f6402e 10%, #ff6433 100%);
          }
          body {
            background: white;
          }
          html,
          body {
            height: 100%;
          }
          .full-height-container {
            min-height: calc(100vh - 56px); /* Subtract navbar height */
            display: flex;
            flex-direction: column;
            margin-top: 10px;
          }
          .full-height-row {
            flex: 1;
          }
          .sidebar {
            background-color: #d9d9d9;
            height: 100%;
          }
          .card {
            height: 100%;
          }
          .main-content {
            height: 100%;
          }
          .content-wrapper {
            text-align: center;
            transform: translateY(50%);
          }
          .shop-button {
            background-color: #ff6433;
            border: none;
            color: white;
          }
          .shop-button:hover {
            background-color: #f6402e;
            border: none;
            color: white;
          }
        `}
      </style>
    </>
  )
}
