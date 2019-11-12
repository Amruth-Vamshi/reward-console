import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import asyncComponent from "../../util/asyncComponent";
import Hooks from './Hooks';

const HooksManager = ({ match }) => {
    return (
        <Switch>
            <Route exact path={match.url} component={Hooks} />
        </Switch>
    )
}
export default HooksManager;
