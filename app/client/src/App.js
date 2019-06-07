import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Home</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
