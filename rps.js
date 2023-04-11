const getComputerChoice = () => {
    const compNum = Math.floor((Math.random() * 100))
    let rps
    if (compNum < 34) {
        rps = "ROCK"
    } else if (compNum < 67) {
        rps = "SCISSORS"
    } else {
        rps = "PAPER"
    }

    return rps
}


const playRound = playerSelection => {
    let roundResultStr
    let roundScorePlayer
    let roundScoreComputer
    let roundResultArr = [];
    let computerSelection = getComputerChoice()
    playerSelection = playerSelection.toUpperCase()
    // console.log(computerSelection) //for debugging
    //console.log(playerSelection) //for debugging
    if (playerSelection === computerSelection) {
        roundResultStr = `Draw: Play again. ${playerSelection} : ${computerSelection}`
        roundScorePlayer = roundScoreComputer = 0


    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || //mulltiline if statement containing all the posibilities the ***player wins****
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        roundResultStr = `You won this round : ${playerSelection} beats ${computerSelection}`
        roundScorePlayer = 1
        roundScoreComputer = 0
    }
    else if ((computerSelection === "ROCK" && playerSelection === "SCISSORS") || //mulltiline if statement containing all the posibilities the ***computer wins****
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "SCISSORS" && playerSelection === "PAPER")) {
        roundResultStr = `You lost this round: ${computerSelection} beats ${playerSelection}`
        roundScorePlayer = 0
        roundScoreComputer = 1
    }
    roundResultArr.push(roundResultStr, roundScorePlayer, roundScoreComputer)
    console.log(roundResultArr)
    return roundResultArr
}

//console.log(playRound("SCISSORS")); //for debugging

let resultArr = []
let playerGameScores = 0
let computerGameScores = 0

const scoreBoard = document.querySelector('.scoreBoard')

//const rock = document.querySelector('.rock')
//const scissors = document.querySelector('.scissors')
//const paper = document.querySelector('.paper')


const playRock = () => {
    
    if (playerGameScores < 5 && computerGameScores < 5){
    resultArr = playRound("ROCK")
    console.log("clicked rock")
    playerGameScores +=resultArr[1]
    computerGameScores +=resultArr[2]
    console.log("player", playerGameScores)
    console.log("computer",computerGameScores)
    scoreBoard.innerHTML = `${resultArr[0]}\n Player ${playerGameScores} : ${computerGameScores} Computer`
    } else {game()}
}

//scissors.addEventListener('click', () => {
    const playScissors = () =>{
    if (playerGameScores < 5 && computerGameScores < 5){
    resultArr = playRound("SCISSORS")
    console.log("clicked scissors")
    playerGameScores +=resultArr[1]
    computerGameScores +=resultArr[2]
    console.log("player", playerGameScores)
    console.log("computer",computerGameScores)
    scoreBoard.innerHTML = `${resultArr[0]}\n Player ${playerGameScores} : ${computerGameScores} Computer`
} else {game()}
}


//paper.addEventListener('click', () => {
   const playPaper = () =>{
    if (playerGameScores < 5 && computerGameScores < 5){
    resultArr = playRound("PAPER")
    console.log("clicked paper")
    playerGameScores +=resultArr[1]
    computerGameScores +=resultArr[2]
    console.log("player", playerGameScores)
    console.log("computer",computerGameScores)
    scoreBoard.innerHTML = `${resultArr[0]}\n Player ${playerGameScores} : ${computerGameScores} Computer`
} else {game()}
}


const game = () => {
    
    console.log("final result")
    console.log(resultArr)
    scoreBoard.innerHTML = `${resultArr[0]}\n Player ${playerGameScores} : ${computerGameScores} Computer <br> Play again?`
     
    

    
 
    
    
}
    
  