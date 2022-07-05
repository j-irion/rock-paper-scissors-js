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

    if (playerInput == computerInput) return `Draw! ${playerSelection} and ${computerSelection} are the same`;
    if ((playerInput == "rock" && computerInput == "scissors") 
        || (playerInput == "paper" && computerInput == "rock")
        || (playerInput == "scissors" && computerInput == "paper")) {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}