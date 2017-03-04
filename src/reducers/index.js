// Root reducers. All application reducers in one file.
// A reducer takes the current state & action and returns a new state
// REDUCERS HANDLE OUR ACTIONS
import {combineReducers} from 'redux';
import devReducer from './dev.reducer';
import timesheetReducer from './timesheet.reducer';

// define all reducers to combine them
const  allReducers = combineReducers({
  devs: devReducer,
  timesheet: timesheetReducer
        // nice name property access it later in state
        // as state.devs
});
export default allReducers;