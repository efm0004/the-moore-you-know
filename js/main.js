/*----- constants -----*/
const deck = document.querySelectorAll(".card");

// var winning = [] //to figure out logic

/*----- app's state (variables) -----*/ 
let firstCard, secondCard; 
let flippedCard = false;

/*----- cached element references -----*/ 

/*----- event listeners -----*/ 
deck.forEach(card =>
    card.addEventListener("click", flipCard));


/*----- functions -----*/
//init - shuffle, render, handleClick (matchFind, flipCard)
// function init() {

// }

// function render() {

// }

function flipCard(){
    this.classList.toggle("flip");
    //if flippedCard = true (must change when "flip" is present), look for match via class
    console.log("I was clicked!")
} 

