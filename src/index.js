import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Route, Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// render(<App />, document.getElementById('root'));
