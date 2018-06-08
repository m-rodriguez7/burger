var connection = require('./connection.js');


var orm = {

	selectAll: function(cb) {
		var query = "SELECT * FROM burgers;"
		connection.query(query, (err, res)  => {
			if (err) throw err;
			cb(res);
		});
	},
	insertOne: function(name, devoured, cb) {
		var query2 = "INSERT into burger(burger_name, devoured) VALUES (?, ?);"
		connection.query(query2, [name, devoured], (err,res) => {
			if (err) throw err;
			cb(res);
		});
	},
	updateOne: function(name,cb) {
		var query3 = "UPDATE burgers SET devoured = true where burger_name = ?;"
		connection.query(query3, [name], (err,res) => {
			if (err) throw err;
			cb(res);
		});
	}

};

module.exports = orm;
