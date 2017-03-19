// Devs components 
import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
import moment from 'moment';
import axios from 'axios';
import * as timesheetActions from '../../actions/timesheet.actions';
import * as devActions from '../../actions/dev.actions';
import DateInputRow from './date-input-row.js'

class AllDevs extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  componentDidMount() {
    let userId = $('.datepicker#')
    let $input = $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 1, // Creates a dropdown of 15 years to control year
      disable: [1,7], // disable Weekends
      onSet: (context) => {
        console.log('Just set stuff:', context);
        let month = picker.get('view').month;
        axios.get(`https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/${month}/2017/${1}`)
        .then(function (res) {
          console.log(res.data);
            // console.log(res.data);
          })
          .catch(function (error) {
            // console.log(error);
          });
        // $(".picker__day.picker__day--infocus").each(function(){console.log(this)})
        // let x = $("div.picker__day.picker__day--infocus[data-pick=""]").val(function() {
        // console.log($(this).attr("data-pick")); })
        // $(`td div.picker__day.picker__day--infocus.picker__day--highlighted`).val(function(){
        //   console.log(this);
        // });
        // $("div.picker__day.picker__day--infocus[data-pick='1490994000000']").addClass('red');
        // console.log(picker.get('view'));

      }
    });
    let picker = $input.pickadate('picker');
    // console.log(picker.get('view').month);
}

  dispatched(d){
    return function devRow(dev, index){

      function getDate(){

        let val = document.getElementById(`date_pick${index}`).value;
        // console.log(val);
        let year = moment(val).format('YYYY');
        let day_of_year = moment(val).format('DDD');
        let week_of_year = moment(val).format('W');
        // let month_of_year = moment(val).format('M');
        // Get the correct month based on the API because some weeks span 2 Consecutive months
        let beginningOfWeek = moment().week(week_of_year).startOf('week');
        //
        let month_of_year =  beginningOfWeek.format('MM');
         console.log(month_of_year);
        if(year !== '2017'){
          alert("Please choose ONLY 2017 weeks");
          browserHistory.push('/devs');
          return;
        }else if(day_of_year === '1'){
          alert("January 1st 2017 is week 52 of 2016. Please choose ONLY 2017 weeks");
          browserHistory.push('/devs');
          return;
        }
        d(timesheetActions.getDevTimesheet(week_of_year, month_of_year, year,dev.id));
      }
      return <DateInputRow key={index} username={dev.username} id={dev.id} email={dev.email} getDateFunc={getDate} inputId={index+1}/>
    };
  }
  render(){
    let {devs, dispatch} = this.props;
    //debugger;
    return(
      <div className="row"> 
        <div className="container">
          <div className="container">
            <h3>AURITY DEVS LIST</h3>
          </div>
          <div>
            <table className="responsive-table highlight centered">
              <thead>
                <tr>
                  <th>USERNAME</th>
                  <th>ID</th>
                  <th>EMAIL</th>
                  <th>VIEW TIMESHEET</th>
                </tr>
              </thead>
              <tbody>
                {devs.map(this.dispatched(dispatch))}
              </tbody>
            </table> 
                        <div className="input-field col s6">
                          <select ref="x"className="browser-default" >
                            <option defaultValue="choose user" disabled>choose user:</option>
                            {devs.map((dev,index) => {
                                return (
                                  <option key={index}value={index+1}>{dev.username}</option>
                                );
                              })
                            }
                          </select>
                        </div>
          </div>
        </div>
      </div>
    );
  }
}
// Props Validation
AllDevs.propTypes = {
  devs: PropTypes.array.isRequired,
  dispatch: PropTypes.func
};

// Connect Component wraps and exposes our components to redux
// If no 2nd, 'connect' auto injects a dispatch prop into components
export default connect(mapStateToProps)(AllDevs);

function mapStateToProps(state){
  //debugger;
  return {
    devs: state.devs
};
}
// function mapDispatchToProps(dispatch){
//   return {
//     devActions: bindActionCreators(devActions,dispatch),
//     timesheetActions: bindActionCreators(timesheetActions,dispatch)
//   };
// }