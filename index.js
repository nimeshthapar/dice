
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
document.querySelector(".img1").setattr
var img1 = "images/dice" + randomNumber1 + ".png"
document.querySelector(".img1").setAttribute("src", img1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelector(".img1").setattr
var img2 = "images/dice" + randomNumber2 + ".png"
document.querySelector(".img2").setAttribute("src", img2);
document.querySelector(".img1").setAttribute("src", img1);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").style.textAlign = "left";
    document.querySelector("h1").textContent = "🚩 Player 1 wins";
    document.querySelector("h2").textContent = "Reload To Play Again.";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").style.textAlign = "right";
    document.querySelector("h1").textContent = "🚩 Player 2 wins";
    document.querySelector("h2").textContent = "Reload To Play Again.";
} else {
    document.querySelector("h1").style.textAlign = "center";
    document.querySelector("h1").textContent = "Draw!!";
    document.querySelector("h2").textContent = "Reload To Play Again.";
}
