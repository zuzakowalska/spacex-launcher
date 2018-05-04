import React, { Component } from 'react';
import Rocket from './Rocket.js';
import LaunchPad from './LaunchPad.js';

class Details extends Component {
    render() {
        return(
            <div className="details">
                    <h2>details</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quidem enim hic. Adipisci eos, saepe
                        ipsam in ratione odio provident, sed laudantium cupiditate explicabo quia asperiores doloremque dolore
                        accusamus impedit.</p>
                        <Rocket/>
                        <LaunchPad/>
                    </div>
        )
    }
}

export default Details;

