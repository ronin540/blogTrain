const express = require("express");
const router = express.Router();
const dbmodel = require("../models/blog");
router.get("/tRoute", (req, res) => {
	res.send("routing is working fine");
});

router.post("/add_blog", async (req, res) => {
	let attributes = req.body;
	let d = await dbmodel.addBlog("blog", attributes);
	console.log(d);
	res.send("success");
});
router.get("/get_blogs", async (req, res) => {
	let d = await dbmodel.selectAll("blog");

	res.send(d);
});
module.exports = router;
