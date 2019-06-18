import React, { Fragment } from 'react';
import { Button, Radio } from 'antd';
import { toNumber } from '../../../utils/common';
import './style.css';

const ButtonGroups = ({ selectedPriorityButton = 3, handleChange, value }) => {
	const selectedOption = toNumber(selectedPriorityButton);
	console.log('selectedOption', value);

	const noop = () => {};
	return (
		<Radio.Group
			defaultValue={selectedOption !== 0 ? selectedOption : 3}
			value={selectedOption !== 0 ? selectedOption : value}
			buttonStyle="solid"
			onChange={handleChange || noop}
		>
			<Radio.Button className="allButtonStyle" value="1">
			{selectedOption ? (selectedOption-2) : 1}
			</Radio.Button>
			<Radio.Button className="allButtonStyle" value="2">
			{selectedOption ? (selectedOption-1) : 2}
			</Radio.Button>
			<Radio.Button className="allButtonStyle" value={selectedOption ? selectedOption : 3}>
				{selectedOption ? selectedOption : 3}
			</Radio.Button>
			<Radio.Button className="allButtonStyle" value="4">
			{selectedOption ? (selectedOption+1) : 4}
			</Radio.Button>
			<Radio.Button className="allButtonStyle" value="5">
			{selectedOption ? (selectedOption+2) : 5}
			</Radio.Button>
		</Radio.Group>
	);
};

export default ButtonGroups;
