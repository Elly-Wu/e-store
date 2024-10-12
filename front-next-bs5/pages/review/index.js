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
      <h2>評論 Comments</h2>
      <div>
        {reviews.map((v, i) => {
          return (
            <div>
              <p>
                <Image
                  // className="card-img-top"
                  src={`/images/features/${v.u_photo.split(',')[0]}`}
                  alt="..."
                  width={200}
                  height={200}
                  placeholder="blur"
                  blurDataURL={`/images/features/${
                    v.u_photo.split(',')[0]
                  }`}
                  // style={{ width: '100%', height: 'auto' }} // optional
                />
                用戶：{v.user}
              </p>
              <p>賣家：{v.shop}</p>
              <p>星等：{renderStars(v.rating)}</p>
              <p>評論：{v.comment}</p>
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
              <hr />
            </div>
          )
        })}
      </div>
    </>
  )
}
