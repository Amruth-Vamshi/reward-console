import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
// import asyncComponent from "../../util/asyncComponent";
import Landing from './Landing';

const Dashboard = ({match}) => {
    // console.log("Inside NearX-Routes-index-Dashboard ["+JSON.stringify(match)+"]")
    return (
        <Switch>
            <Redirect exact from="/nearx/dashboard" to="/nearx/dashboard/landing"/>
            {/* <Route path="/main/dashboard" component={asyncComponent(() => import('./dashboard'))}/> */}
            <Route path="/nearx/dashboard/landing" component={Landing}/>
        </Switch>
    )
}
export default Dashboard;
