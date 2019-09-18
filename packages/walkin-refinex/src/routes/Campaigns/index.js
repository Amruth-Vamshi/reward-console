import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Edit from "./Edit"
import Create from "./Create"
import CampaignLIst from "../../containers/campaignList"
export default ({ match }) => {
  console.log(match);
  return (
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/overview`} />
      <Route
        path={`${match.url}/:id/edit`}
        component={Edit}
      />
      <Route
        path={`${match.url}/create`}
        component={Create}
      />
      <Route
        path={`${match.url}/overview`}
        exact
        component={CampaignLIst}
      />
    </Switch>
  );
};
