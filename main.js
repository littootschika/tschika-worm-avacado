function NPC() {
const images = [
  "docs/assets/tschika p2.png",
];
var randomIndex = Math.floor(Math.random() * images.length) +1;
var selectedImage = images[randomIndex];
document.getElementByID('P2').style.backgroundImage = "url('" + selectedImage + "')";
};
function Score() {

};
function induceRageUnfairly() {
  if Score() > 10 {
  Math.floor(math.random()*20)+1;
  let unlucky = document.createElement('p');
  let unluckyText = document.createTextNode('So, you\'ve not lost 10 times with random chance huh? That has a 1 in 0.00001693508 chance of happening, so I\'ll assume you cheated. Do you want to go to the moon?');
  unlucky.appendChild(unluckyText);
  let element = document.getElementById('vssection');
  element.appendChild(unlucky);
  };
// the stuff that the player chooses
const p1Image = document.getElementById('P1');
  
function chooseTschika() {
  p1Image.setAttribute('src','docs/assets/tschika p1.png');
};
