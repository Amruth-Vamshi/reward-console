import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import WebhooksSettings from "./../../routes/Settings/developerSettings/webhooks";

export default class extends Component {
  render() {
    return (
      <Switch>
        <Route path={"/core/settings/profile"} component={WebhooksSettings} />
        <Route path={"/core/settings/account"} component={WebhooksSettings} />
        <Route
          path={"/core/settings/developer/webhooks"}
          component={WebhooksSettings}
        />
      </Switch>
    );
  }
}
