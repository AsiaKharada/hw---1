const guessNumberButton = document.getElementById(`guessNumberButton`);
guessNumberButton.addEventListener(`click`, playGuessGame);


        function playGuessGame() {
            let  answer = Math.floor(Math.random() * 100);
            console.log(answer);
            let userAnswer = parseInt(prompt('Угадай число то 1 до 100'));
            while (userAnswer !== answer) {
                if (isNaN(userAnswer)) {
                    alert('Это не число, попробуйте снова!');
                } else if (userAnswer > answer) {
                    userAnswer = parseInt(prompt('Меньше ' + userAnswer));
                } else if (userAnswer < answer) {
                    userAnswer = parseInt(prompt('Больше ' + userAnswer));
                }
        
                if (userAnswer === null) {
                    alert('Пользователь отменил игру');
                    return;
                }
            }
        
            alert('Правильно!');
            console.log('Игра завершена');
        }