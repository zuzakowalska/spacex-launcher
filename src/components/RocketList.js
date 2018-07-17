import React, { Component } from 'react';
import SingleRocket from './SingleRocket.js';
import '../assets/scss/RocketList.scss';

class RocketList extends Component {
  getRockets() {
    const launches = this.props.launches;
    let active = [];
    this.getFilter(active);
    let filteredRockets = [];
    if (active.length > 0) {
      for (let l in launches) {
        for (let a in active) {
          if (launches[l].rocket.rocket_name === active[a]) {
            filteredRockets.push(
              <SingleRocket
                key={l}
                launches={launches[l]}
                onLaunchClick={this.props.onLaunchClick}
              />
            );
          }
        }
      }
    } else {
      for (let l in launches) {
        filteredRockets.push(
          <SingleRocket
            key={l}
            launches={launches[l]}
            onLaunchClick={this.props.onLaunchClick}
          />
        );
      }
    }
    return filteredRockets;
  }

  getFilter(array) {
    const filters = this.props.filterState;
    for (let i = 0; i < Object.keys(filters).length; i++) {
      if (Object.values(filters)[i] === true) {
        array.push(Object.keys(filters)[i]);
      } else {
        array.splice(i, 1);
      }
    }
    return array;
  }

  render() {
    return <ul className="launches__list">{this.getRockets()}</ul>;
  }
}

export default RocketList;
