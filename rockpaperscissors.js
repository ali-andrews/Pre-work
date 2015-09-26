////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove;
var computerMove;
var winner;

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.


function get PlayerMove(move) {
   if (move) {
return move ();
}else { 
return getInput();
}
}



function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}



function get ComputerMove (move) {
if (move) { 
return move ();
} else {
return RandomPlay ();
}
}




function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}




function getWinner (playerMove, computerMove) 
if (playerMove == 'rock') {
if (computerMove == 'rock') {
winner = 'tie';
} else if (computerMove == 'scissors') { 
winner = 'player';
} else { 
winner = 'computer';
}
} else if (playerMove == 'scissors') {
if (computerMove == 'rock') {
winner = 'computer';
} else if (computerMove == 'scissors') { 
winner = 'tie';
} else { 
winner = 'player';
}
} else if (playerMove == 'paper') {
if (computerMove == 'rock') {
winner = 'player';
} else if (computerMove == 'scissors') { 
winner = 'computer';
} else { 
winner = 'tie';
}
return (winner)
}
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

var playerWins = 0;
var computerWins = 0;

while (playerWins < 5 || computerWins < 5){
var playerMove = getplayerMove ();
var computerMove = getcomputerMove ();

whoWon = getWinner (playerMove, computerMove);

if (whoWon == 'player) { 
console.log ( 'player chose + playerMove' + 'and computer chose' + computer move + 'Player wins this round".) 
playerWins++;
} else if (whoWon = 'computer') {
console.log ('player chose' + playerMove + and computer chose' + computerMove + 'computer win this round');
computerWins++;
}
}
   return [playerWins, computerWins];
}





