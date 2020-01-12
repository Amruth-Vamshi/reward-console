import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home"

export default class extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={"/core/catalogue/home"} component={Home} />
            </Switch>
        );
    }
}
