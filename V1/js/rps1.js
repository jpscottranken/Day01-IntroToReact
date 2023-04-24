const theComputerChoice = document.getElementById("computer-choice")
const theUserChoice     = document.getElementById("user-choice")
const theResult         = document.getElementById("result")
const buttonChoices     = document.querySelectorAll("button")
let   theTotals         = document.getElementById("totals")
let   userChoice
let   computerChoice
let   result
let   userWins = 0
let   computerWins = 0
let   draws = 0
let   totals

//  Iterate over the button choices to
//  determine which button user pressed.
buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener("click", (e) => {
  userChoice = e.target.id
  theUserChoice.innerHTML = userChoice
  theComputerChose()
  determineWinner()
  updateTotals()
}))

function theComputerChose()
{
  const rand = Math.floor(Math.random() * 3) + 1

  if (rand === 1)
  {
    computerChoice = "rock"
  }
  else if (rand === 2)
  {
    computerChoice = "paper"
  }
  else
  {
    computerChoice = "scissors"
  }

  theComputerChoice.innerHTML = computerChoice
}

function determineWinner()
{
  if (computerChoice === userChoice)
  {
    result = "Draw!"
    ++draws
  }
  if ((computerChoice === "rock") && (userChoice === "paper"))
  {
    result = "User Wins!"
    ++userWins
  }
  if ((computerChoice === "rock") && (userChoice === "scissors"))
  {
    result = "Computer Wins!"
    ++computerWins
  }
  if ((computerChoice === "paper") && (userChoice === "rock"))
  {
    result = "Computer Wins!"
    ++computerWins
  }
  if ((computerChoice === "paper") && (userChoice === "scissors"))
  {
    result = "User Wins!"
    ++userWins
  }
  if ((computerChoice === "scissors") && (userChoice === "rock"))
  {
    result = "User Wins!"
    ++userWins
  }
  if ((computerChoice === "scissors") && (userChoice === "paper"))
  {
    result = "User Wins!"
    ++userWins
  }
}

function updateTotals()
{
  theTotals.innerHTML = ""
  totals = ""

  totals += "User Wins: "     + userWins     + "\n"
  totals += "Computer Wins: " + computerWins + "\n"
  totals += "Draws: "         + draws

  theResult.innerHTML = result
  theTotals.innerHTML = totals
}