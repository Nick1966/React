
import logo from './logo.svg';
import './App.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fcomponent from "./Fcomponent";
import Ccomponent from "./Ccomponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent/>
        <Ccomponent/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          Learn React
          Learn React 20205f09886 (Initialize project using Create React App)
        </a>
      </header>
    </div>
  );
}

export default App;
