import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './styles/styles.css'
import {
	NEW_CAMPAIGN,
	CAMPAIGN_MANAGEMENT,
	NEW_SEGMENT,
	SEGMENT_LIST,
	OFFER_LIST,
	NEW_OFFER,
	CAMPAIGN_DASHBOARD,
} from '../src/utils/RouterConstants';
import CampaignList from './containers/campaign/campaignList';
import CampaignDashboard from './containers/campaign/campaignDashboard';
import CampaignCreation from './containers/campaign/campaignCreation';
import SegmentList from './containers/segment/segmentList';
import NewSegment from './containers/segment/newSegment';
import OfferList from './containers/offer/offerList';
import NewOffer from './containers/offer/newoffer';

const App = ({ match }) => {
	return (
		<div className="NearX-Main">
			<Switch>
				<Route exact path={'/hyperx'} render={() => <Redirect from="/hyperx" to={CAMPAIGN_MANAGEMENT} />} />
				<Route exact path={CAMPAIGN_MANAGEMENT} component={CampaignList} />
				<Route exact path={`${CAMPAIGN_DASHBOARD}/:id`} component={CampaignDashboard} />
				<Route path={`${NEW_CAMPAIGN}/:id`} component={CampaignCreation} />
				<Route path={NEW_CAMPAIGN} component={CampaignCreation} />
				<Route exact path={SEGMENT_LIST} component={SegmentList} />
				<Route path={NEW_SEGMENT} component={NewSegment} />
				<Route path={`${NEW_SEGMENT}/:id`} component={NewSegment} />
				<Route exact path={OFFER_LIST} component={OfferList} />
				<Route path={NEW_OFFER} component={NewOffer} />
				<Route path="/hyperx/*" component={CampaignList} />
			</Switch>
		</div>
	);
};

export default App;
