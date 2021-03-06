// define a function that configures our store
// we'll call this funciton in our app's entry file
import {createStore, compose, applyMiddleware} from 'redux';

import allReducers from '../reducers'; // ../reducers/index
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk'; // Thunk Middleware

export default function configureStore(initialState){ // Initialize store with some state
  let store = createStore(
    allReducers,


    compose(

      applyMiddleware(
      thunk,// Thunk mideware for AJAX calls to DB/API
      reduxImmutableStateInvariant()
    ),
      // for redux dev tools in chrome
      window.devToolsExtension? window.devToolsExtension() : f => f


    
    )
  );

  return store;
}