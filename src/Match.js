import React, { Component } from 'react';
import relativeDate from 'relative-date';
import apiKey from './credentials';

class Match extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: 0,
      win: false,
      kills: 0,
      deaths: 0,
      assists: 0,
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8000/lol/match/v3/matches/${this.props.gameId}?api_key=${apiKey}`)
      .then(response => response.json())
      .then((data) => {
        const { participantId } =
          data.participantIdentities.find(({ player }) =>
            player.accountId === this.props.accountId
          );

        const { stats } = data.participants.find(p =>
          p.participantId === participantId
        );

        const { win, kills, deaths, assists } = stats;

        this.setState({
          duration: data.gameDuration,
          win,
          kills,
          deaths,
          assists,
        });
      });
  }

  computeStyle(win) {
    return {
      backgroundColor: win ? '#66ccff' : '#ff6666',
      borderRadius: '2px',
      listStyle: 'none',
      marginBottom: '20px',
      padding: '5px 15px 15px 15px',
    };
  }

  formatGameLength() {
    const minutes = Math.trunc(this.state.duration / 60);
    const seconds = this.state.duration % 60;

    return `${minutes}m ${seconds}s`;
  }

  render() {
    const { gameId, timestamp } = this.props;

    return (
      <li style={this.computeStyle(this.state.win)}>
        <div>
          <h2 style={{ fontSize: '16px' }}>
            Game #{gameId}, played {relativeDate(timestamp)} -
            <span> {this.state.win ? 'Victory' : 'Defeat'}</span>
          </h2>
          <ul>
            <li><strong>Champion:</strong> {this.props.championName}</li>
            <li><strong>Game length:</strong> {this.formatGameLength()}</li>
            <li><strong>Kills:</strong> {this.state.kills}</li>
            <li><strong>Deaths:</strong> {this.state.deaths}</li>
            <li><strong>Assists:</strong> {this.state.assists}</li>
          </ul>
        </div>
      </li>
    );
  }
}

export default Match;