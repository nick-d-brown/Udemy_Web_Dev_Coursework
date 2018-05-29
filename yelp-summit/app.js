
// npm packages
var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
// initializing express
var app = express();
// connect mongoose
mongoose.connect("mongodb://localhost/summit_post_db")
// required to run body-parser
app.use(bodyParser.urlencoded({extended:true}));
// sets .ejs files as our view engine so we don't have to state every time
app.set("view engine","ejs");

// =========== mongoose schema setup ===============

var summitSchema = new mongoose.Schema({
    name: String,
    image: String,
    spURL: String,
    description: String

})

var Summit = mongoose.model("Summit", summitSchema)

// =================================================

// Summit.create({
//             name: "A'Ghlas-Bheinn",
//             image: "https://80d2853cc4def76b377d-54344bc01a8b066c84096a8e7a3499ac.ssl.cf1.rackcdn.com/medium/457959.jpg",
//             spLink: "https://www.summitpost.org/a-ghlas-bheinn/605535",
//             description: "A'Ghlas-Bheinn is a mountain reaching almost the minimum for a Munro, and a bit overshadowed by the neighbouring Beinn Fhada and Five Sisters of Kintail. However, if we combine its visit with the Falls of Glomach, it makes a very worth day-hike. The Falls of Glomach are UK 's (or Scotland's) third highest waterfall after Eas a ' Chual Aluinn in Assynt and Glen Nevis's Steall waterfall.But, by the verticality of the drop and the amount of water, they are probably the most spectacular, inspiring rather some Icelandic sights. A 'Ghlas-Bheinn is not less interesting, with rocky features, and great views around."
//         }, function (err, res) {
//     if (err) {
//         console.log(Error);
//     } else {
//         console.log(res);
        
//     }
// });

//  test data - will delete when mongoDB is connected
    // var summits = [{
    //         name: "A'Ghlas-Bheinn",
    //         image: "https://80d2853cc4def76b377d-54344bc01a8b066c84096a8e7a3499ac.ssl.cf1.rackcdn.com/medium/457959.jpg",
    //         spLink: "https://www.summitpost.org/a-ghlas-bheinn/605535"
    //     },
    //     {
    //         name: "A Muvrella",
    //         image: "https://80d2853cc4def76b377d-54344bc01a8b066c84096a8e7a3499ac.ssl.cf1.rackcdn.com/medium/828983.jpg",
    //         spLink: "https://www.summitpost.org/a-muvrella/828979"
    //     },
    //     {
    //         name: "A2",
    //         image: "https://80d2853cc4def76b377d-54344bc01a8b066c84096a8e7a3499ac.ssl.cf1.rackcdn.com/large/224799.jpg",
    //         spLink: "https://www.summitpost.org/a2/224798"
    //     }

    // ]

// port redirect for Heroku
var PORT = process.env.PORT || 3000;

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
            res.render("index", {summits:summitResponse})
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
    res.render("new")    
})

// MUST BE AFTER /summits/new otherwise will treat/new as an id
// GET route to show specific summit -- SHOW shows info about only one summit
app.get("/summits/:id", function (req, res) {
    //find the summit with provided ID
    Summit.findById(req.params.id, function (err, foundSummit) {
        if (err) {
            console.log(err);
        } else {
            res.render("show", {summit: foundSummit});
        }
    })
});

// shows the server is active and listening on the PORT being used
app.listen(PORT, function () {
    console.log("SummitPost Server Listening on PORT: " + PORT);
});