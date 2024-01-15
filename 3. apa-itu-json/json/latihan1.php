<?php 

// $mahasiswa = [
//     [
//         "nama" => "atun",
//         "nrp" => "12209044",
//         "email" => "atun@unpas.ac.id"
//     ],
//     [
//         "nama" => "atun1",
//         "nrp" => "12209044",
//         "email" => "atun@gmail.com"
//     ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=phpdasar', 'root', 'root');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;

?>