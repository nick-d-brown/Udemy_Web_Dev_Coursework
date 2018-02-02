var prblm1 = -11;
var prblm2 = 0;
var prblm3 = 0;
var prblm4 = 0;


// Print all numbers between - 10 and 19
console.log("printing all numbers between -10 and 19");
// my solution
while (prblm1 <= 19) {
    if (prblm1 >= (-10)) {
        console.log(prblm1);}
    prblm1++;
}

// colt's solution

var counter = -10;
while(counter < 20) {
    console.log(counter);
    counter++;
}


// Print all even numbers between 10 and 40
console.log("printing all numbers between -10 and 19");
// my solution


while (prblm2 < 41) {
    if (prblm2 > 9 && prblm2 % 2 === 0) {
        console.log(prblm2);
    }
    prblm2++;
}

// colt's solution

var counter = 10;

while( counter <= 40) {
    console.log(counter);
    counter+=2;
}

// while (counter <= 40) {
//     if(counter % 2 === 0){
//         console.log(counter);
//     }
//     counter += 1;
// }
// longer version as it runs every number but actually checks if it is even



// Print all odd numbers between 300 and 333
console.log("printing all odd numbers between 300 and 33");
// my solution

while (prblm3 < 333) {
    if (prblm3 > 299 && prblm2 % 2 !== 0) {
        console.log(prblm3);
    }
    prblm3++;
}


// colt's solution

var counter = 300;

while (counter <= 333) {
    if (counter % 2 != 0) {
        consol.console.log(counter);
    }
    counter++;
}

// print all numbers divisible by 5 AND 3 between 5 and 50
console.log("print all numbers divisible by 5 AND 3 between 5 and 50");
// my solution

while (prblm4 < 50) {
    if (prblm4 > 4 && prblm2 % 5 === 0 && prblm2 % 3 === 0) {
        console.log(prblm4);
    }
    prblm4++;
}

// colt's solution

var counter = 5;

while (counter<= 50) {
    if (counter % 5 === 0 && counter % 3 === 0) {
        console.log(counter);
    }
    counter++;
    
}