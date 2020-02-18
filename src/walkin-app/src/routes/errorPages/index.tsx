import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { asyncComponent } from 'walkin-components/src/util/asyncComponent';

const ErrorPages = ({ match }: { match: any }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/error-404`} />
    <Route
      path={`${match.url}/error-404`}
      component={asyncComponent(() => import('./404/index'))}
    />
    <Route
      path={`${match.url}/error-500`}
      component={asyncComponent(() => import('./500'))}
    />
  </Switch>
);

export default ErrorPages;
