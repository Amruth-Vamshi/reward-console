import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Dashboard from "./dashboard/index";
import AnalyticsManager from "./Analytics/index";
import Places from "./Places";
import settings from "./Settings";
import NearxApps from "./App";
import DeveloperManager from "./Developer";
import TestUpload from "./TestUpload";

export default class NearXRoutes extends Component {
  render() {
    // console.log('props',this.props)
    return (
      <div>
        <Switch>
          <Redirect exact from="/nearx" to="/nearx/places" />
          <Route path="/nearx/dashboard" component={Dashboard} />
          <Route path="/nearx/analytics" component={AnalyticsManager} />
          <Route path="/nearx/places" component={Places} />
          <Route path="/nearx/developer" component={DeveloperManager} />
          <Route path="/nearx/settings" component={settings} />
          <Route path="/nearx/apps" component={NearxApps} />
          <Route path="/nearx/settings" component={settings} />
          <Route path="/nearx/testUpload" component={TestUpload} />
          <Route path="/nearx/*" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}
