// changing the background
function ChangeBackground() {
    const bgImages = [
        "C:\\Users\\Super\\OneDrive\\Documents\\pogramming\\tschika worm avacado\\turtle head and worm body soup.png",
    ];
    const randomBgImage = Math.floor(Math.random() * bgImages.length);
    const selectedBgImage = bgImages[randomBgImage];
    document.getElementById('body').style.selectedBgImage = "url('" + selectedBgImage + "')";
};
// making the P2 randomly choose something
function Bot() {
    const images = [
        "C:\\Users\\Super\\OneDrive\\Documents\\pogramming\\tschika worm avacado\\tschika p2.png",
        "C:\\Users\\Super\\OneDrive\\Documents\\pogramming\\tschika worm avacado\\worm p2.png",
        "C:\\Users\\Super\\OneDrive\\Documents\\pogramming\\tschika worm avacado\\avacado dragon p2.png",
    ];
    const randomImage = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomImage];
    document.getElementById('P2').src = selectedImage;
};
//making the score up and down and also the outcomes when game start and stuff
function score() {
    let n = 0;
    let message = document.createElement('p');
    message.setAttribute('id', 'msg');
// check if P1 is tschika and it's outcomes
    if (document.getElementById('P1').src == "C:\\Users\\Super\\OneDrive\\Documents\\pogramming\\tschika worm avacado\\tschika p2.png") {
        if (document.getElementById('P2').src == "C:\\Users\\Super\\OneDrive\\Documents\\pogramming\\tschika worm avacado\\worm p2.png") {
            let n = n+1;
            document.getElementById('msg').innerHTML('Tschika is victorious!!!');
            document.getElementById('scorecounter').innerHTML('Score:' + n.toString());
        } else if (document.getElementById('P2').src == "C:\\Users\\Super\\OneDrive\\Documents\\pogramming\\tschika worm avacado\\avacado dragon p2.png") {
            let n = n-1;
            document.getElementById('msg').innerHTML('NOOOO! LITTOO TSCHIKA HAD A FAMILY TOO FEED!');
            document.getElementById('scorecounter').innerHTML('Score:' + n.toString());
        } else {
            let n = n;
            document.getElementById('msg').innerHTML('You drawed. Is it a 2 of clubs?');
            document.getElementById('scorecounter').innerHTML('Score:' + n.toString());
        }
    }
    // check if P1 is worm
    else if (document.getElementById('P1').src == "C:\\Users\\Super\\OneDrive\\Documents\\pogramming\\tschika worm avacado\\worm p2.png") {
        if (document.getElementById('P2').src == "C:\\Users\\Super\\OneDrive\\Documents\\pogramming\\tschika worm avacado\\avacado dragon p2.png") {
            let n = n+1;
            document.getElementById('msg').innerHTML('Worm is victorious!!!');
            document.getElementById('scorecounter').innerHTML('Score:' + n.toString());
        } else if (document.getElementById('P2').src == "C:\\Users\\Super\\OneDrive\\Documents\\pogramming\\tschika worm avacado\\tschika p2.png") {
            let n = n-1;
            document.getElementById('msg').innerHTML('You hear voices- "Traditional chickenese spaghetti is served with worm noodles- UWU!"');
            document.getElementById('scorecounter').innerHTML('Score:' + n.toString());
        } else {
            let n = n;
            document.getElementById('msg').innerHTML('WORM PARTY!!! ');
            document.getElementById('scorecounter').innerHTML('Score:' + n.toString());
        }
    }
    //check if P1 is avacado dragon
    else if (document.getElementById('P1').src == "C:\\Users\\Super\\OneDrive\\Documents\\pogramming\\tschika worm avacado\\avacado dragon p2.png") {
        if (document.getElementById('P2').src == "C:\\Users\\Super\\OneDrive\\Documents\\pogramming\\tschika worm avacado\\tschika p2.png") {
            let n = n+1;
            document.getElementById('msg').innerHTML('Avacado is victorious!!!');
            document.getElementById('scorecounter').innerHTML('Score:' + n.toString());
        } else if (document.getElementById('P2').src == "C:\\Users\\Super\\OneDrive\\Documents\\pogramming\\tschika worm avacado\\worm p2.png") {
            let n = n-1;
            document.getElementById('msg').innerHTML('I wonder if worms are herbivores or omnivores... I also wonder if I\'m meat or vegetable... I wondeer if- *Silence- the worm has eaten the avacado\'s mouth off*');
            document.getElementById('scorecounter').innerHTML('Score:' + n.toString());
        } else {
            let n = n;
            document.getElementById('msg').innerHTML('"We\'re both supposed to be crocodiles, right?"- Avacado dragons');
            document.getElementById('scorecounter').innerHTML('Score:' + n.toString());
        }
    }
    else {
        alert('CHOOSE A SOMETHING YOU IDIOT');
        document.getElementsByClassName('choosebutton').style.border = "3px solid red";
    }
};
function induceRageUnfairly() {
    if (score > 10) {
    Math.floor(math.random()*20)+1;
    let msg = document.createElement('p');
    let unluckyText = document.createTextNode('So, you have not lost 10 times with random chance huh? That has a 1 in 0.00001693508 chance of happening, so you probably cheated. Do you want to go to the moon?');
    msg.appendChild(unluckyText);
    document.getElementById('vssection').appendChild(msg);
    document.getElementsById('body').style.display = 'none';
};
};
