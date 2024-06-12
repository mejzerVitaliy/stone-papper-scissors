
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


let playerChoice = null

const makeAChoice = document.getElementById('choice')
makeAChoice.addEventListener('click', () => {
    playerChoice = lastTarget
    console.log(playerChoice)
})

// ---------------------------------------ВЫБОР БОТА------------------------------------------------


const botsRock = document.querySelector('.rockBots')
const botsScissors = document.querySelector('.scissorsBots')
const botsPapper = document.querySelector('.papperBots')

const arrOfVarriantsBot = [botsRock, botsScissors, botsPapper]
console.log(arrOfVarriantsBot)
let i = null
let indexOfBotChoice = Math.floor(Math.random() * 2.9);
console.log(indexOfBotChoice)

const botChoice = arrOfVarriantsBot[indexOfBotChoice]
console.log(botChoice)

