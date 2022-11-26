import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [color, setColor] = React.useState(JSON.parse(sessionStorage.getItem('color')) || "blue");
  const [count, setCount] = React.useState(JSON.parse(localStorage.getItem('count')) || 0);
  
  React.useEffect(() => {
      sessionStorage.setItem('color', JSON.stringify(color));
      localStorage.setItem('count', JSON.stringify(count));
  }, [color, count]);

  return (<div>
      <DisplayMessage color={color}/>
      <Clock time={new Date().toLocaleTimeString()} />
      <p>{count}</p>
      <button onClick={() => {setColor(toggle(color)); setCount(count+1)}}>Click me</button>
  </div>
  );
  
}

function DisplayMessage(props) {
return <h1 style={{color:props.color}}>Hello React World - Storage</h1>;
}
function Clock(props) {
return <p>React Clock: {props.time} </p>
}
function toggle(color){
  if (color === "blue"){
      return "red";
  }
  else{
      return "blue";
  }
}

export default App;
