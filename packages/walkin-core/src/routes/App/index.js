import React, { Component, lazy } from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
// import Apps from '@walkinsole/walkin-nearx/src/routes/App'

const Apps = lazy(() => import('@walkinsole/walkin-nearx/src/routes/App'))

export default class AppIndex extends Component {
  render() {
    return (
      <div>
        {console.log('CORE APPS', `${this.props.match.url}`)}
        <Switch>
          <Route exact path={this.props.match.url} component={Apps} />
        </Switch>
      </div>
    )
  }
}
