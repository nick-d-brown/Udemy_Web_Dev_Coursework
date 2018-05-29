var mongoose = require("mongoose");
// if cat_app db does not exist, will create a new one
mongoose.connect("mongodb://localhost/cat_app")

// this pattern is not a requirement, but a pattern we can follow
// still NoSQL, this does not create a firm table
// it is a plan for what a cat looks like
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// create a plural collection called something like "db.cats~~~~~~~"
// this puts out catSchema into a model with a bunch of methods to use in the var cat
var Cat = mongoose.model("Cat", catSchema);

// allows us to find or CRUD any new cats we want. 
// creates a pattern we can follow

// adding a new cat to the db
// ran this first then commented out
// var george = new Cat({
//     name:"George",
//     age: 11,
//     temperament: "Grouchy"
// });

// if adding another cat we wouldn't technically have to change the var george
// though the variable is the same, it is simply being used in the JS
// the information is different that is being passed so will show different in the db
// var george = new Cat({
//     name:"Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// we are saving the new cat with a var of george to the db
//passing a callback function to verify that we have actually saved the cat to the db
// if success we use the passed "cat" parameter and log it
// george.save(function(err, cat){
//     if (err) {
//         console.log("Something went wrong");
//     } else {
//         console.log("We just saved a cat to the db");
//         console.log(cat);
        
        
//     }
// })

// This is new and save all at once
Cat.create({
    name: "Snowball",
    age: 15,
    temperament: "Bland"
}, function (err, cat) {
    if (err) {
        console.log("error!!!!!");
        console.log(err);
    } else {
        console.log("cat created");
        console.log(cat);
        
    }
});

// retrieve all cats from the DB and log each one

// we find everything in the collection then run the callback that shows us what we got back
Cat.find({}, function (err, cats) {
    if (err) {
        console.log("error!!!!");
        console.log(err);     
    } else {
        console.log("All the cats.......");        
        console.log(cats);
        
    }
})

/* If we tried to simply console log george it would be different from the "cat" param
    this is because george is not coming from the db, but is the information that we are passing into the db*/
