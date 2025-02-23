// Task 1

function Min( a, b ){
    alert( (a<b)? a : b );
    }
    
    Min(4, 8);


// Task 2
 
function even_or_odd() {
let n = Number (prompt (`введите число`));
if (n % 2 === 0){
    return console.log(`число четное`) ;
} else { 
    return console.log(`число не четное`) ;
}
};

// Task 3 
//1) 

let number = 5;
 function func(number) {
  console.log(number ** 2);
}

//2)

let num = 4;
function square(num) {
    return num * num;
  }

  // Task 4
  
  prompt(`Сколько Вам лет?`);
  function f(age){
   if( age <= 0 ){
    console.log(`Вы ввели неправильное значение`);
   } if (age >= 0 && 12 ){
    console.log(`Привет, друг!`);
   } if(age >= 13){
    console.log(`Добро пожаловать!`);
   }
  }

  // Task 7

  const circle1 = {
    radius: 5,
    getArea: function() {
      return Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  const circle2 = {
    radius: 10,
    getArea: function() {
      return Math.PI * Math.pow(this.radius, 2);
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };

// Task 5 
