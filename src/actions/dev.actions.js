import * as types from './action-types.constants';
import timesheetAPI from '../api/mockAuthorApi';
import axios from 'axios';


// Dev related actions
// All action creators MUST return type as property

// Success suffix used because this func doesn't fire untill all devs have [personal preference]
// been successfully returned by API call
function getUsers(devs){
  return { type: types.LOAD_USER_DATA, devs}; // same as es6 devs:devs
}

// Wait for Aurity API from Peter

export function loadDevs(){
  return function(dispatch){
    return axios.get('https://timesheet-staging-aurity.herokuapp.com/api/users')
    .then(function (res) {
      dispatch(getUsers(res.data));
        // console.log(res.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
}
