// CALLBACK, SETTIMEOUT, SETINTERVAL

// tASK 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
const sortedPeople = people.sort((a, b) => a.age - b.age);
 console.log(people.sort(sortedPeople));

 // Task 2
 function isPositive(num) {
       return num > 0
     }
     function isMale(person) {
        return person.gender === "male";
    }
    function filter(arr,ruleFunction) {
        const a =[];
        for (let i = 0; i < arr.length; i++) {
           if (ruleFunction(arr[i])){
                a.push(arr[i])
           }
        }
        return a
    }
   
    console.log(filter([3, -4, 1, 9], isPositive));
   
    const human = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
   
    console.log(filter(human, isMale));

    // Task 3
const interval = 3000; // 3 секунды
const duration = 30000; // 30 секунд
let elapsed = 0;

const timer = setInterval(() => {
    console.log(new Date().toLocaleString());
    elapsed += interval;
    if (elapsed >= duration) {
        clearInterval(timer);
        console.log("30 секунд прошло");
    }
}, interval);


    // Task 4
    function delayForSecond(callback) {
           setTimeout(callback, 2000);
        }
       
        delayForSecond(function () {
           console.log('Привет, Глеб!');
        });


    // Task 5
    function delayForSecond(cb) {
        setTimeout(() => {
            console.log('Прошла одна секунда');
            if(cb) {  cb(); }
        }, 1000)
    }
    
    
    function sayHi (name) {
        console.log(`Привет, ${name}!`);
    }
    
    // Код выше менять нельзя
    delayForSecond(() => sayHi('Глеб'));

    
