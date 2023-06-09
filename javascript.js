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
        return `You won! ${playerSelection} beats ${computerSelection}.`; 
    } else if (result == 'lose') {
        return `You lost! ${computerSelection} beats ${playerSelection}.`;
    } else if (result == 'draw') {
        return `It's a draw! You both threw ${computerSelection}.`;
    }
}

function game() {
    let wins = 0;
    let losses = 0;
    for (i = 1; i <= 5; i++) {
        const playerSelection = prompt("Enter you choice: Rock, Paper or Scissors");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(output(result, playerSelection, computerSelection));
        if (result == 'win') {
            wins += 1;
        } else if (result == 'lose') {
            losses += 1;
        }
    }
    if (wins > losses) {
        console.log("Game over. You won!");
    } else if (losses > wins) {
        console.log("Game over. You lost:(");
    } else if (losses == wins) {
        console.log("Game over. It's a draw!");
    }
}

console.log(game());

