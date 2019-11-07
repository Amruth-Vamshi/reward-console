import React from "react";
import { Steps } from "antd";
const { Step } = Steps;
function Stepper({ current, onChange, StepperData }) {
  return (
    <Steps
      current={current}
      onChange={onChange}
      size="small"
      labelPlacement="vertical"
    >
      {StepperData.map((step, index) => {
        return <Step title={step.title} key={index} />;
      })}
    </Steps>
  );
}

export default Stepper;
