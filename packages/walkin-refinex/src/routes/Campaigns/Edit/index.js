import React, { Component } from "react";
import { Steps, Icon } from "antd";

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

  render() {
    const { Step } = Steps;
    const { current } = this.state;
    console.log(this.props);

    return (
      <div>
        <Steps current={current} onChange={this.onChange}>
          <Step
            title="Configure Campaign"
            icon={<span className="icon icon-setting" />}
            description="This is a description."
          />
          <Step title="Setup Feedback" description="This is a description." />
          <Step title="Go Live" description="This is a description." />
        </Steps>
      </div>
    );
  }
}
