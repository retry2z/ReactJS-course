import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import Search from './search';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
