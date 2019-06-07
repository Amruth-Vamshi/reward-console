import React from 'react';
import { Row, Col, Button } from 'antd';
import './style.css';

const CampaignFooter = ({ text, stepData, current, onChange }) => {
	return (
		<Row className="campaignFooterStyle">
			<Col span={8}>
				<Button type="primary">Next</Button>
			</Col>
			<Col span={4}>
				<Button type="link">Save Draft</Button>
			</Col>
		</Row>
	);
};

export default CampaignFooter;
