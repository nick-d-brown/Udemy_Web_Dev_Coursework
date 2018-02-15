var comments = {};

coments.data = ["cool", "sweet", "awesome"];

comments.print = function(){
    this.data.forEach(function(el){
        console.log(el);
    });
}

// there is no need for a perameter to be put into the function because
// "this.data" is refereing to the comments in the data array and will 
// console.log each of the onmments from "this", which is the key called data