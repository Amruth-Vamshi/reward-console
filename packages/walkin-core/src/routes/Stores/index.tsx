import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import StoreList from "./storeList";
import EditStore from "./editStore";

export default class extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={"/core/stores"} component={StoreList} />
        <Route path={"/core/stores/:id/edit"} component={EditStore} />
      </Switch>
    );
  }
}
