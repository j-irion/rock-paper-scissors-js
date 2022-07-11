let btnRock = document.getElementById("btn-rock");
let btnPaper = document.getElementById("btn-paper");
let btnScissors = document.getElementById("btn-scissors");
let textOutput = document.getElementById("text-output");
let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener("click", () => {
  playRound("rock", computerPlay());
});

btnPaper.addEventListener("click", () => {
  playRound("paper", computerPlay());
});

btnScissors.addEventListener("click", () => {
  playRound("scissors", computerPlay());
});

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  switch (randomNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let playerInput = playerSelection.toLowerCase();
  let computerInput = computerSelection.toString().toLowerCase();
  let winner = findRoundWinner(playerInput, computerInput);

  if (winner === "player") {
    ++playerScore;
    textOutput.textContent = `You Win! ${playerInput} beats ${computerInput}`;
  } else if (winner === "computer") {
    ++computerScore;
    textOutput.textContent = `You Lose! ${computerInput} beats ${playerInput}`;
  } else {
    textOutput.textContent = `Draw! ${playerInput} and ${computerInput} are the same`;
  }
  displayScore();
}

function findRoundWinner(playerInput, computerInput) {
  if (playerInput == computerInput) return "draw";
  if (
    (playerInput == "rock" && computerInput == "scissors") ||
    (playerInput == "paper" && computerInput == "rock") ||
    (playerInput == "scissors" && computerInput == "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function displayScore() {
  document.getElementById(
    "score-output"
  ).textContent = `${playerScore} : ${computerScore}`;
  displayWinner();
}

function displayWinner() {
  if (playerScore >= 5) {
    textOutput.textContent = "Congrats! You win!";
    resetScore();
  } else if (computerScore >= 5) {
    textOutput.textContent = "Game Over!";
    resetScore();
  }
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}
