

//Generate ComputerChoice to be paper, scissor or rock. 

//Store player choice to playerChoice

//Make playerChoice case insensitive

//Return a string that declares the result of the comparison
let playerScore = 0;
let computerScore = 0;
let possibleComputerChoice = ["Paper","Scissor","Rock"];

function singleRound() {
    let computerChoice = possibleComputerChoice[Math.floor(Math.random() * possibleComputerChoice.length)]; 
    let playerChoice = prompt("What is your choice, paper, scissor or rock?")
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()
    let playerResult;
    if ((playerChoice === "Paper" && computerChoice === "Scissor") || (playerChoice === "Scissor" && computerChoice === "Rock") || (playerChoice === "Rock" && computerChoice === "Paper")) {
        playerResult = "You lost!";
        console.log (playerResult);
    } 
    if ((playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissor" && computerChoice === "Paper") || (playerChoice === "Rock" && computerChoice === "Scissor")) {
        playerResult = "You won!";
        console.log (playerResult);
    }
    if (playerChoice === computerChoice) {
        playerResult = "It's a tie!";
        console.log (playerResult);
    }
    if (playerResult === "You lost!") {
        computerScore = computerScore + 1;
    } 
    else if (playerResult === "You won!") {
        playerScore = playerScore + 1;
    }
}

function playGame() {
    singleRound();
    singleRound();
    singleRound();
    singleRound();
    singleRound();
}

playGame();

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