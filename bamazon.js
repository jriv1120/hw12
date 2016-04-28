//Dependencies.

var prompt = require('prompt');
var mysql = require('mysql');


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'Bamazon'
});

var query = connection.query('SELECT * FROM Products', function(err, rows){
	for (var i = 0 ; i <rows.length; i++) {
		console.log("ItemId: " + rows[i].ItemId);
		console.log("ProductName: " + rows[i].ProductName);
		console.log("Price " + rows[i].Price);
		console.log("*");
	}


prompt.get(['ItemId','Quantity'], function(err, res){
// 	// console.log(result);

	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'Bamazon'
	});


var Quantity = connection.query("SELECT * FROM Products WHERE ItemId = '" + res.Id + "'", function(err, result2, fields){

	for (var b = 0; b<result2.length; b++) {
		var cost = result2[b].Price;
		var itemAmount = result2[b].StockQuantity;

		if (result2.StockQuantity <= rows.StockQuantity) {
			console.log("Sorry, that is unavailable.");
		}else{
			console.log("Math Here");
		}
	}
});
});
});
