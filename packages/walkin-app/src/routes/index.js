import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import { asyncComponent } from "@walkinsole/walkin-components";

const RefineX = lazy(() => import("@walkinsole/walkin-refinex"));
const HyperX = lazy(() => import("@walkinsole/walkin-hyperx"));
const Core = lazy(() => import("@walkinsole/walkin-core"));
const NearX = lazy(() => import("@walkinsole/walkin-nearx"));

const App = () => (
  <div className="gx-main-content-wrapper">
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Core} />
        <Route path="/hyperx" component={HyperX} />
        <Route path="/nearx" component={NearX} />
        <Route path="/refinex" component={RefineX} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
