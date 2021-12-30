//* 아래코드는 공지사항 메인으로 사용하는 부분에 넣을 예정
// fetch('http://URL/api/api_notice_list.php', {
//   method: 'POST',
//   body: new URLSearchParams({
//     state: "kor"
//   })
// })
// .then(res => res.json())
// .then(data => {
//   console.log(data.main_list[0]);
//   document.getElementsByClassName('_23_board_title1')[0].innerText = data.main_list[0].title;
//   document.getElementsByClassName('_23_board_title2')[0].innerText = data.main_list[0].contents;
//   document.getElementsByClassName('_23_board_title3')[0].innerText = data.main_list[0].name;
//   document.getElementsByClassName('_23_board_title4')[0].innerText = data.main_list[0].reg_date;
//   document.getElementsByClassName('_23_board_title5')[0].innerText = data.main_list[0].p_count;
// });
//*

function getContents(){
  const response = fetch('http://URL/api/api_notice_list.php', {
    method: 'POST',
    body: new URLSearchParams({
      state: "kor"
    })
  })
  return response.then(res => res.json())

  // .then(data => {return data});
}



getContents
async function exec(){
  try {
    data = await getContents();
    
    console.log(data)
    let _page = data.list.length;

    //* example
    let arr = [
      {
        idx: "",
        postTitle: "",
        postWriter: "",
        postResultDate: "",
        postCount: "",
      }
    ]
    
    for(let i = 0; i < _page; i++) {
      arr.push([
        {
          idx: data.list[i].idx,
          postTitle: data.list[i].title,
          postWriter: data.list[i].name,
          postResultDate: data.list[i].reg_date.substring(0, 10),
          postCount: data.list[i].reg_date,
        }
      ])
    }
    
    
    //버튼에 따른 필터 뿌리기... 내일 해보자
    let boardCount = document.getElementsByClassName('lastName')[0].childElementCount;
    
    let nowPage = 1;
    
    arr.shift(); //초기 하나 뺴주기
    
    let superArr = [];
    let arrEl = "";
    
    let obj = {
      idx: [],
      postTitle: [],
      postWriter: [],
      postResultDate: [],
      postCount: [],
    }
    
    let displayBoardNum = 15; //! 한 화면에 보여주는 게시글 갯수
    let displayButtonNum = 4; //! 한 화면에 보여주는 하단 버튼의 갯수
    let maxPage = Math.ceil(_page / displayBoardNum); 
    
    while(arr.length > 0) {  
      for(let j = 0; j < displayBoardNum; j++) {
        if(arr.length !== 0) {
          arrEl = arr.shift(); // 5번 빠진걸
    
          obj.idx.push(arrEl[0].idx);
          obj.postTitle.push(arrEl[0].postTitle);
          obj.postWriter.push(arrEl[0].postWriter);
          obj.postResultDate.push(arrEl[0].postResultDate);
          obj.postCount.push(arrEl[0].postCount);
        }
        
      }
      superArr.push(obj);
      obj = {
        idx: [],
        postTitle: [],
        postWriter: [],
        postResultDate: [],
        postCount: [],
      }
    }
    
    // console.log("🚀 superArr", superArr);
    
    let appendTest = document.getElementsByClassName('lastName')[0];
    var trTest = document.createElement('tr');
    let pageBtn = document.getElementsByClassName('pageBtn')[0];
    let pageBtnLArrow = document.getElementsByClassName('pageBtnLArrow')[0];
    let pageBtnRArrow = document.getElementsByClassName('pageBtnRArrow')[0];
    
    let leftMoveBtn = document.createElement('button');
    let left_Btn_img = document.createElement('img');
    left_Btn_img.className = "board_left_Btn_img";
    left_Btn_img.setAttribute("src", src="assets/images/leftBtnImg.png");
    // <img src="assets/images/leftBtnImg.png" />
    
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
    
    let pagingArr = [];
    let check = 1;
    
    pageBtnLArrow.append(leftMoveBtn);
    
    let pageNum = 0;
    let buttonArr = [];
    
    // console.log(superArr);
    while(superArr.length > pageNum) {
      var pBtn = document.createElement('button');
      pBtn.className = 'buttonGap'; //^^;;
      pageNum++;
      pBtn.classList.add(`button${pageNum}`);
      pBtn.textContent = pageNum;
      pageBtn.append(pBtn);
    }
      const removeAll_button = document.getElementsByClassName('buttonGap');
    
      let tempArr = [];
    
      for(let i = 0; i < removeAll_button.length; i++) {
        tempArr.push(removeAll_button[i]);
      }
    
      if(superArr.length < displayButtonNum) {
        displayButtonNum = superArr.length;
      }
    
      let newArr = [];
      while(tempArr.length > 0) {
        let head = tempArr.shift();
        if(newArr.length !== displayButtonNum - 1) {
          newArr.push(head);
          if(tempArr.length === 0) {
            buttonArr.push(newArr);
          }
        } else {
          newArr.push(head);
          buttonArr.push(newArr);
          newArr = [];
        }
      }
      // console.log(buttonArr); 
    
    // console.log(tempArr);
    
    window.onload = function() {
      paging_button_gubun(1);
      setButtonColor(1);
    }
    
    let paging_button_gubun = (nowPage) => {
      if(nowPage <= displayButtonNum) {
        const removeAll_button = document.getElementsByClassName('buttonGap');
        let tempArr = [];
        for(let i = 0; i < removeAll_button.length; i++) {
          tempArr.push(removeAll_button[i]);
        }
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
        for(let i = 0; i <removeAll_button.length; i++) {
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
    
    pageBtnRArrow.append(rightMoveBtn);
    
    superArr[0].idx.forEach((el, idx) => {
      var trTest = document.createElement('tr');
      var tdNum = document.createElement('td');
      tdNum.className = "post_row1";
      var tdTitle = document.createElement('td');
      tdTitle.className = "post_row3";
      var tdWriter = document.createElement('td');
      tdWriter.className="post_row4";
      var tdLink = document.createElement('a');
      tdLink.className = "post_row4_a"
      tdLink.setAttribute("link_gubun", "");
      tdLink.setAttribute("href", "/notice_board_view.html");
    
      var tdResultDate = document.createElement('td');
      tdResultDate.className="post_row5";
      
      var tdCount = document.createElement('td');
      tdCount.className="post_row6";
    
    
      tdNum.textContent = el;
      tdTitle.textContent = superArr[0].postTitle[idx];
      tdWriter.textContent = superArr[0].postWriter[idx];
      tdResultDate.textContent = superArr[0].postResultDate[idx];
      
      //TODO: 조회수 카운트하기
      // tdFile.textContent = superArr[0].postCount[idx];
    
      // tdLink.setAttribute("href", `${tdUnivName.textContent}`);
      tdLink.append(tdTitle);
      trTest.append(tdNum);
      trTest.append(tdLink);
      trTest.append(tdWriter);
      trTest.append(tdResultDate);
      trTest.append(tdCount);
    
      appendTest.append(trTest);
    
    })
    
    function setButtonColor(num) {
      for(let i = 0; i <= maxPage; i++) {
        var init = document.getElementsByClassName(`button${i}`)[0];
        if(init) {
          init.style.backgroundColor = "white";
    
          init.style.border = "1px solid #D7D7D7";
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
    
    for(let i = 0; i < maxPage; i++) {
      document.getElementsByClassName(`button${i + 1}`)[0].addEventListener("click", function(){
        let init = document.getElementsByClassName(`button${i + 1}`)[0];
        // init.style.backgroundColor = "yellow";
    
        // console.log(`${i + 1}번 클릭`);
        nowPage = i + 1;
        // console.log(nowPage);
        paging_button_gubun(nowPage);
        setButtonColor(nowPage);
    
        const removeAll_td = document.querySelectorAll('td'); 
        const removeAll_a = document.querySelectorAll('[link_gubun]'); 
        removeAll_td.forEach(function(el){
          el.remove();
        })
        removeAll_a.forEach(function(el){
          el.remove();
        })
    
        superArr[i].idx.forEach((el, idx) => {
          var trTest = document.createElement('tr');
          var tdNum = document.createElement('td');
          tdNum.className = "post_row1";
          var tdTitle = document.createElement('td');
          tdTitle.className = "post_row3";
          var tdWriter = document.createElement('td');
          tdWriter.className="post_row4";
          var tdLink = document.createElement('a');
          tdLink.className = "post_row4_a"
          tdLink.setAttribute("link_gubun", "");
          tdLink.setAttribute("href", "/notice_board_view.html");
    
          var tdResultDate = document.createElement('td');
          tdResultDate.className="post_row5";
          
          var tdCount = document.createElement('td');
          tdCount.className="post_row6";
            
          tdNum.textContent = el;
          tdTitle.textContent = superArr[i].postTitle[idx];
          tdWriter.textContent = superArr[i].postWriter[idx];
          tdResultDate.textContent = superArr[i].postResultDate[idx];
    
          // tdLink.setAttribute("href", `${tdUnivName.textContent}`);
          tdLink.append(tdTitle);
          trTest.append(tdNum);
          trTest.append(tdLink);
          trTest.append(tdWriter);
          trTest.append(tdResultDate);
          trTest.append(tdCount);
        
          appendTest.append(trTest);
        
        })
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
    
      const removeAll_td = document.querySelectorAll('td'); 
      const removeAll_a = document.querySelectorAll('[link_gubun]'); 
      removeAll_td.forEach(function(el){
        el.remove();
      })
      removeAll_a.forEach(function(el){
        el.remove();
      })
    
      superArr[nowPage - 1].idx.forEach((el, idx) => {
        var trTest = document.createElement('tr');
        var tdNum = document.createElement('td');
        tdNum.className = "post_row1";
        var tdTitle = document.createElement('td');
        tdTitle.className = "post_row3";
        var tdWriter = document.createElement('td');
        tdWriter.className="post_row4";
        var tdLink = document.createElement('a');
        tdLink.className = "post_row4_a"
        tdLink.setAttribute("link_gubun", "");
        tdLink.setAttribute("href", "/notice_board_view.html");
    
        var tdResultDate = document.createElement('td');
        tdResultDate.className="post_row5";
        
        var tdCount = document.createElement('td');
        tdCount.className="post_row6";
    
        tdNum.textContent = el;
        tdTitle.textContent = superArr[nowPage - 1].postTitle[idx];
        tdWriter.textContent = superArr[nowPage - 1].postWriter[idx];
        tdResultDate.textContent = superArr[nowPage - 1].postResultDate[idx];
    
        // tdLink.setAttribute("href", `${tdUnivName.textContent}`);
        tdLink.append(tdTitle);
        trTest.append(tdNum);
        trTest.append(tdLink);
        trTest.append(tdWriter);
        trTest.append(tdResultDate);
        trTest.append(tdCount);
        
        appendTest.append(trTest);
      
      })
    }
    
    function right() {
      if(nowPage >= superArr.length - 1) {
        nowPage = superArr.length;
        // console.log(nowPage)
      } else {
        nowPage++;
      }
    
      // console.log(nowPage);
    
      paging_button_gubun(nowPage);
      setButtonColor(nowPage);
    
      const removeAll_td = document.querySelectorAll('td'); 
      const removeAll_a = document.querySelectorAll('[link_gubun]'); 
      removeAll_td.forEach(function(el){
        el.remove();
      })
      removeAll_a.forEach(function(el){
        el.remove();
      })
    
      superArr[nowPage - 1].idx.forEach((el, idx) => {
        var trTest = document.createElement('tr');
        var tdNum = document.createElement('td');
        tdNum.className = "post_row1";
        var tdTitle = document.createElement('td');
        tdTitle.className = "post_row3";
        var tdWriter = document.createElement('td');
        tdWriter.className="post_row4";
        var tdLink = document.createElement('a');
        tdLink.className = "post_row4_a"
        tdLink.setAttribute("link_gubun", "");
        tdLink.setAttribute("href", "/notice_board_view.html");
    
        var tdResultDate = document.createElement('td');
        tdResultDate.className="post_row5";
        
        var tdCount = document.createElement('td');
        tdCount.className="post_row6";
      
        tdNum.textContent = el;
        tdTitle.textContent = superArr[nowPage - 1].postTitle[idx];
        tdWriter.textContent = superArr[nowPage - 1].postWriter[idx];
        tdResultDate.textContent = superArr[nowPage - 1].postResultDate[idx];
    
        tdLink.append(tdTitle);
        trTest.append(tdNum);
        trTest.append(tdLink);
        trTest.append(tdWriter);
        trTest.append(tdResultDate);
        trTest.append(tdCount);
    
        appendTest.append(trTest);
      
      })
    }

  }
  catch(error){
    console.log(error);
  }
}

exec();

console.log(this.value);
