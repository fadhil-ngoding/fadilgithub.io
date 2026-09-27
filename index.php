<?php
session_start();

$username = $_SESSION['username'] ?? null;
$role = $_SESSION['role'] ?? null;

$login = isset($_SESSION['login']) && $username && $role;
?>
<!DOCTYPE html>
<html lang="id">
    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Kalimaniez Photo Studio</title>

        <link rel="stylesheet" href="css/landing.css">

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet">

        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

    </head>

    <body>

        <!-- ================= NAVBAR ================= -->

        <header>

            <nav class="navbar">

                <div class="logo">

                    <img src="gambar/logo.png" alt="Logo">

                    <div>

                        <h2>Kalimaniez</h2>

                        <span>Photo Studio</span>

                    </div>

                </div>

                <ul>
    <li><a href="#beranda">Beranda</a></li>
    <li><a href="#layanan">Layanan</a></li>
    <li><a href="#galeri">Galeri</a></li>
    <li><a href="#tentang">Tentang</a></li>
                </ul>

<div class="menu-kanan">

    <?php if ($login): ?>

        <a href="<?php 
            echo ($role == 'admin') 
                ? 'dashboard%20admin/dashboard_admin.php' 
                : 'dashboard%20user/dashboard_user.php'; 
        ?>" class="login">
            Dashboard
        </a>

    <?php else: ?>

        <a href="#" class="login" id="openLogin">
            Login
        </a>

        <a href="#" class="register" id="openRegister">
            Daftar
        </a>

    <?php endif; ?>

</div>

            </nav>

        </header>

        <!-- ================= HERO ================= -->

    <section class="hero" id="beranda">
            <div class="overlay"></div>
            <div class="hero-content">

                <div class="kamera-ui">

                    <span class="rec">

                        ● REC

                    </span>

                    <span>

                        ISO 100

                    </span>

                    <span>

                        F1.8

                    </span>

                    <span>

                        4K

                    </span>

                </div>

                <h3>

                    KALIMANIEZ PAS FOTO ONLINE

                </h3>

                <h1>

                    Pas Foto Profesional

                    <br>
    Mudah & Cepat
                </h1>

                <p>

                    Layanan pas foto online untuk kebutuhan KTP, ijazah,
                    sekolah, lamaran kerja, dan dokumen resmi lainnya.
                    Upload foto, pilih ukuran dan background, lalu pesan.

                </p>

                <div class="hero-btn">

<?php if ($login): ?>

    <a href="<?php 
        echo ($role == 'admin') 
            ? 'dashboard%20admin/dashboard_admin.php' 
            : 'dashboard%20user/dashboard_user.php'; 
    ?>" class="btn1">
        Lanjut ke Dashboard
    </a>

<?php else: ?>

    <a href="#" class="btn1" id="openLoginHero">
        Pesan Pas Foto
    </a>

<?php endif; ?>
                    <a href="#galeri" class="btn2">

                        Lihat Contoh

                    </a>

                </div>

            </div>

            <!-- Frame Kamera -->

            <div class="frame">

                <div class="sudut kiri-atas"></div>
                <div class="sudut kanan-atas"></div>
                <div class="sudut kiri-bawah"></div>
                <div class="sudut kanan-bawah"></div>

            </div>

            <!-- Scroll -->

    <div class="scroll-indicator">
        <div class="mouse">
            <span></span>
        </div>
        <p>Scroll</p>
    </div>
        </section>
    <!-- ================= ALUR PELAYANAN ================= -->

    <section class="alur" id="layanan">

        <div class="judul">

            <span>ALUR PELAYANAN</span>

            <h2>Proses Pelayanan</h2>

            <p>
                Pesan pas foto jadi lebih mudah. Cukup upload foto,
                pilih ukuran dan background, lalu pesanan akan
                diproses oleh admin.
            </p>

        </div>

        <div class="timeline">

            <div class="item">

                <div class="nomor">01</div>

                <i class="fa-solid fa-cloud-arrow-up"></i>

                <h3>Upload Foto</h3>

                <p>
                    Upload foto terbaik kamu melalui website.
                </p>

            </div>

            <div class="garis"></div>

            <div class="item">

                <div class="nomor">02</div>

                <i class="fa-solid fa-ruler-combined"></i>

                <h3>Pilih Ukuran</h3>

                <p>
                    Pilih ukuran pas foto sesuai kebutuhan, seperti 2×3, 3×4, atau 4×6.
                </p>

            </div>

            <div class="garis"></div>

            <div class="item">

                <div class="nomor">03</div>

                <i class="fa-solid fa-droplet"></i>

                <h3>Pilih Background</h3>

                <p>
                    Tentukan background merah, biru, atau putih sesuai kebutuhan.
                </p>

            </div>

            <div class="garis"></div>

            <div class="item">

                <div class="nomor">04</div>

                <i class="fa-solid fa-wand-magic-sparkles"></i>

                <h3>Proses Editing</h3>

                <p>
                    Foto diproses agar terlihat rapi dan profesional.
                </p>

            </div>

            <div class="garis"></div>

            <div class="item">

                <div class="nomor">05</div>

                <i class="fa-solid fa-circle-check"></i>

                <h3>Selesai</h3>

                <p>
                    Pesanan selesai dan hasil pas foto siap digunakan.
                </p>

            </div>

        </div>

