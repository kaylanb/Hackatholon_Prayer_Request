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
	// var collection = db.get("group");
	// collection.insert(group), function ()
	db.Group.create(group, function (err, group) {
		console.log("group created");
			if (err) console.log(err);
			console.log("group is: ", group);		
		res.json(group);
	});	
});

//route for group's page
app.get('/groups/:id', function(req, res) {
	db.Group.findById(req.params.id, function (err, group) {
		if (err) console.log(err);
		res.render("group", {group: group});
	}); 
});

//route for creating a post
app.post('/api/groups/:id/posts', function (req, res) {
	db.Group.findById( req.params.id, function (err, group) {
		if(err) console.log(err);
		group.posts.push(req.body);
		group.save(function (err) {
			if(err) console.log(err);
			res.json(group);
		});
	});
});

//route for creating demo post
app.post('api/groups/:id/posts', function (req, res) {
	console.log("got request for new prayer");
	db.Group.findById( "5648dabd521bb4ab58ffd78e", function (err, group) {
		console.log("group is: ", group);
		console.log('req.body is', req.body);
		group.posts.push(req.body);
		group.save(function (err) {
			if(err) console.log(err);
			res.json(group);
		});
	});
});

//route for deleting demo post
// app.delete('')

//route for deleting a request
app.delete('/api/groups/:groupid/posts/:id', function (req, res) {
	db.Group.findById( req.params.groupid, function (err, group) {
		console.log("group is: ", group);
		group.posts.id(req.params.id).remove();
		group.save(function (err) {
			if (err) console.log(err);
			res.json(group);
		});
	});
});

//route for creating a request
// app.post('/api/users/:id/requests', function (req, res) {
// 	db.User.findById( req.params.id, function (err, user) {
// 			if (err) console.log(err);
// 			user.requests.push(req.body);
// 			var request = user.requests[user.requests.length -1];
// 			console.log("request is: ", request);
// 			user.save(function (err) {
// 				if (err) console.log(err);
// 				console.log("user is: ", user);
// 				res.json(request);

// 			});
					
		
// 	});	
// });

//route for demo page
app.get('/demo', function(req, res) {
	db.Group.findById('5648dabd521bb4ab58ffd78e', function (err, group) {
		if (err) console.log(err);
		res.render("demo", {group: group});
	}); 
	
});

app.listen(process.env.PORT || 3000, function() {
  console.log("hackathon-starter is running on port 3000");
});