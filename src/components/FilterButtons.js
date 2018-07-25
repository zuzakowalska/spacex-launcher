import React, { Component } from 'react';
import '../assets/scss/LaunchesList.scss';

class FilterButtons extends Component {
  render() {
    return (
      <li
        className={this.props.filter === this.props.name ? 'active' : ''}
        onClick={() => this.props.onFilterClick(this.props.name)}
      >
        {' '}
        {this.props.name}
      </li>
    );
  }
}

export default FilterButtons;
