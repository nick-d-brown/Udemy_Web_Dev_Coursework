// cfeate secret number

var secretNum = 4;

// ask users for number guess

var stringGuess = prompt("Guess a number?");
var guess = Number(stringGuess);

// check if guess is right


// if (typeof guess !== typeof secretNum) {
//     alert("Please type a number.");
// }

 if (guess === secretNum) {
    alert("You got it right!");
}

// otherwise check if higher

else if (guess >= secretNum) {
    alert("Too high! Guess Again");
}

// otherwise check if lower


else {
    alert("Too low! Guess Again");
}