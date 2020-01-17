import * as React from 'react';
import { Row } from 'antd';
import './style.css';
import * as PropTypes from 'prop-types';

const CampaignHeader = ({ children }: any) => {
	return <Row className="campaignHeaderStyle">{children}</Row>;
};

CampaignHeader.propTypes = {
	isOnlyTitle: PropTypes.bool,
	children: PropTypes.object,
};

CampaignHeader.defaultProps = {
	isOnlyTitle: false,
	children: {},
};
export default CampaignHeader;
