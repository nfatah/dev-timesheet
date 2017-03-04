// Layout template for every page
// App Layout Component


import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import HeaderNav from './partials/header-nav';

class AppLayout extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <HeaderNav />
        {this.props.children}
      </div>
    );
  }
}
AppLayout.propTypes = {
  children: PropTypes.object.isRequired
};
export default AppLayout;