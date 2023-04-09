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
        roundResultStr = `You Win! ${playerSelection} beats ${computerSelection}`
        roundScorePlayer = 1
        roundScoreComputer = 0
    }
    else if ((computerSelection === "ROCK" && playerSelection === "SCISSORS") || //mulltiline if statement containing all the posibilities the ***computer wins****
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "SCISSORS" && playerSelection === "PAPER")) {
        roundResultStr = `You Lose! ${computerSelection} beats ${playerSelection}`
        roundScorePlayer = 0
        roundScoreComputer = 1
    }
    roundResultArr.push(roundResultStr, roundScorePlayer, roundScoreComputer)
    //console.log(roundResultArr)
    return roundResultArr
}

//playRound("SCISSORS"); //for debugging

const game = () => {
    for (let i = 0; i < 5; i++) {
        let userSelection
        let promptText = "Type ROCK, PAPER or SCISSORS"
        do {
            userSelection = prompt(promptText)
            userSelection = userSelection.toUpperCase()
            promptText = "Invalid input. Check and type again"
        } while (userSelection != "ROCK" && userSelection != "PAPER" && userSelection != "SCISSORS") //input validationadde

        console.log(playRound(userSelection)); //should happen 5 times
    }

}

/*const game = () => {
    for (let i = 0; i < 5; i++)

        do {
            let userSelection
            let promptText = "Type ROCK, PAPER or SCISSORS"
            do {
                userSelection = prompt(promptText)
                userSelection = userSelection.toUpperCase()
                promptText = "Invalid input. Check and type again"
            } while (userSelection != "ROCK" && userSelection != "PAPER" && userSelection != "SCISSORS") //input validationadde

            console.log(playRound(userSelection)); //should happen 5 times

        } while () //until someone gets 5

}*/

game();