
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return `It's a tie! Both chose ${playerSelection}.`;
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

const roundResultDiv = document.querySelector("#round-result");
const scoreBoardDiv = document.querySelector("#score-board");
const winnerAnnouncement = document.querySelector("#winner-announcement");
const buttons = document.querySelectorAll("#buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (playerScore >= 5 || computerScore >= 5) {
      return;
    }

    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    const resultMessage = playRound(playerSelection, computerSelection);

    roundResultDiv.textContent = resultMessage;

    scoreBoardDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    checkWinner();
  });
});

function checkWinner() {
  if (playerScore === 5) {
    winnerAnnouncement.textContent = "🎉 Congratulations! You won the game!";
    winnerAnnouncement.style.color = "green";
  } else if (computerScore === 5) {
    winnerAnnouncement.textContent = "💻 Game Over! Computer won the game!";
    winnerAnnouncement.style.color = "red";
  }
}