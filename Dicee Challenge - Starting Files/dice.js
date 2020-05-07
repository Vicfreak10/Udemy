
var dice1 = randomside();
var dice2 = randomside();

var diceSelect1 = "images/dice"+ dice1 + ".png";
var diceSelect2 = "images/dice"+ dice2 + ".png";

document.querySelector(".img1").setAttribute("src",diceSelect1);
document.querySelector(".img2").setAttribute("src",diceSelect2);


function randomside(){
    var num = Math.random();
    var ans = (Math.floor(num * 6)) + 1;
    return ans;
}


if(dice1 > dice2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}else if(dice2 > dice1){
    document.querySelector("h1").innerHTML = "Player 2 wins";

}else{
    document.querySelector("h1").innerHTML = "TIE";
}
// alert(diceSelect1);
// alert(diceSelect2);