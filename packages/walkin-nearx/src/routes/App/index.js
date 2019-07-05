import React, { Component } from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
import AppCreation from '@walkinsole/walkin-components/src/routes/App/AppCreation'
import AppList from '@walkinsole/walkin-components/src/routes/App/AppsList'
import Apps from '@walkinsole/walkin-components/src/routes/App'

export default class AppIndex extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* <Redirect exact from="/nearx/geofence" to="/nearx/geofence/home"/> */}
          {/* <Route exact path={this.props.match.url} component={Apps} /> */}
          <Route exact path={this.props.match.url} component={AppList} />
          <Route exact path={`${this.props.match.url}/create`} component={AppCreation} />
        </Switch>
      </div>
    )
  }
}
