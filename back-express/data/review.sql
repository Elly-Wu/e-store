-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2024 年 07 月 28 日 16:30
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
-- 資料表結構 `review`
--

CREATE TABLE `review` (
  `id` int NOT NULL,
  `u_photo` text,
  `user` varchar(255) NOT NULL,
  `shop` varchar(255) NOT NULL,
  `rating` int NOT NULL,
  `comment` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- 傾印資料表的資料 `review`
--

INSERT INTO `review` (`id`, `u_photo`, `user`, `shop`, `rating`, `comment`, `created_at`, `updated_at`) VALUES
(1, 'testimonial-1.jpg', '謝鈺婷', '鄧冠霖', 3, '避免插入或更新評分時出現不合規的。', '2024-07-28 21:58:51', '2024-07-28 21:58:51'),
(2, 'male-t.jpg', '王宗翰', '鄧冠霖', 5, '可以幫助你管理更多詳細的設計或特定需求。', '2024-07-28 21:58:51', '2024-07-28 21:58:51'),
(3, 'female-t.jpg', '劉詩涵', '鄧冠霖', 5, '儲存評論內容、星等評分、按讚等資訊。以下是一些關鍵欄位及其用途的範例。', '2024-07-28 21:58:51', '2024-07-28 21:58:51'),
(4, 'male2-t.jpg', '黃柏翰', '陳家瑋', 4, '寄件速度很快，但背板有小瑕疵', '2024-07-28 22:07:32', '2024-07-28 22:07:32');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `review`
--
ALTER TABLE `review`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
