import CoreLandingPage from './routes/CoreLanding';
import Organization from './routes/Organization';
import OrgStoreList from './routes/Organization/orgStoreList';
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Users from "./routes/users";

export default class extends Component {
  render() {
    return (
      <div className="gx-main-content-wrapper">
        <Switch>
          <Route exact path="/core" component={CoreLandingPage} />
          <Route path="/core/organization/:id/stores" component={OrgStoreList} />
          <Route path={'/core/organization/:id'} component={Organization} />
          <Route path={`${this.props.match.url}/users`} component={Users} />
          <Route path="/core/*" component={CoreLandingPage} />
        </Switch>
      </div>
    );
  }
}
