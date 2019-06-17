import React, { Fragment } from 'react';
import { Button, Radio } from 'antd';
import { toNumber } from '../../../utils/common';
import './style.css';

const ButtonGroups = ({ selectedPriorityButton = 3, handleChange }) => {
	const selectedOption = toNumber(selectedPriorityButton);

	const noop = () => {};
	return (
		<Radio.Group
			defaultValue={selectedOption ? selectedOption : 3}
			buttonStyle="solid"
			onChange={handleChange || noop}
		>
			<Radio.Button className="allButtonStyle" value="1">
				1
			</Radio.Button>
			<Radio.Button className="allButtonStyle" value="2">
				2
			</Radio.Button>
			<Radio.Button className="allButtonStyle" value={selectedOption ? selectedOption : 3}>
				{selectedOption ? selectedOption : 3}
			</Radio.Button>
			<Radio.Button className="allButtonStyle" value="4">
				4
			</Radio.Button>
			<Radio.Button className="allButtonStyle" value="5">
				5
			</Radio.Button>
		</Radio.Group>
	);
};

export default ButtonGroups;
