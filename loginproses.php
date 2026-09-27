<?php
session_start();
include "../konfig/koneksi.php";

$username = mysqli_real_escape_string($conn, $_POST['username']);
$password = $_POST['password'];

$query = mysqli_query($conn, "SELECT * FROM users WHERE username='$username'");

if(mysqli_num_rows($query) == 1){

    $data = mysqli_fetch_assoc($query);

if(md5($password) === $data['password']){

$_SESSION['login'] = true;
$_SESSION['id'] = $data['id'];
$_SESSION['username'] = $data['username'];
$_SESSION['role'] = $data['role'];

header("Location: ../index.php");
exit;

}

}else{

    echo "<script>
            alert('Username tidak ditemukan!');
            window.location='../index.php';
          </script>";

}


    echo "<script>
            alert('Password tidak ditemukan!');
            window.location='../index.php';
          </script>";


?>