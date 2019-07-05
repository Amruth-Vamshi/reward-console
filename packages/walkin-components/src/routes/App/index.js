import React, { Component } from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
import AppCreation from './AppCreation'
import AppList from './AppsList'

export default class AppIndex extends Component {
  render() {
    return (
      <div>
        {console.log('core-Apps', this.props.match.url)}
        < Switch >
          <Route exact path={this.props.match.url} component={AppList} />
          <Route path={`${this.props.match.url}/create`} component={AppCreation} />
        </Switch>
      </div>
    )
  }
}
