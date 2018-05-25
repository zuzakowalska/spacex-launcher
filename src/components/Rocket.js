import React, { Component } from 'react';
import '../assets/scss/Rocket.scss';

class Rocket extends Component {
    render() {
        return(
            <div className="rocket">
<h2>rocket</h2>
<div className="rocket__container">
<div className="rocket__container--left">
    <p>name: <span id="name">{this.props.rocket.name}</span>
    </p>
    <p>company: <span id="company">{this.props.rocket.company}</span>
    </p>
    <p>height: <span id="height">{this.props.rocket.height.meters} m</span>
    </p>
    <p>diameter: <span id="diameter">{this.props.rocket.diameter.meters} m</span>
    </p>
    <p>mass: <span id="mass">{this.props.rocket.mass.kg} kg</span>
    </p>
</div>
<div className="rocket__container--right">
    <p>first flight: <span id="first-flight">{this.props.rocket.first_flight}</span>
    </p>
    <p>country: <span id="success-rate">{this.props.rocket.country}</span>
    </p>
    <p>success rate: <span id="height">{this.props.rocket.success_rate_pct} %</span>
    </p>
    <p>cost per launch: <span id="cost">${this.props.rocket.cost_per_launch}</span>
    </p>
</div>
</div>
<p>{this.props.rocket.description}</p>
</div>
        )
    }
}

export default Rocket;



