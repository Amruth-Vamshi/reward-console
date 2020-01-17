import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AppCreation from "./AppCreation";
import AppList from "./AppsList";
import "./app.css";
import { RouteChildrenProps } from "react-router";

interface AppIndexProps extends RouteChildrenProps {}
export default class AppIndex extends React.Component<AppIndexProps, {}> {
  render() {
    return (
      <div className="RefineX-Main">
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
