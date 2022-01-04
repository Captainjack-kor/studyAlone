function getData2(callbackFunc) {
  //
  setTimeout(function(response){
    console.log("로딩중입니다!!!");
    callbackFunc(response);
  }, 3000)
	// $.get('https://domain.com/products/1', function(response) {
	// 	callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
	// });
}

getData2(function(tableData) {
	console.log("here is!"); // $.get()의 response 값이 tableData에 전달됨
});


//

// new Promise(function(resolve, reject) {
//   resolve();
// });

function getData() {
  return new Promise(function(resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function(resolvedData) {
  console.log(resolvedData); // 100
});