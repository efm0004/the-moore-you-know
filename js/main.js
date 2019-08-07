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

    // var cardElements = {

    // }


var matches = [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11],
    [12, 13],
    [14, 15],
    [16, 17],
    [18, 19],
    [20, 21],
    [22, 23],
]
//timer constants
var minutes = 0;
var seconds = 0;

/*----- app's state (variables) -----*/ 
let cardsInPlay = [];
let random = [];
let playerArr = [];
let win;
let mFound = false;

/*----- cached element references -----*/ 
let image = document.querySelectorAll("img");
let board = document.querySelector('.board'); 
let msgEl = document.getElementById('msg');
var elMin = document.getElementById('timer');

/*----- event listeners -----*/ 
board.addEventListener('click', handleClick);


/*----- functions -----*/
init();

function init() {
    cardsInPlay = [];
    win = 0; 
    shuffle ();
    render ();
}

function render() {
    //create an image tag; give tag scr of back; give it class attribute for first
    //argument, and then class attribute as second argument
    random.forEach(function(el, idx) {
        let img = document.createElement('img');
        img.setAttribute('class', `back card face`);
        img.setAttribute('src', 'TMYK-Photos/TMYK-back.png');
        img.setAttribute('id', `${el}`);
        board.appendChild(img);
    })
}

function shuffle () {
    var max = 24; 
    for (var i = 0; i<max; i++){
        var temp = Math.floor(Math.random()*max);
        if (random.indexOf(temp) === -1){
            random.push(temp);
        } else (i--);
    } console.log(random);
    // const setRandomImages;
    let images = document.querySelectorAll('img.back')
    images.forEach((imageEl, index) => {
        // console.log(deck[random[index]])
        // imageEl.setAttribute('src', deck[random[index]].cardImage)
        imageEl.setAttribute('class', `back ${deck[random[index]].name}`)
        // console.log(imageEl);
    })
}

function handleClick(evt){
    var evtTarget = evt.target;
    console.log(evt.target.id);
    evtTarget.setAttribute('src', `${deck[evt.target.id].cardImage}`);
    cardsInPlay.push({id:evt.target.id, src: evt.target.src});
    playerArr.push(parseInt(evt.target.id));
    getMatch(); //need to find a way to delay this - the second cardsInPlay value doesn't change image
}

function checkMatch(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i])
            return false
    }
    return true;
}

function getMatch() {
    if (playerArr.length === 2) {
        playerArr.sort((a, b) => a - b);
        for (let i = 0; i < matches.length; i++ ) {
            if (checkMatch (playerArr, matches[i])){
                msgEl.textContent = 'You found a match!';
                playerArr.length = 0;    
                cardsInPlay.length = 0;
                console.log(cardsInPlay);
                win += 1; 
                mFound = true;
        } 
        }
            if(!mFound) {
            msgEl.textContent = 'Sorry, try again!';
            document.getElementById(cardsInPlay[0].id)
                .setAttribute('src', `${cardBack}`);
            document.getElementById(cardsInPlay[1].id)
                .setAttribute('src', `${cardBack}`);
            playerArr.length = 0;
            cardsInPlay.length = 0;
            } 
        mFound = false; 
    }
    getWinner();
}

function getWinner(){
    if (win === 78) 
        msgEl.textContent = "You won!"
}

//timer functions

function incrementSeconds() {
    seconds += 1;
    incrementMinutes();
}

function incrementMinutes() {
  if (seconds === 60) {
    minutes +=1; 
    seconds = 0;
  } 
  if (seconds < 10) {
    elMin.innerText = minutes + ":0" + seconds;
  } else {
    elMin.innerText = minutes + ":" + seconds;
  }
}

var cancel = setInterval(incrementSeconds, 1000);

