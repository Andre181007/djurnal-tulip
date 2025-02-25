<?php
    $host       ="localhost";
    $username   ="root"     ;
    $password   =""         ;
    $database   ="login"    ;

    $conn   =new mysqli_connect($username, $password, $database, $database);
    
    if ($conn){
        die ("Koneksi Gagal : " . mysqli_connect_eror());
    }  
    else {
        echo "Koneksi Berhasil";
    }
?>