const quizGameButton = document.getElementById(`quizGameButton`);
quizGameButton.addEventListener(`click`, playQuizGame);


function playQuizGame() {
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Синего", "2. Зеленого", "3. Красного"],
            correctAnswer: 1 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2  // номер правильного ответа
        },
        {
            question: "Сколько пальцев у человека на одной руке?",
            options: ["1. Четыре ",  "2. Пять", "3. Шесть"],
            correctAnswer: 2  // номер правильного ответа
        }      
        ];
        const userCorrectAnswer = ['Синего','Семь', "Пять"]
           let i = 0; 
           let a = 0;
    while ( a < 3) {
        let userAnswer = prompt(`         ${quiz[a].question} 
            ${quiz[a].options}` 
        );
        if (userAnswer === null) {
            alert(`Игра отменена`)
            break;
        } else
        if (parseInt(userAnswer) === quiz[a].correctAnswer || userAnswer.toLowerCase() === userCorrectAnswer[i].toLowerCase()) {
            i++;
            a++;
        } else
        {    
            a++;        
            }
        }
        alert(`Правильных ответов:  ${i}`)
}
