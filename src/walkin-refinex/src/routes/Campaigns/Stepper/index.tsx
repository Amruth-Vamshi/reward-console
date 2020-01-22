import * as React from "react";
import { Steps } from "antd";
import { StepsProps } from "antd/lib/steps";
const { Step } = Steps;

interface StepperProps extends StepsProps {
  onChange?: any;
  StepperData?: any;
}

const Stepper: React.FunctionComponent<StepperProps> = ({
  current,
  onChange,
  StepperData
}) => {
  return (
    <Steps
      current={current}
      onChange={onChange}
      size="small"
      labelPlacement="vertical"
    >
      {StepperData.map((step: any, index: any) => {
        return <Step title={step.title} key={index} />;
      })}
    </Steps>
  );
};

export default Stepper;
