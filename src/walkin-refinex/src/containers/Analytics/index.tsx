import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import asyncComponent from "../../util/asyncComponent";
import analytics from "./analytics";
import { RouteChildrenProps } from "react-router";

interface analyticsDataProps extends RouteChildrenProps {}

const analyticsData: React.FunctionComponent<analyticsDataProps> = ({
  match
}) => {
  return (
    <Switch>
      <Route exact path={match.url} component={analytics} />
    </Switch>
  );
};
export default analyticsData;
