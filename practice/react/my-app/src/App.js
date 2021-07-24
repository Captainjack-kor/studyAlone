import './App.css';

const user = {
  firstName: 'Happy',
  lastName: 'ending!!'
};

let getGreeting = (think) => {
  if(think) {
    return <h1>Mika {formName(user)}</h1>
  }
  return <h1> NOOOOOO </h1>
}

let formName = (user) => {
  return <span>{user.firstName + ' ' + user.lastName}</span>;
}

function App() {
  const predict = true;
  const name = "REACT";
  return (
    <div className="test">
      <div>
        {getGreeting(predict)}
        {formName(user)}
      </div>
    </div>
  );
}

export default App;
