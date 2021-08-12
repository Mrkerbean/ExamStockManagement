<?php
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "");
define("DB_DATABASE", "stockmanagement");
$MySQLConnection = mysqli_connect(DB_HOST ,DB_USER,DB_PASSWORD,DB_DATABASE) or die();
ini_set('max_execution_time', 99999);

@$StockID = $_GET['StockID'];
@$Quantity = $_GET['Quantity'];
@$Price = $_GET['Price'];
@$TotPrice = $_GET['TotPrice'];


$ORDERID = mysqli_query($MySQLConnection, "select max(idorder) + 1 from order");
while($MySQLReader = mysqli_fetch_array($ORDERID))
{
    $ORDERIDGET = $MySQLReader[0];
}
$MYSQLCommand = mysqli_query($MySQLConnection,"INSERT INTO order(idorder,idstock,Quantity,Price,TotalPrice)values('$ORDERIDGET','$StockID','$Quantity','$Price','$TotPrice')");
$MYSQLCommand1 = mysqli_query($MySQLConnection,"UPDATE stock Set Quantity = Quantity - $Quantity where idstock = '$StockID");