import React from 'react';
import logo from './logo.svg';
import './App.css';

import button from './Button/Button.module.css'
import notify from './Notify/Notify.module.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={notify.error}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Notify
        </a>
        <a
          className={button.error}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Button
        </a>
      </header>
    </div>
  );
}

export default App;
