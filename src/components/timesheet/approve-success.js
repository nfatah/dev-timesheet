// Devs components

import React from 'react';

class ApproveSuccess extends React.Component {

    
  render(){

    //debugger;
    return(
      <div className="row">
          <div className="container">
              <h4 className="center green flow-text">SUCCESS!</h4>
          </div>
          <div className="row">
            <div className="container">
              <div className="col s12">
                <div className="card grey lighten-4">
                  <div className="card-content white-text">
                    <div className="container flow-text green-text">
                      <h5>
                        Thank you for approving the timesheet.
                      </h5>
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

export default ApproveSuccess;