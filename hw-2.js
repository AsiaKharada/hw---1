//Task 1

alert(`Привет`);
alert(`Привет`);

//Task 2

let i = 1;
k = 5;
while(i <= k){
    console.log(i);
    i += 1;
}

//Task 3

let a = 7;
b = 22;
while(a <= b){
    console.log(a);
    a += 1;
}

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