import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../styles/styles.css'
import Dashboard from './Home/index';
import AnalyticsManager from './Dashboard';
import Places from './Places';
import settings from './Settings';
import NearxApps from './App';
import Hooks from './Webhooks';
import TestUpload from './TestUpload';

export default class NearXRoutes extends React.Component {
	render() {
		// console.log('props',this.props)
		return (
			<div className="NearX-Main">
				<Switch>
					<Redirect exact from="/nearx" to="/nearx/dashboard" />
					<Route path="/nearx/home" component={Dashboard} />
					<Route path="/nearx/dashboard" component={AnalyticsManager} />
					<Route path="/nearx/places" component={Places} />
					<Route path="/nearx/settings" component={settings} />
					<Route path="/nearx/hooks" component={Hooks} />
					<Route path="/nearx/apps" component={NearxApps} />
					<Route path="/nearx/testUpload" component={TestUpload} />
					<Redirect from="/nearx/" to="/nearx/dashboard" />
				</Switch>
			</div>
		);
	}
}
