import React, { Component } from 'react';
import Match from './Match';

class SummonerMatchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [],
    };

    this.formatMatches = this.formatMatches.bind(this);
  }

  componentWillMount() {
    fetch(`http://localhost:8000/lol/match/v3/matchlists/by-account/${this.props.accountId}/recent?api_key=RGAPI-91f2d27d-381f-490a-9efb-f2876603ccdb`)
      .then(response => response.json())
      .then(({ matches }) => this.setState({ matches: [...matches] }));
  }

  formatMatches() {
    return (
      <ul style={{ paddingLeft: 0, textAlign: 'left' }}>
        {this.state.matches.map(({ champion, gameId, timestamp }) =>
          <Match
            key={gameId}
            champion={champion}
            gameId={gameId}
            timestamp={timestamp}
          />
        )}
      </ul>
    );
  }

  render() {
    return this.formatMatches();
  }
}

export default SummonerMatchList;