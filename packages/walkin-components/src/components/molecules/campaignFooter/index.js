import React from 'react';
import { Row, Col, Button } from 'antd';
import './foo.css';

const CampaignFooter = ({ nextButtonText, loading, saveDraftText, saveDraft, goToPage2 }) => {
	return (
		<div className="campaignFooterStyle">
			<Button loading={loading} onClick={goToPage2} type="primary">
				{nextButtonText}
			</Button>
			{saveDraftText && <Button onClick={saveDraft} type="link">
				{saveDraftText}
			</Button>}
		</div>
	);
};

export default CampaignFooter;
