import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import DashboardContainer from './DashboardContainer';
import LoginContainer from './LoginContainer';

export default class MainContainer extends Component {
  render() {
    return (
      <Router>
        <Route path={'/'} exact component={LoginContainer} />
        <Route path={'/dashboard'} component={DashboardContainer} />
      </Router>
    );
  }
}
