import * as React from "react";
import { Tooltip, Typography, Button } from "antd";
import "./style.css";

const { Text } = Typography;

interface iProps {
  testControlTitle?: any;
  promptText?: any;
  tootTipText?: any;
  testControlPercentage?: any;
  testControlPercentageEditText?: any;
  onTestAndControlEdit?: any;
}

const TestAndControl = ({
  testControlTitle,
  promptText,
  tootTipText,
  testControlPercentage,
  testControlPercentageEditText,
  onTestAndControlEdit
}: iProps) => {
  return (
    <React.Fragment>
      <div className="testControlContainer">
        <Text>{testControlTitle}</Text>

        <Tooltip title={promptText}>
          <span className="tooltipTextStyle">{tootTipText}</span>
        </Tooltip>
      </div>
      <div className="testControlPercentageStyle">
        <Text>{testControlPercentage}</Text>
        <Button
          className="testAndControlButtonStyle"
          type="link"
          onClick={onTestAndControlEdit}
        >
          {testControlPercentageEditText}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default TestAndControl;
