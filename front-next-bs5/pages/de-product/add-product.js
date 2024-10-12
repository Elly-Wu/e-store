import React, { useState, useEffect } from 'react'
// import toast, { Toaster } from 'react-hot-toast'
import { FaUser, FaDollarSign } from 'react-icons/fa6'
import { FaShoppingBag } from 'react-icons/fa'
import { GiShop } from 'react-icons/gi'
// import Swal from 'sweetalert2'

export default function AddProduct() {
  const [product, setProduct] = useState({
    photo: 'mouse-t.jpg',
    name: '',
    category: '',
    brand: '',
    info: '',
    price: '',
    size: '',
    tag: '',
  })

  // 預覽圖片
  useEffect(() => {
    const fileInput = document.querySelector('[name=myFile]')
    if (fileInput) {
      fileInput.addEventListener('change', (f) => {
        let file = f.target.files[0]
        let reader = new FileReader()
        reader.addEventListener('load', (f) => {
          let image = new Image()
          image.src = f.target.result
          let img = document.querySelector('.img')
          if (img) {
            img.innerHTML = ''
            img.append(image)
          }
        })
        reader.readAsDataURL(file)
      })
    }

    return () => {
      if (fileInput) {
        fileInput.removeEventListener('change', () => {})
      }
    }
  }, [])

  // 輸入用
  const handleFieldChange = (e) => {
    // 如果是文字類型的輸入
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const postInForm = async (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    try {
      const url = 'http://localhost:3005/api/de-products/insert'
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })

      const resData = await res.json()
      console.log(resData)

      alert('送到伺服器去')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <div className="container-fluid full-height-container ">
        <div className="row ">
          {/* Sidebar */}
          <div className="col-md-3 sidebar full-height-container ">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="../member">
                  <FaUser />
                  個人資料
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../member-cou">
                  <FaDollarSign />
                  商店優惠券
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../member-or">
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
            <div className="center">
              <h2 className="profile-header">商品上架</h2>
              <div className="upload-body">
                <div className="img-box">
                  <div className="img" />
                  <input type="file" name="myFile" accept="image/*" />
                </div>
                <form className="profile-form form" onSubmit={postInForm}>
                  <div className="texts">
                    <p className="libox">
                      <label>
                        名稱:{' '}
                        <input
                          type="text"
                          name="name"
                          value={product.name}
                          onChange={handleFieldChange}
                        />
                      </label>
                    </p>
                    <p className="libox">
                      <label>
                        商品分類:{' '}
                        <input
                          type="text"
                          name="category"
                          value={product.category}
                          onChange={handleFieldChange}
                        />
                      </label>
                    </p>
                    <p className="libox">
                      <label>
                        品牌:{' '}
                        <input
                          type="text"
                          name="brand"
                          value={product.brand}
                          onChange={handleFieldChange}
                        />
                      </label>
                    </p>
                    <p className="libox">
                      商品介紹:{' '}
                      <textarea
                        name="info"
                        rows={3}
                        value={product.info}
                        onChange={handleFieldChange}
                      />
                    </p>
                    <p className="libox">
                      <label>
                        價格:{' '}
                        <input
                          type="number"
                          name="price"
                          value={product.price}
                          onChange={handleFieldChange}
                        />
                      </label>
                    </p>
                    <p className="libox">
                      <label>
                        規格:{' '}
                        <input
                          type="text"
                          name="size"
                          value={product.size}
                          onChange={handleFieldChange}
                        />
                      </label>
                    </p>
                    <p className="libox">
                      <label>
                        商品狀態:{' '}
                        <input
                          type="text"
                          name="tag"
                          value={product.tag}
                          onChange={handleFieldChange}
                        />
                      </label>
                    </p>
                    <button className="submit" type="submit">
                      上架
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .profile-header {
            margin-bottom: 2rem;
          }

          .upload-body {
            display: flex;
          }

          .img {
            width: 200px;
            height: 200px;
          }
          .img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .form {
            color: #f7a969da;
            font-family: 'Noto Sans';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            display: flex;
          }

          .libox {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .libox input {
             {
              /* width: 256px; */
            }
            height: 36px;
            border-radius: 10px;
            border: 2px solid #9faaa6;
            display: block;
          }

          .libox textarea {
            width: 250px;
            border-radius: 10px;
            border: 2px solid #9faaa6;
          }

          .submit {
            display: flex;
            padding: 8px 40px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 10px;
            background: var(--yellow, #fede62);
            border: 1px solid #fede62;
            color: var(--gray, #9faaa6);
            font-family: 'Noto Sans';
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin: 0 auto;
          }

          @media (max-width: 1199.98px) {
            .upload-body {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}
