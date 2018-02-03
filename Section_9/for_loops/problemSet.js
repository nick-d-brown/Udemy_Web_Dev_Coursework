

// Print all numbers between - 10 and 19

// my solution
console.log("Print all numbers between - 10 and 19");

for (let i = -10; i < 20; i++) {
    console.log(i);
}

// Colt steele's soution

for (var i =-10; i < 20; i++){
    console.log(i);
}

// Print all even numbers between 10 and 40

// my solution

console.log("Print all even numbers between 10 and 40");

// for (let i = 10; i < 41; i+= 2) {
//     console.log(i);
// }

// or 

for (let i = 10; i < 41; i ++) {
    if (i % 2 === 0) {
        console.log(i);
    }    
}

// Colt steele's soution

// for (var i = 10; i <= 40; i+=2) {
//     console.log(i);
// }

// or

for (var i = 10; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Print all odd numbers between 300 and 333

// my solution

console.log("Print all odd numbers between 300 and 333");

for (let i = 300; i < 334; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
// Colt steele's soution

for (i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Print all numbers divisible by 5 AND 3 between 5 and 50

// my solution
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");


for (let i = 5; i < 51; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}
// Colt steele's soution

for (var i = 5; i <=50; i++) {
    if(i % 5 ===0 && i % 3 ===0) {
        console.log(i);
    }
}