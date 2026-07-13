
function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue < 0.33) {
        return "rock";
    } else if (randomValue < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter your choice (rock, paper, or scissors):");
    return choice ? choice.toLowerCase() : "rock"; 
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.`);
            return;
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } 
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++; 
        }
    }
    console.log("--- The Game has Started! ---");
    
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}\n`);

    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}\n`);

    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}\n`);

    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}\n`);

    playRound(getHumanChoice(), getComputerChoice());
  
    console.log(`Final Score -> You: ${humanScore} | Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log(" Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log(" The computer won. Better luck next time!");
    } else {
        console.log(" The game ended in an overall tie!");
    }
}
playGame();