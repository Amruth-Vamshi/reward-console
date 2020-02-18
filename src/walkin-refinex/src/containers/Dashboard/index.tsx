import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import asyncComponent from "../../util/asyncComponent";
import Dashboard from './Dashboard';
import { RouteChildrenProps } from 'react-router';

interface AnalyticsManagerProps extends RouteChildrenProps {}

const AnalyticsManager: React.FunctionComponent<AnalyticsManagerProps> = ({
  match,
}) => {
  return (
    <Switch>
      <Route exact path={match.url} component={Dashboard} />
    </Switch>
  );
};
export default AnalyticsManager;
