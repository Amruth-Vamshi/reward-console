import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { asyncComponent } from "@walkinsole/walkin-components";

const RefineXRoutes = ({ match }) => {
  return (
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
      <Route
        path={`${match.url}/dashboard`}
        component={asyncComponent(() => import("./Dashboard"))}
      />
      <Route
        path={`${match.url}/feedback`}
        component={asyncComponent(() => import("./Campaigns"))}
      />
    </Switch>
  );
};

export default RefineXRoutes;
