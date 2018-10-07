
// npm packages
var express = require("express"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose");
	Summit = require("./models/summit"),
	User = require("./models/user"),
	Comment = require("./models/comment"),
	SeedDB = require("./seeds")


// initializing express
var app = express();
// connect mongoose
mongoose.connect("mongodb://localhost/summit_post_db")
// required to run body-parser
app.use(bodyParser.urlencoded({extended:true}));
// sets .ejs files as our view engine so we don't have to state every time
app.set("view engine","ejs");

// port redirect for Heroku
var PORT = process.env.PORT || 3000;

// Uncomment to seed DB
// SeedDB();

// main route to render landing page
app.get("/", function (req, res) {
	res.render("landing")
})

// get route renders the summits page with all posted summits
app.get("/summits", function (req, res) {
	// get all summits from DB
	Summit.find({}, function (err, summitResponse) {
		if (err) {
			console.log(err);
		} else {
			res.render("summits/index", {summits:summitResponse})
		}
	})
	// res.render("summits", {summits:summits});
})

// post route addss new summit to the summits array and redirects to summits get route
app.post("/summits", function (req,res) {
	// get data from form
	var name = req.body.name;
	var image = req.body.image;
	var spLink = req.body.spLink;
	var desc = req.body.description;
	var newSummit = {name:name, image:image, spLink:spLink, description: desc}
	// create new summit and add to DB
	Summit.create(newSummit, function (err, newlyCreated) {
		if (err) {
			console.log(err);
		} else {
			console.log(newlyCreated);

			// redirect to summits page
			res.redirect("/summits");
		}
	})
})

// renders the form that sends the new summit data
app.get("/summits/new", function (req, res) {
	res.render("summits/new")
})

// MUST BE AFTER /summits/new otherwise will treat/new as an id
// GET route to show specific summit -- SHOW shows info about only one summit
app.get("/summits/:id", function (req, res) {
	//find the summit with provided ID
	// and populate the item with its associated comments
	Summit.findById(req.params.id).populate("comments").exec(function (err, foundSummit) {
		if (err) {
			console.log(err);
		} else {
			res.render("summits/show", {summit: foundSummit});
		}
	})
});

// shows the server is active and listening on the PORT being used
app.listen(PORT, function () {
	console.log("SummitPost Server Listening on PORT: " + PORT);
});

//==================================================
// COMMENTS ROUTES
//==================================================

// gets all of the coments for a summit
app.get("/summits/:id/comments/new", function(req, res){
	// find summit by id
	Summit.findById(req.params.id, function(err, summit){
		if (err) {
			console.log(err);
		} else {
			// send through
			res.render("comments/new", {summit:summit});
		}
	})
});

app.post("/summits/:id/comments", function(req, res){
	Summit.findById(req.params.id, function(err, summit) {
		if (err) {
			console.log(err);
			res.redirect("/summits");
		} else {
			Comment.create(req.body.comment, function(err, comment){
				if (err) {
					console.log(err);
				} else {
					summit.comments.push(comment);
					summit.save();
					res.redirect('/summits/' + summit._id);
				}
			});
		}
	})

})