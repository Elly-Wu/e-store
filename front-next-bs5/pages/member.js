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
            <div className="profile-header">
              <h2>會員資料</h2>
            </div>
            <form className="profile-form">
              <div className="form-group">
                <label htmlFor="username">用戶名稱</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  defaultValue="JohnDoe"
                  readOnly=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">電子郵件</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  defaultValue="johndoe@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">電話號碼</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  defaultValue={`0912345678`}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">地址</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  defaultValue="台北市信義區信義路5段7號"
                />
              </div>
              <div className="form-group">
                <label htmlFor="birthdate">生日</label>
                <input
                  type="date"
                  className="form-control"
                  id="birthdate"
                  defaultValue="1990-01-01"
                />
              </div>
              <button type="submit" className="btn btn-update mt-3">
                更新資料
              </button>
            </form>
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
            background-color: white;
            border: 1px solid #dee2e6;
            border-radius: 0.25rem;
            padding: 2rem;
          }
          .profile-header {
            margin-bottom: 2rem;
          }
          .profile-form .form-group {
            margin-bottom: 1rem;
          }
          .profile-form label {
            font-weight: bold;
          }
          .btn-update {
            background-color: #ff6433;
            border: none;
            color: white;
          }
          .btn-update:hover {
            background-color: #f6402e;
            border: none;
            color: white;
          }
        `}
      </style>
    </>
  )
}
