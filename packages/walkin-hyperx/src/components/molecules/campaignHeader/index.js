import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import HeaderTitle from '../../atoms/headerTitle';
import Stepper from '../../atoms/stepper';
import './style.css';

const CampaignHeader = ({ text, stepData, current, onChange }) => {
	return (
		<Row className="campaignHeaderStyle">
			<Col className="campaignHeaderContentStyle" span={12}>
				<HeaderTitle text={text} />
			</Col>
			<Col className="campaignHeaderContentStyle" span={12}>
				<Stepper stepData={stepData} current={current} onChange={onChange} />
			</Col>
		</Row>
	);
};

export default CampaignHeader;
