const express = require("express");
const mysql = require("mysql");
const blogRouter = require("./routes/blog.js");
let app = express();
const db = require("./dbConfig/index");
const port = 3000;

app.use(express.json());
app.use(blogRouter);
app.listen(port, () => {
	console.log(`App is listening to ${port}`);
});
