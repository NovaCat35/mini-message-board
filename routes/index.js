var express = require("express");
var router = express.Router();

const messages = [
	{
		text: "Hi there!",
		user: "Kino",
		added: new Date(),
	},
	{
		text: "Hello World",
		user: "Hermes",
		added: new Date(),
	},
];

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Mini Message Board", messages: messages });
});

/* GET form page */
router.get("/new", function (req, res, next) {
	res.render("form", {title: 'Form Page'});
});

router.post("/new", function (req, res, next) {
	const user = req.body.name_field;
	const text = req.body.text_field;
	messages.push({ text, user, added: new Date() });
	res.redirect("/");
});

module.exports = router;
