const start = document.querySelector('button')
start.addEventListener('click', () => {
    window.location.href = 'game.html'
})

const toMenu = document.getElementById('toMenu')
toMenu.addEventListener('click', () => {
    window.location.href = 'menu.html'
})

const rock = document.getElementById('rock')
const scissors = document.getElementById('scissors')
const papper = document.getElementById('papper')
const choice = document.getElementById('choice')


choice.addEventListener('click', () => {
        console.log(rock, scissors, papper)
    })
// function choosingVariant() {
    

    
// }