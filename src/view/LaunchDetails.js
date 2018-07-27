import React, { Component } from 'react';
import LaunchHeader from '../components/LaunchHeader.js';
import RocketDetails from '../components/RocketDetails.js';

class LaunchDetails extends Component {
  render() {
    return (
      <div className="launch-details">
        <div className="header">
          <div className="container">
            <div className="back" onClick={() => this.props.onBackClick()}>
              <div className="arrow">
                <div className="bg" />
                <div className="line" />
              </div>
              <h3>go back</h3>
            </div>
            <div className="logo" />
          </div>
        </div>
        <div className="details-wrapper">
          <LaunchHeader
            launch={this.props.launch}
            rocket={this.props.launch.rocket}
          />
          <RocketDetails
            launch={this.props.launch}
            rocket={this.props.launch.rocket}
            launchSite={this.props.launch.launch_site}
          />
        </div>
        <div className="footer" />
      </div>
    );
  }
}

export default LaunchDetails;
