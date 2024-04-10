// ROCK PAPER SCISSORS
const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';
    }
    else if( (playerSelection == 'rock' && computerSelection == 'scissor') ||
            (playerSelection == 'scissor' && computerSelection == 'paper' ) ||
            (playerSelection == 'paper' && computerSelection == 'rock')
){
    return 'player';
}
else { 
    return 'computer';
}
}
    

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == 'tie') {
        return 'its a tie!'
    }
    else if(result == 'player') {
        return `you win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `you lose! ${computerSelection} beats ${playerSelection}`
    }
}

function playGame() {
    for (let i = 0; i < 5; i++){
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
     console.log(playRound(playerSelection, computerSelection));
    };
}
playGame()
