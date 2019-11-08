import React, { Fragment } from "react";
import PrioritySelection from "../../molecules/prioritySelection";
import TestAndControl from "../../molecules/testAndControl";
import "./style.css";
import { Card } from "antd";

export const CampaignPriority = ({
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
  HideTestConstrol
}) => {
  return (
    <Fragment>
      <div className="campaignPriorityContainerStyle prioritySection">
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
