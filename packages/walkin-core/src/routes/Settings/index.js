import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import WebhooksSettings from "./developerSettings/webhooks";
import EntityExtentionSettings from "./developerSettings/entityExtention";

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
        <Route
          path={"/core/settings/developer/entity-extention"}
          component={EntityExtentionSettings}
        />
      </Switch>
    );
  }
}
