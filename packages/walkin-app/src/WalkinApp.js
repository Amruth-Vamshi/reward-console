import React from "react";
import { Route, Switch } from "react-router-dom";

import "@walkinsole/walkin-components/src/assets/vendors/style";
import "./styles/wieldy.less";
import App from "./containers/App/index";
import { configureClient } from "./appApollo/client";

const WalkinApp = async () => {
  const client = await configureClient();
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default WalkinApp;
