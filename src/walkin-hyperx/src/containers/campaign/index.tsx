import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CampaignList from './campaignList';
import CampaignCreation from './campaignCreation';

const StoreGeofenceManager = ({ match }) => {
  // console.log("Inside NearX-Routes-index-Places ["+JSON.stringify(match.uri)+"]")
  return (
    <Switch>
      {/* <Redirect exact from="/nearx/geofence" to="/nearx/geofence/home"/> */}
      <Route path={`${match.url}/create`} component={CampaignCreation} />
      <Route path={match.url} component={CampaignList} />
    </Switch>
  );
};
export default StoreGeofenceManager;
