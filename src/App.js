import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SummonerList from './SummonerList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">LoL Summoners</h1>
        </header>
        <SummonerList />
      </div>
    );
  }
}

export default App;
