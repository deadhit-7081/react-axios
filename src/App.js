import React from 'react';
import './App.css';
import ComponentC from './components/UseContectC';

export const UserContext = React.createContext()
export const GammingContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value = {"Jai"}>
        <GammingContext.Provider value = {"DeadHit"}>
          <ComponentC/>
        </GammingContext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;
