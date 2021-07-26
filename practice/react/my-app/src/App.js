import React from 'react';
import './App.css';
import Tweet from '../src/components/Tweet';

const user = {
  firstName: 'Happy',
  lastName: 'ending!!'
};

let getGreeting = (think) => {
  if(think) {
    return <h1 tabIndex="0">Mika {formName(user)}</h1>
  }
  return <h1> NOOOOOO </h1>
}

let formName = (user) => {
  return <span>{user.firstName + ' ' + user.lastName}</span>;
}

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class Toggleswitch extends React.Component {
  constructor(props){
    super(props);
    this.state = { isOn: false }
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick() {
    console.log('CLICKED!');
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  }


  render() {
    return <h1><button onClick={this.handleclick}>{ this.state.isOn ? 'ON' : 'OFF'}</button></h1>;
  }
}

function formatDate(date) {
  return date.toLocaleDateString();
}

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

//문법사용해서 props 대신 {name, contents}도 가능
// function Tweet({name, contents}) {
//   return (
//     <div>
//       <div className="nameEffect">{name}</div>
//       <div className="contentsEffect">{contents}</div>
//     </div>
//   );
// }

class ChildrenValue extends React.Component {
  constructor(props){
    super(props);
    this.state = {nowLearning: false}
  }

  textChanger() {
    this.setState(prevState => ({
      nowLearning: !prevState.nowLearning
    }));
  }

  render (){
    return (
      <>
        <div>{ this.state.nowLearning ? (<div>배그는 늘 짜릿하네요</div>) : (<div>react는 늘 짜릿하네요</div>) }</div>
        <button onClick={this.textChanger.bind(this)}>PUSH</button>
      </>
    );
  };
}

class CounterBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {isValue: 0};
    this.plusButton = this.plusButton.bind(this);
    this.minusButton = this.minusButton.bind(this);
  }

  plusButton() {
    console.log("더하기");
    this.setState(prevState => ({
      isValue: prevState.isValue + 1
    }));
  }

  minusButton() {
    console.log("빼기");
    console.log(this.state.isValue);
    if(this.state.isValue > 0 ) {
      this.setState(prevState => ({
        isValue: prevState.isValue - 1
      }));
    }
  }
  render() {
    return (
      <>
      {/* <button onClick={this.minusButton}>-</button> <span>{this.state.isValue}</span> <button onClick={this.plusButton}>+</button> */}
      <button onClick={this.minusButton}>-</button> <input value={this.state.isValue}></input> <button onClick={this.plusButton}>+</button>
      </>
    );
  }
}

function App(props) {
  //const element = <Welcome name="Sara" />;
  /*
    React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 
    JSX 어트리뷰트와 자식을 해당 컴포넌트에 단일 객체로 전달합니다. 
    이 객체를 “props”라고 합니다.
  */
  // setInterval(App, 1000);
  return (
    <div>
      <Welcome name="CaptainJack" />
      <Toggleswitch />
      <Tweet />
      {/* <Tweet name="mika" contents="hi Koreans!" />
      <Tweet name="jenny" contents="bye Koreans~" /> */}
      <br/>
      <ChildrenValue writer="김코딩">{props.children}</ChildrenValue>
      
      <br/>
      <br/>
      <CounterBox/>
    </div>
  );
}

export default App;
