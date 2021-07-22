//! bind


let age = 100;

function foo () {
  console.log(this.age);
}

let ken = {
  age: 34
};

let bar = foo.bind(ken);

bar();

/*
let age = 100;

function foo () {
  console.log(this.age);
  console.log(arguments);
}

let ken = {
  age: 34
};

let bar = foo.bind(ken);

bar(1,2,3,4,5);
*/