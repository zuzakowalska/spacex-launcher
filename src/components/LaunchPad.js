import React, { Component } from 'react';
import '../assets/scss/LaunchPad.scss';

class LaunchPad extends Component {
  render() {
    return (
      <div className="launch-pad">
        <h2>Launch Pad</h2>
        <div className="launch-pad__container">
          <div className="launch-pad__container--left">
            {this.props.launchSite}
          </div>
        </div>
      </div>
    );
  }
}

export default LaunchPad;
