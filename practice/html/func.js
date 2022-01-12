//api search type = title (title, contents);
//search - text = 검색어 ;
//검색기능, 사진 버그 수정, velog뭐 써여했는데..? 머드라... [게시글 구현이였을 듯]


//검
let page = 0;
let maxPage = 10;
document.getElementById("left").addEventListener("click", () => {
  left();
});

document.getElementById("right").addEventListener("click", () => {
  right();
});

function left() {
  console.log("exec left");
  if(page > 0) {
    page--;
    document.getElementById("page").textContent = page;
  }
}

function right() {
  if(maxPage > page) {
    console.log("exec right");
    page++;
    document.getElementById("page").textContent = page;
  }
}

window.location.href
// http://localhost:8080/contents?type=0

window.location.protocol
// http:

window.location.host
// localhost:8080

window.location.hostname
//localhost

window.location.port
//8080

window.location.pathname
// /contents

window.location.search
// // ?type=0

var target = typeof window.location.href;
console.log(target);

