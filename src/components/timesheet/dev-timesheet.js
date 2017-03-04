// Devs components

import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as timesheetActions from '../../actions/timesheet.actions.js';

class DevTimesheet extends React.Component {
  constructor(props, context){
    super(props, context);
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
                    <div className="col s12">
                      <div className="col s10">
                        <span className="new badge green" data-badge-caption="approved">{this.props.timesheet.weeks[0].approvers.length}</span>
                        <span className="new badge red" data-badge-caption="rejected">4</span>
                        <span className="new badge orange" data-badge-caption="pending">4</span>
                      </div>
                    </div>
                    <div className="row">
                      <span >Worksheet approved by: {this.props.timesheet.weeks[0].approvers.map(id => ` User_${id} `)}</span>
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
                    <buton type="button" className="btn green left">APPROVE</buton>
                    <buton type="button"className="btn red right">REJECT</buton>
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
export default connect(mapStateToProps, mapDispatchToProps)(DevTimesheet);

function mapStateToProps(state, ownProps){
  //debugger;
  return { timesheet: state.timesheet};
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(timesheetActions,dispatch)
  };
}

