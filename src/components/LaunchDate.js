import React, { Component } from 'react';
import '../assets/scss/LaunchDate.scss';
import * as moment from 'moment';

class LaunchDate extends Component {
  render() {
    let launchDate = moment
      .unix(this.props.launch.launch_date_unix)
      .format('MMMM Do YYYY, h:mm:ss a');
    return (
      <div className="launch-date">
        <h3>{launchDate}</h3>
        <h1>{this.props.rocket.rocket_name} Launch</h1>
        <p className="launch-counter">
          <span id="counter">20 days </span>to start
        </p>
      </div>
    );
  }
}

export default LaunchDate;
