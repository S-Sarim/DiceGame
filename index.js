var p1 = Math.floor(Math.random()*6) + 1;
var p2 = Math.floor(Math.random()*6) + 1;

var diceimg1 = "dice" + p1 + ".png";
var diceimg2 = "dice" + p2 + ".png";

var imgfolder1 = "images/" + diceimg1;
var imgfolder2 = "images/" + diceimg2;


document.querySelector("img.img1").setAttribute("src", imgfolder1);
document.querySelector("img.img2").setAttribute("src", imgfolder2);

if(p1>p2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";        
}
else if(p1<p2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Refresh Me";
}



