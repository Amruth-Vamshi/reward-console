import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Edit from './Edit';
import Create from './Create';
import CampaignLIst from '../../containers/campaignList';
import CampaignView from '../../containers/campaignDashboard';
import { RouteChildrenProps } from 'react-router';

interface RefineXProps extends RouteChildrenProps {}

const RefineXApp: React.FunctionComponent<RefineXProps> = ({ match }) => {
  return (
    <div className="RefineX-Main">
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/overview`} />
        <Route path={`${match.url}/:id/edit`} component={Edit} />
        <Route path={`${match.url}/create`} component={Create} />
        <Route path={`${match.url}/overview`} exact component={CampaignLIst} />
        <Route path={`${match.url}/view/:id`} exact component={CampaignView} />
      </Switch>
    </div>
  );
};

export default RefineXApp;
