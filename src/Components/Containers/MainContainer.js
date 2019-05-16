import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from '../../Utils/Routes';

export default class MainContainer extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {Routes.map(i => (
            <Route
              key={i.id}
              path={i.path}
              exact={i.exact}
              component={i.component}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}
