import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { NEW_CAMPAIGN, CAMPAIGN_MANAGEMENT } from '../src/utils/RouterConstants';
import CampaignList from './containers/campaign/campaignList';
import CampaignCreation from './containers/campaign';

const App = ({ match }) => {
	console.log('this.props.match.url', match.url);
	return (
		<div>
			<Switch>
				<Route exact path={'/hyperx'} render={() => <Redirect from="/hyperx" to={CAMPAIGN_MANAGEMENT} />} />
				<Route path={CAMPAIGN_MANAGEMENT} component={CampaignList} />
				<Route path={NEW_CAMPAIGN} component={CampaignCreation} />
				<Route path="/hyperx/*" component={CampaignList} />
			</Switch>
		</div>
	);
};

export default App;
