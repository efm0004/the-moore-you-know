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

//score constants
var x = 0;

/*----- app's state (variables) -----*/ 
let cardsInPlay = [];
let random = [];
let playerArr = [];
let win;
let mFound = false;
// let level = 1;
let highest = 0;

/*----- cached element references -----*/ 
let image = document.querySelectorAll("img");
let board = document.querySelector('.board'); 
let msgEl = document.getElementById('msg');
var elMin = document.getElementById('timer');
let elX = document.getElementById('current');
let elHighest = document.getElementById('highscore');

/*----- event listeners -----*/ 
board.addEventListener('click', handleClick);


/*----- functions -----*/
init();

function init() {
    cardsInPlay = [];
    win = 0; 
    shuffle ();
    render ();
    msgEl.innerText = "Level One"
}

// function initLevelTwo() {
//     cardsInPlay = [],
//     win = 0
//     shuffle ();
//     render ();
//     msgEl.innerText = "Level Two";
// }

function render() {
    random.forEach(function(el, idx) {
        let img = document.createElement('img');
        img.setAttribute('class', `back card face`);
        img.setAttribute('src', 'TMYK-Photos/TMYK-back.png');
        img.setAttribute('id', `${el}`);
        board.appendChild(img);
    })
}

//do some testing on this function
function shuffle () {
    var max = 24; 
    for (var i = 0; i<max; i++){
        var temp = Math.floor(Math.random()*max);
        if (random.indexOf(temp) === -1){
            random.push(temp);
        } else (i--);
    } 
    // if (level = 1) {
    let images = document.querySelectorAll('img.back')
    images.forEach((imageEl, index) => {
        imageEl.setAttribute('class', `back ${deck[random[index]].name}`)
    // })
// } else if (level = 2) {
//     let images = document.querySelectorAll('img.back')
//     images.forEach((imageEl, index) => {
//         imageEl.setAttribute('class', `back ${deckTwo[random[index]].name}`)
//     })
    })
}

function handleClick(evt){
    var evtTarget = evt.target;
    // if (level === 1) {
        evtTarget.setAttribute('src', `${deck[evt.target.id].cardImage}`);
    // } else if (level === 2) {
    //     evtTarget.setAttribut('src', `${deckTwo[evt.target.id].cardImage}`);
    // }
    cardsInPlay.push({id:evt.target.id, src: evt.target.src});
    playerArr.push(parseInt(evt.target.id));
    setTimeout(getMatch, 1000);
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
            if (mFound) {
                win += 1;
                currentScore ();
            }
        mFound = false; 
    }
    getWinner();
}

function getWinner(){
    if (win === 12) {
        msgEl.textContent = "You won!"
        clearInterval(cancel);
        endScore();
        highScore();
        // level +=1;
    }
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

//score functions

function endScore(){
    if (minutes < 1) {
        x += 2000;
    } else if (minutes < 2) {
        x += 1500;
    } else if (minutes < 3) {
        x += 1000;
    } else if (minutes < 4) {
        x += 750;
    } else if (minutes < 5) {
        x += 500;
    } else if (minutes < 10) {
        x += 100;
    } else {
        x += 0;
    } 
    elX.innerText = x;
}

function currentScore() {
    x = win*10;
    elX.innerText = x
}

function highScore() {
    if (highest < x) {
        elHighest.innerText = x;
    } else {
        elHighest.innerText = highest;
    }
}