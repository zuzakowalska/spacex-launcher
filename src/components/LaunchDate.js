import React, { Component } from 'react';
import '../assets/scss/LaunchDate.scss';

class LaunchDate extends Component {
    render() {
        return(
            <div className="launch-date">
                    <h3>07 july 2018</h3>
                    <h1>{this.props.rocket.name} Launch</h1>
                    <p className="launch-counter">
                        <span id="counter">20 days </span>to start</p>
                </div>
        )
    }
}

export default LaunchDate;

