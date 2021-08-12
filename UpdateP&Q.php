<?php
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "");
define("DB_DATABASE", "stockmanagement");
$MySQLConnection = mysqli_connect(DB_HOST ,DB_USER,DB_PASSWORD,DB_DATABASE) or die();
ini_set('max_execution_time', 99999);
@$stockID = $_GET['stockID'];
@$StockP = $_GET['StockP'];
@$StockQ = $_GET['StockQ'];
$MyResult = mysqli_query($MySQLConnection, "update stock set Quantity = '$StockQ', Price = '$StockP' where idStock = '$stockID'");
