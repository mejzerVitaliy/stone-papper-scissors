
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

let player = null
let computer = null


let result = null


function determineWinner(player, computer) {
    if (player === computer) {
        result = 'Ничья!';
    } else if (
        (player === 'Камень' && computer === 'Ножницы') ||
        (player === 'Ножницы' && computer === 'Бумага')  ||
        (player === 'Бумага' && computer === 'Камень')
    ) {
        result = 'Вы выиграли!';
    } else {
        result = 'Компьютер выиграл!' ;
    }
}


const makeAChoice = document.getElementById('choice')
makeAChoice.addEventListener('click', () => {
    
    playerChoice = lastTarget
    
    randomIndexOfBotChoice()
    botChoice = arrOfVarriantsBot[indexOfBotChoice]
    arrOfVarriantsBot.forEach((item) => {
        item.classList.remove('pressedVariantBot');
    })
    botChoice.classList.add('pressedVariantBot')
    
    player = playerChoice.classList[2]
    computer = botChoice.classList[2]

    // Функция для определения победителя
    determineWinner(player, computer)
 })

// ---------------------------------------ВЫБОР БОТА------------------------------------------------


let indexOfBotChoice = null

function randomIndexOfBotChoice() {
    indexOfBotChoice = Math.floor(Math.random() * 2.9)
    return indexOfBotChoice
}

// --------------------------------Модальное окно----------------------------------------------------


const modal = document.getElementById('myModal');
const modalText = document.getElementById('modalText')

// крестик
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal 
makeAChoice.onclick = function() {
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center'
    modal.style.alignItems = 'center'
    modalText.innerText = result;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
