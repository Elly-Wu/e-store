import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '@/styles/star.module.css'
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa'

export default function ReviewIndex() {
  const [reviews, setReviews] = useState([])
  const [likes, setLikes] = useState([])

  // 與伺服器作fetch獲得資料
  const getReviews = async () => {
    const url = 'http://localhost:3005/api/reviews'

    // 使用try-catch語句，讓和伺服器連線的程式能作錯誤處理
    try {
      const res = await fetch(url)
      const resData = await res.json()

      if (resData.status === 'success') {
        // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)，呈現資料
        // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
        if (Array.isArray(resData.data.reviews)) {
          setReviews(resData.data.reviews)
          // 初始化按讚狀態為 false
          setLikes(resData.data.reviews.map(() => false))
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 樣式2 didMount
  // 首次渲染(render)之後(after)，執行一次第一傳入參數函式其中程式碼，之後不會再執行
  useEffect(() => {
    getReviews()
  }, [])

  const renderStars = (rating) => {
    return (
      <div>
        {Array(5)
          .fill(1)
          .map((v, i) => (
            <span key={i} className={i < rating ? styles.on : styles.off}>
              &#9733;
            </span>
          ))}
      </div>
    )
  }

  const toggleLike = (index) => {
    setLikes(likes.map((like, i) => (i === index ? !like : like)))
  }

  return (
    <>
      <div className="container-fluid py-5">
        <h1 className="text-center display-6">Comments</h1>
      </div>
      <div>
        <div className="testimonial-item img-border-radius bg-light rounded">
          <div className="container py-5">
            <div className="position-relative">
              {reviews.map((v, i) => {
                return (
                  <div>
                    <div className="mb-4 border-bottom border-secondary"></div>
                    <div className="d-flex align-items-center flex-nowrap">
                      <div
                        className={`${styles.circularImage}`}
                        style={{ width: '100px', height: 'auto' }}
                      >
                        <Image
                          src={`/images/features/${v.u_photo.split(',')[0]}`}
                          alt="..."
                          width={100}
                          height={100}
                          placeholder="blur"
                          blurDataURL={`/images/features/${
                            v.u_photo.split(',')[0]
                          }`}
                        />
                      </div>
                      <div className="ms-4 d-block">
                        <h4 className="text-dark">{v.user}</h4>
                        <div className="d-flex pe-5">
                          <p>
                            {renderStars(v.rating)}店家：{v.shop}
                          </p>
                        </div>
                        <p className="mt-5">{v.comment}</p>
                        <p>
                          <button
                            className={styles.starBtn}
                            onClick={() => toggleLike(i)}
                          >
                            {likes[i] ? (
                              <FaThumbsUp className={styles.thumbIcon} />
                            ) : (
                              <FaRegThumbsUp className={styles.thumbIcon} />
                            )}
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