<!-- ================= GALERI ================= -->
<section class="galeri" id="galeri">

    <div class="judul">
        <span>GALERI</span>

        <h2>Contoh Pas Foto</h2>

        <p>
        Lihat beberapa contoh hasil pas foto dengan berbagai ukuran
         dan pilihan background yang tersedia.
        </p>
    </div>

    <div class="galeri-grid ukuran-grid">

        <!-- 4x6 -->
<div class="ukuran-card ukuran-4x6">
    <div class="ukuran-title">
        <h3>Pas Foto <b>4×6</b></h3>
        <span>4 × 6 cm</span>
    </div>

    <div class="foto-preview">
        <img src="gambar/gallery1.jpeg" alt="Contoh Pas Foto 4x6">
    </div>

    <div class="format-foto">
        <i class="fa-regular fa-image"></i>
        Format Portrait
    </div>
</div>


<div class="ukuran-card ukuran-3x4">
    <div class="ukuran-title">
        <h3>Pas Foto <b>3×4</b></h3>
        <span>3 × 4 cm</span>
    </div>

    <div class="foto-preview">
        <img src="gambar/gallery2.jpeg" alt="Contoh Pas Foto 3x4">
    </div>

    <div class="format-foto">
        <i class="fa-regular fa-image"></i>
        Format Portrait
    </div>
</div>


<div class="ukuran-card ukuran-2x3">
    <div class="ukuran-title">
        <h3>Pas Foto <b>2×3</b></h3>
        <span>2 × 3 cm</span>
    </div>

    <div class="foto-preview">
        <img src="gambar/gallery3.jpeg" alt="Contoh Pas Foto 2x3">
    </div>

    <div class="format-foto">
        <i class="fa-regular fa-image"></i>
        Format Portrait
    </div>
</div>

    </div>


    <!-- PEWARNAAN LATAR BELAKANG -->
    <div class="background-section">

        <div class="background-title">
            <span>PEWARNAAN LATAR BELAKANG</span>
            <h2>Pilih Warna Sesuai Kebutuhan Anda</h2>
        </div>

        <div class="warna-grid">

            <div class="warna-item">
                <div class="warna-circle merah"></div>
                <h3>Merah</h3>
            </div>

            <div class="warna-item">
                <div class="warna-circle biru"></div>
                <h3>Biru</h3>
            </div>

            <div class="warna-item">
                <div class="warna-circle putih"></div>
                <h3>Putih</h3>
            </div>

        </div>

    </div>

