let title = document.querySelector('#title') as Element;

if(title != null) {
  title.innerHTML = '반가워요';
}

if(title instanceof Element) {
  title.innerHTML = '반가워요';
}

if(title?.innerHTML) { //제목 innerHTML 있으면 출력, 없으면 undefined;
  title.innerHTML = '반가워요';
}
console.log(title);
