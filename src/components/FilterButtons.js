import React, { Component } from "react";
import "../assets/scss/LaunchesList.scss";

class FilterButtons extends Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

export default FilterButtons;
