import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "@walkinsole/walkin-components/src/assets/vendors/style";
import "./styles/wieldy.less";
import App from "./containers/App";
import { configureClient } from "./appApollo/client";
import { ApolloProvider, Query, Mutation } from "react-apollo";
import { ErrorBoundary, CircularProgress } from "@walkinsole/walkin-components";
import gql from "graphql-tag";

class WalkinApp extends Component {
  constructor() {
    super();
    this.state = {
      client: null
    };
  }

  async componentDidMount() {
    const client = await configureClient();
    this.setState({
      client
    });
  }

  render() {
    const { client } = this.state;
    return client ? (
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={App} />
            </Switch>
          </BrowserRouter>
        </ApolloProvider>
      </ErrorBoundary>
    ) : (
        <CircularProgress />
      );
  }
}

export default WalkinApp;
