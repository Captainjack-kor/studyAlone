//! call, apply

let age =  100;

function foo (a, b, c, d, e) {
  console.log(this.age);
  console.log(arguments);
}

let ken = {
  age: 35
};


//foo.call(ken, 1, 2, 3, 4, 5);
//foo.apply(ken, [1, 2, 3, 4, 5]);
