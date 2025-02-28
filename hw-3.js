// ФУНКЦИИ

// Task 1

function minValye(a, b) {
  if (a < b) {
      return a;
  } else {
      return b
  }
}
console.log(minValye(6, 10))
console.log(minValye(5, 5))

// Task 2
 
function checkingForParity(a) {
  if (a % 2 === 0) {
      return 'Число четное'
  } else {
      return 'Число нечетное'
  }
}
console.log(checkingForParity(5))

// Task 3 

function numSquared(a){
  b = a ** 2
  return b
  
}
console.log(numSquared(5))
console.log(b)

  // Task 4
  
  function whatAge(age){
    if (age < 0) {
        alert('Вы ввели неправильное значение')
    } else if ((age === 0) || (age <= 12)){
        alert('Привет, друг!')
    } else if (age >= 13){
        alert('Добро пожаловать!')
    }else {
        alert ('Где-то опечатка. Попробуйте заново')
    }
}
(whatAge((prompt('Сколько тебе лет?'))))

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

function mult(a, b){
  isNaN(a, b)
  if (isNaN(a, b) === false) {
      return a * b
  }
   else {
      alert('Одно или оба значения не являются числом');
  }
}
console.log(mult(6, 3))


// Task 6

function numCube(n) {
  isNaN(n)
  if (isNaN(n) === false) {

      return n  + ' в кубе равняется ' + n**3 
  } else {
      return 'Переданный параметр не является числом'
  }
}
console.log(numCube(prompt('Введи число, которое нужно возвести в куб')))