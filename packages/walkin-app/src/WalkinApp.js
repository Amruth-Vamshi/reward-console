import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "@walkinsole/walkin-components/src/assets/vendors/style";
import "./styles/wieldy.less";
import App from "./containers/App";
import { configureClient } from "./appApollo/client";
import { ApolloProvider } from "react-apollo";

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

  render() {
    const { client, loaded } = this.state;
    if (!loaded) {
      return <div>Loading...</div>;
    }
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default WalkinApp;
