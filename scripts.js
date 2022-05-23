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
    var r1 = random;
    roll_dice();
    d2[0].src = "images/dice" + random + ".png";
    var r2 = random;

    if (r1 > r2)
        document.getElementById("result").innerHTML = "&#128681 Play 1 Wins!";
    else if (r1 < r2)
        document.getElementById("result").innerHTML = "&#128681 Play 2 Wins!";
    else document.getElementById("result").innerHTML = "Draw!";
}