var express = require("express");

var app = express(); // we execute and initialize express here so that we can use its methods throughout our app
var PORT = process.env.PORT || 3000; // allows for either port from Heroku(or c9) or port 3000



//==========route order============
/* Order matters
    Only use * at the very end because the routes will be checked syncronously, and because
    * overides everything (nothing can trump it) it must go first    
*/

//===============Route parameters (aka- variables aka- paths)==========



    // the :subreddit listens for anything after the / , buuuut if another / is added with throw 
    // error

    app.get("/r/:subredditName", function(req,res) {
        res.send("Welcome to a subreddit!")
    });

    // ========
    // how to get to a more specific page

    app.get("/r/:subreddit/comments/:id/:title", function(req, res){
        console.log(req.params); // gives back the parameters entered into the : areas

        var subreddit =  req.params.subreddit;
        var id =  req.params.id;
        var title =  req.params.title;
        
        res.send("Welcome to the comments page for the " + title.toUpperCase() + "post on the " + subreddit.toUpperCase() +" subreddit !")
    });



// when we go to "/" we should get "Hi there!"

app.get("/", function (req, res) {
    res.send("Hi there!")
});
// .get takes 2 parameters, URL and a function that takes in 2 params or request and response
// req and res are objects that contain informaton about what was sent and what will be given


// when we go to "/bye" we should get "Goodbye!"

app.get("/bye", function (req, res) {
    res.send("Goodbye!")
});

// when we go to "/dog" we should get "Meoew!"

app.get("/dog", function (req, res) {
    console.log("Someone made a request to /dog!"); // will only appear in the node console
    res.send("Meow!")
});

// any get request to any unassigned url

app.get("*", function (req, res) {
    console.log("Someone made a request to an undefined route"); // will only appear in the node console
    res.send("Something went wrong!")
});

// listening for requests and responses

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})

// FOR CLOUD 9
// app.listen(process.env.PORT, process.env, function () {
//       console.log("App listening on PORT " + PORT);
// });
