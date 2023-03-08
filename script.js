function getComputerChoice() {
    let gestures = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * 3);
    return gestures[index];
}

function getPlayerChoice() {
    let gesture = prompt("What's your gesture?");
    return gesture.toLowerCase();
}

function playRound() {
    let compGest = getComputerChoice();
    console.log(compGest);
    let playerGest = getPlayerChoice();

    if (compGest.toLowerCase() == playerGest) {return "Even!";}
    else if (compGest == "Rock" && playerGest == "paper") {return "You win! Paper beats Rock!";}
    else if (compGest == "Rock" && playerGest == "scissors") {return "You lose! Rock beats Scissors!";}
    else if (compGest == "Paper" && playerGest == "rock") {return "You lose! Paper beats Rock!";}
    else if (compGest == "Paper" && playerGest == "scissors") {return "You win! Scissors beats Paper!";}
    else if (compGest == "Scissors" && playerGest == "paper") {return "You lose! Scissors beats Paper!";}
    else if (compGest == "Scissors" && playerGest == "rock") {return "You win! Rock beats Scissors!";}
}

function game() {
    let win = 0;
    let loss = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound();
        console.log(roundResult);
        if (roundResult[4] == "w") {++win;}
        else if (roundResult[4] == "l") {++loss;}
    }

    if (win > loss) {console.log("Game result: Player wins!");}
    else if (win < loss) {console.log("Game result: Computer wins!");}
    else {console.log("Game result: Even!");}
}

game();
