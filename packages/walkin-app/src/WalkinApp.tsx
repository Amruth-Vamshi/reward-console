import * as React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "@walkinsole/walkin-components/src/assets/vendors/style";
// import "./styles/wieldy.less";
import "antd/dist/antd.css";
import App from "./containers/App/index";
import { configureClient } from "./appApollo/client/index";
import { ApolloProvider, Query, Mutation } from "react-apollo";
import { ErrorBoundary, CircularProgress } from "@walkinsole/walkin-components";
import { ApolloClient } from "apollo-boost";

export class WalkinApp extends React.Component<
  {},
  { client: ApolloClient<any> }
> {
  constructor(props) {
    super(props);
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
      <CircularProgress className="circular" />
    );
  }
}

export default WalkinApp;
