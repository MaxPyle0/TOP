const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

function winLose(player, computer) {
    let indnum = choices.indexOf(player) - choices.indexOf(computer);
    if(player === computer) {
        return "draw";
    } else if (indnum === 1 || indnum === -2) {
        return "win";
    } else {
        return "loss";
    }
}

function cleanUserInput(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = cleanUserInput(playerSelection);
    let outcome = winLose(playerSelection, computerSelection);
    if(outcome === "draw") {
        console.log(`${playerSelection} draws ${computerSelection}. No winners!`);
        return "draw";
    } else if (outcome === "win") {
        console.log(`${playerSelection} beats ${computerSelection}. You win!`);
        return "win";
    } else {
        console.log(`${playerSelection} loses to ${computerSelection}. You lose!`);
        return "lose";
    }
}

function game() {
    let wins = 0;
    let losses = 0;
    let round;
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = window.prompt("Please enter rock, paper or scissors");
        round = playRound(playerSelection, computerSelection);
        if (round === "win") {
            wins++;
        } else if (round === "lose") {
            losses++;
        }
    }

    console.log("Wins: " + wins + " Losses: " + losses);

    if (wins > losses) {
        console.log(`You won with ${wins} wins and ${losses} losses.`);
    } else if (losses > wins) {
        console.log(`You lost with ${wins} wins and ${losses} losses.`);
    } else if (wins === losses) {
        console.log(`You drew with ${wins} wins and losses.`);
    }
}


/*const playerSelection = "Rock";
console.log(playerSelection);
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));*/

game();