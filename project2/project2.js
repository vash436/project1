var randomNumber1 = Math.floor(Math.random() * 6)  +1;

var randomDiceImage = "dice"+ randomNumber1 + ".png";

var randomImageSource = "image/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "image/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

var text = document.querySelector("h1");

if(randomNumber1 > randomNumber2) {
    text.innerHTML = "Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2) {
    text.innerHTML = "Player 2 Wins!"
}
else{
    text.innerHTML = "Draw!"
}