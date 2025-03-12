// МАССИВЫ

// Task 1

const a = [1, 5, 4, 10, 0, 3];
let i = 0;
while (i < a.length) {
    i++;
    console.log(a[i])
    if (a[i] === 10) {
        break;
    }   
}   

// Task 2
i = 0
const  b = [1, 5, 4, 10, 0, 3];
while (i < b.length ) {
    i++;
    if (b[i] === 4) {
        console.log(i)
        break;
        
    } 
}
// Task 3
const c = [1, 3, 5, 10, 20]
cd = c.join(' ')
console.log(cd)

// Task 4
const multiArray = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    multiArray.push(row);
}

console.log(multiArray);

// Task 5

const e = [1, 1, 1];
e.push(2,2,2)
console.log(e)

// Task 6

const f = [9, 8, 7, 'a', 6, 5];
fe = f.sort();
f.pop()
console.log(f)

// Task 7

const fs = [9, 8, 7, 6, 5];
i = 0;
const userAnswer = +prompt('Угадай число')

if (fs.includes(userAnswer)) {
    alert('Угадал')
} else {
    alert('Не угадал')
}


// Task 8

let  str = 'abcdef';
str = str.split('');
console.log(str)
str.reverse();
str = str.join('');
console.log(str)

// Task 9

const arr = [[1, 2, 3],[4, 5, 6]];
const newAr = [];
for (let i = 0;i < arr.length;i++ ){
    newAr.push(...arr[i])
}
console.log(newAr)


// Task 10

function filterNegativeNumbers(arr) {
    return arr.filter((num) => num < 0);
}

const numbers = [5, -3, 8, -1, 0, -7, 10, -2];
const negativeNumbers = filterNegativeNumbers(numbers);

console.log("Исходный массив:", numbers);
console.log("Массив с отрицательными значениями:", negativeNumbers);

// Task 11

function qarr(a) {
    return a.map(item => item ** 2);
}
console.log (qarr([1, 4, 3]))


// Task 12

function functions(a) {
    return a.map(item => item.length);
}
console.log (functions(['sdcxsc', 'xaxa']))




// Task 13

const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1);
console.log("Исходный массив:", array);

for (let i = 0; i < array.length - 1; i++) {
    const currentElement = array[i];
    const nextElement = array[i + 1];
    const sumElements = currentElement + nextElement;
    console.log(`Сумма элементов ${currentElement} и ${nextElement}: ${sumElements}`);
}

// Task 14

const originalArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
const evenArray = [];

for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] % 2 === 0) { 
        evenArray.push(originalArray[i]); 
    }
}

console.log("Исходный массив:", originalArray);
console.log("Массив с четными значениями:", evenArray);



// Task 15

function randomNum() {
    return Math.floor(Math.random() * 6);
}
const arrwq =[]
console.log(arrwq)
for (let i = 0; i < 6;i++){
    arrwq.push(randomNum())
}
console.log(arrwq.reduce((a,b) => a + b) / arrwq.length);

