
// Aprrove button component

import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



class ApproveButton extends React.Component {
  componentDidMount(){
      $('select').material_select();
  }
  render(){
    return(
      <div className="input-field col s6">
        <select>
          <option value="" disabled selected>Approve as:</option>
          {this.props.devs.map((dev,index) => {
              return (
                <option key={index}value={index}>{dev.username}</option>
              );
            })
          }
        </select>
        <label>Select Approver</label>
        <buton type="button" className="btn green ">APPROVE</buton>

      </div>
    );

  }
}
// Props Validation
ApproveButton.propTypes = {
  devs: PropTypes.array.isRequired
};


// Connect Component wraps and exposes our components to redux
// If no 2nd, 'connect' auto injects a dispatch prop into components
export default connect(mapStateToProps)(ApproveButton);

function mapStateToProps(state){
  //debugger;
  return {
    devs: state.devs
  };
}
