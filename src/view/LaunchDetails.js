import React, { Component } from 'react';
import Launch from '../components/Launch.js'
import '../assets/scss/LaunchDetails.scss';

class LaunchDetails extends Component {
    render() {
        return(

<div className="launch-details">
<div className="header">
        <div className="back">
            <div className="arrow"><div className="arrow__bg"></div><div className="arrow__line"></div></div>
            <h3>go back</h3>
        </div>
        <div className="logo"></div>
    </div>
<Launch/>
    <div className="footer">
        <div className="links">
        </div>
    </div>
</div>
        )
      }
    }


export default LaunchDetails;