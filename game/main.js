// Убедимся, что DOM полностью загружен
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элемент кнопки по ID
    const button = document.getElementById('myButton');
    const divButton = document.getElementById('divButton')

    button.addEventListener('click', () => {
        const newtext = document.createElement('h1')
        newtext.textContent = 'HELLO WORLD'
        divButton.appendChild(newtext)
    })
    // button.addEventListener('mouseout', () => {
    //     alert('mouse on a button')
    // })
});
