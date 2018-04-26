import React, { Component } from 'react';
import Summoner from './Summoner';
import apiKey from './credentials';

// So... I exceeded the rate limit on Riot API during my tests. :/
// I decided to load all the static champions data from a local file instead.
import championsData from './champions-data';

class SummonerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summoner: {},
      champions: [],
    };

    this.formatSummoners = this.formatSummoners.bind(this);
  }

  componentDidMount() {
    this.initialFetch(this.props.summonerName);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.summonerName !== nextProps.summonerName) {
      this.initialFetch(nextProps.summonerName);
    }
  }

  initialFetch(summonerName) {
    // TODO: Store each query response in a local variable, then use Promise.all
    //       to set the state when all the queries are completed.
    fetch(`http://localhost:8000/lol/summoner/v3/summoners/by-name/${summonerName}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(summoner => {

        fetch(`http://localhost:8000/lol/static-data/v3/champions?api_key=${apiKey}`)
          .then(response => response.json())
          .then(({ data }) => {
            this.setState({
              summoner,
              champions: Object.values(championsData),
            });
          });
        
      });
  }

  formatSummoners() {
    const { id, accountId, name, summonerLevel } = this.state.summoner;

    return (
      <div>
        <Summoner
          key={id}
          accountId={accountId}
          name={name}
          summonerLevel={summonerLevel}
          champions={this.state.champions}
        />
      </div>
    );
  }

  render() {
    return this.formatSummoners();
  }
}

export default SummonerList;