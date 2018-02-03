// my solutions

// 1. write a function which takes a single numeric argument and returns true
// if the number is even, and false otherwise

function isEven(x) {
    if (x % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// 2. write a function whic takes a single numeric
//  argument and returns the factorial of that number

var number;
var fact;

function factorial(y) {
    for (i=1; i < y; i++) {
        var number;
        var fact;
        number = y * i;
        fact = number * i;
    }
    return fact;
}

/* problem with my solution is that the variables are global so
 they dont reset with the function when putting a new number in 
the other issue is that the code is basically doing a doubel factorial 
by multiplying twice, I should delete line 26 with the (fact= num * 1)
statement and just have (number = number * i) so that number resets with
the new multiplied variable and continues multiplying itself by the next number*/ 

// 3. write a function kebabToSnake which takes a single kebab-cased 
// string argument and returns the snake_cased version

function kebabToSnake(str) {
    var newStr = str.relplace("-", "_");
    return newStr;
}

// The issue I had with my code was in the syntax of the .replace

// Colt Steele's solutions

// 1.

function isEven(num) {
    // return true if even
    if (num % 2 === 0) {
        return true;
    } 
    // return false if otherwise

    else {
        return false;
    }
}

// or shorter version 

function isEven(num) {
    return num % 2 === 0;
}

// 2.

function factorial(num) {
    // define a result variable
    var result = 1;
    // calculate factorial and store value in result
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    // return a result variable
    return result;
}

// 3.

function kebabToSnake(str) {
    // replace all '-' with '_'
    newStr = str.replace(/-/g , "_")
    // return str
    return newStr;

}