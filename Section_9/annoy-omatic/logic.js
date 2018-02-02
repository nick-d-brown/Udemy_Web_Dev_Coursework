// var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "ya") {
//     prompt("Are we there yet?");
// }

// alert("yayayayayaaaaa! We made it!");



// version 2.0

var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
    var answer = prompt("are we there yet?");    
}


alert("yayayayayaaaaa! We made it!");