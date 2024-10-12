import React, { useState, useEffect } from 'react'
// 加入星等CSS樣式
import styles from '@/styles/star.module.css'
import Swal from 'sweetalert2'

export default function AddReview() {
  const [review, setReview] = useState({
    u_photo: 'male-t.jpg',
    user: '',
    shop: '',
    comment: '',
    rating: 0,
  })
  const [hoverRating, setHoverRating] = useState(0)

  // 多欄位共用事件函式
  const handleFieldChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    Swal.fire({
      title: '確定要送出評論嗎?',
      text: '您將無法修改評論內容！',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '是的，送出！',
      cancelButtonText: '取消',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const url = 'http://localhost:3005/api/reviews'
          const res = await fetch(url, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
          })

          const resData = await res.json()
          console.log(resData)

          Swal.fire({
            title: '已送出！',
            text: '您的評論已成功送出。',
            icon: 'success',
          })
        } catch (e) {
          console.error(e)
          Swal.fire({
            title: '送出失敗',
            text: '發生錯誤，請稍後再試。',
            icon: 'error',
          })
        }
      }
    })
  }

  // 確認在客戶端渲染
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // 或者顯示一個 loading 的標誌
  }

  return (
    <>
      <div className="col-md-9 main-content full-height-container">
        <div className="container-fluid py-5">
          <h1 className="text-center display-6">留下評論</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <p className="libox">
            <label>
              用戶：{' '}
              <input
                type="text"
                name="user"
                value={review.user}
                onChange={handleFieldChange}
                className="form-control"
              />
            </label>
          </p>
          <p className="libox">
            <label>
              賣家：{' '}
              <input
                type="text"
                name="shop"
                value={review.shop}
                onChange={handleFieldChange}
                className="form-control"
              />
            </label>
          </p>
          <p className="libox">
            <label>
            留言：{' '}
            <input
              type="text"
              name="comment"
              value={review.comment}
              onChange={handleFieldChange}
              className="form-control"
            />
            </label>
          </p>
          <p>
            評分：
            <div>
              {Array(5)
                .fill(1)
                .map((v, i) => {
                  const score = i + 1
                  return (
                    <button
                      key={i}
                      className={styles.starBtn}
                      onClick={() => {
                        setReview({ ...review, rating: score })
                      }}
                      onMouseEnter={() => {
                        setHoverRating(score)
                      }}
                      onMouseLeave={() => {
                        setHoverRating(0)
                      }}
                    >
                      <span
                        className={
                          score <= review.rating || score <= hoverRating
                            ? styles.on
                            : styles.off
                        }
                      >
                        &#9733;
                      </span>
                    </button>
                  )
                })}
            </div>
          </p>
        </form>
      </div>

      <style jsx>
        {`
          .profile-header {
            margin-bottom: 2rem;
          }
          .form {
            color: #f7a969da;
            font-family: 'Noto Sans';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-left: 15%;
            display: flex;
            flex-direction: column;
          }

          .libox {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .libox input {
            height: 36px;
            border-radius: 10px;
            border: 2px solid #f7a969da;
            display: block;
          }

          {/* .libox textarea {
            width: 250px;
            border-radius: 10px;
            border: 2px solid #f7a969da;
          } */}

          @media (max-width: 1199.98px) {
            .form {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}
