const flipTextButton = document.getElementById(`flipTextButton`);
flipTextButton.addEventListener(`click`, playTextGame)


function playTextGame() {
    let userText = prompt('Введите текст, которую нужно перевернуть');
    userText = userText.split("").reverse(" ").join("");
    alert(userText);
}