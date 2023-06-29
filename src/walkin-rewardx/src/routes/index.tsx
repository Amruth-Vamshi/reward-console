import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import NewSegment from '../containers/segment/newSegment';
// import { NEW_SEGMENT, SEGMENT_LIST } from "../Utils"
// import RefineXApps from "../containers/App"
import Dashboard from '../containers/Dashboard';
// import Campaign from "./Campaigns"
// import SegementLIst from '../containers/segment/segmentList'
// import NewSegement from '../containers/segment/newSegment'
// import analytics from '../containers/Analytics'
// import "./style.css"
import { RouteChildrenProps } from 'react-router';
import LoyaltyCard from '../containers/Dashboard/LoyaltyCard';
import Reports from '../containers/Reports';
import CustomerSearch from '../containers/CustomerCare/CustomerSearch';
import CustomerCare from '../containers/CustomerCare/CustomerCare';
import BusinessRules from '../containers/BusinessRules';
import CustomDateReports from '../containers/DateRangeReports';

interface RewardXRoutesProps extends RouteChildrenProps {}

const RewardXRoutes: React.FunctionComponent<RewardXRoutesProps> = ({
  match,
}) => {
  console.log('match', match);
  return (
    <div className="RewardX-Main">
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
        <Route
          exact
          path={`${match.url}/dashboard`}
          component={CustomerSearch}
        />
        {/* <Route
          exact
          path={`${match.url}/dashboard/loyalty_card`}
          component={LoyaltyCard}
        />
      */}
        <Route exact path={`${match.url}/reports`} component={Reports} />
        <Route
          exact
          path={`${match.url}/date_range_reports`}
          component={CustomDateReports}
        />
        <Route
          exact
          path={`${match.url}/customer_search`}
          component={CustomerSearch}
        />
        <Route
          exact
          path={`${match.url}/customer_care`}
          component={CustomerCare}
        />
        <Route
          exact
          path={`${match.url}/business_rules`}
          component={BusinessRules}
        />
      </Switch>
    </div>
  );
};

export default RewardXRoutes;
