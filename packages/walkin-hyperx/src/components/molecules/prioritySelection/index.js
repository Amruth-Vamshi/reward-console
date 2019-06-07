import React, { Fragment } from 'react';
import { Input, Typography } from 'antd';
import './style.css';
import ButtonGroups from '../../atoms/buttonGroup';
const { Text } = Typography;

const PrioritySelection = ({ buttons, prioritySelectionTitle, priorityButtonText }) => {
	return (
		<Fragment>
			<Text>{prioritySelectionTitle}</Text>
			<div className="prioritySelectionContainer">
				<ButtonGroups buttons={buttons} />
				<Input className="prioritySelectionInputStyle" placeholder={priorityButtonText} />
			</div>
		</Fragment>
	);
};

export default PrioritySelection;
