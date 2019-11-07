import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import asyncComponent from "../../util/asyncComponent";
import analytics from './analytics'

const analyticsData = ({ match }) => {
    return (
        <Switch>
            <Route exact path={match.url} component={analytics} />
        </Switch>
    )
}
export default analyticsData;
