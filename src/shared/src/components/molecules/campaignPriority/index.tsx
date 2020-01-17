import React, { Fragment } from "react";
import PrioritySelection from "../../molecules/prioritySelection";
import TestAndControl from "../../molecules/testAndControl";
import "./style.css";

interface CampaignPriorityProps {
  buttons?: any;
  promptText?: any;
  tootTipText?: any;
  prioritySelectionTitle?: any;
  priorityButtonText?: any;
  testControlTitle?: any;
  testControlPercentage?: any;
  testControlPercentageEditText?: any;
  priorityNumberInvalidErrorMessage?: any;
  onTestAndControlEdit?: any;
  handleChange?: any;
  priorityChosen?: any;
  HideTestConstrol?: any;
  text?: any;
  onClick?: any;
}

export const CampaignPriority: React.FC<CampaignPriorityProps> = ({
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
  priorityChosen,
  HideTestConstrol,
  text,
  onClick
}) => {
  return (
    <Fragment>
      <div
        style={{ padding: 15 }}
        className="campaignPriorityContainerStyle prioritySection"
      >
        <PrioritySelection
          priorityChosen={priorityChosen}
          prioritySelectionTitle={prioritySelectionTitle}
          priorityButtonText={priorityButtonText}
          priorityNumberInvalidErrorMessage={priorityNumberInvalidErrorMessage}
          onClick={handleChange}
        />
      </div>
      {!HideTestConstrol ? (
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
      ) : null}
    </Fragment>
  );
};
