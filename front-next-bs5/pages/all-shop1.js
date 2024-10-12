import React from 'react'
import Link from 'next/link'
import ProductCard1 from '@/components/product-test/product-card1'

export default function AllShop() {
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
            {/* 商品列表 */}
            <ProductCard1 />
          </div>
        </div>
      </div>
    </>
  )
}
