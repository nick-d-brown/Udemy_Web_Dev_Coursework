$("document").ready(function () {
    

$("button").on("click", function () {
    
    // $("div").fadeOut(1000, function () {
    // $("div").fadeIn(1000, function () {
    $("div").fadeToggle(1000, function () {
    
    // Completely removes the divs from the html
    // $(this).remove();

    // Logs that the fade is complete
    console.log("fade completed");
    
    });

    // $("#test").slideDown();
    // $("#test").slideUp();
    $("#test").slideToggle();
})


});
