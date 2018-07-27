import React from 'react';
import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    launches: state.launches,
    launch: state.launch,
    loading: state.loading,
    error: state.error,
    filter: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeLaunch: actions.changeLaunch,
      fetchLaunches: actions.fetchLaunches,
      changeFilter: actions.changeFilter,
    },
    dispatch
  );
};

class App extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  componentDidMount() {
    this.props.fetchLaunches();
  }
  handleLaunchClick(rocketLaunch) {
    this.props.changeLaunch(rocketLaunch);
    this.props.history.push('/details');
  }
  handleBackClick() {
    this.props.history.push('/');
  }
  handleFilter(name) {
    this.props.changeFilter(name);
  }
  getActiveComponent() {
    if (this.props.location.pathname === '/details') {
      return (
        <LaunchDetails
          onBackClick={this.handleBackClick}
          launch={this.props.launch}
        />
      );
    } else {
      return (
        <LaunchesList
          onLaunchClick={this.handleLaunchClick}
          launches={this.props.launches}
          filter={this.props.filter}
          onFilterClick={this.handleFilter}
        />
      );
    }
  }
  render() {
    return <main>{this.getActiveComponent()}</main>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
