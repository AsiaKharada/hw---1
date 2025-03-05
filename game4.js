const quizGameButton = document.getElementById(`quizGameButton`);
quizGameButton.addEventListener(`click`, playQuizGame);


function playQuizGame() {
    const quiz = [
        {
            question: "Какого цвета трава летом?",
            options: ["1. Красного", "2. Зеленого", "3. Синего"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2  // номер правильного ответа
        },
        {
            question: "Сколько будет ромашек у Аси, если 3 ромашки ей подарила мама и пять ромашек папа?",
            options: ["1. Восемь ",  "2. Двадцать", "3. Десять"],
            correctAnswer: 1  // номер правильного ответа
        }      
        ];
        const userCorrectAnswer = ['Зеленого','Семь', "Восемь"]
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
