
// Aprrove button component

import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as timesheetActions from '../../actions/timesheet.actions';


class ApproveButton extends React.Component {
  componentDidMount(){
      $('select').material_select();
  }

  render(){
    let {week_id, approved, devs, dispatch} = this.props;
    function approve(d){
      let approved_by_id = document.getElementById("approver").value;
      d(timesheetActions.approveDevTimesheet(week_id, approved_by_id));//dispatch action
    }
    return(
      <div className="input-field col s6">
        <select id="approver">
          <option value="approve_as" disabled selected>Approve as:</option>
          {devs.map((dev,index) => {
              return (
                <option key={index}value={dev.username}>{dev.username}</option>
              );
            })
          }
        </select>
        <label>Select Approver</label>
        <buton type="button" className="btn green" onClick={approve(dispatch)}>APPROVE</buton>

      </div>
    );

  }
}
// Props Validation
ApproveButton.propTypes = {
  devs: PropTypes.array.isRequired,
  week_id: PropTypes.string.isRequired,
  approved: PropTypes.bool.isRequired
};


// Connect Component wraps and exposes our components to redux
// If no 2nd, 'connect' auto injects a dispatch prop into components
export default connect(mapStateToProps)(ApproveButton);

function mapStateToProps(state){
  //debugger;
  return {
    devs: state.devs,
    timesheet: state.timesheet
  };
}
