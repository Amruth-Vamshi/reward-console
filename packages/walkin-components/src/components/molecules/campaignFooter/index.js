import React from 'react';
import { Row, Col, Button } from 'antd';
import './style.css';

const CampaignFooter = ({ nextButtonText, loading, saveDraftText, onPage1SaveDraft, goToPage2 }) => {
	return (
		<Row className="campaignFooterStyle">
			<Col span={8}>
				<Button loading={loading} onClick={goToPage2} type="primary">
					{nextButtonText}
				</Button>
			</Col>
			<Col span={4}>
				<Button onClick={onPage1SaveDraft} type="link">
					{saveDraftText}
				</Button>
			</Col>
		</Row>
	);
};

export default CampaignFooter;
