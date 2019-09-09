import React, { Component } from 'react';
import AppList from '../../components/appList';
import findIndex from 'lodash/findIndex';
import forEach from 'lodash/forEach';
import map from 'lodash/map';
import { Spin } from "antd";
import { withApollo } from "react-apollo";
import jwt from "jsonwebtoken";

import { GET_PRODUCTS } from "@walkinsole/walkin-components/src/PlatformQueries";

const apps = [
	{
		id: 1,
		title: 'HyperX',
		icon: 'icon icon-alert',
		description: 'Personalization and 1:1 campaigns',
		route: '/hyperx',
		isProductAccessible: false
	},
	{
		id: 2,
		title: 'NearX',
		icon: 'icon icon-geo-location',
		description: 'Proximity direction with beacons and geofencing',
		route: '/nearx',
		isProductAccessible: false
	},
	{
		id: 3,
		title: 'RefineX',
		icon: 'icon icon-feedback',
		description: 'Feedback engine for custoner experience management',
		route: '/refinex',
		isProductAccessible: false
	},
	{
		id: 4,
		title: 'Uptyme',
		icon: 'icon icon-timepicker',
		description: 'Field face management and work order automation',
		isProductAccessible: false
	},
	{
		id: 5,
		title: 'OrderX',
		icon: 'icon icon-orders',
		description: 'Ordering and payments. Omni channel order management',
		isProductAccessible: false
	},
	{
		id: 6,
		title: 'RewardX',
		icon: 'icon icon-inbuilt-apps',
		description: 'Loyalty relationship management',
		isProductAccessible: false
	},
	{
		id: 7,
		title: 'You Id',
		icon: 'icon icon-profile',
		description: 'Field face management and work order automation',
		isProductAccessible: false
	},
	{
		id: 8,
		title: 'FrontX',
		icon: 'icon icon-data-display',
		description: 'Channel management - modular app development platform',
		isProductAccessible: false
	},
	{
		id: 9,
		title: 'ReportX',
		icon: 'icon icon-select',
		description: 'Actionable insights, dashboards and reporting',
		isProductAccessible: false
	},
];

class CoreLandingPage extends Component {
	constructor(props) {
		super(props);


		this.state = {
			apps: [],
		};
	}

	componentWillMount() {


		const { id, org_id } = jwt.decode(localStorage.getItem("jwt"));
		let formattedApps = apps

		if (org_id) {
			this.setState({ spin: true });
			this.props.client
				.query({
					query: GET_PRODUCTS,
					variables: { id: org_id },
					//   fetchPolicy: "network-only"
				})
				.then(res => {

					console.log('>>>', res.data.organization.walkinProducts);

					forEach(res.data.organization.walkinProducts, service => {

						const appIndex = findIndex(formattedApps, app => {
							return app.title === service.name;
						});

						formattedApps = [
							{ ...formattedApps[appIndex], isProductAccessible: true },
							...formattedApps.slice(0, appIndex),
							...formattedApps.slice(appIndex + 1),
						];
					});

					this.setState({ apps: formattedApps, spin: false });

				})
				.catch(err => {
					this.setState({ spin: false });
					console.log("Failed to get Apps  " + err);
				});
		} else {
			this.setState({ spin: false });
			console.log("Error getting JwtData");
		}


	}

	render() {
		const { apps } = this.state;
		return (
			<div>
				{this.state.spin ?
					<div>
						<br /> <br /> <br /> <br />
						<div className="divCenter">
							<Spin size="large" />
						</div>
						<br /> <br /> <br />
					</div>
					:
					<AppList apps={apps} />
				}</div>
		);
	}
}

export default withApollo(CoreLandingPage);
