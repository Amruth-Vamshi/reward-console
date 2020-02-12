import * as React from 'react';
import { Route } from 'react-router-dom';
import NearXRoutes from './routes';

interface iProps {
  match?: any;
}
export default class extends React.Component<iProps, {}> {
  render() {
    return <Route path={`${this.props.match.url}`} component={NearXRoutes} />;
  }
}
