<!DOCTYPE html>
<html>
<head>
<title>EXAM</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<link rel="stylesheet" href="style.css">
<script src="PopulateStock.js"></script>
<script src="AddtoCart.js"></script>
<script src="SaveORDER.js"></script>



<body style="margin:0;padding:0">
<div class="modal fade" id="ViewP" tabindex="-1" role="dialog" aria-labelledby="e" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ed">Update Price and Stocks</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="showModal();">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label" id='StockValidationError'>Product</label>
                        <select name="StockModalProductM" id="StockModalProduct" onchange="PopulateIDStockM();PopulatePriceM();PopulateQuantityM();">
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">ID</label>
                        <input type="text" class="form-control" id="StockIDModal" readonly>
                    </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Stock Price:</label>
                        <input type="text" class="form-control" id="StockPModal" >
                    </div>       
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Stock Quantity:</label>
                        <input type="text" class="form-control" id="StockQModal">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                <button id="Update" type="button" class="btn btn-primary" onclick="UpdatePriceOrQuantity()">Submit</button>
            </div>
        </div>
    </div>
</div>
    <table>
        <tr>
            <td>
            <div id="RECORD_HOLDER_DISPLAY" style="overflow-y: auto; max-height: 600px;"></div>
            <div  class="form-action-buttons">
            <!-- <button type="button" class="btn btn-primary" onclick="UpdateStatus()">Price&Quantity</button> -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ViewP" onclick="ShowProductM();">Price&Quantity</button>

            </div>
            <td>
                <form onsubmit="event.preventDefault();onFormSubmit();" autocomplete="off">
                <div class="StockDiv">
                    </div>
                    <div class="form-row">                       
                        <div class="form-group col-md-6">
                            <label>Stock*</label><label class="validation-error hide" id="">This field is required.</label>
                            <select name="Stock" id="Stock" onchange="PopulateIDStock();PopulatePrice();CheckQuantity();">
                        </div>                        
                        <div class="form-group col-md-6">
                            <label>Stock ID</label>
                            <input type="text" name="StockID" id="StockID">
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                            <label>Stock Quantity</label>
                            <input type="text" name="StockQ" id="StockQ">
                    </div>
                    <div class="form-group col-md-6" >
                            <label>Stock Price</label>
                            <input type="text" name="StockP" id="StockP">
                    </div>                    
                    <div  class="form-action-buttons">
                        <input id="addtocart" type="submit" value="Add To Cart";>
                    </div>
                </form>
            </td>
            <td>
                <table class="list" id="Order">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>  
                            <th>Total Price</th>    
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <input id ="Save1" type="submit" value="Save" onclick="SAVEORDER()">
                <!-- <form onsubmit="event.SAVEORDER();" autocomplete="off"> -->
                <!-- <input id ="Save1" type="submit" value="Save"> -->
            </td>
        </tr>
    </table>  
    
</div>
</body>
<script>
    // $(document).on('click',"#ShowP", function () {
    //     document.getElementById("ViewP").showModal();
    // });
    function showModal()
    {
        document.getElementById("ViewP").showModal();
    }
    function closeModal()
    {
        document.getElementById("ViewP").close();
    }
</script>