</section>
    <!-- ================= TENTANG ================= -->

    <section class="tentang" id="tentang">

        <div class="judul">

            <span>TENTANG KAMI</span>

            <h2>Pas Foto Online Lebih Mudah</h2>

            <p>
                Kalimaniez menyediakan layanan pas foto online yang praktis,
                cepat, dan mudah digunakan untuk berbagai kebutuhan dokumen.
            </p>

        </div>

        <div class="tentang-wrapper">

            <div class="tentang-gambar">

                <img src="gambar/about.jpeg" alt="Tentang Kami">

            </div>

            <div class="tentang-text">

                <h3>Pas Foto Tanpa Ribet</h3>

                <p>
                    Kalimaniez Photo Studio menyediakan layanan pas foto online.
                    Cukup unggah foto, pilih ukuran dan background yang diinginkan,
                    kemudian pesanan akan diproses oleh admin dengan hasil yang
                    rapi dan profesional.
                </p>

                <div class="keunggulan">

                    <div>
                        <i class="fa-solid fa-circle-check"></i>
                        Pas Foto Profesional
                    </div>

                    <div>
                        <i class="fa-solid fa-circle-check"></i>
                        Ukuran 2×3, 3×4 & 4×6
                    </div>

                    <div>
                        <i class="fa-solid fa-circle-check"></i>
                        Background Merah, Biru & Putih
                    </div>

                    <div>
                        <i class="fa-solid fa-circle-check"></i>
                        Edit Cepat & Rapi
                    </div>

                    <div>
                        <i class="fa-solid fa-circle-check"></i>
                        Pesan Secara Online
                    </div>

                    <div>
                        <i class="fa-solid fa-circle-check"></i>
                        Proses Mudah & Cepat
                    </div>

                </div>

                <a href="#" class="btn-about">

                    Pesan Pas Foto

                </a>

            </div>

        </div>

    </section>

    </section>

    <!-- ================= LOGIN MODAL ================= -->

    <div class="login-modal" id="loginModal">

        <div class="login-card">

            <button class="close-login" id="closeLogin">

                <i class="fa-solid fa-xmark"></i>

            </button>

            <div class="login-header">

                <img src="gambar/logo.png" alt="Logo">

                <h2>Selamat Datang</h2>

                <p>Masuk ke akun Kalimaniez Photo Studio</p>

            </div>

            <form action="login/loginproses.php" method="POST">

                <div class="input-group">

                    <label>Username</label>

                    <div class="input-box">

                        <i class="fa-solid fa-user"></i>

                        <input
                            type="text"
                            name="username"
                            placeholder="Masukkan username"
                            required>

                    </div>

                </div>

<div class="input-group">

    <label>Password</label>

    <div class="input-box">

        <i class="fa-solid fa-lock"></i>

        <input
            type="password"
            id="password"
            name="password"
            placeholder="Masukkan password"
            required>

        <button
            type="button"
            class="show-password"
            id="togglePassword">

            <i class="fa-solid fa-eye-slash"></i>

        </button>

    </div>
</div>

                <button type="submit" class="login-btn">

                    Masuk

                </button>

            </form>

            <div class="login-footer">

                Belum punya akun?

    <a href="#" id="toRegister">
        Daftar Sekarang
    </a>

            </div>

        </div>

    </div>

    <!-- ================= REGISTER MODAL ================= -->

    <div class="login-modal" id="registerModal">

        <div class="login-card">

            <button class="close-login" id="closeRegister">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <div class="login-header">

                <img src="gambar/logo.png" alt="Logo">

                <h2>Buat Akun</h2>

                <p>Daftar akun Kalimaniez Photo Studio</p>

            </div>

            <form action="register/registerproses.php" method="POST">

                <div class="row-input">

                    <div class="input-group">

                        <label>Nama Lengkap</label>

                        <div class="input-box">

                            <i class="fa-solid fa-user"></i>

                            <input
                                type="text"
                                name="nama_lengkap"
                                placeholder="Masukkan nama lengkap"
                                required>

                        </div>

                    </div>

                    <div class="input-group">

                        <label>Username</label>

                        <div class="input-box">

                            <i class="fa-solid fa-user-tag"></i>

                            <input
                                type="text"
                                name="username"
                                placeholder="Masukkan username"
                                required>

                        </div>

                    </div>

                </div>

                <div class="input-group">

                    <label>Email</label>

                    <div class="input-box">

                        <i class="fa-solid fa-envelope"></i>

                        <input
                            type="email"
                            name="email"
                            placeholder="Masukkan email"
                            required>

                    </div>

                </div>

                <div class="row-input">

                    <div class="input-group">

                        <label>Password</label>

                        <div class="input-box">

                            <i class="fa-solid fa-lock"></i>

<input
type="password"
id="registerPassword"
name="password"
placeholder="Masukkan password"
required>

<button
type="button"
class="show-password"
id="toggleRegisterPassword">

<i class="fa-solid fa-eye-slash"></i>

</button>
                        </div>

                    </div>

<div class="input-group">

    <label>Konfirmasi Password</label>

    <div class="input-box">

        <i class="fa-solid fa-lock"></i>
<input
type="password"
id="confirmPassword"
name="konfirmasi_password"
placeholder="Konfirmasi password"
required>

<button
type="button"
class="show-password"
id="toggleConfirmPassword">

<i class="fa-solid fa-eye-slash"></i>

</button>
    </div>

</div>

                </div>

                <button type="submit" class="login-btn">

                    Daftar

                </button>

            </form>

            <div class="login-footer">

                Sudah punya akun?

                <a href="#" id="backLogin">

                    Login

                </a>

            </div>

        </div>

    </div>
    <script src="javascript/landing.js"></script>
    </body>

    </html>