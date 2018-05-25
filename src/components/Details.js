import React, { Component } from 'react';
import Rocket from './Rocket.js';
import LaunchPad from './LaunchPad.js';
import '../assets/scss/Details.scss';

class Details extends Component {
    render() {
        return(
            <div className="details">
                    <h2>details</h2>
                    <p>{this.props.rocket.description}</p>
                        <Rocket rocket = {this.props.rocket}/>
                        <LaunchPad launchSite={this.props.launchSite}/>
                    </div>
        )
    }
}

export default Details;

