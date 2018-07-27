import React, { Component } from 'react';
import RocketList from './RocketList.js';

class Launches extends Component {
  render() {
    return (
      <div
        className={this.props.filter === null ? 'launches-hidden' : 'launches'}
      >
        <div className="dashed-line" />
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
