// Убедимся, что DOM полностью загружен
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элемент кнопки по ID
    const button = document.getElementById('myButton')
    const divButton = document.getElementById('divButton')
    const askToQuestion = document.getElementById('askToQuestion')

    button.addEventListener('click', () => {
        const newbutton = document.createElement('button')
        const quiz = document.createElement('h1')
        quiz.textContent = 'are you gay?'
        newbutton.textContent = 'yes'
        divButton.appendChild(quiz)
        divButton.appendChild(newbutton)

        newbutton.addEventListener('click', () => {
            const ask = document.createElement('h2')
            ask.textContent = 'yes, i know, becouse u are going to sambo'
            askToQuestion.appendChild(ask)
        })
    })
    // button.addEventListener('mouseout', () => {
    //     alert('mouse on a button')
    // })
});
