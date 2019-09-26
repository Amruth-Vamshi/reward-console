import React, { Fragment } from 'react';
import PrioritySelection from '../../molecules/prioritySelection';
import TestAndControl from '../../molecules/testAndControl';
import './style.css';
import { Card } from "antd";

const CampaignPriority = ({
	buttons,
	promptText,
	tootTipText,
	prioritySelectionTitle,
	priorityButtonText,
	testControlTitle,
	testControlPercentage,
	testControlPercentageEditText,
	priorityNumberInvalidErrorMessage,
	onTestAndControlEdit,
	handleChange,
	priorityChosen
}) => {
	return (
		<Fragment>
			<div className="campaignPriorityContainerStyle prioritySection">
				<PrioritySelection
					buttons={buttons}
					priorityChosen={priorityChosen}
					prioritySelectionTitle={prioritySelectionTitle}
					priorityButtonText={priorityButtonText}
					priorityNumberInvalidErrorMessage={priorityNumberInvalidErrorMessage}
					onClick={handleChange}
				/>
			</div>
			<div className="campaignPriorityContainerStyle">
				<TestAndControl
					testControlTitle={testControlTitle}
					testControlPercentage={testControlPercentage}
					promptText={promptText}
					tootTipText={tootTipText}
					testControlPercentageEditText={testControlPercentageEditText}
					onTestAndControlEdit={onTestAndControlEdit}
				/>
			</div>
		</Fragment>
	);
};

export default CampaignPriority;
