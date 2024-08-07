const gameResult = document.querySelector('#gameresult');
const player1Image = document.querySelector('#player1');
const player2Image = document.querySelector('#player2');
const resultCount = document.querySelector('#resultCounter');
const scoreCount = document.querySelector('#scoreCounter');
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
}, 50, 50);
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
    if (player1Image.src.includes('docs/assets/')){
        resultMessages();
    } else {
        alert("You have to choose something, idiot. \n also, this is the Most you will get by selecting nothing and trying to play...\n but have you thought of what the LEAST was? (it won\'t benifit you, so don\'t try)");
        let SecretChance1 = Math.floor(Math.random()*69);
        if (SecretChance1 == 69){
            alert('this is the LEAST you could\'ve gotten from not choosing anythign and trying to play. Congradulations for finding this secret. The chance of you gettingt this is one in 69');
        }
    }
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
            "https://littootschika.github.io/tschika-worm-avacado/docs/assets/tschika%20p1.png"  : {
                "https://littootschika.github.io/tschika-worm-avacado/docs/assets/worm%20p2.png" : {result: "win", winstreak: 1},
                "https://littootschika.github.io/tschika-worm-avacado/docs/assets/avacado%20dragon%20p2.png": {result: "lose", winstreak: -1},
                "https://littootschika.github.io/tschika-worm-avacado/docs/assets/tschika%20p2.png" : {result: "draw", winstreak: 0}
            },
            "https://littootschika.github.io/tschika-worm-avacado/docs/assets/worm%20p1.png" : {
                "https://littootschika.github.io/tschika-worm-avacado/docs/assets/worm%20p2.png" : {result: "draw", winstreak: 0},
                "https://littootschika.github.io/tschika-worm-avacado/docs/assets/avacado%20dragon%20p2.png" : {result: "win", winstreak: 1},
                "https://littootschika.github.io/tschika-worm-avacado/docs/assets/tschika%20p2.png" : {result: "lose", winstreak: -1}
            },
            "https://littootschika.github.io/tschika-worm-avacado/docs/assets/avacado%20dragon%20p1.png" : {
                "https://littootschika.github.io/tschika-worm-avacado/docs/assets/worm%20p2.png" : {result: "lose", winstreak: -1},
                "https://littootschika.github.io/tschika-worm-avacado/docs/assets/avacado%20dragon%20p2.png" : {result: "draw", winstreak: 0},
                "https://littootschika.github.io/tschika-worm-avacado/docs/assets/tschika%20p2.png" : {result: "win", winstreak: 1}
            },
            "null":{
                "null" : {result: "something is wrong", winstreak: -69}
            }
        };
    let outcome = outcomes?.[player1Image.src]?.[player2Image.src] || "didnt work";
    resultCount.innerHTML = outcome?.result;
    winstreak += outcome?.winstreak;
    scoreCount.innerHTML = `Amount of wins: ${winstreak}`;
}
