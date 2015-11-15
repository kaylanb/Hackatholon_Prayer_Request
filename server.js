// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var ejs = require('ejs');
var mongoose = require("mongoose");
var db = require("./models/index");




//MIDDLEWARE
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.render("index");
});


//route for creating a group
app.post('/api/groups', function (req, res) {
	var group = req.body;
	console.log("req.body is: ", req.body);
	db.Group.create(group, function (err, user) {
			if (err) console.log(err);
					
		res.json(group);
	});	
});



app.listen(process.env.PORT || 3000, function() {
  console.log("hackathon-starter is running on port 3000");
});