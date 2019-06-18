import React, { Component, Fragment } from 'react';
import CampaignHeader from '../../../components/molecules/campaignHeader';
import { withRouter } from 'react-router-dom';
import { NEW_CAMPAIGN } from '../../../utils/RouterConstants';

class CampaignList extends Component {
	onNewCampaign = () => {
		const { history } = this.props;
		history.push({
			pathname: NEW_CAMPAIGN,
		});
	};
	render() {
		return (
			<div style={{ margin: '-32px' }}>
				<CampaignHeader
					text="Campaigns"
					isHeaderStepper={false}
					onCampaignHeaderButtonClick={this.onNewCampaign}
					campaignHeaderButtonText="CREATE CAMPAIGN"
				/>
			</div>
		);
	}
}

export default withRouter(CampaignList);
