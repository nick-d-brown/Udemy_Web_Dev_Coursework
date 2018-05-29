// in order to use ejs we had to npm install ejs package

var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

// serving the public directory with style and logic externals
app.use(express.static("public"));

// this allows us to just type thte file name instead of having to include .ejs after everythin
app.set("view engine", "ejs");

// =========ROUTES===========

    app.get("/", function (req, res) {
        res.render("home.ejs"); // render lives in the response object
        
    })

    app.get("/fallinlovewith/:thing", function (req, res) {
        var thing = req.params.thing;
        // res.render("love.ejs", {thingVar : "dog"}); //thingVar in the ejs file should be = to thing
        res.render("love.ejs", {thingVar : thing}); //thingVar in the ejs file should be = to thing
    })

    app.get("/posts", function (req, res) {
        var posts = [
            {title: "post1",
             author: "person"},
            {title: "dogs",
             author: "charlie"},
            {title: "things",
             author: "bob"}
        ];
        res.render("posts.ejs", {posts:posts});
    })

// server listening for requests to send responses

app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
})