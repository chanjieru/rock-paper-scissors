let playerWins = 0;
let computerWins = 0;

const body = document.querySelector('body');
const display = document.createElement('div');
const results = document.createElement('div');
const scores = document.createElement('div');
const playerScore = document.createElement('div');
const computerScore = document.createElement('div');
results.classList.add('text');
display.classList.add('display');
scores.classList.add('score-container');
scores.classList.add('text');
const playAgain = document.createElement('button');
playAgain.textContent = "Play Again";

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(playerSelection =>
    playerSelection.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection.id, computerSelection);
        results.textContent = output(result, playerSelection, computerSelection);
        display.appendChild(results);
        updateScore(result);
    })
);

function updateScore(result) {
    if (result == 'win') {
        playerWins += 1;
    } else if (result == 'lose') {
        computerWins += 1;
    }
    playerScore.textContent = `Your score: ${playerWins}`;
    scores.appendChild(playerScore);
    computerScore.textContent = `Computer's score: ${computerWins}`;
    scores.appendChild(computerScore);
    results.appendChild(scores);
    endGame();
}

function endGame() {
    if (playerWins >= 5) {
        results.textContent = "Congratulations, you won!";
        display.appendChild(playAgain);
    } else if (computerWins >= 5) {
        results.textContent = "Game over. You lost :(";
        display.appendChild(playAgain)
    }
}

playAgain.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;
    results.textContent = '';
    display.removeChild(playAgain);
})

body.appendChild(display);

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
    return result;
}

function output(result, playerSelection, computerSelection) {
    if (result == 'win') {
        return `You won! ${playerSelection.id} beats ${computerSelection}.`; 
    } else if (result == 'lose') {
        return `You lost! ${computerSelection} beats ${playerSelection.id}.`;
    } else if (result == 'draw') {
        return `It's a draw! You both threw ${computerSelection}.`;
    }
}