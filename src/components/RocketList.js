import React, { Component } from "react";
import SingleRocket from './SingleRocket.js';
import "../assets/scss/RocketList.scss";

class RocketList extends Component {
    // createSingles = () => {
    //     const launches = this.props.launches
    //     let singles = []
    //     for (let i = 0; i < launches.length; i++) {
    //         singles.push(<SingleRocket key={i} launches = {launches[i]}/>)
    //     }
    //     return singles
    // }
constructor(props) {
    super(props)
    this.state = this.props.filterState
}
    getLaunchesList() {
        const launches = this.props.launches
        console.log(launches)
    }
    render() {
        return (
            <ul className="launches__list">
            {this.getLaunchesList()}
          </ul>
        );
    }
}

export default RocketList;