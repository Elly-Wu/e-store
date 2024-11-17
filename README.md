<h2>back-express是後端資料夾，使用 NodeJS/ Express</h2>
<ul>
  <li>新增商品的檔案位置：routes/ de-products.js</li>
  <li>新增單品評論的檔案位置：routes/ review.js</li>
</ul>
<h2>資料庫是 MySQL</h2>
<ul>
  <li>透過 back-express用 sequelize連接資料庫</li>
  <li>檔案模型：models/ De_Product.js & Review.js</li>
  <li>資料：seeds/ De_product.json & Review.json</li>
</ul>
<h2>front-next-bs5是前端資料夾，使用 ReactJS/ Next</h2>
<h3>全部商品列表頁（關鍵字搜尋、改變排序功能）</h3>
<ul>
  <li>檔案位置：pages/ all-shop.js</li>
  <li>元件位置：components/ de_product/ list.js</li>
</ul>
<h3>全部商品列表頁（無限捲動功能）</h3>
<ul>
  <li>檔案位置：pages/ all-shop1.js</li>
  <li>元件位置：components/ product-test/ product-card1.js</li>
</ul>
<h3>單品簡介頁</h3>
<ul>
  <li>動態路由檔案位置：pages/ de-product/ [pid].js</li>
</ul>
<h3>新增商品頁</h3>
<ul>
  <li>檔案位置：pages/ de-product/ add-product.js</li>
</ul>
<h3>單品頁中的評論功能</h3>
<ul>
  <li>動態路由檔案位置：pages/ de-product/ [pid].js</li>
  <li>評論列表：
    <li>檔案位置：components/ review/ index.js</li>
  </li>
  <li>新增評論：
    <li>檔案位置：components/ review/ add-review.js</li>
  </li>
</ul>
