import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import asyncComponent from "../../util/asyncComponent";
import IssueTagHome from "./home";
import { RouteChildrenProps } from "react-router";

interface IssueTagProps extends RouteChildrenProps {}

const IssueTag: React.FunctionComponent<IssueTagProps> = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.url} component={IssueTagHome} />
    </Switch>
  );
};
export default IssueTag;
