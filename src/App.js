import React from 'react';
import './App.css';
import PostList from './components/PostList';
import HookCounter from './components/HookCounter';
import HooksCounterThree from './components/HookCounter3';

function App() {
  return (
    <div className="App">
      <HookCounter/>
      <HooksCounterThree/>
    </div>
  );
}

export default App;
