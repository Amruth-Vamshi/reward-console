import React, { Fragment } from 'react';
import { Row, Col, Button } from 'antd';
import Stepper from '../../atoms/stepper';
import './style.css';

const CampaignHeader = ({
	text,
	stepData,
	current,
	onChange,
	isHeaderStepper,
	campaignHeaderButtonText,
	onCampaignHeaderButtonClick,
}) => {
	console.log('isHeaderStepper', isHeaderStepper);
	return (
		<Row className="campaignHeaderStyle">
			<Col className="campaignHeaderTitleStyle" span={12}>
				<h3 className="gx-text-grey paddingLeftStyle">{text}</h3>
			</Col>
			<Col className="campaignHeaderContentStyle" span={12}>
				{isHeaderStepper ? (
					<Stepper stepData={stepData} current={current} onChange={onChange} />
				) : (
					<Button className="campaignHeaderButtonStyle" type="primary" onClick={onCampaignHeaderButtonClick}>
						{campaignHeaderButtonText}
					</Button>
				)}
			</Col>
		</Row>
	);
};

export default CampaignHeader;
