import React, { Component } from 'react';
import AppList from '../../components/appList';
import findIndex from 'lodash/findIndex';
import forEach from 'lodash/forEach';
import map from 'lodash/map';

const apps = [
	{
		id: 1,
		title: 'HyperX',
		icon: 'icon icon-alert',
		description: 'Personalization and 1:1 campaigns',
		route: '/hyperx',
	},
	{
		id: 2,
		title: 'NearX',
		icon: 'icon icon-geo-location',
		description: 'Proximity direction with beacons and geofencing',
		route: '/nearx',
	},
	{
		id: 3,
		title: 'RefineX',
		icon: 'icon icon-feedback',
		description: 'Feedback engine for custoner experience management',
		route: '/refinex',
	},
	{
		id: 4,
		title: 'Uptyme',
		icon: 'icon icon-timepicker',
		description: 'Field face management and work order automation',
	},
	{
		id: 5,
		title: 'OrderX',
		icon: 'icon icon-orders',
		description: 'Ordering and payments. Omni channel order management',
	},
	{
		id: 6,
		title: 'RewardX',
		icon: 'icon icon-inbuilt-apps',
		description: 'Loyalty relationship management',
	},
	{
		id: 7,
		title: 'You Id',
		icon: 'icon icon-profile',
		description: 'Field face management and work order automation',
	},
	{
		id: 8,
		title: 'FrontX',
		icon: 'icon icon-data-display',
		description: 'Channel management - modular app development platform',
	},
	{
		id: 9,
		title: 'ReportX',
		icon: 'icon icon-select',
		description: 'Actionable insights, dashboards and reporting',
	},
];
//until API is ready
const serviceAvailable = [
	{
		id: 1,
		product: 'HyperX',
	},
	{
		id: 2,
		product: 'NearX',
	},
	{
		id: 3,
		product: 'RefineX',
	},
];

class CoreLandingPage extends Component {
	constructor(props) {
		super(props);
		// initialize to false
		let formattedApps = map(apps, app => {
			return { ...app, isProductAccessible: false };
		});

		//take the serviceArray (from API) and iterate through
		forEach(serviceAvailable, service => {
			const appIndex = findIndex(formattedApps, app => {
				return app.id === service.id;
			});
			formattedApps = [
				...formattedApps.slice(0, appIndex),
				{ ...formattedApps[appIndex], isProductAccessible: true },
				...formattedApps.slice(appIndex + 1),
			];
		});

		this.state = {
			apps: formattedApps,
		};
	}

	render() {
		const { apps } = this.state;
		return (
			<div>
				<AppList apps={apps} isProductAccessible={serviceAvailable} />
			</div>
		);
	}
}

export default CoreLandingPage;
