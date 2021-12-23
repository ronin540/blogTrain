const query = require("../dbConfig/index");
module.exports = {
	addBlog: async (tableName, data) => {
		const data1 = await query(`INSERT INTO ?? SET ?`, [tableName, data]);
		return data1;
	},
	selectAll: async (tableName) => {
		const data1 = await query(`SELECT * FROM ??`, tableName);
		return data1;
	},
};
