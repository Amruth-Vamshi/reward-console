import "./Edit.css";
import React, { Component } from "react";
import { Steps, Icon, Card, Row, Col, Button } from "antd";
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
        return <GoLive />;
      case 2:
        return <FeedbackFormConfig />;
      case 3:
        return <GoLive />;
      case 4:
        return <GoLive />;
      default:
        return <CampaignConfig />;
    }
  };

  render() {
    const { Step } = Steps;
    const { current } = this.state;
    console.log(this.props);
    return (
      <div className="PageContainer">
        <Row>
          <Col span={12}>
            <h2>Create RefineX Campaign</h2>
          </Col>
          <Col span={12}>
            <Steps
              className="StepperContainer"
              current={current}
              onChange={this.onChange}
              size="small"
              labelPlacement="vertical"
            >
              <Step title="Basic Info" />
              <Step title="Audience" />
              <Step title="Feedback" />
              <Step title="Communication" />
              <Step title="Overview" />
            </Steps>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="stepperContainer">{this.getContainer()}</div>
          </Col>
        </Row>
        <Row className="BottomBar">
          <Col offset={1}>
            <Button type="primary">Next</Button>
          </Col>

          <Col offset={1}>
            <Button>Save as Draft</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
