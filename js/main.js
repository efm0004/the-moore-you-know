/*----- constants -----*/
let deck = [
    {
        name: "card harry",
        cardImage: "TMYK-Photos/TMYK-Harry.jpg"
    },
    {
        name: "card harry",
        cardImage: "TMYK-Photos/TMYK-nc-harry.png"
    },
    {
        name: "card joanne",
        cardImage: "TMYK-Photos/TMYK-Joanne.jpg"
    },
    {
        name: "card joanne",
        cardImage: "TMYK-Photos/TMYK-nc-joanne.png"
    },
    {
        name: "card alison",
        cardImage: "TMYK-Photos/TMYK-Alison.jpg"
    },
    {
        name: "card alison",
        cardImage: "TMYK-Photos/TMYK-nc-alison.png"
    },
    {
        name: "card doug",
        cardImage: "TMYK-Photos/TMYK-Doug.jpg"
    },
    {
        name: "card doug",
        cardImage: "TMYK-Photos/TMYK-nc-doug.png"
    },
    {
        name: "card lauren",
        cardImage: "TMYK-Photos/TMYK-Lauren.jpg"
    },
    {
        name: "card lauren",
        cardImage: "TMYK-Photos/TMYK-nc-lauren.png"
    },
    {
        name: "card matt",
        cardImage: "TMYK-Photos/TMYK-Matt.jpg"
    },
    {
        name: "card matt",
        cardImage: "TMYK-Photos/TMYK-nc-matt.png"
    },
    {
        name: "card sarah",
        cardImage: "TMYK-Photos/TMYK-Sarah.jpg"
    },
    {
        name: "card sarah",
        cardImage: "TMYK-Photos/TMYK-nc-sarah.png"
    },
    {
        name: "card rob",
        cardImage: "TMYK-Photos/TMYK-Rob.jpg"
    },
    {
        name: "card rob",
        cardImage: "TMYK-Photos/TMYK-nc-rob.png"
    },
    {
        name: "card owen",
        cardImage: "TMYK-Photos/TMYK-Owen.jpg"
    },
    {
        name: "card owen",
        cardImage: "TMYK-Photos/TMYK-nc-owen.png"
    },
    {
        name: "card marycatherine",
        cardImage: "TMYK-Photos/TMYK-Mary-Catherine.jpg"
    },
    {
        name: "card marycatherine",
        cardImage: "TMYK-Photos/TMYK-nc-marycatherine.png"
    },
    {
        name: "card melissa",
        cardImage: "TMYK-Photos/TMYK-Melissa.jpg"
    },
    {
        name: "card melissa",
        cardImage: "TMYK-Photos/TMYK-nc-melissa.png"
    },
    {
        name: "card emily",
        cardImage: "TMYK-Photos/TMYK-Emily.jpg"
    },
    {
        name: "card emily",
        cardImage: "TMYK-Photos/TMYK-nc-emily.png"
    }]

