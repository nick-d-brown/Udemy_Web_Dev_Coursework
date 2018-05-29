var express = require("express");
var app = express();  
var bodyParser = require("body-parser");

// basically gets body parser up and running for the app to understand
app.use(bodyParser.urlencoded({extended:true}));

// makes it so we don't have to write .ejs after every file name run through the res.render
// (i.e. "friends" doesn't have to e "friends.ejs" in the response to the reoute bellow)
app.set("view engine", "ejs");

// Sets up our local port to use if a specific port isn't being used for heroku
var PORT = process.env.PORT || 3000;

//variables
// this is jsut for this example - soon will use db to solve issue

var friends =
    [
        "tony"
        , "miranda"
        , "justin"
        , "piere"
        , "lilly"
    ]


//routes
    //get routes 

app.get("/", function (req,res) {
    res.render("home");
});

app.get("/friends", function (req,res) {
  
    res.render("friends" , {friends:friends});
});

    // post routes

app.post("/addfriend", function (req, res) {
    // console.log(req.body); // returns object with value/s from form assigned to their key as the name determined on the input 
    console.log(req.body.newFriend);
    friends.push(req.body.newFriend)
    // res.send("YOU HAVE REACHED THE POST ROUTE"); // using this is abnormal
    res.redirect("/friends"); //redirects to friends page and re-renders the page with added friend
});


app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT);
});