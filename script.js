function computerPlay() {
    let randomNumber = Math.floor(Math.random() * (3 - 1 +1)) + 1;
    console.log(randomNumber);
    
    switch(randomNumber) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}