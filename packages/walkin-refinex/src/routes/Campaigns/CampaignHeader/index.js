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
        {/* <Steps
          current={current}
          onChange={onChange}
          size="small"
          labelPlacement="vertical"
        >
          <Step title="Basic Info" />
          <Step title="Form" />
          <Step title="Audience" />
          <Step title="Trigger" />
          <Step title="Communication" />
          <Step title="Overview" />
        </Steps> */}
        <Stepper
          current={current}
          onChange={onChange}
          StepperData={StepperData}
        />
      </Col>
    </Row>
  );
}
