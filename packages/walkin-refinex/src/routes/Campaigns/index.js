import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { asyncComponent } from "@walkinsole/walkin-components";

export default ({ match }) => {
  console.log(match);
  return (
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/overview`} />
      <Route
        path={`${match.url}/:id/edit`}
        component={asyncComponent(() => import("./Edit"))}
      />
      <Route
        path={`${match.url}/create`}
        component={asyncComponent(() => import("./Edit"))}
      />
      <Route
        path={`${match.url}/overview`}
        exact
        component={asyncComponent(() => import("./Overview"))}
      />
    </Switch>
  );
};
