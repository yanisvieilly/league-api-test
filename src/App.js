import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SummonerList from './SummonerList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "BFY Meowington",
      summonerName: "BFY Meowington",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleClick() {
    this.setState({ summonerName: this.state.inputValue });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">LoL Summoners</h1>
        </header>
        <div style={{ padding: '10px' }}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            style={{ marginRight: '10px' }}
          />
          <button onClick={this.handleClick}>Go!</button>
        </div>
        <SummonerList summonerName={encodeURI(this.state.summonerName)} />
      </div>
    );
  }
}

export default App;
