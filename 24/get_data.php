<?php

if(!isset($_GET['callback']) || empty($_GET['callback'])){
  header('HTTP/1.0 404 Not Found');
  die();
}
// Dane pobierane z bazy danych
$data = array(
    'firstName' => 'Jan',
    'lastName' => 'Kowalski Nowak',
    'age' => 28
);

// echo json_encode($data);
// header('Content-Type: text/javascript');
// echo 'alert("Witaj");';

echo $_GET['callback'];