import * as types from '../actions/action-types.constants';  
// Each reducer handles ONLY ONE specific slice/part of state
export default function approveTimesheetReducer(state = [],action){// Set default state to '[]'

// dev Reducers above, can be anonymous function

  switch (action.type){
    case types.APPROVE_TIMESHEET:

      return action.devs; // returned from API
      
    default: // This reducer doesn't handle the action passed
      return state;
  }
}