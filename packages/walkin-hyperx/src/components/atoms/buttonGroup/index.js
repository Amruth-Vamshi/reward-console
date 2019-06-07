import React, { Fragment } from 'react';
import { Button } from 'antd';
const ButtonGroup = Button.Group;
import './style.css';

const ButtonGroups = ({ buttons }) => {
	return (
		<ButtonGroup>
			{buttons &&
				buttons.map((val, index) => (
					<Button className="allButtonStyle" key={`col-${index}`}>
						{val.text}
					</Button>
				))}
		</ButtonGroup>
	);
};

export default ButtonGroups;
