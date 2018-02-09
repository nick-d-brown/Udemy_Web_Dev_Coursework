

    
// var x is only define in the fuction

function doMath () {
    var x = 40;
    console.log(x)
}

doMath()



// in short, global variables can be accessed inside of a function, 
// but local variables cannot be accessed outside of the function

var y = 99;
 
function doMoreMath () {
    var y = 100;
    // this doesn't declare a new variable y, it simply changes the old one for the function
    console.log(y);
}


var phrase = "hi there";

function doSomething() {
    phrase = "goodbye"
    console.log(phrase); //will return goodbye
}

    console.log(phrase); //will return goodbye