import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import asyncComponent from "../../util/asyncComponent";
import GooglePlaces from './CreatePlaces';

const GooglePlacesIndex = ({ match }) => {
  return (
    <Switch>
      <Route
        exact
        path={match.url}
        render={props => <GooglePlaces {...props} tab="1" />}
      />
      <Route
        exact
        path={`${match.url}/manually`}
        render={props => <GooglePlaces {...props} tab="2" />}
      />
    </Switch>
  );
};
export default GooglePlacesIndex;
