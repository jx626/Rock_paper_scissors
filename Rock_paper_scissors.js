

//Generate ComputerChoice to be paper, scissor or rock. 
let possibleComputerChoice = ["Paper","Scissor","Rock"];
let computerChoice = possibleComputerChoice[Math.floor(Math.random() * possibleComputerChoice.length)];

//Store player choice to playerChoice
let playerChoice = prompt("What is your choice, paper, scissor or rock?")

//Make playerChoice case insensitive
playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()
//Create a function singleRound() that plays a single round of the game that compares playerChoice and computerChoice.
//Return a string that declares the result of the comparison
let playerScore = 0;
let computerScore = 0;

function singleRound() {

    let playerResult;
    if ((playerChoice === "Paper" && computerChoice === "Scissor") || (playerChoice === "Scissor" && computerChoice === "Rock") || (playerChoice === "Rock" && computerChoice === "Paper")) {
        return ("You lost!");
    } 
    if ((playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissor" && computerChoice === "Paper") || (playerChoice === "Rock" && computerChoice === "Scissor")) {
        return  ("You won!");
    }
    if (playerChoice === computerChoice) {
        return  ("It's a tie!");
    }

}


if (singleRound() === "You lost!") {
    computerScore = computerScore + 1;
}

if (singleRound() === "You won!") {
    playerScore = playerScore + 1;
}

console.log(playerChoice);
console.log(computerChoice);
console.log(playerScore);
console.log(computerScore);
console.log(singleRound());

if (playerScore > computerScore) {
    console.log("You won the game!");
}

if (playerScore === computerScore) {
    console.log("It's a tie in the end.");
}

if (playerScore < computerScore) {
    console.log("You lost the game!");
}


//Create another function playGame () that calls singleRound five TimeRanges, using loop or not. 

//Store the result of each round in playerResult and computerResult

//Display playerResult and computerResult in console

//Compare playerScore and computerScore after five rounds

//Return the result of the comparison in console




