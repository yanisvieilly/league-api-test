import React, { Component } from 'react';
import SummonerMatchList from './SummonerMatchList';

class Summoner extends Component {
  render() {
    const { accountId, name, summonerLevel, champions } = this.props;

    return (
      <div style={{ border: '1px solid #aaa' }}>
        <h1>{name} (lvl {summonerLevel})</h1>
        <SummonerMatchList accountId={accountId} champions={champions} />
      </div>
    );
  }
}

export default Summoner;