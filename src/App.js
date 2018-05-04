import React, { Component } from 'react';
import launch from './assets/json/launch.json';
import launchSite from './assets/json/launch_site.json';
import rocket from './assets/json/rocket.json';
import LaunchDetails from './view/LaunchDetails';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main>
      <LaunchDetails
        launch={launch}
        launchSite={launchSite}
        rocket={rocket}
      />
    </main>
    );
  }
}

export default App;
