function NPC() {
const images = [
  "docs/assets/tschika p1.png",
  "docs/assets/tschika p2.png",
];
var randomIndex = Math.floor(Math.random() * images.length);
var selectedImage = images[randomIndex];
document.getElementByID('P2').style.backgroundImage = "url('" + selectedImage + "')";
};
};
function Score() {

};
function InduceRageUnfairly() {
  if int(Score()) > 10 {
  Math.floor(math.random()*20)+1;
  let unlucky = document.createElement('p');
  let unluckytext = document.createTextNode('So, you\'ve not lost 10 times with random chance huh? That has a 1 in 0.00001693508 chance of happening, so I\'ll assume you cheated. Do you want to go to the moon?');
  unlucky.appendChild(unluckytext);
  let element = document.getElementById('vssection');
  element.appendChild(unlucky);
  };
};
