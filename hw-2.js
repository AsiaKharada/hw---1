//Task 1
alert(`Привет`);
alert(`Привет`);

//Task 2
let i = 1;
const k = 5;
do{
    console.log(i);
    i++;
} while(i <= k);

//Task 3
let a = 7;
const b = 22;
do{
    console.log(a);
  a++;
} while(i <= b);

//Task 4
const obj = {
    "Коля" : "200" ,
    "Вася" : "300",
    "Петя" : "400"  
    };
for (const name in obj){
    console.log(`${name} - зарплата 
        ${obj[name]} долларов`);
}

//Task 5 
let n = 1000;
let num = 0;

write( n >= 50); {
    n /= 2;
    num++;
}

console.log(`результат: %{n}`);
console.log(`количество циклов: ${num}`);