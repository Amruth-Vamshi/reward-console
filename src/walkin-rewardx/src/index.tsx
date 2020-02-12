import * as React from 'react';
import RewardXRoutes from './routes';
import { Redirect, Route, Switch, RouteProps } from 'react-router-dom';
import './index.css';
import { RouteChildrenProps } from 'react-router';

interface HomeProps extends RouteChildrenProps {}
export default class extends React.Component<HomeProps, {}> {
  render() {
    return (
      <div>
        <Route path={`${this.props.match.url}`} component={RewardXRoutes} />
      </div>
    );
  }
}
