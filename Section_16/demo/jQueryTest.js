$(document).ready(function () {
    
    // object with style properties to be added
    var styles = {
        color : "red",
        backgroundColor: "pink",
        border: "2px solid purple"
    }

    // adds styles object to the css of all the h1 elements
    $("h1").css(styles);
    
    // changes the css color of all lis to blue
    $("li").css("color", "blue");
    
    // must use camelcase for css '-' in javascript

    //
    $("li").css({
        fontSize: "10px",
        border: "3px dashed purple",
        backgroundColor: "brown"
    });
    
    //
    
});