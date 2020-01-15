import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import List from "./List"

export default class extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={"/core/promos/list"} component={List} />
            </Switch>
        );
    }
}
