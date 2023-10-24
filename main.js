function NPC() {
    const images = [
        "C:\Users\Super\OneDrive\Documents\pogramming\tschika worm avacado\tschika p2.png",
        "C:\Users\Super\OneDrive\Documents\pogramming\tschika worm avacado\worm p2.png",
    ];
    var randomIndex = Math.floor(Math.random() * images.length) +1;
    var selectedImage = images[randomIndex];
    document.getElementByID('P2').style.backgroundImage = "url('" + selectedImage + "')";
    };

function ChangeBackground() {
    const images = [
        "C:\Users\Super\OneDrive\Documents\pogramming\tschika worm avacado\turtle head and worm body soup.png",
    ];
    var randomIndex = Math.floor(Math.random() * images.length) +1;
    var selectedImage = images[randomIndex];
    document.getElementByID('body').style.backgroundImage = "url('" + selectedImage + "')";
    };  
function score() {
    
};
function induceRageUnfairly() {
      if score() > 10 {
      Math.floor(math.random()*20)+1;
      let unlucky = document.createElement('p');
      let unluckyText = document.createTextNode('So, you have not lost 10 times with random chance huh? That has a 1 in 0.00001693508 chance of happening, so you probably cheated. Do you want to go to the moon?');
      unlucky.appendChild(unluckyText);
      let element = document.getElementById('vssection');
      element.appendChild(unlucky);
      document.getElementsByTagName('body').style.display = 'none';
    };
