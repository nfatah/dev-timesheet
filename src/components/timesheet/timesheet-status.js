// Devs components

import React, { PropTypes } from 'react';

// Status component
class Status extends React.Component {
  constructor(props){
  super(props);
}
  render() {
    if(this.props.status === "approved"){
      return (
      <span className="new badge green left" data-badge-caption="approved"></span>
      );
    }else if(this.props.status === "rejected"){
      return (
        <span className="new badge green left" data-badge-caption="approved"></span>
      );
    }
  }
}

// Props Validation
Status.propTypes = {
  status: PropTypes.string.isRequired
};

export default Status;

