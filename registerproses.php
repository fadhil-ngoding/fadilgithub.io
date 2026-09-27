    <?php
session_start();
include "../konfig/koneksi.php";

// Ambil data dari form
$nama_lengkap = mysqli_real_escape_string($conn, $_POST['nama_lengkap']);
$username = mysqli_real_escape_string($conn, $_POST['username']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = $_POST['password'];
$konfirmasi_password = $_POST['konfirmasi_password'];

// Cek apakah password sama
if ($password != $konfirmasi_password) {

    echo "<script>
            alert('Konfirmasi password tidak sama!');
            window.location='../index.php';
          </script>";
    exit;

}

// Cek username sudah dipakai atau belum
$cekUsername = mysqli_query($conn, "SELECT * FROM users WHERE username='$username'");

if (mysqli_num_rows($cekUsername) > 0) {

    echo "<script>
            alert('Username sudah digunakan!');
            window.location='../index.php';
          </script>";
    exit;

}

// Cek email sudah dipakai atau belum
$cekEmail = mysqli_query($conn, "SELECT * FROM users WHERE email='$email'");

if (mysqli_num_rows($cekEmail) > 0) {

    echo "<script>
            alert('Email sudah digunakan!');
            window.location='../index.php';
          </script>";
    exit;

}

$passwordHash = md5($password);

// Simpan ke database
$query = mysqli_query($conn, "INSERT INTO users
(nama_lengkap, username, email, password, role)
VALUES
('$nama_lengkap','$username','$email','$passwordHash','user')");

// Cek berhasil atau gagal
if ($query) {

    echo "<script>
            alert('Registrasi berhasil!');
            window.location='../index.php';
          </script>";

} else {

    echo "<script>
            alert('Registrasi gagal!');
            window.location='../index.php';
          </script>";

}
?>