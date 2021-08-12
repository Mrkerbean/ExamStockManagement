
<table class="table table-striped table-hover table-bordered table-responsive-lg table-sm" id="exportTable" style="overflow-y: scroll; max-height: 400px;">
    <thead class="text-center">
    <tr class="">
        <th class="text-center disable-selection" style="font-weight: 500; padding: 0; margin: 0; color: red;">ID</th>
        <th class="text-center disable-selection" style="font-weight: 500; padding: 0; margin: 0; color: red;">Products</th>
        <th class="text-center disable-selection" style="font-weight: 500; padding: 0; margin: 0; color: red;">Quantity</th>
        <th class="text-center disable-selection" style="font-weight: 500; padding: 0; margin: 0; color: red;">Price</th>
    </tr>
    </thead>
<?php
    define("DB_HOST", "localhost");
    define("DB_USER", "root");
    define("DB_PASSWORD", "");
    define("DB_DATABASE", "stockmanagement");
    $MySQLConnection = mysqli_connect(DB_HOST ,DB_USER,DB_PASSWORD,DB_DATABASE) or die();
    ini_set('max_execution_time', 99999);
    $QWERTY =  "Select idStock, Product, Quantity, Price from stock;";
    $MySQLCommand = mysqli_query($MySQLConnection,$QWERTY);
    while ($MySQLReader = mysqli_fetch_array($MySQLCommand)) {
        $ID = $MySQLReader[0];
        $Product = $MySQLReader[1];
        $Quantity = $MySQLReader[2];
        $Price = $MySQLReader[3];     
        ECHO '<tr>';
        ECHO '<td class="text-center" style="vertical-align: middle;">' . $ID . '</td>';
        ECHO '<td class="text-center" style="vertical-align: middle;">' . $Product . '</td>';
        ECHO '<td class="text-center" style="vertical-align: middle;">' . $Quantity . '</td>';
        ECHO '<td class="text-center" style="vertical-align: middle;">' . $Price . '</td>';
        ECHO '</tr>';
    }
    ?>
    </tbody>
</table>
</tbody>
</table>
</body>