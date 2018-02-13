// exercises

/* printReverse() function
-write a function that takes an array as an argument and prints out 
the elelments in the array in reverse order (don't 
actually reverse the array itself) */

// my soution

var str = [1,2,3,4]

function printReverse(someArr) {
    for (var i =0; i < someArr.length; i++) {
        console.log(someArr[(someArr.length-1)-i]);
    }
}

// instructor solution

var str = [1, 2, 3, 4]

function printReverse(arr) {
    for (var i = arr.length-1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

/* isUniform() function
-write a function which takes an array as an argument and return true
 if all elements in the array are identical */

// my soution - not working

var str1 = [1, 2, 3, 4];
var str2 = [1, 1, 1, 1];
var str3 = ["a", "a", "a", "a"];
var str4 = ["a", "b", "c", "d"];
var emptyArr = [];

function isUniform(x) {
   var emptyArr = x.slice(0, 1);
   console.log(emptyArr);
    for (var i = 0; i < x.length; i++) {
        if (emptyArr[0] !==  x.indexOf(i)){
            console.log(false);
            console.log(x.indexOf(i));
        } else { 
            console.log(true);
            console.log(x.indexOf(i));
           }

}
}

// instructor solution

function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}

/* for each solution
NOTE** we didn't use this because the return false if the 
element !== first will only return false for the first function
within the .forEach. then the next line will run always returning false

function isUniform(arr) {
    var first = arr[0];
    arr.forEach(function(element){
        if(element !== first){
            return false;
        }
    });
    
    return true;
}*/
 
/* sumArray() function
-write a function that accepts an array of numbers
and returns the sum of all numbers in the array */

// my soution

var arr1 = [1,2,3];
var arr2 = [10, 3, 10, 4];
var arr3 = [-5, 100];

function sumArray(arr) {
    var result = 0;
    for (i=0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}

// instructor solution

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}

/* max() function
-write a function that accepts an array of numbers
and returns the maximum number in the array */

// my soution

var arr1 = [1, 2, 3];
var arr2 = [10, 3, 10, 4];
var arr3 = [-5, 100];

function max(arr) {
    var result = [];
    result = arr.slice(0, 1);
    for (i = 0; i < arr.length; i++) {
        if (result[0] < arr[i]) {
            result = arr.slice(i, i+1);
        }
    }
    return result;
}

// instructor solution

function max(arr) {
    var max = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}