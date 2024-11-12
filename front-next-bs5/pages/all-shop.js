import React, { useState } from 'react'
import Link from 'next/link'
import List from '@/components/de-product/list'

export default function AllShop() {
  // 設置搜尋及過濾的狀態
  const [searchQuery, setSearchQuery] = useState('') //搜尋產品名稱
  const [priceRange, setPriceRange] = useState('') //呈現輸入的價位區間
  const [minPrice, setMinPrice] = useState('') //最小價格
  const [maxPrice, setMaxPrice] = useState('') //最大價格
  const [sortOrder, setSortOrder] = useState('') //價格排序(low-high or high-low)

  // 更新價位範圍
  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value)

    // 解析價格範圍，例如 "100-500"
    const [min, max] = e.target.value.split('-').map(Number)
    setMinPrice(min || '') // 設定最小價格，若解析結果為 NaN，則設定為空字串
    setMaxPrice(max || '') // 設定最大價格，若解析結果為 NaN，則設定為空字串
  }

  // 根據使用者選取的選項，更新排序順序
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value)
  }

  // 依照使用者輸入商品名稱，更新產品名稱搜尋
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value)
  }
  return (
    <>
      <div className="container-fluid fruite py-5">
        <div className="col-lg-12">
          <div className="row g-4">
            <div className="col-xl-3" />
            <div className="col-4" />
            <div className="col-xl-6 d-flex">
              <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
              {/* 1st. 搜尋商品名稱 */}
                <label>搜尋商品：</label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                  placeholder="輸入商品名稱"
                  className="form-control"
                ></input>
                {/* <button>送出</button> */}
              </div>
            </div>
            <div className="col-xl-4 d-flex">
              <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
              {/* 2nd. 價格過濾及排序  */}
                <label htmlFor="priceRange">價位:</label>
                <input
                  type="text"
                  id="priceRange"
                  placeholder="例如：100-500"
                  value={priceRange}
                  onChange={handlePriceRangeChange}
                  className="form-control mb-2"
                />
              </div>
              <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                <label htmlFor="sortOrder">排序:</label>
                <select
                  id="sortOrder"
                  name="sortOrder"
                  className="border-0 form-select-sm bg-light me-3"
                  onChange={handleSortOrderChange}
                >
                  <option value="">價格</option>
                  <option value="low-to-high">低-高</option>
                  <option value="high-to-low">高-低</option>
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
                          <Link href="/notebook-shop.html">筆記型電腦</Link>
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
            {/* 包含搜尋商品名稱、最低價格、最高價格、排序屬性的商品列表 */}
            <List
              searchQuery={searchQuery}
              minPrice={minPrice}
              maxPrice={maxPrice}
              sortOrder={sortOrder}
            />
          </div>
        </div>
      </div>
    </>
  )
}
