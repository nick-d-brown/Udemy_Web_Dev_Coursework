var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

var PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.render("search");    
})

app.get("/results", function (req, res) {
    var query = req.query.search;   
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url , function (error, response, body) {
        if (!error &&response.statusCode==200) {
            var parsedBody = JSON.parse(body);
            res.render("results", {parsedData:parsedBody});            
        }
    })
})

app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT);
});