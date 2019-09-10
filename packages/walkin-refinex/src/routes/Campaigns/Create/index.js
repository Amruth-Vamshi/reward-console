import "./Create.css";
import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import CampaignConfig from "../Edit/Campaign";
// import Audience from "./Audience";
import Audience from "@walkinsole/walkin-hyperx/src/containers/campaign/campaignCreation/audience";
import {
  CampaignFooter,
  CampaignHeader,
  CircularProgress
} from "@walkinsole/walkin-components";
import "@walkinsole/walkin-hyperx/src/containers/campaign/campaignCreation/audience/style.css";
import Communication from "../Edit/Communication";
import Triggers from "../Edit/Triggers";
import { campaignOverview as Overview} from "@walkinsole/walkin-components";
import FeedbackFormConfig from "../Edit/FeedbackForm";
import ContainerHeader from "../CampaignHeader";
import gql from "graphql-tag";
import { compose, graphql, withApollo } from "react-apollo";
import GoLive from "../Edit/GoLive";
import isEmpty from "lodash/isEmpty";
import {
  CREATE_FEEDBACK_FORM,
  CREATE_CAMPAIGN,
  allSegments,
  attributes,
  ADD_APPLICATION
} from "../../../containers/Query";
import { CAMPAIGN_TYPE } from "../../../Utils";
import jwt from "jsonwebtoken";
import { GET_ALL_APPS_OF_ORGANIZATION } from "@walkinsole/walkin-components/src/PlatformQueries";
class CreateCampaign extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      loading: false,
      priorityChosen: 3,
      priorityNumberError: false,
      showTestAndControl: false,
      testValue: 95,
      controlValue: 5,
      testControlSelected: "",
      communicationSelected: "1",
      communicationFormValues: {},
      formValues: {},
      campaign: {},
      segmentList: {},
      attributeData: {},
      formName: "default",
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

  createDefaultApplication=async ()=>{
    //ADD_APPLICATION if no application exists
    console.log(this.props)
    const {
      allApplications: { organization }
    } = this.props;
    const { location, match } = this.props;
    if(!organization.applications || (organization.applications && organization.applications.length===0)){
      this.props.addApplication({
        variables: {
          organizationId: organization.id,
          input: { name: "RefineX demo application", platform: "Prod" }
        }
      })
      .then(async data=>{
        console.log(data)
       await this.props.allApplications.refetch()
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }

  componentDidMount(){
    
		if (location && location.state) {
			if (location.state.campaignSelected) {
				if (location.state.campaignSelected.name !== '') {
          const newCampaign={
            ...location.state.campaignSelected,
            name:location.state.campaignSelected.name + ' ' + 'copy 1',
          }
					this.setState({campaign:newCampaign,formValues:newCampaign})
				}
			}
		}
  }

  createFeedbackForm = async campaignId => {
    const { formName } = this.state;
    const { client } = this.props;
    try {
      const createFeedbackForm = await client.mutate({
        mutation: CREATE_FEEDBACK_FORM,
        variables: {
          campaignId: campaignId,
          formName: formName
        }
      });
      return createFeedbackForm;

      console.log(createFeedbackForm);
    } catch (err) {
      console.log(err);
    }
  };

  createCampaign = async values => {
    const { client } = this.props;
    const { priorityChosen, controlValue } = this.state;
    const {
      allApplications: { organization }
    } = this.props;
    const input = {
      ...values,
      priority: parseInt(priorityChosen),
      campaignControlPercent: parseInt(controlValue),
      organization_id: organization.id,
      application_id: organization.applications[0].id,
      campaignType: CAMPAIGN_TYPE
    };
    this.setState({ loading: true });
    try {
      const createCampaign = await client.mutate({
        mutation: CREATE_CAMPAIGN,
        variables: {
          input: input
        }
      });
      console.log(createCampaign);
      const feedbackForm = await this.createFeedbackForm(
        createCampaign.data.createCampaign.id
      );
      this.setState({
        loading: false,
        campaign: createCampaign.data.createCampaign,
        feedbackForm: feedbackForm.data.createFeedbackForm
      });
    } catch (err) {
      console.log(err);
    }
  };

  goToNextPage(current) {
    const { formValues } = this.state;
    if (isEmpty(formValues)) {
      const form =
        this.formRef && this.formRef.props && this.formRef.props.form;
      if (form) {
        form.validateFields(async (err, values) => {
          if (err) {
            return;
          } else {
            switch(current){
              case 1:
                await this.createCampaign(values);
            }
            
            this.setState({
              formValues: values,
              current: current
            });
          }
        });
      }
    } else {
      this.setState({
        current: current
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

  onPriorityButtonClick = e => {
    e.preventDefault();
  };

  handleButtonGroupChange = e => {
    console.log(e);
    this.setState({ priorityChosen: e.target.value });
  };

  setFeedbackForm = (formName, e) => {
    console.log(formName);
    this.setState({
      formName: formName
    });
  };

  getContainer = () => {
    const {
      formValues,
      showTestAndControl,
      testValue,
      controlValue,
      testControlSelected,
      campaign,
      feedbackForm,
      formName
    } = this.state;
    let attributeData =
      this.props.allAttributes &&
      this.props.allAttributes.ruleAttributes &&
      this.props.allAttributes.ruleAttributes.map(el => ({
        name: el.attributeName,
        id: el.id,
        label: el.attributeName
      }));
    switch (this.state.current) {
      case 0:
        return (
          <CampaignConfig
            setFeedbackForm={this.setFeedbackForm}
            subTitle="Basic information"
            formName={formName}
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
            onPriorityButtonClick={this.onPriorityButtonClick}
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
            // campaign={this.props.campaign.campaign}
          />
        );
      case 1:
        return (
          <FeedbackFormConfig campaign={campaign} feedbackForm={feedbackForm} />
        );
      case 2:
        return (
          <Audience
            audienceTitle="Audience"
            segmentSubTitle="Segment"
            onValuesSelected={this.onValuesSelected}
            segmentSelectionData={this.props.segmentList.segments}
            uploadCsvText="Upload CSV"
            // uploadProps={props}
            segmentFilterText="Filter"
            segmentFilterSubText="Campaign applies to :"
            attributeData={attributeData}
            logQuery={this.logQuery}
          />
        );
      case 3:
        return <Triggers />;
      case 4:
        return <Communication />;
      default:
        return <Overview campaign={this.state.campaign} />;
    }
  };

  render() {
    const { current, stepperData, loading } = this.state;
    if(!loading){
      this.createDefaultApplication()
    }
    return (
      <div className="PageContainer" style={{ margin: "-32px" }}>
        <ContainerHeader
          current={current}
          onChange={this.goToNextPage.bind(this)}
          title="Create RefineX Campaign"
          StepperData={stepperData}
        />
        {loading ? (
          <CircularProgress />
        ) : (
          <Row>
            <Col span={24}>
              <div className="stepperContainer">{this.getContainer()}</div>
            </Col>
          </Row>
        )}
        <div style={{ margin: "32px" }}>
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

const GET_USER_IDENTITY = gql`
  query auth {
    auth @client{
      userId
      organizationId
    }
  }
`;

export default
  compose(
    graphql(GET_ALL_APPS_OF_ORGANIZATION, {
      name: "allApplications",
      options: props =>  ({
          variables: {
            id: jwt.decode(localStorage.getItem("jwt")).org_id
          },
          fetchPolicy: "cache-and-network"
        })
      }
    ),
    graphql(allSegments, {
      name: "segmentList",
      options: ownProps => ({
        variables: {
          org_id: jwt.decode(localStorage.getItem("jwt")).org_id,
          status: "ACTIVE"
        },
        fetchPolicy: "cache-and-network"
      })
    }),
    graphql(attributes, {
      name: "allAttributes"
    }),
    graphql(GET_USER_IDENTITY, {
      name: "auth"
    }),
    graphql(ADD_APPLICATION,{name:"addApplication"}),
    withApollo
)(CreateCampaign);
