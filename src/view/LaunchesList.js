import React, { Component } from 'react';
import Launches from '../components/Launches.js';
import FilterButtons from '../components/FilterButtons.js';
import '../assets/scss/LaunchesList.scss';

class LaunchesList extends Component {
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
          onFilterClick={this.props.onFilterClick}
          filter={this.props.filter}
        />
      );
    }
    filters.push(
      <FilterButtons
        key={rockets.length}
        name="All Rockets"
        onFilterClick={this.props.onFilterClick}
        filter={this.props.filter}
      />
    );
    return filters;
  }
  render() {
    return (
      <div className="launches-list">
        <div className="container">
          <div className="container__bg" />
          <div className="menu">
            <div className="logo" />
            <h3>Click on filters to see a list of SpaceX rockets launches</h3>
            <ul className="menu__list">{this.createFilters()}</ul>
          </div>
          <Launches
            launches={this.props.launches}
            onLaunchClick={this.props.onLaunchClick}
            filter={this.props.filter}
          />
        </div>
      </div>
    );
  }
}

export default LaunchesList;
