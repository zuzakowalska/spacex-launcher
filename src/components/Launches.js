import React, { Component } from 'react';
import RocketList from './RocketList.js';
import '../assets/scss/Launches.scss';

class Launches extends Component {
  render() {
    return (
      <div className="launches">
        <div className="launches__bg" />
        <RocketList
          launches={this.props.launches}
          filter={this.props.filter}
          onLaunchClick={this.props.onLaunchClick}
        />
      </div>
    );
  }
}

export default Launches;
