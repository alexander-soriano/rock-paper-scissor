function randomNumber(max){
    return Math.floor(Math.random()*max)+1
}

function computerPlay(){
    let number = randomNumber(3)
    if (number===1){
        return "Rock";
    }else if (number===2){
        return "Paper"
    }else if (number===3){
        return "Scissor"
    }else {
        return "ERROR"
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection==='rock' && computerSelection==='Scissor'){
        return "You win. Rock beats Scissor";
    } else if (playerSelection==='rock' && computerSelection==='Paper'){
        return "You lose. Rock loses to Paper";
    } else if (playerSelection==='paper' && computerSelection==='Rock'){
        return "You win. Paper beats Rock";
    } else if (playerSelection==='paper' && computerSelection==='Scissor'){
        return "You lose. Paper loses to Scissor";
    } else if (playerSelection==='scissor' && computerSelection==='Paper'){
        return "You win. Scissor beats Scissor";
    } else if (playerSelection==='scissor' && computerSelection==='Rock'){
        return "You lose. Scissor loses to Paper"
    } else if (playerSelection===computerSelection){
        return "It's a tie.";
    } else {
        return "Hey! No cheating";
    }
}

function game(){
    for(let i=0; i<5; i++){
        let play= prompt("RPS?")
        console.log(playRound(play,computerPlay()));
    }
}
