import * as React from "react";
import { Redirect, Route, Switch, RouteComponentProps } from "react-router-dom";
// import asyncComponent from "../../util/asyncComponent";
import Device from './Dashboard';

const AnalyticsManager = ({ match }: RouteComponentProps) => {
    console.log("Inside NearX-Routes-index-Dashboard [" + JSON.stringify(match) + "]")
    return (
        <Switch>
            <Route exact path={match.url} component={Device} />
        </Switch>
    )
}
export default AnalyticsManager;
