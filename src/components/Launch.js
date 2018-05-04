import React, { Component } from 'react';
import LaunchDate from './LaunchDate.js';
import Details from './Details.js';

class Launch extends Component {
    render() {
        return(
                <div className="launch">
        <div className="launch__container--left">
            <LaunchDate/>
        </div>
        <div className="launch__container--right">
            <Details/>
        </div>
    </div>
        )
    }
}
    export default Launch;