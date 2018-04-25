import React, { Component } from 'react';
import Summoner from './Summoner';

class SummonerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summoners: [],
    };

    this.formatSummoners = this.formatSummoners.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8000/lol/summoner/v3/summoners/by-name/BFY%20Meowington?api_key=RGAPI-91f2d27d-381f-490a-9efb-f2876603ccdb')
      .then(response => response.json())
      .then(summoner =>
        this.setState({ summoners: [...this.state.summoners, summoner] })
      );
  }

  formatSummoners() {
    console.log('formatSummoners');
    console.log(this.state.summoners);
    return (
      <ul>
        {this.state.summoners.map(({ accountId, id, name, profileIconId, summonerLevel }) => {
          console.log('mapping');
          return (
            <Summoner
              key={id}
              id={id}
              name={name}
              profileIconId={profileIconId}
              summonerLevel={summonerLevel}
            />
          );
        })}
      </ul>
    );
  }

  render() {
    return this.formatSummoners();
  }
}

export default SummonerList;