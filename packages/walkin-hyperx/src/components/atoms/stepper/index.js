import React, { Fragment } from 'react';
import { Steps } from 'antd';
// import './style.css';
import { Link } from 'react-router-dom';

const { Step } = Steps;

const Stepper = ({ stepData, current, onChange }) => {
	return (
		<Steps className="stepsStyle" size="small" labelPlacement="vertical" current={current}>
			{stepData &&
				stepData.map((val, index) => (
					<Step key={`col-${index}`} title={<Link to={`/hyperx/${val.title}`}>{val.title}</Link>} />
				))}
		</Steps>
	);
};

export default Stepper;
