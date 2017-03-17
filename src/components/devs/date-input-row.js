import React from 'react';
import {Link} from 'react-router';

class DateInputRow extends React.Component{
  constructor(props){
    super();
  }
  render(){
    let {username, id, email, getDateFunc, inputId} = this.props;

      return(
      <tr>
        <td> {username}</td>
        <td> {id}</td>
        <td> {email}</td>
        <td>
          <div>
            <form>
              <div className="row">
                <div className="col s6">
                  <input id={inputId}defaultValue="2017-01-02" type="date" className="datepicker picker__input"/>
                </div>
                <div className="col s6">
                  <Link onClick={getDateFunc} className="btn">CHECK </Link>
                </div>
              </div>
            </form>
          </div>
        </td>
      </tr>
    );
  }
}
export default DateInputRow;