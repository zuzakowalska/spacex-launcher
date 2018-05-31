import React, { Component } from "react";
import Launches from '../components/Launches.js';
import FilterButtons from '../components/FilterButtons.js';
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
            <FilterButtons/>
            <FilterButtons/>
            <FilterButtons/>
            </ul>
          </div>
          <Launches />
        </div>
      </div>
    );
  }
}

export default LaunchesList;
