let round=0;
let playerScore=0;
let computerScore=0;
let playerSelection = 0;
let computerSelection = 0;
let roundResult = 'Click any buttons to start';
let finalResult = '';

const container = document.querySelector('.container');

const roundResultDiv = document.createElement('div');
roundResultDiv.classList.add('roundResult');
container.appendChild(roundResultDiv);
roundResultDiv.textContent= `${roundResult}`



// game(5);
// gameResult();

// const button = document.querySelectorAll('button');
// document.addEventListener('click', (e) => {
//     if (e.target.nodeName=='BUTTON')
//     console.log(e.target.textContent);
// })

const button = document.querySelectorAll('button');
document.addEventListener('click', playRound)

// function game(bestOfRounds){
//     for(let i=0; playerScore<bestOfRounds && computerScore<bestOfRounds; i++){
//         round++;
//         let playerSelection = prompt("RPS?");
//         console.log(playRound(playerSelection,computerPlay()));
//     }
// }

function randomNumber(max){
    return Math.floor(Math.random()*max)+1
}

function computerPlay(){
    let number = randomNumber(3)
    if (number===1){
        computerSelection = "rock";
    }else if (number===2){
        computerSelection = "paper"
    }else if (number===3){
        computerSelection = "scissor"
    }else {
        computerSelection = "ERROR"
    }
}

function playRound(e){
    if(e.target.nodeName!='BUTTON'){return};
    playerSelection = (e.target.textContent).toLowerCase();
    computerPlay();

    

    if (playerSelection==='rock' && computerSelection==='scissor'){
        playerScore++
        roundResult = "You win. Rock beats Scissor";
    } else if (playerSelection==='rock' && computerSelection==='paper'){
        computerScore++
        roundResult = "You lose. Rock loses to Paper";
    } else if (playerSelection==='paper' && computerSelection==='rock'){
        playerScore++
        roundResult = "You win. Paper beats Rock";
    } else if (playerSelection==='paper' && computerSelection==='scissor'){
        computerScore++
        roundResult = "You lose. Paper loses to Scissor";
    } else if (playerSelection==='scissor' && computerSelection==='paper'){
        playerScore++
        roundResult = "You win. Scissor beats Scissor";
    } else if (playerSelection==='scissor' && computerSelection==='rock'){
        computerScore++
        return "You lose. Scissor loses to Paper"
    } else if (playerSelection===computerSelection){
        roundResult = "It's a tie.";
    } else {
        roundResult = "Hey! No cheating";
    }
    if(roundResult!="It's a tie.") round++;

    if(playerScore==5){
        finalResult = 'You win'
    }else if(computerScore==5){
        finalResult = 'You lose'
    }else{}
    
    roundResultDiv.innerHTML= `Round: ${round} <br /> ${roundResult} <br /> Player: ${playerScore} <br /> Computer:${computerScore} <br /> ${finalResult}`
}

function gameResult(){
    if(playerScore>computerScore){
        console.log(`Player WIN with number of rounds:${round}, score of player:${playerScore} & computer:${computerScore}`)
    }else if(playerScore<computerScore){
        console.log(`Player LOSE with number of rounds:${round}, score of player:${playerScore} & computer:${computerScore}`)
    }else{
        console.log(`Game was TIED with number of rounds:${round}, score of player:${playerScore} & computer:${computerScore}`)
    }
}


