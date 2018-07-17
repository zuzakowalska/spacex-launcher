import React, { Component } from 'react';
import Launch from '../components/Launch.js';
import '../assets/scss/LaunchDetails.scss';

class LaunchDetails extends Component {
  render() {
    return (
      <div className="launch-details">
        <div className="header--bg" />
        <div className="launch-details__container">
          <div className="header">
            <div className="back" onClick={() => this.props.onBackClick()}>
              <div className="arrow">
                <div className="arrow__bg" />
                <div className="arrow__line" />
              </div>
              <h3>go back</h3>
            </div>
            <div className="logo" />
          </div>
          <Launch
            rocket={this.props.launch.rocket}
            launchSite={this.props.launch.launch_site}
            launch={this.props.launch}
          />
        </div>
        <div className="footer--bg">
          <div className="footer">
            <h3>Mission Links</h3>
            <ul>
              <li>Reddit Campaign</li>
              <li>Presskit</li>
              <li>Mission Video</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LaunchDetails;
