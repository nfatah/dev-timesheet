import * as types from './action-types.constants';
import axios from 'axios';
import {browserHistory} from 'react-router';


// Dev related actions
// All action creators MUST return type as property

// ************TIMESHEET DATA & ACTIONS******************
// generate action after all data from API call has been fetched
export function getTimesheet(timesheet){
  return { type: types.LOAD_USER_TIMESHEET, timesheet}; // same as es6 devs:devs
}

//Async fetch from aurity API endpoint using axios
export function getDevTimesheet(week_no, month_no, year,user_id){
  return function(dispatch){
    return axios.get(`https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/${month_no}/${year}/${user_id}`)
    .then(function (res) {
      let week_timesheet = res.data.data;
      // week_timesheet = week_timesheet.filter(week => week.week_number === week_no)
      dispatch(getTimesheet(week_timesheet));
      browserHistory.push('timesheet')
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
}

// export function selectUserTimesheet(){
//   return {
//     type: types.SELECT_USER_TIMESHEET, 
//   }
// }