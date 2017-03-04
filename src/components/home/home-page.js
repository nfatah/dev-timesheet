//Home Page Component

import React from 'react';
import {Link} from 'react-router';


class HomePage extends React.Component {
  render() {
    return(
      <div className="container">
        <h1>Timesheets for Autiry Devs</h1>

        <Link to="devs" className="btn btn-primary btn-lg">Aurity Devs</Link>
      </div>
    );
  }
}
export default HomePage;