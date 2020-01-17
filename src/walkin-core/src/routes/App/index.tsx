import * as React from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";
// import Apps from 'walkin-nearx/src/routes/App'

const Apps = React.lazy(() => import("walkin-nearx/src/routes/App"));

interface AppIndexProps extends RouteComponentProps {}
export default class AppIndex extends React.Component<AppIndexProps, {}> {
  render() {
    return (
      <div>
        {console.log("CORE APPS", `${this.props.match.url}`)}
        <Switch>
          <Route exact path={this.props.match.url} component={Apps} />
        </Switch>
      </div>
    );
  }
}
