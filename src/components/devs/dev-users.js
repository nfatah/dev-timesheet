// Devs components 
import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link } from 'react-router';
import $ from 'jquery';
import currentWeekNumber from 'current-week-number';
import * as timesheetActions from '../../actions/timesheet.actions';
import * as devActions from '../../actions/dev.actions';

class AllDevs extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  componentDidMount() {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 1 // Creates a dropdown of 15 years to control year
    });
  }
  dispatched(d){
    return function devRow(dev, index){
      function getDate(){
        let val = document.getElementById(`date_pick${index}`).value;
        let date_picked = new Date(val);
        let week_no = currentWeekNumber(val).toString();
        let month_no = date_picked.getMonth()+1;
        month_no = month_no.toString(); // JS months are zero-indexed
        let year = date_picked.getFullYear().toString();
        console.log(week_no);
        d(timesheetActions.getDevTimesheet(week_no, month_no, year,dev.id));
      }
      return(
        <tr key={index}>
          <td> {dev.username}</td>
          <td> {dev.id}</td>
          <td> {dev.email}</td>
          <td>
            <div>
              <form>
                <div className="row">
                  <div className="col s6">
                    <input id={`date_pick${index}`}defaultValue="2017-01-01" type="date" className="datepicker picker__input"/>
                  </div>
                  <div className="col s6">
                    <Link to="/timesheet" onClick={getDate} className="btn">CHECK </Link>
                  </div>
                </div>
              </form>
            </div>
          </td>
        </tr>
      );
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
          </div>
        </div>
      </div>
    );
  }
}
// Props Validation
AllDevs.propTypes = {
  actions: PropTypes.object.isRequired,
  devs: PropTypes.array.isRequired,
  dispatch: PropTypes.func
};

// Connect Component wraps and exposes our components to redux
// If no 2nd, 'connect' auto injects a dispatch prop into components
export default connect(mapStateToProps)(AllDevs);

function mapStateToProps(state, ownProps){
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