import React, { Component } from "react";
import Single from './Single.js';
import "../assets/scss/Launches.scss";

class Launches extends Component {
    render() {
        return (
    <div className="launches">
    <div className="launches__bg" />
    <ul className="launches__list">
    <Single />
    <Single />
    <Single />
    <Single />
    </ul>
  </div>
        );
    }
}

export default Launches;