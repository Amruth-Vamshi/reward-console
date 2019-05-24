import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { asyncComponent } from "@walkinsole/walkin-components";

const RefineXRoutes = ({ match }) => {
  console.log(match);

  return (
    <Switch>
      <Route
        path={`${match.url}`}
        component={asyncComponent(() => import("./Dashboard"))}
      />
    </Switch>
  );
};

export default RefineXRoutes;
