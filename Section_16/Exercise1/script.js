$("document").ready(function () {
    // select all divs and give them a purple background
    $("div").css("backgroundColor", "purple");
    // select the divs with class highlight and make them 200 px wid
    $(".highlight").css("width", "200px");
    // select the div with the id thid and give it an oragne border
    $("#third").css("border", "2px solid orange");
    // bonus: select the first dive only and change its font color to pink
    // $("div:nth-child(1)").css("color", "pink");
    $("div:first").css("color", "pink"); // jQuery specific first-of-type selector --slower



});