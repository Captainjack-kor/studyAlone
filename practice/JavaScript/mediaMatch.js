window.onload = function () {
  if (matchMedia("screen and (max-width: 991px)").matches) {
    let check_btn_list = document.getElementsByClassName('dropdown mid_title_el')[2].style.display;
    if(check_btn_list !== "none") {
      document.getElementsByClassName('dropdown mid_title_el')[0].style.display = "none";
    }
  } else {
    document.getElementsByClassName('dropdown mid_title_el')[0].style.display = "block";
  }
}

window.addEventListener("resize", function() {
  if (matchMedia("screen and (max-width: 991px)").matches) {
    let check_btn_list = document.getElementsByClassName('dropdown mid_title_el')[2].style.display;
    if(check_btn_list !== "none") {
      document.getElementsByClassName('dropdown mid_title_el')[0].style.display = "none";
    }
  } else {
    document.getElementsByClassName('dropdown mid_title_el')[0].style.display = "block";
  }
})