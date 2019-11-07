import React, { Fragment } from 'react';
import { Steps } from 'antd';
import './style.css';
import { Link } from 'react-router-dom';

const { Step } = Steps;

// onChange method is not available on antd (might have to upgrade)
export const Stepper = ({ stepData, current, onChange, onClick }) => {
	return (
		<Steps onChange={onChange} className="stepsStyle" size="small" labelPlacement="vertical" current={current}>
			{stepData && stepData.map((val, index) => <Step key={`col-${index}`} title={val.title} />)}
		</Steps>
	);
};

export default Stepper;
