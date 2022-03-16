let wins = 0;
let compwins = 0;

const choices = ["Rock", "Paper", "Scissors"];

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", game) //playRound
});

const resdiv = document.querySelector(".results");

function addRound(outcome) {
    const round = document.createElement("p");
    round.textContent = outcome;
    resdiv.appendChild(round);
}

function updateScore() {
    document.getElementById("score").innerHTML = `Score: ${wins} : ${compwins}`;
}

function endGame() {
    let winner;
    buttons.forEach((button) => button.classList.add("disabled"))
    if (wins > compwins) {
        winner = "You";
    } else {
        winner = "Computer";
    }
    const endtext = document.createElement("p");
    console.log(winner);
    endtext.textContent = `${winner} won the game!`;
    resdiv.append(endtext);
}

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


function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let outcome = winLose(playerSelection, computerSelection);
    if(outcome === "draw") {
        addRound(`${playerSelection} draws ${computerSelection}. No winners!`);
        return "draw";
    } else if (outcome === "win") {
        addRound(`${playerSelection} beats ${computerSelection}. You win!`);
        wins+=1;
        return "win";
    } else {
        addRound(`${playerSelection} loses to ${computerSelection}. You lose!`);
        compwins+=1;
        return "lose";
    }
}

function game(e) {
    playerSelection = this.id;
    playRound(playerSelection);
    updateScore();
    if (wins >= 5 || compwins >= 5) {
        endGame();
    }
}
