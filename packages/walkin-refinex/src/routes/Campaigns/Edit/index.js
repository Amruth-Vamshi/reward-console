import "./Edit.css";
import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import CampaignConfig from "./Campaign";
// import Audience from "./Audience";
import Audience from "@walkinsole/walkin-hyperx/src/containers/campaign/campaignCreation/audience";

import "@walkinsole/walkin-hyperx/src/containers/campaign/campaignCreation/audience/style.css";
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
      priorityChosen: "",
      priorityNumberError: false,
      showTestAndControl: false,
      testValue: 95,
      controlValue: 5,
      testControlSelected: "",
      communicationSelected: "1",
      communicationFormValues: {},
      formValues: {},
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
  onTestAndControlEdit = () => {
    this.setState({
      showTestAndControl: true
    });
  };
  onChange = current => {
    this.setState({ current });
  };

  onFormNext = e => {
    e.preventDefault();
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  onControlValueChange = val => {
    this.setState({ controlValue: val });
  };

  onTestValueChange = val => {
    this.setState({ testValue: val });
  };

  applyTestControlChange = () => {
    const { testValue, controlValue } = this.state;
    this.setState({
      testControlSelected: `${testValue} % - ${controlValue}%`,
      showTestAndControl: false
    });
  };

  handleButtonGroupChange = e => {
    this.setState({ value: e.target.value });
  };

  getContainer = () => {
    console.log(this.state.current);
    const {
      formValues,
      showTestAndControl,
      testValue,
      controlValue,
      testControlSelected
    } = this.state;
    switch (this.state.current) {
      case 0:
        return (
          <CampaignConfig
            subTitle="Basic information"
            onFormNext={this.onFormNext}
            saveFormRef={this.saveFormRef}
            formValues={formValues}
            testAndControlText="Test & Control"
            promptText="prompt text"
            toolTipText="what is test and control?"
            prioritySelectionTitle="Campaign Priority"
            priorityButtonText="Custom no"
            testControlTitle="Test & Control"
            testControlPercentage={
              testControlSelected ? testControlSelected : "95% - 5%"
            }
            handleButtonGroupChange={this.handleButtonGroupChange}
            testControlPercentageEditText="Edit"
            onPriorityButtonClick="onPriorityButtonClick"
            priorityNumberInvalidErrorMessage="Enter a value between 6 and 99"
            onTestAndControlEdit={this.onTestAndControlEdit}
            showTestAndControl={showTestAndControl}
            popupTitle="Test & Control"
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
            applyTestControlChange={this.applyTestControlChange}
            popupbodyText="Divide customers selected for a specific audience into local test and local control
            groups"
            controlValue={controlValue}
            testValue={testValue}
            maxValueAllowed={75}
            onTestValueChange={this.onTestValueChange}
            onControlValueChange={this.onControlValueChange}
            popupButtonText="apply"
          />
        );
      case 1:
        return <FeedbackFormConfig />;
      case 2:
        return (
          <Audience
            audienceTitle="Audience"
            segmentSubTitle="Segment"
            onValuesSelected={this.onValuesSelected}
            // segmentSelectionData={this.props.segmentList.segments}
            uploadCsvText="Upload CSV"
            // uploadProps={props}
            segmentFilterText="Filter"
            segmentFilterSubText="Campaign applies to :"
            // attributeData={attributeData}
            // logQuery={this.logQuery}
          />
        );
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
