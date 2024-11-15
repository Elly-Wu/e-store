import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './product.module.css'

// 模擬後端的資料來源: https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
// 資料範例:
// [
//   {
//     "id": 1,
//     "name":"ASUS G614JVR 16吋2K電競筆電",
//     "category":"筆記型電腦",
//     "brand":"ASUS",
//     "info":"i9-14900HX/RTX4060/16G/1TB SSD/ROG Strix G16",
//     "price":63000,
//     "photo":"ASUS G614JVR 16吋2K電競筆電$63000.png",
//     "size":"16吋",
//     "tag": "hot"
//   }
// ]
// 加入搜尋的參數 receives search filters: product name, min and max prices, and sort order.
export default function List({ searchQuery, minPrice, maxPrice, sortOrder }) {
  // 注意1: 初始值至少要空白陣列。初次render是使用初始值，需要對應伺服器的資料模型
  // 注意2: 在應用程式執行過程中，一定要保持狀態的資料類型一致(務必一定要是陣列)
  const [products, setProducts] = useState([])

  // 與伺服器作fetch獲得商品資料
  const getProducts = async () => {
    const url = 'http://localhost:3005/api/de-products'

    // 使用try-catch語句，讓和伺服器連線的程式能作錯誤處理
    try {
      // 傳 request給伺服器，取得商品資料
      const res = await fetch(url)
      const resData = await res.json()

      if (resData.status === 'success') {
        // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)，呈現資料
        // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
        if (Array.isArray(resData.data.products)) {
          setProducts(resData.data.products)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 樣式2 didMount
  // 首次渲染(render)之後(after)，執行一次第一傳入參數函式其中程式碼，之後不會再執行
  useEffect(() => {
    getProducts()
  }, [])

  // 根據搜尋條件篩選產品 Filters and sorts products based on user input criteria.
  const filteredProducts = products
  .filter((product) => {
    // 確認商品名稱是否和 search query相同
    const matchesName = searchQuery
      ? product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true
    // 確認商品價格是否包含在最小價格的限制中
    const matchesMinPrice = minPrice ? product.price >= minPrice : true
    // 確認商品價格是否包含在最大價格的限制中
    const matchesMaxPrice = maxPrice ? product.price <= maxPrice : true
    // 回復包含在最小價格及最大價格中的所有商品
    return matchesName && matchesMinPrice && matchesMaxPrice
  })
  .sort((a, b) => {
    // 依照選項(low-to-high or high-to low)排序所有商品
    if (sortOrder === 'low-to-high') {
      return a.price - b.price
    } else if (sortOrder === 'high-to-low') {
      return b.price - a.price
    }
    return 0 //若未選擇排序選項，不變更商品順序
  })


  return (
    <>
      <div className="col-lg-8">
        <div className="row g-4 justify-content-center">
        {/* 遍歷 filteredProducts的所有項目 */}
          {filteredProducts.map((v, i) => {
            return (
              <div className="col-md-6 col-lg-6 col-xl-4" key={v.id}>
                <Link
                  href={`/de-product/${v.id}`}
                  className="rounded position-relative fruite-item"
                >
                  <div className={styles.fruiteImg}>
                    <Image
                      className={styles.cardImgTop}
                      src={`/images/product/device/${v.photo.split(',')[0]}`}
                      alt="..."
                      width={300}
                      height={200}
                      placeholder="blur"
                      blurDataURL={`/images/product/device/${
                        v.photo.split(',')[0]
                      }`}
                      style={{ width: '100%', height: 'auto' }} // optional
                    />
                  </div>
                  <div
                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                    style={{ top: 10, left: 10 }}
                  >
                    {v.tag}
                  </div>
                  <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>{v.name}</h4>
                    <p className={styles.info}>{v.info}</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">${v.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
