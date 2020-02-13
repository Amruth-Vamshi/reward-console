import * as React from 'react';
import { Steps } from 'antd';
import './style.css';
import { Link } from 'react-router-dom';

const { Step } = Steps;

interface iProps {
  stepData?: any;
  current?: any;
  onChange?: any;
  onClick?: any;
}

// onChange method is not available on antd (might have to upgrade)
const Stepper = ({ stepData, current, onChange, onClick }: iProps) => {
  return (
    <Steps
      onChange={onChange}
      className="stepsStyle"
      size="small"
      labelPlacement="vertical"
      current={current}
    >
      {stepData &&
        stepData.map((val: any, index: number) => (
          <Step key={`col-${index}`} title={val.title} status={val.status} />
        ))}
    </Steps>
  );
};

export default Stepper;
