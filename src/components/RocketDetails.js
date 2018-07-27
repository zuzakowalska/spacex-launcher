import React, { Component } from 'react';

class RocketDetails extends Component {
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
      <div className="launch-info">
        <h2>details</h2>
        <p>{this.props.launch.details}</p>
        <h2>rocket</h2>
        <div className="container">
          <div className="details">{this.getData(this.props.rocket)}</div>
          <div className="details">
            {this.getData(this.props.rocket.first_stage.cores[0])}
          </div>
        </div>
        <p>{this.props.launch.rocket.description}</p>
        <h2>Launch Pad</h2>
        <div className="container">
          <div className="details">
            {this.getData(this.props.launch.launch_site)}
          </div>
        </div>
      </div>
    );
  }
}

export default RocketDetails;
