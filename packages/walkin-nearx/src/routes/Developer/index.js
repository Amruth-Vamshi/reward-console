import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Developer from "./Developer";
const DeveloperManager = ({match}) => {
    return (
        <Switch>
            {/* <Redirect exact from="/nearx/geofence" to="/nearx/geofence/home"/> */}
            <Route exact path={match.url} component={Developer}/>
            {/* <Route path={`${match.url}/createplace`} component={CreatePlace}/> */}
        </Switch>
    )
}
export default DeveloperManager;
