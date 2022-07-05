function computerPlay() {
    let randomNumber = Math.floor(Math.random() * (3 - 1 +1)) + 1;
    console.log(randomNumber);
    
    switch(randomNumber) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerInput = playerSelection.toLowerCase();
    let computerInput = computerSelection.toLowerCase();

    if (playerInput == computerInput) return 2;
    if ((playerInput == "rock" && computerInput == "scissors") 
        || (playerInput == "paper" && computerInput == "rock")
        || (playerInput == "scissors" && computerInput == "paper")) {
            return 0;
        }
    else return 1;
}

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
            console.log("Wrong input! Try again")
        }
        let computerInput = computerPlay();
        let winner = playRound(playerInput, computerInput);
        if (winner == 0) {
            console.log(`You Win! ${playerInput} beats ${computerInput}`);
            ++playerCount;
            continue;
        }
        else if (winner == 1) {
            console.log(`You Lose! ${computerInput} beats ${playerInput}`);
            ++computerCount;
            continue;
        }
        else {
            console.log(`Draw! ${playerInput} and ${computerInput} are the same`);
            continue;
        }
    }
    if (playerCount > computerCount) {
        console.log("You win the game!")
        return;
    }
    if (playerCount < computerCount) {
        console.log("You lose the game!")
        return;
    }
    console.log("It's a draw!")
}

function inputCorrect(input) {
    if (input.toLowerCase() == "rock" 
        || input.toLowerCase() == "paper"
        || input.toLowerCase() == "scissors") {
        return true;
    }
    return false;
}