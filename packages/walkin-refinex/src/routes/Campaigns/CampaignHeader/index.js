import React from "react";
import { Col, Row } from "antd";
import Stepper from "../Stepper";
export default function CampaignHeader({
  current,
  onChange,
  title,
  stepper,
  StepperData
}) {
  return (
    <Row className="campaignHeaderStyle">
      <Col className="campaignHeaderContentStyle" span={8}>
        <h2 className="gx-text-grey">{title}</h2>
      </Col>
      <Col className="campaignHeaderContentStyle" span={16}>
        <Stepper
          current={current}
          onChange={onChange}
          StepperData={StepperData}
        />
      </Col>
    </Row>
  );
}
