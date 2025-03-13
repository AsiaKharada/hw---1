const flipTextButton = document.getElementById(`flipTextButton`);
flipTextButton.addEventListener(`click`, playTextGame)


function playTextGame() {
    let userText = prompt('Введите текст, который нужно перевернуть');
    userText = userText.split("").reverse(" ").join("");
    alert(userText);
   
        if (userText === null || userText === '') {
            alert('Игра отменена.');
            return;
        }
}
