
fetch('url', {
  method: 'POST',
})
.then(response => response.json())
.then(data => { 
  console.log(data);
  const _picture = data.list.length;

  let nowPage = 1;

  let arr = [
    {
      idx: "",
      picture: "",
    },
  ];

  // 글이 들어가는게 아니고 사진이 들어가야 함
  for(let i = 0; i < _picture; i++) {
    arr.push([
      {
        idx: `${i}`,
        picture: data.list[i].img_url_main,
      }
    ])
  }

  // let setArr = arr.length;
  // console.log(setArr);

  arr.shift(); //초기 하나 뺴주기\

  let fix_arr = arr.length;

  let arrEl = "";
  let superArr = [];
  let tempArr = [];

  let displayBoardNum = 9; //! 한 화면에 보여주는 게시글 갯수
  let displayButtonNum = 4; //! 한 화면에 보여주는 하단 버튼의 갯수
  let maxPage = Math.ceil(_picture / displayBoardNum); //! 실제 데이터 오면 길이 설정해줘야할 듯

  // console.log(arr);

  // let body = document.getElementsByTagName('body')[0];
  // // //* body.append(detail_view);

  // arr.forEach((el) => {
  //   console.log(el[0]);
  //   let detail_view = document.createElement('img');
  //   detail_view.className = "img_detail_view";
  //   detail_view.setAttribute("src", `${el[0].picture}`);
  // })

  // arr.forEach((el, idx) => {
  //   console.log(idx);
  //   let body = document.getElementsByTagName('body')[0];
  //   let gallery_pic_list = document.getElementsByClassName('gallery_pic_list')[0];

  //   let detail_view = document.createElement('img');
  //   detail_view.className = "img_detail_view";
  //   detail_view.setAttribute("src", `${el[0].picture}`);
  //   detail_view.onclick = overlay_close;

  //   let li = document.createElement('li');
  //   li.className = 'col-sm-4';
  //   li.classList.add('container00');
  //   li.setAttribute("li_gubun", "");

  //   let img = document.createElement('img');
  //   img.className = 'gallery_img'
  //   img.setAttribute("src", `${el[0].picture}`);

  //   let main_div = document.createElement('div');
  //   main_div.className = 'overlay00';
  //   main_div.classList.add(`detail_view_img${idx}`);
  //   // main_div.onclick = exec_detail_view;

  //   let div = document.createElement('div');
  //   div.className = "content00";
  //   let i = document.createElement('i');
  //   i.className = "fa";
  //   i.classList.add("fa-search-plus", "i_effect");

  //   // div.append(i);
  //   // main_div.append(div);

  //   // li.append(img);
  //   // li.append(main_div);

  //   // gallery_pic_list.append(li);
  //   // body.append(detail_view);
  // })

  while(arr.length > 0) {  
    for(let j = 0; j < displayBoardNum; j++) {
      if(arr.length !== 0) {
        arrEl = arr.shift(); 
        tempArr.push(arrEl[0]);
      }
    }
    superArr.push(tempArr);
    tempArr = [];
  }

  // console.log(superArr);

  let appendTest = document.getElementsByClassName('lastName')[0];
  let pageBtn = document.getElementsByClassName('pageBtn')[0];
  let pageBtnLArrow = document.getElementsByClassName('pageBtnLArrow')[0];
  let pageBtnRArrow = document.getElementsByClassName('pageBtnRArrow')[0];

  let leftMoveBtn = document.createElement('button');
  let left_Btn_img = document.createElement('img');
  left_Btn_img.className = "board_left_Btn_img";
  left_Btn_img.setAttribute("src", src="assets/images/leftBtnImg.png");
  leftMoveBtn.onclick = left;
  leftMoveBtn.className = 'left';

  leftMoveBtn.append(left_Btn_img);

  let rightMoveBtn = document.createElement('button');
  let right_Btn_img = document.createElement('img');
  right_Btn_img.className = "board_right_Btn_img";
  right_Btn_img.setAttribute("src", "assets/images/rightBtnImg.png");

  rightMoveBtn.onclick = right;
  rightMoveBtn.className = "right";

  rightMoveBtn.append(right_Btn_img);


  let pageNum = 0;
  let buttonArr = [];

  let pagingArr = [];
  let check = 1;

  //! button 출력 부분

  pageBtnLArrow.append(leftMoveBtn);
  pageBtnRArrow.append(rightMoveBtn);

  while(superArr.length > pageNum) {
    var pBtn = document.createElement('button');
    pBtn.className = 'buttonGap'; //^^;;
    pageNum++;
    pBtn.classList.add(`button${pageNum}`);
    pBtn.textContent = pageNum;
    pageBtn.append(pBtn);
  }

  const removeAll_button = document.getElementsByClassName('buttonGap');

  let _tempArr = [];

  for(let i = 0; i < removeAll_button.length; i++) {
    _tempArr.push(removeAll_button[i]);
  }

  // console.log(removeAll_button);
  // console.log(_tempArr);

  if(superArr.length < displayButtonNum) {
    displayButtonNum = superArr.length;
  }

  let newArr = [];

  while(_tempArr.length > 0) {
    let head = _tempArr.shift();
    if(newArr.length != displayButtonNum - 1) {
    // if(newArr.length !== superArr.length) {
      newArr.push(head);
      if(_tempArr.length === 0) {
        buttonArr.push(newArr);
      }
    } else {
      newArr.push(head);
      buttonArr.push(newArr);
      newArr = [];
    }
  }

  //* 이미지 뿌리기

  superArr[0].forEach((el, idx) => {
    let gallery_pic_list = document.getElementsByClassName('gallery_pic_list')[0];

    let detail_view = document.createElement('img');
    detail_view.className = "img_detail_view";
    // detail_view.classList.add(`detail_view_img${idx}`);

    detail_view.setAttribute("img_gubun", "");
    detail_view.setAttribute("src", `${el.picture}`);
    // detail_view.oncxlick = overlay_close;


    let li = document.createElement('li');
    li.className = 'col-sm-4';
    li.classList.add('container00');
    li.setAttribute("li_gubun", "");

    let img = document.createElement('img');
    img.className = 'gallery_img';
    img.setAttribute("src", `${el.picture}`);

    let main_div = document.createElement('div');
    main_div.className = 'overlay00';
    main_div.classList.add(`detail_view_img${el.idx}`);
    // main_div.onclick = exec_detail_view;

    let div = document.createElement('div');
    div.className = "content00";
    let i = document.createElement('i');
    i.className = "fa";
    i.classList.add("fa-search-plus", "i_effect");

    div.append(i);
    main_div.append(div);

    li.append(img);
    li.append(main_div);

    gallery_pic_list.append(detail_view);
    gallery_pic_list.append(li);
  })

  // for(let i = 0; i < displayBoardNum; i++) {
  //   let test = document.getElementsByClassName(`detail_view_img${i}`)[0];
  //   // if()
  //   console.log(test);
  // }

  for(let i = 1; i <= fix_arr; i++) {
    const check = document.getElementsByClassName(`detail_view_img${i}`)[0];
    if(check) {
      document.getElementsByClassName(`detail_view_img${i}`)[0].addEventListener("click", function(){
        // console.log(i);
        exec_detail_view(i);
        // overlay_close(i);
      });
      }
  }

  window.onload = function(){
    paging_button_gubun(1);
    setButtonColor(1);
  }
  
  let paging_button_gubun = (nowPage) => {
    if(nowPage <= displayButtonNum) {
      const removeAll_button = document.getElementsByClassName('buttonGap');
      let tempArr = [];
      for(let i = 0; i <removeAll_button.length; i++) {
        tempArr.push(removeAll_button[i]);
      }
      // console.log(tempArr);
      tempArr.forEach(function(el){
        el.remove();
      })

      for(let i = 0; i < displayButtonNum; i++) {
        pageBtn.append(buttonArr[0][i]);
      }

    } else {
      let setPage = Math.ceil(nowPage / displayButtonNum);
      const removeAll_button = document.getElementsByClassName('buttonGap');
      let tempArr = [];
      for(let i = 0; i < removeAll_button.length; i++) {
        tempArr.push(removeAll_button[i]);
      }
      tempArr.forEach(function(el){
        el.remove(); 
      })

      for(let i = 0; i < displayButtonNum; i++) {
        if((buttonArr[setPage - 1][i])) {
          pageBtn.append(buttonArr[setPage - 1][i]);
        }
      }
    }
  }
  paging_button_gubun(1);
    

  function setButtonColor(num) {
    for(let i = 0; i <= maxPage; i++) {
      var init = document.getElementsByClassName(`button${i}`)[0];
      if(init) {
        init.style.backgroundColor = "white";
        init.style.border = "1px solid lightgray";
        init.style.height = "50px";
        init.style.width = "50px";
        init.style.color = "black";
        init.style.fontWeight = "bold";
      }
      
    }

    var setTargetColor = document.getElementsByClassName(`button${num}`)[0];
    setTargetColor.style.backgroundColor = "rgba(80,80,80,255)";
    setTargetColor.style.color = "white";
  }

  setButtonColor(1);

  for(let i = 0; i < maxPage; i++) {
    document.getElementsByClassName(`button${i + 1}`)[0].addEventListener("click", function(){
      nowPage = i + 1;

      paging_button_gubun(nowPage);
      setButtonColor(nowPage);

      const removeAll_li = document.querySelectorAll('[li_gubun]');
      removeAll_li.forEach(function(el){
        el.remove();
      });

      superArr[i].forEach((el, idx) => {
        let body = document.getElementsByTagName('body')[0];
        let gallery_pic_list = document.getElementsByClassName('gallery_pic_list')[0];

        let detail_view = document.createElement('img');
        detail_view.className = "img_detail_view";
        detail_view.setAttribute("img_gubun", "");
        // detail_view.classList.add(`detail_view_img${idx}`);
        detail_view.setAttribute("src", `${el.picture}`);
        // detail_view.oncxlick = overlay_close;

        let li = document.createElement('li');
        li.className = 'col-sm-4';
        li.classList.add('container00');
        li.setAttribute("li_gubun", "");

        let img = document.createElement('img');
        img.className = 'gallery_img';
        img.setAttribute("src", `${el.picture}`);

        let main_div = document.createElement('div');
        main_div.className = 'overlay00';
        main_div.classList.add(`detail_view_img${el.idx}`);
        // main_div.onclick = exec_detail_view;

        let div = document.createElement('div');
        div.className = "content00";
        let i = document.createElement('i');
        i.className = "fa";
        i.classList.add("fa-search-plus", "i_effect");

        div.append(i);
        main_div.append(div);

        li.append(img);
        li.append(main_div);

        gallery_pic_list.append(detail_view);
        gallery_pic_list.append(li);
      })
      match_img_Num();
    });
    
  }

  function left() {
    if(nowPage <= 1) {
      nowPage = 1;
    } else {
      nowPage--;
    }

    // console.log(nowPage);
    paging_button_gubun(nowPage);
    setButtonColor(nowPage);

    const removeAll_li = document.querySelectorAll('[li_gubun]');
    removeAll_li.forEach(function(el){
      el.remove();
    });

    // const removeAll_img = document.querySelectorAll('[img_gubun]');
    // removeAll_img.forEach(function(el){
    //   el.remove();
    // });

    superArr[nowPage - 1].forEach((el, idx) => {
      let gallery_pic_list = document.getElementsByClassName('gallery_pic_list')[0];

      let detail_view = document.createElement('img');
      detail_view.className = "img_detail_view";
      // detail_view.classList.add(`detail_view_img${idx}`);

      detail_view.setAttribute("img_gubun", "");
      detail_view.setAttribute("src", `${el.picture}`);
      // detail_view.oncxlick = overlay_close;


      let li = document.createElement('li');
      li.className = 'col-sm-4';
      li.classList.add('container00');
      li.setAttribute("li_gubun", "");

      let img = document.createElement('img');
      img.className = 'gallery_img';
      img.setAttribute("src", `${el.picture}`);

      let main_div = document.createElement('div');
      main_div.className = 'overlay00';
      main_div.classList.add(`detail_view_img${el.idx}`);
      // main_div.onclick = exec_detail_view;

      let div = document.createElement('div');
      div.className = "content00";
      let i = document.createElement('i');
      i.className = "fa";
      i.classList.add("fa-search-plus", "i_effect");

      div.append(i);
      main_div.append(div);

      li.append(img);
      li.append(main_div);

      gallery_pic_list.append(detail_view);
      gallery_pic_list.append(li);
    })
    match_img_Num();
  }

  function right() {
    if(nowPage >= superArr.length - 1) {
      nowPage = superArr.length;
    } else {
      nowPage++;
    }

    paging_button_gubun(nowPage);
    setButtonColor(nowPage);

    const removeAll_li = document.querySelectorAll('[li_gubun]');
    removeAll_li.forEach(function(el){
      el.remove();
    });

    // const removeAll_img = document.querySelectorAll('[img_gubun]');
    // removeAll_img.forEach(function(el){
    //   el.remove();
    // });

    superArr[nowPage - 1].forEach((el, idx) => {
      let gallery_pic_list = document.getElementsByClassName('gallery_pic_list')[0];

      let detail_view = document.createElement('img');
      detail_view.className = "img_detail_view";

      detail_view.setAttribute("img_gubun", "");
      // detail_view.classList.add(`detail_view_img${idx}`);
      detail_view.setAttribute("src", `${el.picture}`);
      // detail_view.oncxlick = overlay_close;

      let li = document.createElement('li');
      li.className = 'col-sm-4';
      li.classList.add('container00');
      li.setAttribute("li_gubun", "");

      let img = document.createElement('img');
      img.className = 'gallery_img';
      img.setAttribute("src", `${el.picture}`);

      let main_div = document.createElement('div');
      main_div.className = 'overlay00';
      main_div.classList.add(`detail_view_img${el.idx}`);
      // main_div.onclick = exec_detail_view;

      let div = document.createElement('div');
      div.className = "content00";
      let i = document.createElement('i');
      i.className = "fa";
      i.classList.add("fa-search-plus", "i_effect");

      div.append(i);
      main_div.append(div);

      li.append(img);
      li.append(main_div);

      gallery_pic_list.append(detail_view);
      gallery_pic_list.append(li);
    })

    match_img_Num();
  }

  let popup = false;

  function exec_detail_view(idx) {
    // if(idx >= 0) {
    //   idx -= 1;
    // }

    if(!popup) {
      document.getElementById('block_bg').style.display = "block";
      document.getElementsByClassName('img_detail_view')[idx].style.display = "block";
      popup =  true;
    }
    // document.getElementsByClassName(`detail_view_img${idx}`)[0].style.display = "block";
  }

  function overlay_close() {
    document.getElementById('block_bg').style.display = "none";
    for(let i = 0; i <= fix_arr; i++) {
    // for(let i = 0; i < displayBoardNum; i++) {
      // body.append(this.img_detail_view);
      let check = document.getElementsByClassName('img_detail_view')[i];
      if(check) {
        document.getElementsByClassName('img_detail_view')[i].style.display = "none";
        popup = false;
      }
    }
  }

  function match_img_Num() {
    for(let i = 1; i <= fix_arr; i++) {
      // console.log(fix_arr);
      // console.log(i);

      const check = document.getElementsByClassName(`detail_view_img${i}`)[0];
      if(check) {
        document.getElementsByClassName(`detail_view_img${i}`)[0].addEventListener("click", function(){
          exec_detail_view(i);
          // overlay_close();
        });
      }
    }
  }
})