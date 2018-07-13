import React, { Component } from "react";
import "../assets/scss/LaunchesList.scss";

class FilterButtons extends Component {

  render() {
    return <li onClick={() => this.props.onClick(this.props.name)}> {this.props.name}
    </li>;
  }
}

export default FilterButtons;
