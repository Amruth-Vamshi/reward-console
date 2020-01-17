import * as React from "react";
import { Input, Typography, Alert } from "antd";
import "./style.css";
import ButtonGroups from "../../atoms/buttonGroup";
const { Text } = Typography;

interface iProps {
  priorityChosen?: any;
  maxPriority?: any;
  onClick?: any;
  prioritySelectionTitle?: any;
  priorityButtonText?: any;
  priorityNumberInvalidErrorMessage?: any;
  selectedPriorityButton?: any;
}

interface iState {
  maxPriority?: any;
  priorityChosen?: any;
  priorityNumberError?: boolean;
}

class PrioritySelection extends React.Component<iProps, iState> {
  constructor(props: iProps) {
    super(props);
    this.state = {
      priorityChosen: this.props.priorityChosen
        ? parseInt(this.props.priorityChosen)
        : 3,
      priorityNumberError: false,
      maxPriority: this.props.maxPriority
        ? parseInt(this.props.maxPriority)
        : 99
    };
  }

  displayError = (state: any) => {
    this.setState({ [state]: true }, () => {
      setTimeout(() => {
        this.setState({ [state]: false });
      }, 4000);
    });
  };

  validateCampaignPriority = (e: any) => {
    const { value } = e.target;
    if (
      (!Number.isNaN(value) && value > 0 && value <= this.state.maxPriority) ||
      value === ""
    ) {
      this.setState({ priorityChosen: value });
      this.props.onClick(e);
    } else {
      this.displayError("priorityNumberError");
    }
  };

  handleButtonGroup = (e: any) => {
    const { value } = e.target;
    this.props.onClick(e);
    this.setState({ priorityChosen: value });
  };

  render() {
    const {
      prioritySelectionTitle,
      priorityButtonText,
      priorityNumberInvalidErrorMessage,
      selectedPriorityButton
    } = this.props;
    const { priorityChosen, priorityNumberError } = this.state;
    return (
      <React.Fragment>
        <Text>{prioritySelectionTitle}</Text>
        <div className="prioritySelectionContainer">
          <ButtonGroups
            selectedPriorityButton={priorityChosen}
            handleChange={this.handleButtonGroup}
            maxPriority={this.state.maxPriority}
          />
          <Input
            style={{ marginLeft: 10 }}
            className="prioritySelectionInputStyle"
            placeholder={priorityButtonText}
            onChange={this.validateCampaignPriority}
            value={priorityChosen}
            type="number"
          />
        </div>
        {priorityNumberError && (
          <Alert message={priorityNumberInvalidErrorMessage} type="error" />
        )}
      </React.Fragment>
    );
  }
}

export default PrioritySelection;
