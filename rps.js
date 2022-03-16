let round=0;
let playerScore=0;
let computerScore=0;

function randomNumber(max){
    return Math.floor(Math.random()*max)+1
}

function computerPlay(){
    let number = randomNumber(3)
    if (number===1){
        return "rock";
    }else if (number===2){
        return "paper"
    }else if (number===3){
        return "scissor"
    }else {
        return "ERROR"
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection==='rock' && computerSelection==='scissor'){
        playerScore++
        return "You win. Rock beats Scissor";
    } else if (playerSelection==='rock' && computerSelection==='paper'){
        computerScore++
        return "You lose. Rock loses to Paper";
    } else if (playerSelection==='paper' && computerSelection==='rock'){
        playerScore++
        return "You win. Paper beats Rock";
    } else if (playerSelection==='paper' && computerSelection==='scissor'){
        computerScore++
        return "You lose. Paper loses to Scissor";
    } else if (playerSelection==='scissor' && computerSelection==='paper'){
        playerScore++
        return "You win. Scissor beats Scissor";
    } else if (playerSelection==='scissor' && computerSelection==='rock'){
        computerScore++
        return "You lose. Scissor loses to Paper"
    } else if (playerSelection===computerSelection){
        return "It's a tie.";
    } else {
        return "Hey! No cheating";
    }
}

function game(){
    for(let i=0; i<5; i++){
        let playerSelection = prompt("RPS?");
        console.log(playRound(playerSelection,computerPlay()));
    }
}