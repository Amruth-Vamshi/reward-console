import React, { Component, lazy } from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
// import Apps from '@walkinsole/walkin-components/src/routes/App'
import AppCreation from '@walkinsole/walkin-components/src/routes/App/AppCreation'
import AppList from '@walkinsole/walkin-components/src/routes/App/AppsList'

const Apps = lazy(() => import('@walkinsole/walkin-components/src/routes/App'))

export default class AppIndex extends Component {
  render() {
    return (
      <div>
        {console.log('CORE APPS', `${this.props.match.url}`)}
        <Switch>
          {/* <Route exact path={this.props.match.url} component={Apps} /> */}
          <Route exact path={this.props.match.url} component={AppList} />
          <Route path={`${this.props.match.url}/create`} component={AppCreation} />
        </Switch>
      </div>
    )
  }
}
