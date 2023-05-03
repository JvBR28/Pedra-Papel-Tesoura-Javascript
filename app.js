const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'pedra'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'E um empate!'
  }
  if (computerChoice === 'pedra' && userChoice === "papel") {
    result = 'Voce ganhou!'
  }
  if (computerChoice === 'pedra' && userChoice === "tesoura") {
    result = 'Voce perdeu!'
  }
  if (computerChoice === 'papel' && userChoice === "tesoura") {
    result = 'Voce ganhou!'
  }
  if (computerChoice === 'papel' && userChoice === "pedra") {
    result = 'Voce perdeu!'
  }
  if (computerChoice === 'tesoura' && userChoice === "pedra") {
    result = 'Voce ganhou!'
  }
  if (computerChoice === 'tesoura' && userChoice === "papel") {
    result = 'Voce perdeu!'
  }
  resultDisplay.innerHTML = result
}