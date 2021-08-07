
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const resul = document.getElementById('result');
const playerSelection = ""; 

rock.addEventListener('click', function () {
   game("rock");
})
paper.addEventListener('click', function () {
    game("paper");
})
scissor.addEventListener('click', function () {
    game("scissor");
})

function game(playerSelection)
{
    let random = getRandomNumberBetween(0, 2);
    const option = ["rock", "paper", "scissor"]
    const computerSelection = option[random];
    const result = playRound(playerSelection , computerSelection);
    console.log(result[0]);
    resul.textContent = result[0];
    resul.style.font = "Arial";
  
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'rock')
        return ["It's a tie!", "tie", computerSelection];
    else if(playerSelection === 'rock' && computerSelection === 'paper')
        return ["You lose! Paper beats Rock!", "lose", computerSelection];
    else if(playerSelection === 'rock' && computerSelection === 'scissor')
        return ["You win! Rock beats Scissors!", "win", computerSelection];
    else if(playerSelection === 'paper' && computerSelection === 'rock')
        return ["You win! Paper beats Rock", "win", computerSelection];
    else if(playerSelection === 'paper' && computerSelection === 'paper')
        return ["It's a tie!", "tie", computerSelection];
    else if(playerSelection === 'paper' && computerSelection === 'scissor')
        return ["You lose! Scissors beats paper!","lose", computerSelection];
    else if(playerSelection === 'scissor' && computerSelection === 'rock')
        return ["You lose! Rock beats Scissors", "lose", computerSelection];
    else if(playerSelection === 'scissor' && computerSelection === 'paper')
        return ["You win! Scissors beats paper!","win", computerSelection];
    else if(playerSelection === 'scissor' && computerSelection === 'scissor')
        return ["It's a tie!","tie", computerSelection];
}
