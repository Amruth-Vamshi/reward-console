import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import NewSegment from '../containers/segment/newSegment';
// import { NEW_SEGMENT, SEGMENT_LIST } from "../Utils"
// import RefineXApps from "../containers/App"
import Dashboard from "../containers/Dashboard";
// import Campaign from "./Campaigns"
// import SegementLIst from '../containers/segment/segmentList'
// import NewSegement from '../containers/segment/newSegment'
// import analytics from '../containers/Analytics'
// import "./style.css"
import { RouteChildrenProps } from "react-router";
import LoyaltyCard from "../containers/Dashboard/LoyaltyCard";

interface RewardXRoutesProps extends RouteChildrenProps {}

const RewardXRoutes: React.FunctionComponent<RewardXRoutesProps> = ({
  match
}) => {
  console.log("match", match);
  return (
    <div className="RewardX-Main">
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
        <Route exact path={`${match.url}/dashboard`} component={Dashboard} />
        <Route
          exact
          path={`${match.url}/dashboard/loyalty_card`}
          component={LoyaltyCard}
        />
        {/* <Route
                    path={`${match.url}/segment/segmentList`}
                    component={SegementLIst}
                />
                <Route
                    path={`${match.url}/segment/newSegment`}
                    component={NewSegement}
                />
                <Route path={`${match.url}/apps`} component={RefineXApps} />
                <Route path={`${match.url}/analytics`} component={analytics} /> */}
      </Switch>
    </div>
  );
};

export default RewardXRoutes;
