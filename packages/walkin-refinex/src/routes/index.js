import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { asyncComponent } from "@walkinsole/walkin-components";
import SegmentList from '../containers/segment/segmentList';
import NewSegment from '../containers/segment/newSegment';
import { NEW_SEGMENT, SEGMENT_LIST } from "../Utils"
import RefineXApps from "../containers/App"
const RefineXRoutes = ({ match }) => {
  return (
    <div>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
        <Route
          path={`${match.url}/dashboard`}
          component={asyncComponent(() => import("../containers/Dashboard"))}
        />
        <Route
          path={`${match.url}/feedback`}
          component={asyncComponent(() => import("./Campaigns"))}
        />
        <Route
          path={`${match.url}/segment/segmentList`}
          component={SegmentList}
        />
        <Route
          path={`${match.url}/segment/newSegment`}
          component={NewSegment}
        />
        <Route path={`${match.url}/apps`} component={RefineXApps} />
      </Switch>
    </div>
  );
};

export default RefineXRoutes;
