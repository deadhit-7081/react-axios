import React from 'react';
import './App.css';
import CounterOne from './components/useReducercount1';
import CounterTwo from './components/useReducerCount2';


function App() {
  return (
    <div className="App">
      <CounterOne/>
      <CounterTwo/>
    </div>
  );
}

export default App;
