
// writing code to sing twinkle twinkle

function sing() {
    console.log("twinkle twinkle...");
    console.log("how i wonder...");
}

// sertInterval (anotherFunc, interval) one example of a higher order function

setInterval(sing, 1000 /*every 1000 miliseconds*/ );

// clearInterval(2)

// if we want to set an anonymous function


setInterval(function () {
    console.log("I am an anonymous function!");
    console.log("THIS IS AWESOME!");
}, 2000);

