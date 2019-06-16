import React, { Fragment } from 'react';
import { Steps } from 'antd';
// import './style.css';
import { Link } from 'react-router-dom';

const { Step } = Steps;

// onChange method is not available on antd (might have to upgrade)
const Stepper = ({ stepData, current, onChange, onClick }) => {
	return (
		<Steps
			onChange={() => console.log('im clicked')}
			className="stepsStyle"
			size="small"
			labelPlacement="vertical"
			current={current}
			onChange={onChange}
		>
			{stepData &&
				stepData.map((val, index) => (
					<Step key={`col-${index}`} title={<Link to={`/hyperx/${val.route}`}>{val.title}</Link>} />
				))}
		</Steps>
	);
};

export default Stepper;
