import React, { Component } from 'react';
import SingleRocket from './SingleRocket.js';
import '../assets/scss/RocketList.scss';

class RocketList extends Component {
  getRocketList() {
    const launches = this.props.launches;
    const filter = this.props.filter;
    let rocketList = [];

    for (let el in launches) {
      if (filter !== null) {
        if (filter !== 'All Rockets') {
          if (launches[el].rocket.rocket_name === filter) {
            rocketList.push(
              <SingleRocket
                key={el}
                rocketLaunch={launches[el]}
                onLaunchClick={this.props.onLaunchClick}
              />
            );
          }
        } else {
          rocketList.push(
            <SingleRocket
              key={el}
              rocketLaunch={launches[el]}
              onLaunchClick={this.props.onLaunchClick}
            />
          );
        }
      }
    }
    return rocketList;
  }

  render() {
    return <ul className="launches__list">{this.getRocketList()}</ul>;
  }
}

export default RocketList;
