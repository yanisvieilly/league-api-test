import React, { Component } from 'react';
import relativeDate from 'relative-date';

class Match extends Component {
  constructor(props) {
    super(props);

    this.style = {
      border: '1px dashed #aaa',
      listStyle: 'none',
      marginBottom: '20px',
    };
  }

  render() {
    const { champion, gameId, timestamp } = this.props;

    return (
      <li style={this.style}>
        <div>
          <h2 style={{ fontSize: '16px' }}>
            Game #{gameId}, played {relativeDate(timestamp)}
          </h2>
          <ul>
            <li>Champion: {champion}</li>
          </ul>
        </div>
      </li>
    );
  }
}

export default Match;