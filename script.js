// ROCK PAPER SCISSORS
const options = ['rock', 'paper', 'scissors'];
const rockButton = document.querySelector('.rock')
const paperButton  = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')


function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
};
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
};

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    const p = document.createElement('p');
    if (result == 'tie') {
        p.innerText = 'its a tie!'
        outcomeDiv.appendChild(p)
    }
    
    else if(result == 'player') {
        p.innerText = `you win! ${playerSelection} beats ${computerSelection}`
        outcomeDiv.appendChild(p)
     }
    
    else {
        p.innerText = `you lose! ${computerSelection} beats ${playerSelection}`
        outcomeDiv.appendChild(p)
    }
};

  // this whole check for winner might need to be removed, it was for the 
  //purpose of creating a score tracker for each player but did not finish
    const checkForWinner = (playerSelection, computerSelection) => {
        if (playerSelection === 5) {
            const h2 = document.createElement('h2')
            h2.classList.add('player-won')
            h2.innerText = `you won ${playerSelection} against ${computerSelection}`
            outcomeDiv.append('h2')
        } 
        else if (computerSelection === 5) {
            const h2 = document.createElement('h2')
            h2.classList.add('computer-won')
            h2.innerText = `you lost ${playerSelection} against ${computerSelection}`
            outcomeDiv.append('h2')
        }
    }
rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    checkForWinner(playerSelection, computerSelection)
    
});
paperButton.addEventListener('click', () => {
    const computerSelection= getComputerChoice()
    const playerSelection= 'paper'
    playRound(playerSelection, computerSelection)
    checkForWinner(playerSelection, computerSelection)
});
scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    checkForWinner(playerSelection, computerSelection)
});
//may want to remove the checkFOR winner from each button event listener
//function playGame() {
  //for (let i = 0; i < 5; i++){
   //const playerSelection = 'rock';
   //const computerSelection = getComputerChoice();
    //console.log(playRound(playerSelection, computerSelection));
   //};
//}
//playGame()
