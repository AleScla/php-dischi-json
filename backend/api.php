<?php 
$CDs_info = file_get_contents(__DIR__."/DB.json");

$albums = json_decode($CDs_info, true);

header('Content-Type: application/json');

echo json_encode($albums);