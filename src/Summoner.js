import React, { Component } from 'react';

class Summoner extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // fetch(`http://localhost:8000/lol/match/v3/matchlists/by-account/${this.props.accountId}/recent?api_key=RGAPI-91f2d27d-381f-490a-9efb-f2876603ccdb`)
    //   .then(response => response.json())
    //   .then(data => {});
  }

  render() {
    const { accountId, id, name, profileIconId, summonerLevel } = this.props;

    return <li>{this.props.name}</li>;
  }
}

export default Summoner;