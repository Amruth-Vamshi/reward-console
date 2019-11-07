import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';


import ErrorPage from './errorPages/404';
import Home from './Home'

const RefineX = lazy(() => import('@walkinsole/walkin-refinex'));
const HyperX = lazy(() => import('@walkinsole/walkin-hyperx'));
const Core = lazy(() => import('@walkinsole/walkin-core'));
const NearX = lazy(() => import('@walkinsole/walkin-nearx'));

const App = () => (
	// <div className="gx-main-content-wrapper">
	<Suspense fallback={<div>Loading...</div>}>
		<Switch>
			<Route path="/home" component={Home} />
			{/* <Route path="/core" component={Core} />
			<Route path="/hyperx" component={HyperX} />
			<Route path="/nearx" component={NearX} />
			<Route path="/refinex" component={RefineX} /> */}
			<Route component={ErrorPage} />
		</Switch>
	</Suspense>
	// </div>
);

export default App;
