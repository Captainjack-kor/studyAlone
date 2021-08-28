// Object.assign() : 객체 복제
// 기존으로 할당하면 주소 값만 복사가 됨.

let user = { 
  name: "Mike", age: 30 
};

//const newUser = Object.assign({}, user);
const newUser = Object.assign({ gender: 'male'}, user); //초기값을 주는 경우

console.log(newUser);