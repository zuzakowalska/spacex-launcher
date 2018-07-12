import React, { Component } from "react";
import "../assets/scss/LaunchesList.scss";

class FilterButtons extends Component {
  Filter = () => {
    console.log(this.props.name)
  }
  render() {
    return <li onClick={this.Filter}>{this.props.name}</li>;
  }
}

export default FilterButtons;