let deckTwo = [
    {
        name: "card charlotte",
        cardImage: "TMYK-Photos/TMYK-Charlotte.jpg"
    },
    {
        name: "card charlotte",
        cardImage: "TMYK-Photos/TMYK-nc-charlotte.png"
    },
    {
        name: "card douglascharles",
        cardImage: "TMYK-Photos/TMYK-Douglas-Charles.jpg"
        },
        {
            name: "card douglascharles",
            cardImage: "TMYK-Photos/TMYK-nc-douglascharles.png"
        },
        {
            name: "card adeline",
            cardImage: "TMYK-Photos/TMYK-Adeline.jpg"
        },
        {
            name: "card adeline",
            cardImage: "TMYK-Photos/TMYK-nc-adeline.png"
        },
        {
            name: "card leahcate",
            cardImage: "TMYK-Photos/TMYK-Leah-Cate.jpg"
        },
        {
            name: "card leahcate",
            cardImage: "TMYK-Photos/TMYK-nc-leahcate.png"
        },
        {
            name: "card audrey",
            cardImage: "TMYK-Photos/TMYK-Audrey.jpg"
        },
        {
            name: "card audrey",
            cardImage: "TMYK-Photos/TMYK-nc-audrey.png"
        },
        {
            name: "card flannery",
            cardImage: "TMYK-Photos/TMYK-Flannery.jpg"
        },
        {
            name: "card flannery",
            cardImage: "TMYK-Photos/TMYK-nc-flannery.png"
        },
        {
            name: "card molly",
            cardImage: "TMYK-Photos/TMYK-Molly.jpg"
        },
        {
            name: "card molly",
            cardImage: "TMYK-Photos/TMYK-nc-molly.png"
        },
        {
            name: "card matelda",
            cardImage: "TMYK-Photos/TMYK-Matelda.jpg"
        },
        {
            name: "card matelda",
            cardImage: "TMYK-Photos/TMYK-nc-matelda.png"
        },
        {
            name: "card bo",
            cardImage: "TMYK-Photos/TMYK-Bo.jpg"
        },
        {
            name: "card bo",
            cardImage: "TMYK-Photos/TMYK-nc-bo.png"
        },
        {
            name: "card brandon",
            cardImage: "TMYK-Photos/TMYK-Brandon.jpg"
        },
        {
            name: "card brandon",
            cardImage: "TMYK-Photos/TMYK-nc-brandon.png"
        },
        {
            name: "card ben",
            cardImage: "TMYK-Photos/TMYK-Ben.jpg"
        },
        {
            name: "card ben",
            cardImage: "TMYK-Photos/TMYK-nc-ben.png"
        },
        {
            name: "card brody",
            cardImage: "TMYK-Photos/TMYK-Brody.jpg"
        },
        {
            name: "card brody",
            cardImage: "TMYK-Photos/TMYK-nc-brody.png"
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

/*----- app's state (variables) -----*/ 
let cardsInPlay = [];
let random = [];
let playerArr = [];
let win, level, elTime;
let mFound = false;

//timer
var minutes = 0;
var seconds = 0;

//score 
var x = 0;
let highest = [0];

/*----- cached element references -----*/ 
let image = document.querySelectorAll('img');
let board = document.querySelector('.board'); 
let msgEl = document.getElementById('msg');
var elMin = document.getElementById('timer');
let elX = document.getElementById('current');
let elHighest = document.getElementById('highscore');
let reset = document.getElementById('reset');

/*----- event listeners -----*/ 
board.addEventListener('click', handleClick);
reset.addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
    clearInterval(elTime);
    elTime = setInterval(incrementSeconds, 1000);
    cardsInPlay = [];
    playerArr = [];
    random = [];
    mFound = false;
    win = 0;
    minutes = 0;
    seconds = 0;
    level = 1;
    elX.innerText = 0;
    x = 0; 
    shuffle ();
    render ();
    msgEl.innerText = "Level One";
}

function initLevelTwo() {  
    random = [];
    shuffle ();
    render ();
    msgEl.innerText = "Level Two";  
}

function render() {
    board.innerHTML = "";
    random.forEach(function(el, idx) {
    let img = document.createElement('img');
    img.setAttribute('class', `card`);
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
    } 
    if (level === 1) {
    let images = document.querySelectorAll('img.card')
    images.forEach((imageEl, index) => {
        imageEl.setAttribute('class', `card ${deck[random[index]].name}`)
        })
    } else if (level === 2) {
        let images = document.querySelectorAll('img.card')
        images.forEach((imageEl, index) => {
        imageEl.setAttribute('class', `card ${deckTwo[random[index]].name}`)
        })
    }
}

function handleClick(evt){
    var evtTarget = evt.target;
    if (level === 1) {
        evtTarget.setAttribute('src', `${deck[evt.target.id].cardImage}`);
    } 
    if (level === 2) {
        evtTarget.setAttribute('src', `${deckTwo[evt.target.id].cardImage}`);
    }
    cardsInPlay.push({id:evt.target.id, src: evt.target.src});
    playerArr.push(parseInt(evt.target.id));
    setTimeout(getMatch, 500);
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
                msgEl.textContent = "O - you're gonna - wen!";
                playerArr.length = 0;    
                cardsInPlay.length = 0;
                mFound = true;
            } 
        }
            if(!mFound) {
                msgEl.textContent = "Things are getting Harry!";
                document.getElementById(cardsInPlay[0].id)
                    .setAttribute('src', `${cardBack}`);
                document.getElementById(cardsInPlay[1].id)
                    .setAttribute('src', `${cardBack}`);
                playerArr.length = 0;
                cardsInPlay.length = 0;
            } 
            if (mFound) {
                win += 1;
                currentScore();
            }
        mFound = false; 
    }
    addScore();
}

function addScore(){
    if (level === 1) {
        getWinnerLevelOne();
    } else {
        getWinnerLevelTwo();
    }
}

function getWinnerLevelOne(){
    if (win === 12) {
        level += 1;
        initLevelTwo();
    }
}

function getWinnerLevelTwo() {
    if (win === 24) {
        msgEl.textContent = "You know your Moore's!";
        clearInterval(elTime);
        endScore();
        highScore();
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
    let y = 0;
    if (y < x) {
        highest.push(x);
        y = Math.max(...highest);
        elHighest.innerText = y;
    }
}