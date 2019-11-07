import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import asyncComponent from "../../util/asyncComponent";
import Dashboard from './Dashboard';

const AnalyticsManager = ({ match }) => {
    return (
        <Switch>
            <Route exact path={match.url} component={Dashboard} />
        </Switch>
    )
}
export default AnalyticsManager;
