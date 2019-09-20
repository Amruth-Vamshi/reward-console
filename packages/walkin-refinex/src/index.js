import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import RefineXRoutes from "./routes";
import { Redirect, Route, Switch } from "react-router-dom";
import "./index.css"
export default class extends Component {
  render() {
    return (
      <div className="gx-main-content-wrapper">
        <Route path={`${this.props.match.url}`} component={RefineXRoutes} />
      </div>
    )
  }
}
