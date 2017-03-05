import * as types from '../actions/action-types.constants';  
// Each reducer handles ONLY ONE specific slice/part of state
export default function devReducers(state = {},action){// Set default state to '[]'

// dev Reducers above, can be anonymous function

  switch (action.type){
    case types.LOAD_USER_DATA:
    //debugger;
      // /return [...state,  // Return an image/copy of the changed state
      // Object.assign({}, action.dev)
      // ];
      return action.devs; // returned from API
      
    default: // This reducer doesn't handle the action passed
      return state;
  }
}
