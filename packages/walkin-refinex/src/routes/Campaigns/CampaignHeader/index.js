import React from "react";
import { Col, Row } from "antd";
import "./style.css";

const CampaignHeader = ({ children }) => {
    return <Row className="campaignHeaderStyle">{children}</Row>;
};



export default CampaignHeader;