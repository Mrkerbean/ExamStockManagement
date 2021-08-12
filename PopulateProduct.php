<?php
// include '../../Network';
// $SERVER_ADDRESS = 'localhost';
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "");
define("DB_DATABASE", "stockmanagement");
$MySQLConnection = mysqli_connect(DB_HOST ,DB_USER,DB_PASSWORD,DB_DATABASE) or die();
// @$SERVER_ADDRESS = '69.167.168.148';
// @$MySQLConnection = mysqli_connect($SERVER_ADDRESS, 'admatamayo_mpc13', 'QWERTYx123', 'admatamayo_aiiportal') or die();
ini_set('max_execution_time', 99999);
echo '<option value="">Select Product</option>';
$MySQLCommand = mysqli_query($MySQLConnection, "select Product from stock;");
while($MySQLReader = mysqli_fetch_array($MySQLCommand))
{
    $stock = $MySQLReader[0];
    ECHO '<option>'.$stock.'</option>';
}