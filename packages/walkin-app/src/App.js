import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy, Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";

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
      uri: "https://48p1r2roz4.sse.codesandbox.io"
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
        <div className="App">
          <div className="App-heading App-flex">
            <h2>
              Welcome to <span className="App-react">React</span>
            </h2>
          </div>
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
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
