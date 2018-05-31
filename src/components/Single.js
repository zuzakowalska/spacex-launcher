import React, { Component } from "react";
import "../assets/scss/Single.scss";

class Single extends Component {
    render() {
        return (
            <li className="single">
            <h5>28 april 2018</h5>
            <div class="line">
            <div className="arrow"/>
            </div>
            <div className="bullet"></div> 
            <div class="single__wrapper">
              <p><span>rocket: </span>falcon9</p>
              <p><span>launch site: </span>lorem ipsum</p>
            </div>
          </li>
        );
    }
}

export default Single;