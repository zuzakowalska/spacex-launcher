import React from 'react';
import launchSite from './assets/json/launch_site.json';
import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';
import './App.scss';

class App extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'list',
      launches: [],
      launch: [],
    };
    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }
  componentDidMount() {
    fetch('https://api.spacexdata.com/v2/launches')
      .then(response => response.json())
      .then(launches => this.setState({ launches }));
  }
  get activeViewComponent() {
    const { viewName } = this.state;
    const { launches } = this.state;
    let { launch } = this.state;
    switch (viewName) {
      case 'list':
        return (
          <LaunchesList
            launches={launches}
            onLaunchClick={this.handleLaunchClick}
          />
        );

      case 'details':
        return (
          <LaunchDetails
            launch={launch}
            launchSite={launchSite}
            onBackClick={this.handleBackClick}
          />
        );

      default:
        return null;
    }
  }

  handleLaunchClick(launches) {
    this.setState({
      viewName: 'details',
      launch: launches,
    });
  }

  handleBackClick() {
    this.setState({ viewName: 'list' });
  }

  render() {
    return <main>{this.activeViewComponent}</main>;
  }
}

export default App;
