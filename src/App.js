import React from 'react';
import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';
import './App.scss';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    launches: state.launches,
    launch: state.launch,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeLaunch: actions.changeLaunch,
      fetchLaunches: actions.fetchLaunches,
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
