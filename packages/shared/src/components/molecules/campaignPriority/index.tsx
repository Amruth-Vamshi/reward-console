import * as React from 'react';
import PrioritySelection from '../../molecules/prioritySelection';
import TestAndControl from '../../molecules/testAndControl';
import './style.css';

interface iProps {
	buttons?: any,
	promptText?: string,
	tootTipText?: any,
	prioritySelectionTitle?: any,
	priorityButtonText?: string,
	testControlTitle?: any,
	testControlPercentage?: any,
	testControlPercentageEditText?: any,
	priorityNumberInvalidErrorMessage?: any,
	onTestAndControlEdit?: any,
	handleChange?: any,
	priorityChosen?: any
}

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
}: iProps) => {
	return (
		<React.Fragment>
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
		</React.Fragment>
	);
};

export default CampaignPriority;
