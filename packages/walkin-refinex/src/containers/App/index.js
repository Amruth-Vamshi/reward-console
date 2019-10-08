import React, { Component } from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
import AppCreation from './AppCreation'
import AppList from './AppsList'
import "./app.css"
export default class AppIndex extends Component {
    render() {
        return (
            <div className="RefineX-Main">
                <Switch>
                    <Route exact path={this.props.match.url} component={AppList} />
                    <Route exact path={`${this.props.match.url}/create`} component={AppCreation} />
                </Switch>
            </div>
        )
    }
}
