import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SettingsForm from "./SettingsForm";
const SettingsManager = ({ match }) => {
  // console.log("Inside NearX-Routes-index-Places ["+JSON.stringify(match.uri)+"]")
  return (
    <Switch>
      {/* <Redirect exact from="/nearx/geofence" to="/nearx/geofence/home"/> */}
      <Route exact path={match.url} component={SettingsForm} />
      {/* <Route path={`${match.url}/createplace`} component={CreatePlace}/> */}
    </Switch>
  );
};
export default SettingsManager;
