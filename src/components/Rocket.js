import React, { Component } from 'react';
import '../assets/scss/Rocket.scss';

class Rocket extends Component {
  render() {
    return (
      <div className="rocket">
        <h2>rocket</h2>
        <div className="rocket__container">
          <div className="rocket__container--left">
            <p>
              name: <span id="name">{this.props.rocket.rocket_name}</span>
            </p>
            <p>
              payload mass:
              <span id="height">{this.props.rocket.payload_mass_kg} kg</span>
            </p>
            <div className="rocket__container--right">
              <p>
                first flight: <span id="first-flight" />
              </p>
              <p>
                country: <span id="success-rate" />
              </p>
              <p>
                success rate: <span id="height" />
              </p>
              <p>
                cost per launch: <span id="cost">$</span>
              </p>
            </div>
          </div>
          <p>{this.props.rocket.description}</p>
        </div>
      </div>
    );
  }
}

export default Rocket;
