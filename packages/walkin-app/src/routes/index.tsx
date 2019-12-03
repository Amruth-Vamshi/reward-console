import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./errorPages/404";
import Home from "./Home";

const { Suspense } = React;

const RefineX = lazy(() => import("@walkinsole/walkin-refinex"));
const HyperX = lazy(() => import("@walkinsole/walkin-hyperx"));
//const RefineX = lazy(() => import('@walkinsole/walkin-refinex'));
// const HyperX = lazy(() => import('@walkinsole/walkin-hyperx'));
const Core = React.lazy(() => import("@walkinsole/walkin-core"));
const NearX = React.lazy(() => import("@walkinsole/walkin-nearx"));
const RewardX = React.lazy(() => import("@walkinsole/walkin-rewardx"));
const App = () => (
  // <div className="gx-main-content-wrapper">
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
  // </div>
);

export default App;
