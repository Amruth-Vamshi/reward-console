import React, { Fragment } from 'react';
import { Tooltip, Typography, Button } from 'antd';
import './style.css';
import PrioritySelection from '../prioritySelection/index';

const { Text } = Typography;

const TestAndControl = ({
	testControlTitle,
	promptText,
	tootTipText,
	testControlPercentage,
	testControlPercentageEditText,
}) => {
	return (
		<Fragment>
			<div className="testControlContainer">
				<Text>{testControlTitle}</Text>

				<Tooltip title={promptText}>
					<span className="tooltipTextStyle">{tootTipText}</span>
				</Tooltip>
			</div>
			<div className="testControlPercentageStyle">
				<Text>{testControlPercentage}</Text>
				<Button className="testAndControlButtonStyle" type="link">
					{testControlPercentageEditText}
				</Button>
			</div>
		</Fragment>
	);
};

export default TestAndControl;
