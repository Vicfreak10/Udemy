// alert("Test");

// document.querySelector("button").addEventListener("click", handleClick);

var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);

}



function handleClick(){
    alert("I got clicked");
}

// anonymous function example:
// document.querySelector("button").addEventListener("click", function(){
//     alert("This is an anonymous function");
// });


document.addEventListener("keypress", function(event){
    var keyLetter = event.code;
    var calledKey = keyLetter.substring(keyLetter.length - 1).toLowerCase();
    var soundName = "";
    if(calledKey === "w"){
        soundName = "crash.mp3"
    } else if(calledKey === "a"){
        soundName = "kick-bass.mp3"

    } else if(calledKey === "s"){
        soundName = "snare.mp3"

    } else if(calledKey === "d"){
        soundName = "tom-1.mp3"

    } else if(calledKey === "j"){
        soundName = "tom-2.mp3"

    } else if(calledKey === "k"){
        soundName = "tom-3.mp3"

    } else if(calledKey === "l"){
        soundName = "tom-4.mp3"

    }
    var audio = new Audio("sounds/" + soundName);
    audio.play();


    // console.log(calledFunctionName);

    
});
