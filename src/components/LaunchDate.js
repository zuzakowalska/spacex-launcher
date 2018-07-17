import React, { Component } from 'react';
import '../assets/scss/LaunchDate.scss';

class LaunchDate extends Component {
  render() {
    return (
      <div className="launch-date">
        <h3>{this.props.launch.launch_date_utc}</h3>
        <h1>{this.props.rocket.rocket_name} Launch</h1>
        <p className="launch-counter">
          <span id="counter">20 days </span>to start
        </p>
      </div>
    );
  }
}

export default LaunchDate;
