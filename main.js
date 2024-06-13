
// -----------------------------------КНОПКИ ИГРАТЬ\МЕНЮ--------------------------------------------


const start = document.querySelector('button')
start.addEventListener('click', () => {
    window.location.href = 'game.html'
})


const toMenu = document.getElementById('toMenu')
toMenu.addEventListener('click', () => {
    window.location.href = 'menu.html'
})

// ---------------------------------------ВЫБОР ИГРОКА----------------------------------------------


const images = document.querySelectorAll('.variant')
const pressedVariant = document.querySelector('.imagesOfPlayer')

let lastTarget = null
pressedVariant.addEventListener('click', (t) => {
    images.forEach((item) => {
        item.classList.remove('pressedVariant');
    })
    if (t.target.className != 'imagesOfPlayer') {
        t.target.classList.add('pressedVariant');
        lastTarget = t.target
    }    
})

// --------------------------------------КНОПКА ИГРАТь----------------------------------------------


const botsRock = document.querySelector('.rockBots')
const botsScissors = document.querySelector('.scissorsBots')
const botsPapper = document.querySelector('.papperBots')

const arrOfVarriantsBot = [botsRock, botsScissors, botsPapper]

let playerChoice = null
let botChoice = null

const makeAChoice = document.getElementById('choice')
makeAChoice.addEventListener('click', () => {
    
    playerChoice = lastTarget
    
    randomIndexOfBotChoice()
    botChoice = arrOfVarriantsBot[indexOfBotChoice]
    arrOfVarriantsBot.forEach((item) => {
        item.classList.remove('pressedVariantBot');
    })
    botChoice.classList.add('pressedVariantBot')
    
    if (playerChoice.classList[0] == 'rock' && botChoice.classList[0] == 'papperBots') {
        console.log('YOU LOSE')
    } else if (playerChoice.classList[0] == 'scissors' && botChoice.classList[0] == 'rockBots') {
        console.log('YOU LOSE')
    } else if (playerChoice.classList[0] == 'papper' && botChoice.classList[0] == 'scissorsBots') {
        console.log('YOU LOSE')
    } else if (playerChoice.classList[0] == 'rock' && botChoice.classList[0] == 'scissorsBots') {
        console.log('YOU WIN')
    } else if (playerChoice.classList[0] == 'scissors' && botChoice.classList[0] == 'papperBots') {
        console.log('YOU WIN')
    } else if (playerChoice.classList[0] == 'papper' && botChoice.classList[0] == 'rockBots') {
        console.log('YOU WIN')
    } else if (playerChoice.classList[0] == 'rock' && botChoice.classList[0] == 'rockBots') {
        console.log('DRAW')
    } else if (playerChoice.classList[0] == 'scissors' && botChoice.classList[0] == 'scissorsBots') {
        console.log('DRAW')
    } else if (playerChoice.classList[0] == 'papper' && botChoice.classList[0] == 'papperBots') {
        console.log('DRAW')
    } 
 
})

// ---------------------------------------ВЫБОР БОТА------------------------------------------------


let indexOfBotChoice = null

function randomIndexOfBotChoice() {
    indexOfBotChoice = Math.floor(Math.random() * 2.9)
    return indexOfBotChoice
}

