const mysql = require("mysql");

function query(query, attributes) {
	const connection = mysql.createConnection({
		host: "bok3mkxfjk4xd2qijmji-mysql.services.clever-cloud.com",
		user: "u9rqnmom5iykwybh",
		password: "YtljYuv1bhEqht39pslj",
		database: "bok3mkxfjk4xd2qijmji",
	});

	connection.query(query, attributes, function (error, results, fields) {
		if (error) throw error;
		return results;
	});

	connection.end((err) => {
		if (err) throw err;
		console.log("Connection is ended");
	});
}

module.exports = query;
