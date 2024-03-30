function getComputerChoice() {
  let result = ["Rock", "Paper", "Scissors"];
  return result[Math.floor(Math.random() * result.length)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "Scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "Rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "Paper")
  ) {
    return `You win this round! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "Rock") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "Paper") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "Scissors")
  ) {
    return "This round is a tie.";
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "Paper") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "Scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "Rock")
  ) {
    return `You lose this round :< ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
  } else {
    return "Invalid choice"
  }
}
