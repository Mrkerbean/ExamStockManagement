ShowProduct();
ViewProduct();
// test();
// function test(){
//     alert("try");
// }
function ShowProduct(){
    let AjaxFile2 = new XMLHttpRequest();
    // let xTimecard = localStorage.getItem("LOGIN_CODE");
    AjaxFile2.onreadystatechange =
        function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("Stock").innerHTML = this.responseText;
                // let test = this.responseText;
                // alert(test);
            }
        };
    var TEMP_CLEANER = new Date();
    AjaxFile2.open("GET","PopulateProduct.php?");
    AjaxFile2.send();
}
function PopulateIDStock()
{
    let AjaxFile2 = new XMLHttpRequest();
    AjaxFile2.onreadystatechange =
        function()
            {
                if (this.readyState == 4 && this.status == 200)
                {
                    document.getElementById("StockID").value = this.responseText;
                }
            };
    var Stock = document.getElementById("Stock").value;
    AjaxFile2.open("GET","PopulateidStock.php?Stock="+Stock, true);
    AjaxFile2.send();
}
function PopulatePrice()
{
    let AjaxFile = new XMLHttpRequest();
    AjaxFile.onreadystatechange =
        function()
            {
                if (this.readyState == 4 && this.status == 200)
                {
                    document.getElementById("StockP").value = this.responseText;
                }
            };
    var Stock = document.getElementById("Stock").value;
    AjaxFile.open("GET","PopulateStockPrice.php?Stock="+Stock, true);
    AjaxFile.send();
}
function ShowProductM(){
    let AjaxFile2 = new XMLHttpRequest();
    // let xTimecard = localStorage.getItem("LOGIN_CODE");
    AjaxFile2.onreadystatechange =
        function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("StockModalProduct").innerHTML = this.responseText;
            }
        };
    var TEMP_CLEANER = new Date();
    AjaxFile2.open("GET","PopulateProduct.php?");
    AjaxFile2.send();
}
function PopulateIDStockM()
{
    let AjaxFile2 = new XMLHttpRequest();
    AjaxFile2.onreadystatechange =
        function()
            {
                if (this.readyState == 4 && this.status == 200)
                {
                    document.getElementById("StockIDModal").value = this.responseText;
                }
            };
    var Stock = document.getElementById("StockModalProduct").value;
    AjaxFile2.open("GET","PopulateidStock.php?Stock="+Stock, true);
    AjaxFile2.send();
}
function PopulatePriceM()
{
    let AjaxFile = new XMLHttpRequest();
    AjaxFile.onreadystatechange =
        function()
            {
                if (this.readyState == 4 && this.status == 200)
                {
                    document.getElementById("StockPModal").value = this.responseText;
                }
            };
    var Stock = document.getElementById("StockModalProduct").value;
    AjaxFile.open("GET","PopulateStockPrice.php?Stock="+Stock, true);
    AjaxFile.send();
}
function PopulateQuantityM()
{
    let AjaxFile = new XMLHttpRequest();
    AjaxFile.onreadystatechange =
        function()
            {
                if (this.readyState == 4 && this.status == 200)
                {
                    document.getElementById("StockQModal").value = this.responseText;
                }
            };
    var Stock = document.getElementById("StockModalProduct").value;
    AjaxFile.open("GET","PopulateStockQuantity.php?Stock="+Stock, true);
    AjaxFile.send();
}
function ViewProduct()
{
    var AJAX = new XMLHttpRequest();
        AJAX.onreadystatechange =
            function()
            {
                if (AJAX.readyState == 4 && AJAX.status == 200)
                {
                    document.getElementById('RECORD_HOLDER_DISPLAY').innerHTML = AJAX.responseText;
                }
            };
    AJAX.open("GET","PopulateTable.php?");
    AJAX.send();
}
function UpdatePriceOrQuantity()
{
    var stockID = document.getElementById('StockIDModal').value;
    var StockP = document.getElementById('StockPModal').value;
    var StockQ = document.getElementById('StockQModal').value;
    var SDT2 = new XMLHttpRequest();
        var Form = new FormData();
        SDT2.open("POST", "UpdateP&Q.php?stockID=" + stockID + "&StockP=" + StockP + "&StockQ=" + StockQ);
        SDT2.send(Form);
        location.reload();
}
// function CheckQuantity()
// {
//     var Stock = document.getElementById("Stock").value;
//     let AjaxFile = new XMLHttpRequest();
//     AjaxFile.onreadystatechange =
//         function()
//             {
//                 if (this.readyState == 4 && this.status == 200)
//                 {
//                     let ch = this.response;
//                     let Q = document.getElementById('StockQ').value;
//                     if(ch<Q)
//                     {
//                         alert("Sorry You only have" + Q + "Stocks!, Please Add More stocks!")
//                         deleterow(Order);
//                     }
//                 }
//             };
//     var Stock = document.getElementById("StockQ").value;
//     AjaxFile.open("GET","PopulateStockQuantity.php?Stock="+Stock, true);
//     AjaxFile.send();
// }
// function deleterow(tableID) {
//     var table = document.getElementById(tableID);
//     var rowCount = table.rows.length;

//     table.deleteRow(rowCount -1);
// }