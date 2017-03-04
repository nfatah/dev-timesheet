// /* eslint-disable no-console */
// console.log('hi');

import 'babel-polyfill'; // For some es6 features not yet supported by babel
import React from 'react'; // React
import { render} from 'react-dom'; // ReactDOM
import configureStore from './store/configure-store'; // Store config function
import { Provider } from 'react-redux'; // Provider attaches our store to our react container components
import { Router, browserHistory } from 'react-router';
import routes from './routes'; 
import {loadDevs} from './actions/dev.actions';
import {getDevTimesheet} from './actions/timesheet.actions';

import '../node_modules/materialize-css/dist/css/materialize.min.css'; // materialize CSS
import './styles/styles.css'; //custom styles

import '../node_modules/jquery/dist/jquery.min.js'; // Jquery CSS
import '../node_modules/materialize-css/dist/js/materialize.min.js'; // materialize JS

//configure our store on app startup
const store = configureStore(); // Instance of store: default state from reducers.



// Thunk middleware knows how to handle functions.
// It passes the dispatch method as an argument to the function,
// thus making it able to dispatch actions itself.
store.dispatch(loadDevs());
// store.dispatch(getDevTimesheet());

render(
  //Provider wraps app components to connect to redux store
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
  
);
