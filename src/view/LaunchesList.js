import React, { Component } from "react";
import Launches from '../components/Launches.js';
import FilterButtons from '../components/FilterButtons.js';
import "../assets/scss/LaunchesList.scss";

class LaunchesList extends Component {
  constructor() {
    super()
    this.state = {filter: false}

    this.handleFilter = this.handleFilter.bind(this)
  }
  createFilters = () => {
    const launches = this.props.launches
    let allRockets = []
    let filters = []

    for (let i = 0; i < launches.length; i++) {
      allRockets.push(launches[i].rocket.rocket_name)
    }
    let rockets = new Set(allRockets)
    rockets = Array.from(rockets)
    for (let j = 0; j < rockets.length; j++) {
      filters.push(<FilterButtons key={j} name={ rockets[j] } allRockets={allRockets} onClick={this.handleFilter}/>)
    }
    
    return filters
  }
  handleFilter = () => {
    // this.setState(prevState => ({
    //   filter: !prevState.filter
    // }))
    console.log(this.event.target)
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
