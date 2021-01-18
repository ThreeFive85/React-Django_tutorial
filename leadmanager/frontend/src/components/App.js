import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from './layout/Alerts';
import Register from './accounts/Register';
import Login from './accounts/Login';

import { Provider as AlertProvider, positions } from 'react-alert';
import AlertMUITemplate from 'react-alert-template-mui';

import { Provider } from "react-redux";
import store from "../store";

// Alert Options
const alertOptions = {
  position: positions.MIDDLE
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <AlertProvider template={AlertMUITemplate}{...alertOptions}>
        <Router>
          <Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
