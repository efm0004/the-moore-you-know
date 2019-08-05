Objective
To create a memory game to assist in the mental recall of faces and names - specifically to the Moore Family. 

Technology used
This game has been made using HTML, CSS, and Javascript. 

Wireframe
https://wireframe.cc/2IcMyo

User stories
Name: Daniel
Age: 28
Reason for playing game: Newly introduced into the family. Confused by all family members looking similar. Needs to practice facial recognition to make sure that he doesn't accidently call the sister-in-law by the name of the sister she doesn't like. 

Name: Leah Cate
Age: 8
Reason for playing game: Current member of Moore family. Often confused due to the number of aunts, uncles, and cousins on both sides of the family and wants to know more specifically how she is related to all these people. 

Name: Elizabeth
Age: 32
Reason for playing game: Long-time family friend of the Moores. However, with all the grandchildren and marriages, she wants to make sure she can keep up with all the new faces. 

Features list
4x6 card deck - when clicked card will "turn over" to reveal a name or a face. You must try to find the name/face match. 
Current score - will add up the points for each successful match. 
Level - will let you know what level you are on, goal is 3 levels. 
Timer - will time your attempts and add to score based on how quickly you complete the level. 
High score - will add high score for the instance that has the highest amount of points

Stretch goals
Hint button - this button will help you find a match if you're stuck
Make your own - this button will allow you to upload your own pictures/names to create this game for your own family. 

Psuedocode
Psuedocode:
Define required constants. 
    Define an object array for the cards
Define required variables used to track the state of the game. 
Store elements that will be accessed in code more than once in variables to make the code more concise, readable, and performant. 
Upon loading the page should:
    Render the board.
    Start the timer.
Handle player clicking a card. 
Handle player finding a match (or failing to find a match). 
Handle the player completing a level. 
Handle the timer. 
Handle the high score. 
Handle the make your own button. 
