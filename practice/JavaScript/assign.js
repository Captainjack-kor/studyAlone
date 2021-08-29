// Object.assign() : 객체 복제
// 기존으로 할당하면 주소 값만 복사가 됨.

let user = { 
  name: "Mike", age: 30 
};

//const newUser = Object.assign({}, user);
const newUser = Object.assign({ gender: 'male'}, user); //초기값을 주는 경우

// console.log(newUser);


// Object.keys: 키 반환 , Object.values: 값 반환

let user2 = {
  name: "mike", 
  age: 20,
  sex: "male",
}; 

let result2 = Object.entries(user2);

// console.log(result2);

const arr = [
  ["name", "jack"],
  ["Age", 30]
];
console.log(Object.fromEntries(arr)); // 배열을 다시 객체로