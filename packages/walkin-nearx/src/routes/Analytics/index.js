import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
// import asyncComponent from "../../util/asyncComponent";
import Device from './Analytics';

const AnalyticsManager = ({match}) => {
    console.log("Inside NearX-Routes-index-Dashboard ["+JSON.stringify(match)+"]")
    return (
        <Switch>
            <Route exact path={match.url} component={Device}/>
        </Switch>
    )
}
export default AnalyticsManager;
