import React, { Component } from 'react';
import * as moment from 'moment';

class LaunchHeader extends Component {
  render() {
    const launchDate = moment
      .unix(this.props.launch.launch_date_unix)
      .format('MMMM Do YYYY, h:mm:ss a');
    return (
      <div className="launch-header">
        <h3>{launchDate}</h3>
        <h1>{this.props.rocket.rocket_name} Launch</h1>
        {/* <p className="launch-counter">
          <span id="counter">{this.counter(launchDate)}</span>ago
        </p>
        */}
      </div>
    );
  }
}

export default LaunchHeader;
