import React, { Component } from "react";
import Single from './Single.js';
import "../assets/scss/Launches.scss";

class Launches extends Component {
    createSingles = () => {
        const launches = this.props.launches
        let singles = []
        for (let i = 0; i < launches.length; i++) {
            singles.push(<Single launches = {launches[i]}/>)
        }
        return singles
    }
    render() {
        return (
    <div className="launches">
    <div className="launches__bg" />
    <ul className="launches__list">
    {this.createSingles()}
    </ul>
  </div>
        );
    }
}

export default Launches;