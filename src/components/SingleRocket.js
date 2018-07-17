import React, { Component } from 'react';
import '../assets/scss/RocketList.scss';

class SingleRocket extends Component {
  render() {
    return (
      <li
        className="single"
        onClick={() => this.props.onLaunchClick(this.props.launches)}
      >
        <h5>{this.props.launches.launch_date_utc}</h5>
        <div className="line">
          <div className="arrow" />
        </div>
        <div className="bullet" />
        <div className="single__wrapper">
          <p>
            <span>rocket: </span>
            {this.props.launches.rocket.rocket_name}
          </p>
          <p>
            <span>launch site: </span>
            {this.props.launches.launch_site.site_name}
          </p>
        </div>
      </li>
    );
  }
}

export default SingleRocket;
