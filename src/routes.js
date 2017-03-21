import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppLayout from './components/app-layout';
import HomePage from './components/home/home-page';
import AllDevs from './components/devs/dev-users';
import DevTimesheet from './components/timesheet/dev-timesheet';
import ApproveSuccess from './components/timesheet/approve-success';

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={HomePage} />
    <Route path="devs" component={AllDevs} />
    <Route path="success" component={ApproveSuccess} />
  </Route>
);