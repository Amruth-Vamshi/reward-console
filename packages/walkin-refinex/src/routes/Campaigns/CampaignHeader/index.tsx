import * as React from "react";
import { Col, Row } from "antd";
import "./style.css";

const CampaignHeader = ({ children }: { children: React.ReactElement }) => {
    return <Row className="RefineXCampaignHeaderStyle">{children}</Row>;
};



export default CampaignHeader;