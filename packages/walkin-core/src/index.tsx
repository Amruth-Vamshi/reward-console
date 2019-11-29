import CoreLandingPage from "./routes/CoreLanding";
import Organization from "./routes/Organization";
import OrgStoreList from "./routes/Organization/orgStoreList";
import Settings from "./routes/Settings";
import BusinessRules from "./routes/BusinessRules";

import * as React from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
import Users from "./routes/users";

interface HomeProps extends RouteComponentProps {}

export default class extends React.Component<HomeProps, {}> {
  render() {
    return (
      <div className="gx-main-content-wrapper">
        <Switch>
          <Route exact path="/core" component={CoreLandingPage} />
          <Route
            path="/core/organization/:id/stores"
            component={OrgStoreList}
          />
          <Route path={"/core/organization/:id"} component={Organization} />
          <Route path={"/core/settings/*"} component={Settings} />
          <Route path={"/core/business-rules"} component={BusinessRules} />

          <Route path={`${this.props.match.url}/users`} component={Users} />
          <Route path="/core/*" component={CoreLandingPage} />
        </Switch>
      </div>
    );
  }
}
