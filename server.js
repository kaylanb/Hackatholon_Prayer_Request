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

app.get('/', function(req, res) {
  res.render("index");
});






app.listen(process.env.PORT || 3000, function() {
  console.log("hackathon-starter is running on port 3000");
});