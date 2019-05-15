import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy, Component } from "react";

const RefineX = lazy(() => import("@walkinsole/walkin-refinex"));
const HyperX = lazy(() => import("@walkinsole/walkin-hyperx"));
const Core = lazy(() => import("@walkinsole/walkin-core"));
const NearX = lazy(() => import("@walkinsole/walkin-nearx"));

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
