// my answer

var age = Number(prompt("How old are you?"));

if (age < 0) {console.log("error: cannot be a negative number.")};

if (age === 21) { console.log("happy 21st birthday!")};

if (! (age % 2 === 0)) { console.log("Your age is odd!")};

if (age % age === 0) { console.log("Perfect Square")};

// udemy answer

var age = Number(prompt("How old are you?"));

if (age < 0) {console.log("error: cannot be a negative number.")};

if (age === 21) { console.log("happy 21st birthday!")};

if (AGE % 2 !== 0) { console.log("Your age is odd!")};

if (age % Math.sqrt(age) === 0) { console.log("Perfect Square")};