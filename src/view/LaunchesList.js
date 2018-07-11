import React, { Component } from "react";
import Launches from '../components/Launches.js';
import FilterButtons from '../components/FilterButtons.js';
import "../assets/scss/LaunchesList.scss";

class LaunchesList extends Component {
  createFilters = () => {
    const launches = this.props.launches
    let rockets = []
    let filters = []

    for (let i = 0; i < launches.length; i++) {
      rockets.push(launches[i].rocket.rocket_name)
    }
    rockets = new Set(rockets)
    rockets = Array.from(rockets)
    for (let j = 0; j < rockets.length; j++) {
      filters.push(<FilterButtons name={ rockets[j] }/>)
    }
    return filters
    
  }

  render() {
    return (
      <div className="launches-list">
        <div className="container">
          <div className="container__bg" />
          <div className="menu">
            <div className="logo" />
            <ul className="menu__list">
            {this.createFilters()}
            </ul>
          </div>
          <Launches launches = {this.props.launches}/>
        </div>
      </div>
    );
  }
}

export default LaunchesList;
