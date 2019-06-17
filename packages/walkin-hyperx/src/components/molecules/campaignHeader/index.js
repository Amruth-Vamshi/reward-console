import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import Stepper from '../../atoms/stepper';
import './style.css';

const CampaignHeader = ({ text, stepData, current, onChange }) => {
	return (
		<Row className="campaignHeaderStyle">
			<Col className="campaignHeaderContentStyle" span={12}>
				<h3 className="gx-text-grey">{text}</h3>
			</Col>
			<Col className="campaignHeaderContentStyle" span={12}>
				<Stepper stepData={stepData} current={current} onChange={onChange} />
			</Col>
		</Row>
	);
};

export default CampaignHeader;
