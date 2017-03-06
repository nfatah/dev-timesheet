import * as types from './action-types.constants';
import axios from 'axios';
import {browserHistory} from 'react-router';


// Dev related actions
// All action creators MUST return type as property

// ************TIMESHEET DATA & ACTIONS******************
// generate action after all data from API call has been fetched
export function getTimesheet(timesheet, selected_week){
  return { type: types.LOAD_USER_TIMESHEET, timesheet, selected_week}; // same as es6 devs:devs
}
export function approveTimesheet(approveTimesheet){
  return { type: types.APPROVE_TIMESHEET};
}
//Async fetch from aurity API endpoint using axios
export function getDevTimesheet(week_no, month_no, year,user_id){
  return function(dispatch){
    return axios.get(`https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/${month_no}/${year}/${user_id}`)
    .then(function (res) {
      let week_timesheet = res.data.data;
      // week_timesheet = week_timesheet.filter(week => week.week_number === week_no)
      dispatch(getTimesheet(week_timesheet,week_no));
      browserHistory.push('timesheet');
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
}
export function approveDevTimesheet(week_id, approved_id){
  return function(dispatch){
    return axios.put(`https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/${week_id}/users/${approved_id}`,{
        status: 'approved' 
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
