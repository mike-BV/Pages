<?php
$url='http://www.bilibili.com/index/index-icon.json';
$response = file_get_contents($url);
$result = gzdecode($response);
echo $result;
?>