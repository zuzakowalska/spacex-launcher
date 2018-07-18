import React, { Component } from 'react';
import Rocket from './Rocket.js';
import LaunchPad from './LaunchPad.js';
import '../assets/scss/Details.scss';

class Details extends Component {
  getData(arg) {
    const rocketEntries = Object.entries(arg);
    let rocketData = [];
    for (let i = 0; i < rocketEntries.length; i++) {
      if (typeof rocketEntries[i][1] === 'string') {
        rocketData.push(
          <p key={i}>
            {rocketEntries[i][0]}:
            <span> {rocketEntries[i][1]}</span>
          </p>
        );
      }
    }
    return rocketData;
  }
  render() {
    return (
      <div className="details">
        <h2>details</h2>
        <p>{this.props.launch.details}</p>
        <Rocket
          launch={this.props.launch}
          rocket={this.getData(this.props.rocket)}
          stage={this.getData(this.props.rocket.first_stage.cores[0])}
        />
        <LaunchPad launchSite={this.getData(this.props.launch.launch_site)} />
      </div>
    );
  }
}

export default Details;
