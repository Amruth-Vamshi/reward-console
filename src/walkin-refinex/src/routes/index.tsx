import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NewSegment from '../containers/segment/newSegment';
import { NEW_SEGMENT, SEGMENT_LIST } from '../Utils';
import RefineXApps from '../containers/App';
import Dashboard from '../containers/Dashboard';
import Campaign from './Campaigns';
import SegementLIst from '../containers/segment/segmentList';
import NewSegement from '../containers/segment/newSegment';
import analytics from '../containers/Analytics';
import IssueTag from '../containers/IssueTags';
import './style.css';
import { RouteChildrenProps } from 'react-router';

interface RefineXRoutesProps extends RouteChildrenProps {}

const RefineXRoutes: React.FunctionComponent<RefineXRoutesProps> = ({
  match,
}) => {
  return (
    <div className="RefineX-Main">
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
        <Route path={`${match.url}/dashboard`} component={Dashboard} />
        <Route path={`${match.url}/feedback`} component={Campaign} />
        <Route
          path={`${match.url}/segment/segmentList`}
          component={SegementLIst}
        />
        <Route path={`${match.url}/issueTag`} component={IssueTag} />
        <Route
          path={`${match.url}/segment/newSegment`}
          component={NewSegement}
        />
        <Route path={`${match.url}/apps`} component={RefineXApps} />
        <Route path={`${match.url}/analytics`} component={analytics} />
      </Switch>
    </div>
  );
};

export default RefineXRoutes;
