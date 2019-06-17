import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { NEW_CAMPAIGN_BASIC_INFO, NEW_CAMPAIGN_AUDIENCE } from '../src/utils/RouterConstants';
import BasicInfo from './containers/campaignCreation/basicInfo';
import Audience from './containers/campaignCreation/audience';

const App = ({ match }) => {
	return (
		<div>
			<Switch>
				<Route exact path={'/hyperx'} render={() => <Redirect from="/hyperx" to={NEW_CAMPAIGN_BASIC_INFO} />} />
				<Route path={NEW_CAMPAIGN_BASIC_INFO} component={BasicInfo} />
				<Route path="/hyperx/*" component={BasicInfo} />
			</Switch>
		</div>
	);
};

export default App;
