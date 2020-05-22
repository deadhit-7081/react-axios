import React from 'react';
import './App.css';
import PostList from './components/PostList';
import HookCounter from './components/HookCounter';
import HooksCounterThree from './components/HookCounter3';
import HooksCounterFour from './components/HookCounter4';
import HooksCounterOneUseEffect from './components/HooksuseEffect1';

function App() {
  return (
    <div className="App">
      <HookCounter/>
      <HooksCounterThree/>
      <HooksCounterFour/>
      <HooksCounterOneUseEffect/>
    </div>
  );
}

export default App;
