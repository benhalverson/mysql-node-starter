var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'coupon_test'
});
var app = express();

connection.connect(function(err){
	if(!err) {
		console.log("Database is connected ... \n\n");
	} else {
		console.log("Error connecting database ... \n\n");
	}
});

app.get("/",function(err, req,res){
	connection.query('SELECT * from coupon_codes', function(err, rows, fields) {
		if (err){
			throw err;
			connection.end();
		}
		if (!err){
			console.log('Row data', rows);
		}

		else{
			console.log('Error while performing Query.');
		}

	});
});

app.listen(3000);
