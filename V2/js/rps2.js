const theUserChoice = document.createElement("h2")
const theComputerChoice = document.createElement("h2")
const theResult = document.createElement("h2")
const gameGrid  = document.getElementById("game")
const choices = ["rock", "paper", "scissors"]
gameGrid.append(theUserChoice, theComputerChoice, theResult)
let theTotals = document.getElementById("totals")
let userWins = 0
let computerWins = 0
let draws = 0
let totals
let userChoice
let computerChoice

//  Iterate over the buttons to get user choice
const handleClick = (e) => {
  userChoice = e.target.id
  theUserChoice.innerHTML = "User choice: " + userChoice
  generateComputerChoice()
  getResult()
  displayTotals()
}

const generateComputerChoice = () => {
  const rand = choices[Math.floor(Math.random() * choices.length)]
  computerChoice = rand
  theComputerChoice.innerHTML = "Computer choice: " + computerChoice
}

for (let lcv = 0; lcv < choices.length; ++lcv)
{
  const button = document.createElement("button")
  button.id = choices[lcv]
  button.innerHTML = choices[lcv]
  button.addEventListener("click", handleClick)
  gameGrid.appendChild(button)
}

const getResult = () => {
  switch (userChoice + computerChoice)
  {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      theResult.innerHTML = "Draw!"
      ++draws
      break

    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      theResult.innerHTML = "User Wins!"
      ++userWins
      break

    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      theResult.innerHTML = "Computer Wins!"
      ++computerWins
      break
  }
}

const displayTotals = () => {
  totals = ""
  totals += "\n\nUser Wins: "       + userWins
  totals += "\nComputer Wins: " + computerWins
  totals += "\nDraws: "         + draws
  theTotals.innerText = totals
  //alert("Totals: " + totals)
}