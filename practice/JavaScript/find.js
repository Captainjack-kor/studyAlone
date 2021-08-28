// find / findIndex / filter

// let arr = [1, 2, 3, 4, 5];

// const result = arr.find((item) => {
//     return item % 3 === 0;
// });

// const result = arr.filter((item) => {
//       return item % 2 === 0;
// });

let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 19 },
];

const result = userList.filter((user) => {
  if(user.age > 19){
    return true;
  }
  return false;
});


// console.log(result);
console.log(result);