import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes '
import store from './store.js'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);