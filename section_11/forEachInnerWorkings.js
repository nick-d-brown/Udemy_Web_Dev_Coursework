 function myForEach(arr, someFunction) {
    // loop through array 
    for (i=0;i<arr.length;i++){
     //1. call function for each item in array 
     someFunction();
    }
 }
 function yourForEach(arr, someFunction) {
    // loop through array 
    for (i=0;i<arr.length;i++){
        // 2. OR.....call function for each item in array and pass the item in the array into the function
        someFunction(arr[i]);
    }
 }



 //example

 var colors = ["red", "green", "blue"];

 myForEach(colors, alert);

 //example 2

var colors = ["red", "green", "blue"];

yourForEach(colors, function(color){
    console.log(colors);
});

// should return these console logs in succession
//<- red
//<- green
//<- blue


Array.prototype.theForEach = function(func){
    for (var i=0 ; i < this.length; i++){
        func(this[i]);
    }
}

var numbers = [1, 2, 3];

numbers.theForEach(alert);

numbers.theForEach(function(name){
    console.log(name + " is a great number");
    
});