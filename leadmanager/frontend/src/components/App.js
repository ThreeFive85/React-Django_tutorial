import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from './layout/Alerts';

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
              <Route exact path="/" component={Dashboard} />
            </div>
          </Fragment>
        </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
