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
    return (
      <div>
        {this.state.summoners.map(({ id, accountId, name, summonerLevel }) =>
          <Summoner
            key={id}
            accountId={accountId}
            name={name}
            summonerLevel={summonerLevel}
          />
        )}
      </div>
    );
  }

  render() {
    return this.formatSummoners();
  }
}

export default SummonerList;