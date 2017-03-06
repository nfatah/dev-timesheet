// Devs components

import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as timesheetActions from '../../actions/timesheet.actions.js';
import Status from './timesheet-status';
import ApproveButton from './approve-button';

class DevTimesheet extends React.Component {
  constructor(props, context){
    super(props, context);

  }

  // componentDidMount(){
  //   $('#add_note').val('New Text');
  //   $('#add_note').trigger('autoresize');
  // }
  render(){
    let selected_week = this.props.timesheet.selected_week;
    let week_timesheet = this.props.timesheet.dev_timesheet.weeks;
    week_timesheet = week_timesheet.filter(week => week.week_number == selected_week)[0];// de-array it

    //debugger;
    return(
      <div className="row">
        <div>
          <div className="container">
              <h4 className="center">MONTH {this.props.timesheet.dev_timesheet.month} - WEEK {selected_week} TIMESHEET </h4>
              <h5 className="center blue-text">Developer: User_{this.props.timesheet.dev_timesheet.owner_id}</h5>
          </div>

          <divider></divider>
          <div className="row">
            <div className="container">
              <div className="col s12">
                <div className="card grey">
                  <div className="card-content white-text">
                    <div className="row">
                      <table className="bordered">
                        <thead>
                            <tr>
                              <th data-fiel="status">Status</th>
                              <th data-fiel="approver">Approved by</th>
                              <th data-fiel="approved_date">Approve Date</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><Status status={week_timesheet.status}/></td>
                            <td>{week_timesheet.approvers.map(id => ` User_${id} |`)}</td>
                            <td>{week_timesheet.approved_by_date}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="row">
                      <form className="col s12">
                        <div className="row">
                          <div className="input-field col s12">
                            <textarea  id="add_note" className="materialize-textarea grey lighten-2"></textarea>
                            <label htmlFor="add_note">Add a note</label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card-action">
                    <div className="row">
                      <div className="col s6">
                      <ApproveButton week_id={selected_week} approved={week_timesheet.status}/>
                      </div>
                      <div className="col s6">
                        <buton type="button"className="btn red right">REJECT</buton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
// Props Validation
DevTimesheet.propTypes = {
  timesheet: PropTypes.object.isRequired
};

// Connect Component wraps and exposes our components to redux
// If no 2nd, 'connect' auto injects a dispatch prop into components
export default connect(mapStateToProps)(DevTimesheet);

function mapStateToProps(state){
  //debugger;
  return {
    timesheet: state.timesheet,
    devs: state.devs
  };
}
// function mapDispatchToProps(dispatch){
//   return {
//     actions: bindActionCreators(timesheetActions,dispatch)
//   };
// }

