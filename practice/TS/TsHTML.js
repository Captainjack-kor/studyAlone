var title = document.querySelector('#title');
if (title != null) {
    title.innerHTML = '반가워요';
}
if (title instanceof Element) {
    title.innerHTML = '반가워요';
}
if (title === null || title === void 0 ? void 0 : title.innerHTML) { //제목 innerHTML 있으면 출력, 없으면 undefined;
    title.innerHTML = '반가워요';
}
console.log(title);
