import React, { Component } from 'react';
import '../assets/scss/LaunchPad.scss';

class LaunchPad extends Component {
    render() {
        return(
            <div className="launch-pad">
            <h2>Launch Pad</h2>
            <div className="launch-pad__container">
                        <div className="launch-pad__container--left">
                            <p>name: <span id="launch-name">{this.props.launchSite.full_name}</span>
                            </p>
                        </div>
                        <div className="launch-pad__container--right">
                            <p>name: <span id="launch-location">{this.props.launchSite.vehicles_launched}</span>
                            </p>
                        </div>
                        </div>
                        <p>{this.props.launchSite.details}</p>
                    </div>
        )
    }
}

export default LaunchPad;

