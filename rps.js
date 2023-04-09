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
    //console.log(rps) //for debugging
    return rps
}
//getComputerChoice() //for debugging

const playRound = playerSelection => {
    let computerSelection = getComputerChoice()
    playerSelection = playerSelection.toUpperCase()
    console.log(computerSelection) //for debugging
    console.log(playerSelection) //for debugging
    if (playerSelection === computerSelection) {
        return (console.log("Draw: Play again. ", playerSelection, computerSelection))
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || //mulltiline if statement containing all the posibilities the ***player wins****
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")) { //end of if condition begining of function block
        return (console.log(`\nYou Win! \n${playerSelection} beats ${computerSelection}\n`))
    }
    else if ((computerSelection === "ROCK" && playerSelection === "SCISSORS") || //mulltiline if statement containing all the posibilities the ***computer wins****
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "SCISSORS" && playerSelection === "PAPER")) { //end of if condition begining of function block
        return (console.log(`\nYou Lose! \n${computerSelection} beats ${playerSelection}\n`))
    }
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
        } while (userSelection != "ROCK" && userSelection != "PAPER" && userSelection != "SCISSORS") //input validation

        console.log(playRound(userSelection)); //should happen 5 times
    }

}
game();