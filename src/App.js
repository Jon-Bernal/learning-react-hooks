import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [{count, count2}, setCount] = useState({count: 10, count2: 20}); //


  return (
    <div className="App">
      <button onClick={() => setCount(currentCountState => ({ ...currentCountState, count: currentCountState.count + 1}))}>+</button>
        <div>count 1: {count}</div>
        <div>count 2: {count2}</div>
    </div>
  );
}

export default App;
