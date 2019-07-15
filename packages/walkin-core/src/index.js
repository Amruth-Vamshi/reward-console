import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CoreLandingPage from './containers/CoreLanding';
import Organization from './containers/Organization';
import OrgStoreList from './containers/Organization/orgStoreList';

const App = ({ match }) => {
	return (
		<div className="gx-main-content-wrapper">
			<Switch>
				<Route exact path="/core" component={CoreLandingPage} />
				<Route path="/core/organization/:id/stores" component={OrgStoreList} />
				<Route path={'/core/organization/:id'} component={Organization} />
				<Route path="/core/*" component={CoreLandingPage} />
			</Switch>
		</div>
	);
};

export default App;
