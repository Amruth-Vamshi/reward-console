import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import asyncComponent from "../../util/asyncComponent";
import Landing from './Landing';

const Dashboard = ({ match }) => {
    // console.log("Inside NearX-Routes-index-Dashboard ["+JSON.stringify(match)+"]")
    return (
        <Switch>
            <Redirect exact from="/nearx/home" to="/nearx/home/landing" />
            {/* <Route path="/main/dashboard" component={asyncComponent(() => import('./dashboard'))}/> */}
            <Route path="/nearx/home/landing" component={Landing} />
        </Switch>
    )
}
export default Dashboard;
