var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000; // Port for either HEROKU or local server 

    //===========Routes

    // Visiting "/" should print "Hi there, welcome to my assignment!"
    app.get("/", function (req, res) {
        res.send("Hi there, welcome to my assignment!")
    })
    //==========================
   
    // Visiting "/speak/pig" should print "The pig says 'Oink!'"
    // Visiting "/speak/cow" should print "The cow says 'Mooooo!'"
    // Visiting "/speak/dog" should print "The dog says 'Woof Woof!'"
    // Visiting "/speak/cat" should print "The cat says 'what do you want human? I'm busy plotting your demise.'"
    // Visiting "/speak/mouse" should print "The pig says 'Squeek!'"

     app.get("/speak/:animal", function(req, res){
        var animal = req.params.animal.toLowerCase(); //Turns the word into lower case so that DOG and dog return the same
       

        // my solution
        // switch (animal) {
        //     case "pig":
        //         res.send("The pig says 'Oink!'")
        //         break;
        //     case "cow":
        //         res.send("TThe cow says 'Mooooo!'")
        //         break;
        //     case "dog":
        //         res.send("The dog says 'Woof Woof!'")
        //         break;
        //     case "cat":
        //         res.send("The cat says 'what do you want human? I'm busy plotting your demise.'")
        //         break;
        //     case "mouse":
        //         res.send("The mouse says 'Squeek!")
        //         break;
        //     default:
        //         res.send("I don't know what animal that is... Sorry.")
        //         break;
        // }

        //instructor solution
         var sounds = {
            pig: "Oink!",
            cow: "Moooo!",
            dog: "Woof Woof!",
            cat: "what do you want human? I'm busy plotting your demise.",
            mouse: "Squeak!"
        }
        var sound = sounds[animal];
        res.send("The " + animal + " says, '" + sound + "'");


    });

    //==========================
    // Visiting "/repeat/hello/3" should print "hello hello hello"
    // Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
    // Visiting "/repeat/blah/2" should print "blah blah""
    app.get("/repeat/:word/:number", function(req, res){
             
        var reqWord = req.params.word;
        var reqNumber = parseInt(req.params.number);
        var resString = repeatWord(reqWord, reqNumber);
        res.send(resString); // NOTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! you can only res.send one time in the app.get() request (or in any request for that matter)
    });
    //==========================
    // If a user visits any other route, print:
    // "Sorry, page not found... What are you doing with your life? "

    app.get("*", function (req, res) {
        res.send("Sorry, page not found...What are you doing with your life?")
    });

//===========App listening for requests and responses

app.listen(PORT, function(){
    console.log("App listening on " + PORT);
    
});

function repeatWord(word, num) {
    var wordStr = "";
    for (let i = 0; i < num; i++) {
        wordStr+=word + " ";
        
    }
    return wordStr;
}