const mysql = require("mysql");

function query(query, attributes) {
	return new Promise((resolve, reject) => {
		const connection = mysql.createConnection({
			host: "bok3mkxfjk4xd2qijmji-mysql.services.clever-cloud.com",
			user: "u9rqnmom5iykwybh",
			password: "YtljYuv1bhEqht39pslj",
			database: "bok3mkxfjk4xd2qijmji",
		});

		connection.query(query, attributes, (err, rows, fields) => {
			if (err) {
				return reject(err);
			}
			connection.end(() => {
				console.log("con ended");
			});
			resolve(rows);
		});
	});
}

module.exports = query;
