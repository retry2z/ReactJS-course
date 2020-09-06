import React from 'react';
import logo from './logo.svg';
import './App.css';
import SomeFunc from "./learnReact";
import Code from './Code';
import Doc from './Database/doc';

function App() {

  const calcResult = (a, b) => {
    return a + b
  };

  return (
    <div className="App">
      <header className="App-header">
        <Doc />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Paragraph  <Code>src/App.js</Code> and save to reload.
        </p>
        <p>Result : {calcResult(1, 5)}</p>

        <SomeFunc /> */}
      </header>
    </div>
  );
}

export default App;
