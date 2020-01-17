import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import asyncComponent from "../../util/asyncComponent";
import Places from "./places";
import CreatePlace from "./CreatePlaces";

const StoreGeofenceManager = ({ match }) => {
  // console.log("Inside NearX-Routes-index-Places ["+JSON.stringify(match.uri)+"]")
  return (
    <Switch>
      {/* <Redirect exact from="/nearx/geofence" to="/nearx/geofence/home"/> */}
      {/* <Route path="/main/dashboard" component={asyncComponent(() => import('./dashboard'))}/> */}
      <Route exact path={match.url} component={Places} />
      <Route path={`${match.url}/createplace`} component={CreatePlace} />
    </Switch>
  );
};
export default StoreGeofenceManager;
