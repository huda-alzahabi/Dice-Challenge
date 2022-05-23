window.addEventListener("load", start_game, false);

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function roll_dice() {
    random = getRandomNumberBetween(1, 6);
}

function start_game() {
    var d1 = document.getElementsByClassName("img1");
    var d2 = document.getElementsByClassName("img2");
    roll_dice();
    d1[0].src = "images/dice" + random + ".png";
    roll_dice();
    d2[0].src = "images/dice" + random + ".png";
}