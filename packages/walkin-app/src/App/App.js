import "@walkinsole/walkin-components/src/assets/vendors/style";
import "@walkinsole/walkin-components/src/styles/wieldy.less";
import "./App.css";

import React, { Suspense, lazy, Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { Layout, LocaleProvider } from "antd";

import { typeDefs } from "../apollo-state";

import {
  Sidebar,
  HorizontalDefault,
  AppLocale
} from "@walkinsole/walkin-components";
import AppRouter from "./Router";
import { IntlProvider } from "react-intl";

const { Content, Footer } = Layout;
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const RefineX = lazy(() => import("@walkinsole/walkin-refinex"));
const HyperX = lazy(() => import("@walkinsole/walkin-hyperx"));
const Core = lazy(() => import("@walkinsole/walkin-core"));
const NearX = lazy(() => import("@walkinsole/walkin-nearx"));

class App extends Component {
  constructor() {
    super();
    this.state = {
      client: null,
      loaded: false
    };
  }

  async componentDidMount() {
    const cache = new InMemoryCache();

    const client = new ApolloClient({
      cache,
      uri: "http://178.128.220.91:4000/graphql",
      typeDefs
    });

    try {
      // See above for additional options, including other storage providers.
      await persistCache({
        cache,
        storage: window.localStorage
      });
    } catch (error) {
      console.error("Error restoring Apollo cache", error);
    }
    client.writeData({ data: { locale: "en" } });

    this.setState({
      client,
      loaded: true
    });
  }

  render() {
    const { client, loaded } = this.state;

    const currentAppLocale = AppLocale["en"];

    if (!loaded) {
      return <div>Loading...</div>;
    }

    return (
      <ApolloProvider client={client}>
        <LocaleProvider locale={currentAppLocale.antd}>
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
          >
            <div className="App">
              <Router>
                <Layout className="gx-app-layout">
                  <Sidebar />
                  <Layout>
                    <HorizontalDefault />
                    <Content className={`gx-layout-content gx-container-wrap`}>
                      <Router>
                        <Suspense fallback={<div>Loading...</div>}>
                          <Switch>
                            <Route exact path="/" component={Core} />
                            <Route path="/hyperx" component={HyperX} />
                            <Route path="/nearx" component={NearX} />
                            <Route path="/refinex" component={RefineX} />
                          </Switch>
                        </Suspense>
                      </Router>
                      <Footer>
                        <div className="gx-layout-footer-content">
                          Walkin Technologies
                        </div>
                      </Footer>
                    </Content>
                  </Layout>
                </Layout>
              </Router>
            </div>
          </IntlProvider>
        </LocaleProvider>
      </ApolloProvider>
    );
  }
}

export default App;
