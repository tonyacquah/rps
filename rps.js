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
        roundResultStr = `Draw: Play again.`// ${playerSelection} : ${computerSelection}`
        roundScorePlayer = roundScoreComputer = 0


    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || //mulltiline if statement containing all the posibilities the ***player wins****
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        roundResultStr = `You won this round`// : ${playerSelection} beats ${computerSelection}`
        roundScorePlayer = 1
        roundScoreComputer = 0
    }
    else if ((computerSelection === "ROCK" && playerSelection === "SCISSORS") || //mulltiline if statement containing all the posibilities the ***computer wins****
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "SCISSORS" && playerSelection === "PAPER")) {
        roundResultStr = `You lost this round`//: ${computerSelection} beats ${playerSelection}`
        roundScorePlayer = 0
        roundScoreComputer = 1
    }
    roundResultArr.push(roundResultStr, roundScorePlayer, roundScoreComputer,computerSelection)
    console.log(roundResultArr)
    return roundResultArr
}

//console.log(playRound("SCISSORS")); //for debugging &#x2B06;"

let resultArr = []
let playerGameScores = 0
let computerGameScores = 0
let welcomeText="Click an item to begin"// &#x2B06;"
const scoreBoard = document.querySelector('.scoreBoard')
const trophy = document.querySelector('.trophy')
const reloadButton = document.querySelector('.reloadButton')
const showchoices = document.querySelector('.showChoices')


//on pageload
scoreBoard.innerHTML=welcomeText
showchoices.innerHTML=""

const playRock = () => {

    if (playerGameScores < 5 && computerGameScores < 5) {
        resultArr = playRound("ROCK")
        console.log("clicked rock")
        playerGameScores += resultArr[1]
        computerGameScores += resultArr[2]
        console.log("player", playerGameScores)
        console.log("computer", computerGameScores)
        scoreBoard.innerHTML = `${resultArr[0]} <br>  Player ${playerGameScores} : ${computerGameScores} Computer`
        showchoices.innerHTML = `Player <strong>ROCK</strong> : <strong>${resultArr[3]}</strong> Computer`
    } else { game() }
}

//scissors.addEventListener('click', () => {
const playScissors = () => {
    if (playerGameScores < 5 && computerGameScores < 5) {
        resultArr = playRound("SCISSORS")
        console.log("clicked scissors")
        playerGameScores += resultArr[1]
        computerGameScores += resultArr[2]
        console.log("player", playerGameScores)
        console.log("computer", computerGameScores)
        scoreBoard.innerHTML = `${resultArr[0]}  <br>  Player ${playerGameScores} : ${computerGameScores} Computer`
        showchoices.innerHTML = `Player <strong>SCISSORS</strong> : <strong>${resultArr[3]}</strong> Computer`
    } else { game() }
}


//paper.addEventListener('click', () => {
const playPaper = () => {
    if (playerGameScores < 5 && computerGameScores < 5) {
        resultArr = playRound("PAPER")
        console.log("clicked paper")
        playerGameScores += resultArr[1]
        computerGameScores += resultArr[2]
        console.log("player", playerGameScores)
        console.log("computer", computerGameScores)
        scoreBoard.innerHTML = `${resultArr[0]}  <br>  Player ${playerGameScores} : ${computerGameScores} Computer`
        showchoices.innerHTML = `Player <strong>PAPER</strong> : <strong>${resultArr[3]}</strong> Computer`
    } else { game() }
}


const game = () => {

    console.log("final result")
    console.log(resultArr)

    if (resultArr[0].includes("won")) {
        scoreBoard.innerHTML = `Ah! Lucky you. <br>Player ${playerGameScores} : ${computerGameScores} Computer`
        trophy.innerHTML = `<img src="images/trophy.png">`
    } else {

        scoreBoard.innerHTML = `You Lost. <br>Player ${playerGameScores} : ${computerGameScores} Computer`
        trophy.innerHTML = `<img src="images/oh-dear.png">`
    }

   reloadButton.innerHTML=`<button onclick="reload()">Play Again</button>` 

}

const reload = () =>{
    //resultArr = []
    playerGameScores=0
    computerGameScores=0
    scoreBoard.innerHTML = `${welcomeText}`
    trophy.innerHTML = " "
    reloadButton.innerHTML =" " 
    showchoices.innerHTML=" "
    //Note to self: alternative to all of this is to call a js method to reload the browser page
}