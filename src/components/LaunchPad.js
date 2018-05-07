import React, { Component } from 'react';
import '../assets/scss/LaunchPad.scss';

class LaunchPad extends Component {
    render() {
        return(
            <div className="launch-pad">
            <h2>Launch Pad</h2>
            <div className="launch-pad__container">
                        <div className="launch-pad__container--left">
                            <p>name: <span id="launch-name">falcon1</span>
                            </p>
                        </div>
                        <div className="launch-pad__container--right">
                            <p>name: <span id="launch-location">falcon1</span>
                            </p>
                        </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptate itaque saepe, ab quas iste
                            qui nesciunt officiis quibusdam recusandae? Eligendi ex quaerat beatae, odio vitae ut. Earum, dignissimos
                            tempora!</p>
                    </div>
        )
    }
}

export default LaunchPad;

