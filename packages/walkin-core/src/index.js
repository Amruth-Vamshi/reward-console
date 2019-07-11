import React, { Component } from "react";
import AppList from "./components/appList";
// import Apps from './routes/App'
import Landing from "./routes/Landing";
import { Redirect, Route, Switch } from "react-router-dom";
import Users from "./routes/users";

const apps = [
  {
    id: 1,
    title: "HyperX",
    icon: "icon icon-alert",
    description: "Personalization and 1:1 campaigns",
    route: "/hyperx",
    isProductAccessible: true
  },
  {
    id: 2,
    title: "NearX",
    icon: "icon icon-geo-location",
    description: "Proximity direction with beacons and geofencing",
    route: "/nearx",
    isProductAccessible: true
  },
  {
    id: 3,
    title: "RefineX",
    icon: "icon icon-feedback",
    description: "Feedback engine for custoner experience management",
    route: "/refinex",
    isProductAccessible: true
  },
  {
    id: 4,
    title: "Uptyme",
    icon: "icon icon-timepicker",
    description: "Field face management and work order automation",
    isProductAccessible: false
  },
  {
    id: 5,
    title: "OrderX",
    icon: "icon icon-orders",
    description: "Ordering and payments. Omni channel order management",
    isProductAccessible: false
  },
  {
    id: 6,
    title: "RewardX",
    icon: "icon icon-inbuilt-apps",
    description: "Loyalty relationship management",
    isProductAccessible: false
  },
  {
    id: 7,
    title: "You Id",
    icon: "icon icon-profile",
    description: "Field face management and work order automation",
    isProductAccessible: false
  },
  {
    id: 8,
    title: "FrontX",
    icon: "icon icon-data-display",
    description: "Channel management - modular app development platform",
    isProductAccessible: false
  },
  {
    id: 9,
    title: "ReportX ",
    icon: "icon icon-select",
    description: "Actionable insights, dashboards and reporting",
    isProductAccessible: false
  }
];

const serviceAvailable = [
  {
    id: 1,
    product: "HyperX"
  },
  {
    id: 2,
    product: "NearX"
  }
];
export default class extends Component {
  render() {
    return (
      <div className="gx-main-content-wrapper">
        <Switch>
          <Route exact path={this.props.match.url} component={Landing} />
          {/* <Route exact path={`${this.props.match.url}/apps`} component={Apps} /> */}
          <Route path={`${this.props.match.url}/users`} component={Users} />
        </Switch>
      </div>
    );
  }
}
