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

/*
function game() {
  let playerCount = 0;
  let computerCount = 0;
  for (let i = 0; i < 5; i++) {
    let playerInput;
    while (true) {
      promptPlayerInput = prompt("Rock, Paper or Scissors");
      if (inputCorrect(promptPlayerInput)) {
        playerInput = promptPlayerInput;
        break;
      }
      textOutput.textContent = "Wrong input! Try again";
      //console.log("Wrong input! Try again");
    }
    let computerInput = computerPlay();
    let winner = playRound(playerInput, computerInput);
    if (winner == 0) {
      textOutput.textContent = `You Win! ${playerInput} beats ${computerInput}`;
      //console.log(`You Win! ${playerInput} beats ${computerInput}`);
      ++playerCount;
      continue;
    } else if (winner == 1) {
      textOutput.textContent = `You Lose! ${computerInput} beats ${playerInput}`;
      //console.log(`You Lose! ${computerInput} beats ${playerInput}`);
      ++computerCount;
      continue;
    } else {
      textOutput.textContent = `Draw! ${playerInput} and ${computerInput} are the same`;
      //console.log(`Draw! ${playerInput} and ${computerInput} are the same`);
      continue;
    }
  }
  if (playerCount > computerCount) {
    textOutput.textContent = "You win the game!";
    //console.log("You win the game!");
    return;
  }
  if (playerCount < computerCount) {
    textOutput.textContent = "You lose the game!";
    //console.log("You lose the game!");
    return;
  }
  textOutput.textContent = "It's a draw!";
  //console.log("It's a draw!");
}

function inputCorrect(input) {
  if (
    input.toLowerCase() == "rock" ||
    input.toLowerCase() == "paper" ||
    input.toLowerCase() == "scissors"
  ) {
    return true;
  }
  return false;
}
*/
