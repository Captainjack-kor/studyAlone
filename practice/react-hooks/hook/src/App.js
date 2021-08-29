import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {

  const [count, setCount] = useState(0);
  const [decrease, setDecrease] = useState(0);
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  const [check, setCheck] = useState(false);
  const [tweet, setTweet] = useState({ tweets:[
    {
      uuid: 1,
      writer: "김코딩",
      date: "2020-10-10",
      content: "안녕 리액트",
    },
    {
      uuid: 2,
      writer: "박해커",
      date: "2020-10-12",
      content: "좋아 코드스테이츠!",
    }
  ]});
  // const [tweet, setTweet] = useState({ tweets:[
  //   {
  //     uuid: 1,
  //     writer: "김코딩",
  //     date: "2020-10-10",
  //     content: "안녕 리액트",
  //   },
  //   {
  //     uuid: 2,
  //     writer: "박해커",
  //     date: "2020-10-12",
  //     content: "좋아 코드스테이츠!",
  //   }
  // ], newTweetContent: "" });

  const [content, setContent] = useState("");

  //console.log(tweet);

  const toggleTest = () => {
    setCheck(check => !check);
  }
  
  const addTweet = () => {
    // console.log(tweet)
    const newTweet = {
      uuid: tweet.tweets.length + 1,
      date: new Date().toISOString().substring(0, 10),
      content: content
    }

    // console.log(newTweet);

    //console.log(tweet.tweets);
    
    setTweet({ tweets: [...tweet.tweets, newTweet] })
    console.log(tweet);
    // setTweet(prev => {

    // })
    // setTweet(prev => {
    //   tweets: [...prev.tweets, newTweet]
    // })
  }

  const onChangeText = (e) => {
    setContent(e.target.value);
    // setTweet(prev => { newTweetContent: e.target.value })
  }

  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // }, [count]);

  // const singleTweet = ({writer, date, children}) => {
  //   return (
  //     <li className="liTest" key={t.uuid}>
  //         {t.content}
  //     </li>     
  //   );
  // }

  const [char, setChar] = useState("");
  const [changeChar, setChangeChar] =useState("");

  axios.get("http://localhost:8080")
  .then((response) => {
    console.log(response.data);
  })

  axios({
    method: 'post',
    url: 'http://localhost:8080/lower',
    data: {
      firstName: 'FRIDAY',
    }
  });

  const toChangeUpperChar = () => {
    //const upper = document.get
    
    axios.post("http://localhost:8080/lower", {
      data: "DJDJDJ",
      withCredentials: true,
      headers: {
          "Content-Type": "application/json"
      },
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })

    console.log(char);
  }

  
  const onChangetoChar = (e) => {
    setChar(e.target.value);
  }


  const toChangeLowerChar = () => {
    
  }


  return (
    <>
      <div className="test">
        <p> You clicked {count} times </p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        &nbsp;
        <button onClick={() => setCount(count - 1)}>
          minus value btn
        </button>

        <p> you click here too {decrease} times</p>
        <button onClick={() => setDecrease(decrease - 1)}>
          Decrease here
        </button>

        <p> TODO : {todos[0].text}</p>
        <button onClick={() => setTodos([{ text: 'League of legend' }])}>
          배열 객체 사용
        </button>
        {/* {console.log(todos[0])} */}

        <p> 현재 값: {check}</p>
        { check ? <p> 나는 true 입니다. </p> : <p> 나는 false 입니다. </p> }
        <button onClick={toggleTest}>boolean value checking!</button>
        {/* {console.log(check)} */}

      </div>

      <input type="text" className="tweet" onChange={onChangeText} />
      <button className="addTweet" onClick={addTweet}>Enter!</button>
      
      <ul id="tweetsAll">
        {/* <li>{tweet.newTweetContent}</li> */}
        {tweet.tweets.map((t) => (
          <li className="liTest" key={t.uuid}>
            {t.date} &nbsp; {t.content}
          </li>
        ))}
      </ul>
      
      <div className="whyCantmove">
        <textarea className="textAreaDefault" onChange={onChangetoChar}></textarea>
        &nbsp;
        <input type="button" className="textAreaBtn" value="button" onClick={toChangeUpperChar}/>
      </div>

      <div className="resultPart">{changeChar}</div>
    </>
  );
}

export default App;
