-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2026 at 04:05 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_kalimaniez`
--

-- --------------------------------------------------------

--
-- Table structure for table `aktivitas`
--

CREATE TABLE `aktivitas` (
  `id` int(11) NOT NULL,
  `aktivitas` text DEFAULT NULL,
  `waktu` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `ukuran` enum('2x3','3x4','4x6','-') DEFAULT '-',
  `background` enum('Biru','Merah','Putih','-') DEFAULT '-',
  `jumlah` int(11) NOT NULL,
  `catatan` text DEFAULT NULL,
  `komplain` text DEFAULT NULL,
  `total` int(11) NOT NULL,
  `tanggal` date NOT NULL,
  `jam` time NOT NULL,
  `foto_asli` varchar(255) DEFAULT NULL,
  `hasil_edit` varchar(255) DEFAULT NULL,
  `status` enum('Menunggu','Belum Diedit','Sedang Diedit','Sedang Direvisi','Selesai','Ditolak') NOT NULL DEFAULT 'Belum Diedit',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `id_user`, `nama`, `ukuran`, `background`, `jumlah`, `catatan`, `komplain`, `total`, `tanggal`, `jam`, `foto_asli`, `hasil_edit`, `status`, `created_at`) VALUES
(15, 7, 'fadil', '3x4', 'Biru', 2, 'dhegjw', 'latarnya salah', 3500, '2026-08-11', '10:17:36', 'foto_6a7a94509ea97.png', 'hasil_15_1786800711.png', 'Selesai', '2026-08-11 03:17:36'),
(17, 7, 'fadil', '3x4', 'Merah', 2, '', NULL, 3500, '2026-08-15', '20:40:57', 'foto_6a806c69ae005.png', NULL, 'Belum Diedit', '2026-08-15 13:40:57');

-- --------------------------------------------------------

--
-- Table structure for table `hasil_edit`
--

CREATE TABLE `hasil_edit` (
  `id` int(11) NOT NULL,
  `id_booking` int(11) DEFAULT NULL,
  `foto_asli` varchar(255) DEFAULT NULL,
  `foto_png` varchar(255) DEFAULT NULL,
  `background` enum('Biru','Merah','Putih') DEFAULT NULL,
  `ukuran` enum('2x3','3x4','4x6') DEFAULT NULL,
  `zoom` int(11) DEFAULT NULL,
  `posisi_x` int(11) DEFAULT NULL,
  `posisi_y` int(11) DEFAULT NULL,
  `brightness` int(11) DEFAULT NULL,
  `contrast` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama_lengkap` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `role` enum('admin','user') NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama_lengkap`, `username`, `email`, `password`, `created_at`, `role`) VALUES
(6, 'admin', 'admin', 'admin123@gmail.com', '0192023a7bbd73250516f069df18b500', '2026-08-10 18:19:45', 'admin'),
(7, 'fadil', 'fadil', 'fadil123@gmail.com', '8d90d3b4702c9df2567603dfb1c26978', '2026-08-10 18:22:23', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aktivitas`
--
ALTER TABLE `aktivitas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `hasil_edit`
--
ALTER TABLE `hasil_edit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_booking` (`id_booking`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aktivitas`
--
ALTER TABLE `aktivitas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `hasil_edit`
--
ALTER TABLE `hasil_edit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `hasil_edit`
--
ALTER TABLE `hasil_edit`
  ADD CONSTRAINT `hasil_edit_ibfk_1` FOREIGN KEY (`id_booking`) REFERENCES `booking` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
