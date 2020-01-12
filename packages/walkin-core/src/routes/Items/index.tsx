import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import List from "./list"

export default class extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={"/core/items/list"} component={List} />
            </Switch>
        );
    }
}
