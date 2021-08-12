<?php
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "");
define("DB_DATABASE", "stockmanagement");
$MySQLConnection = mysqli_connect(DB_HOST ,DB_USER,DB_PASSWORD,DB_DATABASE) or die();
ini_set('max_execution_time', 99999);
@$Stock = $_GET['Stock'];
$MySQLCommand = mysqli_query($MySQLConnection, "select Quantity from stock where Product = '$Stock';");
while($MySQLReader = mysqli_fetch_array($MySQLCommand))
{
    $Quantity = $MySQLReader[0];
    ECHO $Quantity;
}