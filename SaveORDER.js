function SAVEORDER(){
$("Save1").click(function(){
    $('#Order').find('tr').each(function () {
        var $tds = $(this).find('td');
        var StockID = ($tds.eq(0).text());
        var Quantity = ($tds.eq(2).text());        
        var Price = ($tds.eq(3).text());
        var TotPrice = ($tds.eq(4).text());
    var SDT2 = new XMLHttpRequest();
    var Form = new FormData();
    SDT2.onreadystatechange =
    SDT2.open("POST", "SaveORDER.php?StockID=" + StockID + "&Quantity=" + Quantity + "&Price=" + Price + "&TotPrice=" + TotPrice);
    SDT2.send(Form);
    });
    alert("TEST");
});
}
