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
  renderStatus(){
    if(this.props.timesheet.weeks[0].status === "approved"){
      return "approved";
    }else if(this.props.timesheet.weeks[0].status === "rejected"){
      return "rejected";
    }
  }
  // componentDidMount(){
  //   $('#add_note').val('New Text');
  //   $('#add_note').trigger('autoresize');
  // }
  render(){
    //debugger;
    return(
      
      <div className="row">
        <div>
          <div className="container">
              <h4 className="center">MONTH {this.props.timesheet.month} - WEEK {this.props.timesheet.weeks[0].week_number} TIMESHEET </h4>
              <h5 className="center blue-text">Developer: User_{this.props.timesheet.owner_id}</h5>
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
                            <td><Status status={this.renderStatus()}/></td>
                            <td>{this.props.timesheet.weeks[0].approvers.map(id => ` User_${id} |`)}</td>
                            <td>{this.props.timesheet.weeks[0].approved_by_date}</td>
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
                      <ApproveButton/>
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
  actions: PropTypes.object.isRequired,
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

