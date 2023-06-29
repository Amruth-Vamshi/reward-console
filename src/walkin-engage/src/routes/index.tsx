import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';
import Loyalty from '../containers/Loyalty';
import Notification from '../containers/Notification';
import LoyaltyCard from '../containers/Dashboard/LoyaltyCard';
import { CustomerTable, Bill } from '../containers/CustomerCare';

interface EngageRoutesProps extends RouteChildrenProps {}

const EngageRoutes: React.FunctionComponent<EngageRoutesProps> = ({
  match,
}) => {
  return (
    <div className="Engage-Main">
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
        <Route
          exact
          path={`${match.url}/loyalty_card`}
          component={LoyaltyCard}
        />

        <Route exact path={`${match.url}/dashboard`} component={Loyalty} />
        <Route exact path={`${match.url}/loyalty`} component={Loyalty} />
        <Route
          exact
          path={`${match.url}/notification`}
          component={Notification}
        />
        <Route
          exact
          path={`${match.url}/customercare`}
          component={CustomerTable}
        />
        <Route exact path={`${match.url}/customercare/:id`} component={Bill} />
      </Switch>
    </div>
  );
};

export default EngageRoutes;
