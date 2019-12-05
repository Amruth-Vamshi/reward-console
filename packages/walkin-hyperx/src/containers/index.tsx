import * as React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import '../styles/styles.css'
import { NEW_CAMPAIGN, CAMPAIGN_MANAGEMENT, NEW_SEGMENT, SEGMENT_LIST, OFFER_LIST, NEW_OFFER, CAMPAIGN_DASHBOARD, OFFER_DASHBOARD } from '../utils/RouterConstants';
import CampaignList from './campaign/campaignList';
import CampaignDashboard from './campaign/campaignDashboard';
import CampaignCreation from './campaign/campaignCreation';
import SegmentList from './segment/segmentList';
import NewSegment from './segment/newSegment';
import OfferList from './offer/offerList';
import NewOffer from './offer/newoffer';
import { RouteChildrenProps } from "react-router";
import offerDashboard from "./offer/offerDashboard";

interface HyperXRoutesProps extends RouteChildrenProps { }

export default class extends React.Component<HyperXRoutesProps, {}> {
	render() {
		console.log('HyperX');
		return (
			<div className="HyperX-Main">
				<Switch>
					{/* <Route exact path={'/hyperx'} render={() => <Redirect from="/hyperx" to={CAMPAIGN_MANAGEMENT} />} /> */}
					<Redirect exact from="/hyperx" to={CAMPAIGN_MANAGEMENT} />
					<Route exact path={CAMPAIGN_MANAGEMENT} component={CampaignList} />
					<Route exact path={`${CAMPAIGN_DASHBOARD}/:id`} component={CampaignDashboard} />
					<Route path={`${NEW_CAMPAIGN}/:id`} component={CampaignCreation} />
					<Route path={NEW_CAMPAIGN} component={CampaignCreation} />
					<Route exact path={SEGMENT_LIST} component={SegmentList} />
					<Route path={NEW_SEGMENT} component={NewSegment} />
					<Route path={`${NEW_SEGMENT}/:id`} component={NewSegment} />
					<Route exact path={OFFER_LIST} component={OfferList} />
					<Route path={`${OFFER_DASHBOARD}/:id`} component={offerDashboard} />
					<Route path={NEW_OFFER} component={NewOffer} />
					<Route path="/hyperx/*" component={CampaignList} />
				</Switch>
			</div>
		);
	}
}
