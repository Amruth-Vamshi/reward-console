import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
	NEW_CAMPAIGN,
	CAMPAIGN_MANAGEMENT,
	NEW_SEGMENT,
	SEGMENT_LIST,
	OFFER_LIST,
	NEW_OFFER,
} from '../src/utils/RouterConstants';
import CampaignList from './containers/campaign/campaignList';
import CampaignCreation from './containers/campaign';
import SegmentList from './containers/segment/segmentList';
import NewSegment from './containers/segment/newSegment';
import OfferList from './containers/offer/offerList';
import NewOffer from './containers/offer/newoffer';

const App = ({ match }) => {
	return (
		<div className="gx-main-content-wrapper">
			<Switch>
				<Route exact path={'/hyperx'} render={() => <Redirect from="/hyperx" to={CAMPAIGN_MANAGEMENT} />} />
				<Route path={CAMPAIGN_MANAGEMENT} component={CampaignList} />
				<Route path={NEW_CAMPAIGN} component={CampaignCreation} />
				<Route path={SEGMENT_LIST} component={SegmentList} />
				<Route path={NEW_SEGMENT} component={NewSegment} />
				<Route path={`${NEW_SEGMENT}/:id`} component={NewSegment} />
				<Route path={OFFER_LIST} component={OfferList} />
				<Route path={NEW_OFFER} component={NewOffer} />
				<Route path="/hyperx/*" component={CampaignList} />
			</Switch>
		</div>
	);
};

export default App;
