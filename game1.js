const guessNumberButton = document.getElementById(`guessNumberButton`);
guessNumberButton.addEventListener(`click`, playGuessGame)


        function guessNumberButton() {
            const answer = Math.floor((Math.random() * 100) + 1)
            console.log(answer)
            userAnswer = parseInt(prompt('Угадай число то 1 до 100'))
            while (userAnswer !== answer) {
                if (!userAnswer){
                    alert('Пользователь отменил игру')
                    return;
                }    
                if (userAnswer === answer) {
                    
                    return;
                }
                else  if (userAnswer > answer){
                    userAnswer = parseInt(prompt('Меньше' + ' ' + userAnswer))
                    
                }
                else if (userAnswer < answer){
                    userAnswer = parseInt(prompt( 'Больше'+ ' ' + userAnswer))       
                }
                else {
                    userAnswer = parseInt(prompt(userAnswer + '- Это не число, напиши число !!! '))
                }
                
                } 
                alert('Правильно!')
                console.log('Игра завершена')
            }    