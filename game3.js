const guessFlipText = document.getElementById(`guessFlipText`);
guessFlipText.addEventListener(`click`, playGuessGame)


function guessFlipText() {
    let userText = prompt('Введите текст, которую нужно перевернуть');
    userText = userText.split("").reverse(" ").join("")
    alert(userText)
}