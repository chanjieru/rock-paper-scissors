function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();
    let result;
    if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            result = "win";
        } else if (computerSelection == 'Paper') {
            result = 'lose';
        } else {
            result = "draw";
        }
    } else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') {
            result = "win";
        } else if (computerSelection == 'Rock') {
            result = 'lose';
        } else {
            result = "draw";
        }
    } else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            result = "win";
        }
        else if (computerSelection == "Scissors") {
            result = 'lose';
        } else {
            result = "draw";
        }
    }
    return output(result);
  }

function output(result) {
    if (result == 'win') {
        return `You won! ${playerSelection} beats ${computerSelection}.`; 
    } else if (result == 'lose') {
        return `You lost! ${computerSelection} beats ${playerSelection}.`;
    } else if (result == 'draw') {
        return `It's a draw! You both threw ${computerSelection}.`;
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));