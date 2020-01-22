import React, { Component } from "react";
import { Redirect, Route, Switch, RouteComponentProps } from "react-router-dom";
import AppCreation from "./AppCreation";
import AppList from "./AppsList";
import {} from "history";

interface iProps extends RouteComponentProps {}
export default class AppIndex extends Component<iProps, {}> {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={this.props.match.url} component={AppList} />
          <Route
            exact
            path={`${this.props.match.url}/create`}
            component={AppCreation}
          />
        </Switch>
      </div>
    );
  }
}
