var mysql = require("mysql");
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "coupon_test"
});

connection.connect();
//connection.query('USE coupon_test', function(err, rows) {
//	console.log(err); // 'ER_BAD_DB_ERROR'
//});
connection.query("USE coupon_test SELECT * FROM coupon_code", function(err, row, fields){
	if(!err){
		console.log("row data" + row);
	}else
	{
		console.log("Error while performing Query.");
	}
});
connection.end();