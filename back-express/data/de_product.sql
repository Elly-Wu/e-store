-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2024 年 07 月 29 日 18:30
-- 伺服器版本： 8.3.0
-- PHP 版本： 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `new_716`
--

-- --------------------------------------------------------

--
-- 資料表結構 `de_product`
--

CREATE TABLE `de_product` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `category` text,
  `brand` text,
  `info` text,
  `price` int DEFAULT NULL,
  `photo` text,
  `size` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- 傾印資料表的資料 `de_product`
--

INSERT INTO `de_product` (`id`, `name`, `category`, `brand`, `info`, `price`, `photo`, `size`, `tag`, `created_at`, `updated_at`) VALUES
(1, 'ASUS G614JVR 16吋2K電競筆電', '筆記型電腦', 'ASUS', 'i9-14900HX/RTX4060/16G/1TB SSD/ROG Strix G16', 63000, 'ASUS G614JVR 16吋2K電競筆電$63000.png', '16吋', 'hot', '2024-07-28 21:58:50', '2024-07-28 21:58:50'),
(2, '桌上型電腦', '桌上型電腦', 'HP', 'I7/12700/8G/512GM.2/550W 電腦天堂 桌上型電腦繪圖主機 文書 電競 PC', 15500, 'PC.png', '512G', 'sale', '2024-07-28 21:58:50', '2024-07-28 21:58:50'),
(3, 'Apple iPhone 15 Pro 256GB', '手機', 'Apple', 'Apple iPhone 15 Pro 256GB A17 PRO', 39188, 'cellphone.png', '256GB', 'new', '2024-07-28 21:58:50', '2024-07-28 21:58:50'),
(4, 'Canon EDS50 相機', '單眼相機', 'Canon', '單眼相機', 5600, '1721999356896.jpg', 'm', '一年新', '2024-07-29 23:14:04', '2024-07-29 23:14:04'),
(5, 'Gopro12', '行動錄影機', 'Gopro', '防水、機動性絕佳、適合熱愛戶外活動，習慣隨時記錄生活的您', 6000, '1722002253358.jpg', 'xs', '未拆封', '2024-07-29 23:19:47', '2024-07-29 23:19:47'),
(6, 'Canon 攝錄影機', '攝錄影機', 'Canon', '產品品質保證，機身符合人體工學的設計。', 5500, '1722000072788.jpg', 'm', '三年', '2024-07-29 23:24:03', '2024-07-29 23:24:03');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `de_product`
--
ALTER TABLE `de_product`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `de_product`
--
ALTER TABLE `de_product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
