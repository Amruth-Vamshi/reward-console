import React, { Component } from "react";
import Apps from './routes/App'
import Landing from './routes/Landing'
import { Redirect, Route, Switch } from "react-router-dom";


export default class extends Component {
  render() {
    return (
      <div className="gx-main-content-wrapper">
        <Switch>
          <Route exact path={this.props.match.url} component={Landing} />
          <Route exact path={`${this.props.match.url}/apps`} component={Apps} />
        </Switch>
      </div>
    );
  }
}
