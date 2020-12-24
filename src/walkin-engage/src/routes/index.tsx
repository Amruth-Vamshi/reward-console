import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RouteChildrenProps } from 'react-router';
import Loyalty from '../containers/Loyalty';
import Notification from '../containers/Notification';

interface EngageRoutesProps extends RouteChildrenProps {}

const EngageRoutes: React.FunctionComponent<EngageRoutesProps> = ({
  match,
}) => {
  return (
    <div className="Engage-Main">
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
        {/* <Route
                    exact
                    path={`${match.url}/dashboard/loyalty_card`}
                    component={LoyaltyCard}
                    />
                */}
        <Route exact path={`${match.url}/dashboard`} component={Loyalty} />
        <Route exact path={`${match.url}/loyalty`} component={Loyalty} />
        <Route
          exact
          path={`${match.url}/notification`}
          component={Notification}
        />
      </Switch>
    </div>
  );
};

export default EngageRoutes;
