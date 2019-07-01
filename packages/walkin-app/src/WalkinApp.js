import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "@walkinsole/walkin-components/src/assets/vendors/style";
import "./styles/wieldy.less";
import App from "./containers/App";
import { configureClient } from "./appApollo/client";
import { ApolloProvider, Query, Mutation } from "react-apollo";
import { ErrorBoundary } from "@walkinsole/walkin-components";
import gql from "graphql-tag";

class WalkinApp extends Component {
  constructor() {
    super();
    this.state = {
      client: null,
      loaded: false
    };
  }

  async componentDidMount() {
    const client = await configureClient();
    this.setState({
      client,
      loaded: true
    });
  }

  async fetchUserData(data) {
    console.log(data);
    if (data.auth.userId && data.auth.firstName) {
      return null;
    }
    const FETCH_USER_DETAILS = gql`
      query setLocalUserData {
        setLocalUserData
      }
    `;
    return (
      <Mutation mutation={FETCH_USER_DETAILS}>
        {({ data, mutation }) => {
          mutation();
        }}
      </Mutation>
    );
  }

  render() {
    const { client, loaded } = this.state;
    if (!loaded) {
      return <div>Loading...</div>;
    }
    const SET_USER_DATA = gql`
      mutation setUserData {
        setLocalUserData @client
      }
    `;
    return (
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <Query
            query={gql`
              query auth {
                auth @client {
                  jwt
                  userId
                  firstName
                }
              }
            `}
          >
            {({ data }) => {
              {
                this.fetchUserData(data);
              }
              return (
                <BrowserRouter>
                  <Switch>
                    <Route path="/" component={App} />
                  </Switch>
                </BrowserRouter>
              );
            }}
          </Query>
        </ApolloProvider>
      </ErrorBoundary>
    );
  }
}

export default WalkinApp;
