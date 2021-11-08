/**Matthew Ivezaj
10/12/2020
IT413
https://github.com/mivezah/it413_mivezaj/blob/master/Week3/Week%203%20-%20JQuery%20Assignment/js/jquery_testing.js**/
$(document).ready(function() {
//Adding an image to the body.
    $("div").append("<img id=\"my_image\" src=\"images/sailboat.JPG\">");
//Styling the image. Had to make a seperate tag because nothing would go in after the append.
    $("img").css("height", "300px").css("width", "300px").css("border","dashed");
//Adding an unordered list and inserting a few bullets.
    $("body").append("<ul><li>sailboat</li><li>heading</li><li>paragraph</li></ul>");
//Giving the button a function.
    $("#effect_button").css("width", "300px").css("height","100px").click(function(){
        $("#my_image").fadeOut();
    });
//Added a button that will change the text of the h1 tag on screen to something else.
    $("#greetings_button").css("width", "300px").css("height","100px").click(function(){
        $("#Greetings").html("Good-bye everyone!");
    });
//Added a button that will change the text of the paragraphs.
    $("#paragraph_button").css("width", "300px").css("height","100px").click(function(){
        $(".normal").css("color", "red");
    });
//Added a button that will modify the text of the paragraphs.
    $("#paragraph_button").css("width", "300px").css("height","100px").click(function(){
        $("#second_paragraph").css("color", "blue").css("font-family", "Arial");
    });
    console.log("Document ready has fired")
});
    
    
    
    