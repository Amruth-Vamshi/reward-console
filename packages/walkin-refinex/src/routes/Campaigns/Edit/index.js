import "./Edit.css";
import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import CampaignConfig from "./Campaign";
import Audience from "./Audience";
import Communication from "./Communication";
import Triggers from "./Triggers";
import Overview from "./Overview";
import FeedbackFormConfig from "./FeedbackForm";
import ContainerHeader from "../CampaignHeader";
import GoLive from "./GoLive";
export default class EditCampaign extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      stepperData: [
        {
          title: "Basic Info"
        },
        {
          title: "Form"
        },
        {
          title: "Audience"
        },
        {
          title: "Trigger"
        },
        {
          title: "Communication"
        },
        {
          title: "Overview"
        }
      ]
    };
  }

  onChange = current => {
    this.setState({ current });
  };

  getContainer = () => {
    console.log(this.state.current);
    switch (this.state.current) {
      case 0:
        return <CampaignConfig />;
      case 1:
        return <FeedbackFormConfig />;
      case 2:
        return <Audience />;
      case 3:
        return <Triggers />;
      case 4:
        return <Communication />;
      default:
        return <Overview />;
    }
  };

  render() {
    const { current, stepperData } = this.state;
    return (
      <div className="PageContainer" style={{ margin: "-32px" }}>
        <ContainerHeader
          current={current}
          onChange={this.onChange}
          title="Create RefineX Campaign"
          StepperData={stepperData}
        />
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
