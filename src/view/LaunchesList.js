import React, { Component } from "react";
import "../assets/scss/LaunchesList.scss";

class LaunchesList extends Component {
  render() {
    return (
      <div className="launches-list">
        <div className="container">
          <div className="container__bg" />
          <div className="menu">
            <div className="logo" />
            <ul className="menu__list">
              <li>All Rockets</li>
              <li>Falcon9</li>
              <li>Falcon Heavy</li>
              <li>Dragon</li>
            </ul>
          </div>
          <div className="launches">
            <div className="launches__bg" />
            <ul className="launches__list">
              <li className="single">
                <div>
                <h5>28 april 2018</h5>
                <div class="line">
                <div className="arrow"/>
                </div>
                <div className="bullet"></div> 
                <div class="single__wrapper">
                  <p><span>rocket: </span>falcon9</p>
                  <p><span>launch site: </span>lorem ipsum</p>
                </div>
                </div>
              </li>
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
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LaunchesList;
