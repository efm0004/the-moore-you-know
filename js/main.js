/*----- constants -----*/
let deck = [
    {
        name: "card harry",
        cardImage: "TMYK-Photos/TMYK-Harry.jpg",
        cardType: "face"
    },
    {
        name: "card harry",
        cardImage: "TMYK-Photos/TMYK-nc-harry.png",
        cardType: "name"
    },
    {
        name: "card joanne",
        cardImage: "TMYK-Photos/TMYK-Joanne.jpg",
        cardType: "face"
    },
    {
        name: "card joanne",
        cardImage: "TMYK-Photos/TMYK-nc-joanne.png",
        cardType: "name"
    },
    {
        name: "card alison",
        cardImage: "TMYK-Photos/TMYK-Alison.jpg",
        cardType: "face"
    },
    {
        name: "card alison",
        cardImage: "TMYK-Photos/TMYK-nc-alison.png",
        cardType: "name"
    },
    {
        name: "card doug",
        cardImage: "TMYK-Photos/TMYK-Doug.jpg",
        cardType: "face"
    },
    {
        name: "card doug",
        cardImage: "TMYK-Photos/TMYK-nc-doug.png",
        cardType: "name"
    },
    {
        name: "card lauren",
        cardImage: "TMYK-Photos/TMYK-Lauren.jpg",
        cardType: "face"
    },
    {
        name: "card lauren",
        cardImage: "TMYK-Photos/TMYK-nc-lauren.png",
        cardType: "name"
    },
    {
        name: "card matt",
        cardImage: "TMYK-Photos/TMYK-Matt.jpg",
        cardType: "face"
    },
    {
        name: "card matt",
        cardImage: "TMYK-Photos/TMYK-nc-matt.png",
        cardType: "name"
    },
    {
        name: "card sarah",
        cardImage: "TMYK-Photos/TMYK-Sarah.jpg",
        cardType: "face"
    },
    {
        name: "card sarah",
        cardImage: "TMYK-Photos/TMYK-nc-sarah.png",
        cardType: "name"
    },
    {
        name: "card rob",
        cardImage: "TMYK-Photos/TMYK-Rob.jpg",
        cardType: "face"
    },
    {
        name: "card rob",
        cardImage: "TMYK-Photos/TMYK-nc-rob.png",
        cardType: "name"
    },
    {
        name: "card owen",
        cardImage: "TMYK-Photos/TMYK-Owen.jpg",
        cardType: "face"
    },
    {
        name: "card owen",
        cardImage: "TMYK-Photos/TMYK-nc-owen.png",
        cardType: "name"
    },
    {
        name: "card marycatherine",
        cardImage: "TMYK-Photos/TMYK-Mary-Catherine.jpg",
        cardType: "face"
    },
    {
        name: "card marycatherine",
        cardImage: "TMYK-Photos/TMYK-nc-marycatherine.png",
        cardType: "name"
    },
    {
        name: "card melissa",
        cardImage: "TMYK-Photos/TMYK-Melissa.jpg",
        cardType: "face"
    },
    {
        name: "card melissa",
        cardImage: "TMYK-Photos/TMYK-nc-melissa.png",
        cardType: "name"
    },
    {
        name: "card emily",
        cardImage: "TMYK-Photos/TMYK-Emily.jpg",
        cardType: "face"
    },
    {
        name: "card emily",
        cardImage: "TMYK-Photos/TMYK-nc-emily.png",
        cardType: "name"
    }]

    var cardBack = "TMYK-Photos/TMYK-back.png";

    var cardElements = {

    }


// var winning = [] //to figure out logic

/*----- app's state (variables) -----*/ 
let cardsInPlay = [];
let firstCard, secondCard, win;

/*----- cached element references -----*/ 
let image = document.querySelectorAll("img");


/*----- event listeners -----*/ 
document.querySelector(".board").addEventListener('click', handleClick)


/*----- functions -----*/
//init - shuffle, render, handleClick (matchFind, flipCard)
init();

function init() {
    cardsInPlay = [];
    win = null; 
    shuffle ();
    render ();
}
//shuffle - make a list of people and shuffle; 
//and render back-face cards; 
//assign the names to the imgs; 
//evt listener that does an onClick

function render() {
    
}

function shuffle () {
    var max = 24; 
    var random = [];
    for (var i = 0; i<max; i++){
        var temp = Math.floor(Math.random()*max);
        if (random.indexOf(temp) === -1){
            random.push(temp);
        } else (i--);
    }
    // const setRandomImages;
    let images = document.querySelectorAll('img.back')
    images.forEach((imageEl, index) => {
        console.log(deck[random[index]])
        // imageEl.setAttribute('src', deck[random[index]].cardImage)
        imageEl.setAttribute('class', `back ${deck[random[index]].name}`)
        console.log(imageEl);
    })
}

function handleClick(evt){
    let tClass = evt.target.className;
    if (tClass.includes("card")) {
        if (tClass.includes("back")) {
            let faceImage = getFaceImage(tClass);
            let nameImage = getNameImage(tClass);
            console.log(faceImage);
            console.log(nameImage);
        } else console.log("face up");
    }
}

function getFaceImage(tClass){ 
    //get class in card that's clicked and then change image to correct URL
    tClass = tClass.replace("back ", "")
    let personImage;
    deck.forEach(person => {
        if (person.name === tClass && person.cardType === "face")
        personImage = person.cardImage;
    }); 
    return personImage;
} 

function getNameImage(tClass){
    tClass = tClass.replace("back ", "")
    let nameImage;
    deck.forEach(person => {
        if (person.name === tClass && person.cardType === "name")
        nameImage = person.cardImage;
    }); 
    return nameImage;
}

function flipCard() {
    var cardId = this.getFaceImage(tClass);
    this.setAttribute('src', cardId);
}