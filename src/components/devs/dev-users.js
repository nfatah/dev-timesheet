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
import modifyCalenderView from './calender-view.modifier';


class AllDevs extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  componentDidMount() {
    let user_id = () => this.refs.user_dropdown.value;// gets us updated dropdown each time, even though componentDidMount fires once
    let month = moment().format('MM');
    //initialize datepicker according to docs
    let $input = $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 1, // Creates a dropdown of 15 years to control year
      onSet: (context) => {
        console.log('onSet Fired!:', context);
        month = picker.get('view').month;
        modifyCalenderView(month, user_id);
      },
      onOpen: () => {
        console.log('onOpen Fired!:');
        modifyCalenderView(month, user_id);
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
    };
  }
  render(){

    let {devs, dispatch} = this.props;
    //debugger;
    return(
      <div className="row"> 
        <div className="container">
          <div className="container">
            <h3>Select Week Timesheet for User</h3>
          </div>
          <div>
            <div className="input-field col s6">
              <select ref="user_dropdown"className="browser-default" >
                <option defaultValue="choose user" disabled>choose user:</option>
                {devs.map((dev,index) => {
                    return (
                      <option key={index}value={index+1}>{dev.username}</option>
                    );
                  })
                }
              </select>
            </div>
            <div className="input-field col s6">
              <input defaultValue="2017-01-02" type="date" className="datepicker picker__input"/>
              <Link className="btn">CHECK </Link>
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