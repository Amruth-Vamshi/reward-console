import React, { Component, Fragment } from 'react';
import CampaignHeader from '../../components/molecules/campaignHeader';
import CampaignFooter from '../../components/molecules/campaignFooter';
import HeaderTitle from '../../components/atoms/headerTitle';

class CampaignCreation extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { formValues, current } = this.state;
		return (
			<div style={{ margin: '-32px' }}>
				<CampaignHeader text="Create Campaign" current={current} stepData={stepData} onChange={this.onChange} />
				<div style={{ margin: '32px' }}>
					{' '}
					<HeaderTitle text="Basic Information" />
				</div>

				<div style={{ margin: '32px' }}>
					<CampaignFooter />
				</div>
			</div>
		);
	}
}

export default CampaignCreation;
