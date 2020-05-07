// alert("Test");

// document.querySelector("button").addEventListener("click", handleClick);

var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);

}

function handleClick(){

    alert("I got clicked");
}

function firstSound(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}



// anonymous function example:
// document.querySelector("button").addEventListener("click", function(){
//     alert("This is an anonymous function");
// });