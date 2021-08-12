var selectedRow = null
// function onFormSubmit() {
//     if (validate()) {
//         // var formData = readFormData();
//         // var QQ = document.getElementById("StockQ").value;
//         // if (GCheck < QQ)
//         // {
//         //     alert(GCheck);
//         //     alert("Not Enough Stocks");
//         // }
//         // else
//         // {
//             insertNewRecord(formData);
//         resetForm();
//         // }
//     }
// }
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Stock"] = document.getElementById("Stock").value;
    formData["StockID"] = document.getElementById("StockID").value;
    formData["StockQ"] = document.getElementById("StockQ").value;
    formData["StockP"] = document.getElementById("StockP").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("Order").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.StockID;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Stock;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.StockQ;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.StockP;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.StockQ * data.StockP;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("StockID").value = "";
    document.getElementById("Stock").value = "";
    document.getElementById("StockQ").value = "";
    document.getElementById("StockP").value = "";
    selectedRow = null;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this?')) {
        row = td.parentElement.parentElement;
        document.getElementById("Order").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Stock").value == "") {
        isValid = false;
        document.getElementById("StockValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("StockValidationError").classList.contains("hide"))
            document.getElementById("StockValidationError").classList.add("hide");
    }
    return isValid;
}
var GCheck;
function CheckQuantity()
{
    // var Stock = document.getElementById("Stock").value;
    let AjaxFile = new XMLHttpRequest();
    AjaxFile.onreadystatechange =
        function()
            {
                if (this.readyState == 4 && this.status == 200)
                {
                    GCheck = this.response;
                }
            };
    var Stock = document.getElementById("Stock").innerHTML;
    AjaxFile.open("GET","PopulateStockQuantity.php?Stock="+Stock, true);
    AjaxFile.send();
}
