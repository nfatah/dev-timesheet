import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppLayout from './components/app-layout';
import HomePage from './components/home/home-page';
import AllDevs from './components/devs/dev-users';
import DevTimesheet from './components/timesheet/dev-timesheet';

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={HomePage} />
    <Route path="devs" component={AllDevs} />
    <Route path="timesheet" component={DevTimesheet} />
    {/*<Route path="check-timesheet" component={CheckTimesheet} />*/}
  </Route>
);