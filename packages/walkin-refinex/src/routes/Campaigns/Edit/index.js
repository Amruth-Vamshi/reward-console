import "./Edit.css";
import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import CampaignConfig from "./Campaign";
// import Audience from "./Audience";
import Audience from "@walkinsole/walkin-hyperx/src/containers/campaign/campaignCreation/audience";
import { CampaignFooter, CampaignHeader } from '@walkinsole/walkin-components';
import "@walkinsole/walkin-hyperx/src/containers/campaign/campaignCreation/audience/style.css";
import Communication from "./Communication";
import Triggers from "./Triggers";
import Overview from "./Overview";
import FeedbackFormConfig from "./FeedbackForm";
import ContainerHeader from "../CampaignHeader";
import gql from "graphql-tag";
import { compose, graphql ,withApollo} from "react-apollo";
import GoLive from "./GoLive";
import isEmpty from 'lodash/isEmpty';
import {GET_CAMPAIGN,UPDATE_CAMPAIGN} from "../../../containers/Query"
 class EditCampaign extends Component {
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


  editCampaign=async (values)=>{
    const { client } = this.props;
    
    const updatedCampaign = await client.mutate({
      mutation: UPDATE_CAMPAIGN,
      variables: {
        id: this.props.campaign.campaign.id,
        input:values
      }
    });
    console.log(updatedCampaign)
  }

  goToNextPage(current) {
    const { formValues } = this.state;
		if (isEmpty(formValues)) {
			const form = this.formRef && this.formRef.props && this.formRef.props.form;
			if (form) {
				form.validateFields((err, values) => {
					if (err) {
						return;
					} else {
            this.editCampaign(values)
						this.setState({
							formValues: values,
							current: current,
						});
					}
				});
			}
		} else {
			this.setState({
				current: current,
			});
		}
	}

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
    const {campaign}= this.props.campaign
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
            formValues={this.props.campaign.campaign}
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
            campaign={this.props.campaign.campaign}
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
          onChange={this.goToNextPage.bind(this)}
          title="Create RefineX Campaign"
          StepperData={stepperData}
        />
        <Row>
          <Col span={24}>
            <div className="stepperContainer">{this.getContainer()}</div>
          </Col>
        </Row>
        <div style={{ margin: '32px' }}>
					<CampaignFooter
						nextButtonText="Next"
						saveDraftText="Save Draft"
						onPage1SaveDraft={this.onPage1SaveDraft}
						goToPage2={this.goToNextPage.bind(this, current + 1)}
					/>
				</div>
      </div>
    );
  }
}


export default compose(
  graphql(GET_CAMPAIGN, {
    name: "campaign",
    options: (props) => ({
      variables: {
        id:props.match.params.id,
      },
    })
  }),
  withApollo
)(EditCampaign);