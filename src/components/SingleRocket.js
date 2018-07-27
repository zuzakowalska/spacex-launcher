import React, { Component } from 'react';
import * as moment from 'moment';

class SingleRocket extends Component {
  render() {
    let launchDate = moment
      .unix(this.props.rocketLaunch.launch_date_unix)
      .format('MMMM Do YYYY, h:mm:ss a');
    return (
      <li
        className="single-rocket"
        onClick={() => this.props.onLaunchClick(this.props.rocketLaunch)}
      >
        <h5>{launchDate}</h5>
        <div className="line">
          <div className="arrow" />
        </div>
        <div className="bullet" />
        <div className="wrapper">
          <p>
            <span>rocket: </span>
            {this.props.rocketLaunch.rocket.rocket_name}
          </p>
          <p>
            <span>launch site: </span>
            {this.props.rocketLaunch.launch_site.site_name}
          </p>
        </div>
      </li>
    );
  }
}

export default SingleRocket;
