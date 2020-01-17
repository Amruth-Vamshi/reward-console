import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./errorPages/404";
import Home from "./Home";

const { Suspense } = React;

const RefineX = lazy(() => import("walkin-refinex/src/index"));
const HyperX = lazy(() => import("walkin-hyperx/src/index"));
//const RefineX = lazy(() => import('walkin-refinex'));
// const HyperX = lazy(() => import('walkin-hyperx'));
const Core = React.lazy(() => import("walkin-core/src/index"));
const NearX = React.lazy(() => import("walkin-nearx/src/index"));
const RewardX = React.lazy(() => import("walkin-rewardx/src/index"));
const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/core" component={Core} />
      <Route path="/hyperx" component={HyperX} />
      {<Route path="/refinex" component={RefineX} />}
      {/* <Route path="/nearx" component={NearX} />
       */}
      <Route path="/nearx" component={NearX} />
      {/* <Route path="/refinex" component={RefineX} /> */}
      {/* <Route path="/hyperx" component={HyperX} /> */}
      <Route path="/rewardx" component={RewardX} />
      <Route component={ErrorPage} />
    </Switch>
  </Suspense>
);

export default App;
