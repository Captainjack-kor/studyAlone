import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [decrease, setDecrease] = useState(0);
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

      </div>
    </>
  );
}

export default App;
