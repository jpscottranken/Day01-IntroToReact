const theResult = document.querySelector("#result")
const theChoice = document.querySelector("#choices")
const choices   = ["rock", "paper", "scissors"]
const uc        = "<br>User Chose: "
const cc        = "<br>Computer Chose: "
let   totals    = document.getElementById("totals")
let   userWins  = 0
let   computerWins = 0
let   draws     = 0
let   finalTotals
let   allGames

const handleClick = (e) => {
  getResults(e.target.innerHTML,
            choices[Math.floor(Math.random() * choices.length)])
  displayTotals()
}

choices.forEach(choice => {
  const button = document.createElement("button")
  button.innerHTML = choice
  button.addEventListener("click", handleClick)
  theChoice.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice)
  {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      theResult.innerHTML = uc + userChoice + cc + computerChoice + "<br>Draw!"
      ++draws
      break

    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      theResult.innerHTML = uc + userChoice + cc + computerChoice + "<br>User Wins!"
      ++userWins
      break

    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      theResult.innerHTML = uc + userChoice + cc + computerChoice + "<br>Computer Wins!"
      ++computerWins
      break
  }
}

const displayTotals = () => {
  allGames = ""
  allGames += "\nUser Wins: "     + userWins
  allGames += "\nComputer Wins: " + computerWins
  allGames += "\nDraws: "         + draws
  totals.innerText = allGames
}
