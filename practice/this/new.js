//! new 

function foo () {
  console.log(this);
}

new foo();

/*
function Car(brand, name, color) {
  this.brand = brand;
  this.name = name;
  this.color = color;
}

let avante = new Car('hyundai', 'avante' , 'red');

Car.prototype.drive = function() {
  console.log(this.name + '입니다.');
}

avante.drive();
*/

function foo () {
  this.name = 'hi';
}

let test = new foo();

console.log(test);