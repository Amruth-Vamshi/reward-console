import React, { Fragment } from 'react';
import { Row, Col, Button } from 'antd';
import './style.css';
import PropTypes from 'prop-types';

const CampaignHeader = ({ children }) => {
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
