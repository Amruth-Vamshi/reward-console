import React from "react";
import { Col, Row } from "antd";
import "./style.css";

const CampaignHeader = ({ children }) => {
    return <Row className="RefineXCampaignHeaderStyle">{children}</Row>;
};



export default CampaignHeader;