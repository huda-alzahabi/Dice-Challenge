window.addEventListener("load", start_game, false);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function roll_dice() {
    random = getRandomInt(4);
}

function start_game() {
    var dice = document.getElementsByClassName("dice");
}