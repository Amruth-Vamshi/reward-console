import "./Edit.css";
import React, { Component } from "react";
import { Steps, Icon, Card } from "antd";
import CampaignConfig from "./Campaign";
import FeedbackFormConfig from "./FeedbackForm";
import GoLive from "./GoLive";

export default class EditCampaign extends Component {
  constructor() {
    super();
    this.state = {
      current: 0
    };
  }

  onChange = current => {
    console.log("onChange:", current);
    this.setState({ current });
  };

  getContainer = () => {
    switch (this.state.current) {
      case 0:
        return <CampaignConfig />;
      case 1:
        return <FeedbackFormConfig />;
      case 2:
        return <GoLive />;
      default:
        return <Campaign />;
    }
  };

  render() {
    const { Step } = Steps;
    const { current } = this.state;
    console.log(this.props);
    return (
      <div className="PageContainer">
        <Steps
          className="StepperContainer"
          current={current}
          onChange={this.onChange}
        >
          <Step
            title="Configure Campaign"
            icon={<span className="icon icon-setting" />}
            description="This is a description."
          />
          <Step title="Setup Feedback" description="This is a description." />
          <Step title="Go Live" description="This is a description." />
        </Steps>
        <div className="ConfigContainer">{this.getContainer()}</div>
      </div>
    );
  }
}
