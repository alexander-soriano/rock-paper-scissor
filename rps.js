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

