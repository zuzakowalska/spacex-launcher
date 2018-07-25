import React, { Component } from 'react';
import Launches from '../components/Launches.js';
import FilterButtons from '../components/FilterButtons.js';
import '../assets/scss/LaunchesList.scss';

class LaunchesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleFilter = this.handleFilter.bind(this);
  }
  getRockets() {
    const launches = this.props.launches;
    let allRockets = [];
    for (let i = 0; i < launches.length; i++) {
      allRockets.push(launches[i].rocket.rocket_name);
    }
    let rockets = new Set(allRockets);
    rockets = Array.from(rockets);
    return rockets;
  }
  createFilters() {
    let rockets = this.getRockets();
    let filters = [];
    for (let j = 0; j < rockets.length; j++) {
      filters.push(
        <FilterButtons
          key={j}
          name={rockets[j]}
          onClick={this.handleFilter}
          active={this.props.launches[rockets[j]]}
        />
      );
    }
    return filters;
  }
  handleFilter(name) {
    this.setState(prevState => ({
      [name]: !prevState[name],
    }));
  }
  render() {
    return (
      <div className="launches-list">
        <div className="container">
          <div className="container__bg" />
          <div className="menu">
            <div className="logo" />
            <ul className="menu__list">{this.createFilters()}</ul>
          </div>
          <Launches
            launches={this.props.launches}
            filterState={this.state}
            onLaunchClick={this.props.onLaunchClick}
          />
        </div>
      </div>
    );
  }
}

export default LaunchesList;
