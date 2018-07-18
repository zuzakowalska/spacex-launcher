import React, { Component } from 'react';
import '../assets/scss/Rocket.scss';

class Rocket extends Component {
  render() {
    return (
      <div className="rocket">
        <h2>rocket</h2>
        <div className="rocket__container">
          <div className="rocket__container--left">{this.props.rocket}</div>
          <div className="rocket__container--right">{this.props.stage}</div>
        </div>
        <p>{this.props.launch.rocket.description}</p>
      </div>
    );
  }
}

export default Rocket;
