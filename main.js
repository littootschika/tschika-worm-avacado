const gameResult = document.querySelector('#gameresult');
const player1Image = document.querySelector('#player1');
const player2Image = document.querySelector('#player2');
const scoreCount = document.querySelector('#scorecounter');
const botBackground = document.querySelector('#matrixTextBackground');
const matrixText = document.querySelectorAll('.matrixText');
const characters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
const chooseButtons = document.querySelectorAll('.choosebutton');
let winstreak = 0;
chooseButtons[0].addEventListener('click', () => player1Image.src = "docs/assets/tschika\ p1.png");
chooseButtons[1].addEventListener('click', () => player1Image.src = "docs/assets/worm\ p1.png");
chooseButtons[2].addEventListener('click', () => player1Image.src = "docs/assets/avacado\ dragon\ p1.png");
document.querySelector('#startbutton').addEventListener('click', bot);
//i didnt steal, i took inspiration off someone
function setIntervalX(callback, delay, repetitions) {
    let x = 0;
    let intervalID = window.setInterval(function () {
        callback();
        if (++x === repetitions) {
            window.clearInterval(intervalID);
        }
    }, delay);
}
setIntervalX(function () {
    matrixTextMaker(Math.random());
}, 50, 75);
//making the player2 randomly choose something
function bot(){
    const images = [
        "docs/assets/tschika\ p2.png",
        "docs/assets/worm\ p2.png",
        "docs/assets/avacado\ dragon\ p2.png"
    ];
    let randomImage = Math.floor(Math.random() * images.length);
    let selectedImage = images[randomImage];
    player2Image.src = selectedImage;
    resultMessages();
}
const matrixTextMaker = right => {
    const singleText = document.createElement('p');
    singleText.style.right = 10+right*30+ 'vw';
    singleText.setAttribute('class', 'matrixText');
    botBackground.appendChild(singleText);
    setInterval(() => {singleText.innerHTML = characters[Math.floor(Math.random()*characters.length)]}, 325);
}
//making the score up and down and also the outcomes when game start and stuff
function resultMessages() {
    const outcomes = {
            "docs/assets/tschika p1.png" : {
                "docs/assets/worm p2.png": {result: "win", winstreak: 1},
                "docs/assets/avacado dragon p2.png": {result: "lose", winstreak: -1},
                "docs/assets/tschika p1.png": {result: "draw", winstreak: 0}
            },
            "docs/assets/worm p2.png": {
                "docs/assets/worm p2.png": {result: "draw", winstreak: 0},
                "docs/assets/avacado dragon p2.png": {result: "win", winstreak: 1},
                "docs/assets/tschika p2.png": {result: "lose", winstreak: -1}
            },
            "docs/assets/avacado dragon p2.png": {
                "docs/assets/worm p2.png": {result: "lose", winstreak: -1},
                "docs/assets/avacado dragon p2.png": {result: "draw", winstreak: 0},
                "docs/assets/tschika p2.png": {result: "win", winstreak: 1}
            }
        };
    let outcome = outcomes?.[player1Image.src]?.[player2Image.src] || "didnt work";
    console.log(outcome);
    scoreCount.innerHTML = outcome?.result;
    winstreak += outcome?.winstreak;
    scoreCount.innerHTML += ` Wins: ${winstreak}`;
}
