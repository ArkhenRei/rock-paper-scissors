const roundWinner = document.querySelector(".winner");
const gameWinner = document.querySelector(".gameWinner");
const score = document.querySelector(".score");
const player = document.querySelector(".player-score")
const computer = document.querySelector(".computer-score")
const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", (event) => {
  playRound("rock", getComputerChoice())
});

paper.addEventListener("click", (event) => {
  playRound("paper", getComputerChoice())
});

scissors.addEventListener("click", (event) => {
  playRound("scissors", getComputerChoice())
});

function getComputerChoice() {
  let result = ["Rock", "Paper", "Scissors"];
  return result[Math.floor(Math.random() * result.length)];
}

function playRound(playerSelection, computerSelection) {
  gameWinner.textContent = "";
  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "Scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "Rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "Paper")
  ) {
    roundWinner.textContent = `You win this round! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    playerScore++;
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "Rock") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "Paper") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "Scissors")
  ) {
    roundWinner.textContent =  "This round is a tie.";
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "Paper") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "Scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "Rock")
  ) {
    roundWinner.textContent = `You lose this round :< ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    computerScore++;
  } else {
    roundWinner.textContent = "Invalid choice";
  }

  if(playerScore >= 5) {
    gameWinner.textContent = "PLAYER WINS!";
    playerScore = 0;
    computerScore = 0;
  }
  if(computerScore >= 5) {
    gameWinner.textContent = "COMPUTER WINS!";
    playerScore = 0;
    computerScore = 0;
  }

  player.textContent = `${playerScore}`;
  computer.textContent = `${computerScore}`;
}
