import React, { Component } from 'react';
import LaunchDate from './LaunchDate.js';
import Details from './Details.js';
import '../assets/scss/Launch.scss';

class Launch extends Component {
  render() {
    return (
      <div className="launch">
        <div className="launch__container--left">
          <LaunchDate launch={this.props.launch} rocket={this.props.rocket} />
        </div>
        <div className="launch__container--right">
          <Details
            launch={this.props.launch}
            rocket={this.props.rocket}
            launchSite={this.props.launchSite}
          />
        </div>
      </div>
    );
  }
}
export default Launch;
