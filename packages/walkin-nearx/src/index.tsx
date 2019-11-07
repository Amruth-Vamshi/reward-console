import React, { Component } from "react";
import { Route } from "react-router-dom";
import NearXRoutes from "./routes";
export default class extends Component {
  render() {
    return <Route path={`${this.props.match.url}`} component={NearXRoutes} />;
  }
}
