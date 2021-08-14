import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [decrease, setDecrease] = useState(0);
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  const [check, setCheck] = useState(false);
  const [tweet, setTweet] = useState({ tweets: [
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
  ], newTweetContent: "" });

  const toggleTest = () => {
    setCheck(check => !check);
  }
  
  const addTweet = () => {
    const newTweet = {
      date: new Date().toISOString().substring(0, 10),
      content: tweet.newTweetContent
    }


    console.log(newTweet);

    console.log(tweet.tweets);
    
    // setTweet(prev => {
    //   tweets: [...prev.tweets, newTweet]
    // })
    // setTweet(prev => {
    //     tweets: [...prev.tweets, newTweet]
    // }
  }

  const onChangeText = (e) => {
    setTweet({ newTweetContent: e.target.value })
  }

  useEffect(() => {
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
    document.title = `You clicked ${count} times`;
  }, [count]);

  // const singleTweet = ({writer, date, children}) => {
  //   return (
  //     <li className="liTest" key={t.uuid}>
  //         {t.content}
  //     </li>     
  //   );
  // }

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
        {tweet.tweets.map((t) => (
          <li className="liTest" key={t.uuid}>
            {t.content}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
