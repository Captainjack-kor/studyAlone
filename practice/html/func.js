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
