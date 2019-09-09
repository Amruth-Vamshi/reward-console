import "./Edit.css";
import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import CampaignConfig from "./Campaign";
// import Audience from "./Audience";
import Audience from "@walkinsole/walkin-hyperx/src/containers/campaign/campaignCreation/audience";
import { CampaignFooter, CampaignHeader } from "@walkinsole/walkin-components";
import "@walkinsole/walkin-hyperx/src/containers/campaign/campaignCreation/audience/style.css";
import Comm from "@walkinsole/walkin-hyperx/src/containers/campaign/campaignCreation/communication";
import Communication from "./Communication";
import Triggers from "./Triggers";
import Overview from "./Overview";
import FeedbackFormConfig from "./FeedbackForm";
import ContainerHeader from "../CampaignHeader";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import GoLive from "./GoLive";
import isEmpty from "lodash/isEmpty";
import {
  GET_CAMPAIGN,
  allSegments,
  attributes,
  createRule,
  UPDATE_CAMPAIGN,
  createCommunication,
  createMessageTemplate
} from "../../../containers/Query";
import { CustomScrollbars } from "@walkinsole/walkin-components";
import jwt from "jsonwebtoken";

// import { allSegments } from "@walkinsole/walkin-hyperx/src/query/audience";
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
      campaign: {},
      segmentList: {},
      attributeData: {},
      query: { id: "1", combinator: "and", rules: [] },
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

  logQuery = query => {
    this.setState({ query: query });
    console.log("quu", query);
  };

  logCommunication = text => {
    console.log("Text....", text);
    this.setState({ text: text });
  };

  // createCommunicationMutation = current => {
  //   const input = {
  //     name: "Test",
  //     description: "Test",
  //     messageFormat: "SMS",
  //     templateBodyText: "First template",
  //     templateSubjectText: "To test the first template",
  //     templateStyle: "MUSTACHE",
  //     organization_id: jwt.decode(localStorage.getItem("jwt")).org_id
  //   };
  //   this.props
  //     .createMessageTemplate({
  //       variables: {
  //         input: input
  //       }
  //     })
  //     .then(data => {
  //       console.log("MessageTemplate data..", data);
  //     });
  // };
  createCommunicationMutation = current => {
    console.log("This.props ,.,.,.", this.props);
    // var input = {
    //   name: "Test",
    //   description: "Test",
    //   messageFormat: "SMS",
    //   templateBodyText: "First template",
    //   templateSubjectText: "To test the first template",
    //   templateStyle: "MUSTACHE",
    //   organization_id: jwt.decode(localStorage.getItem("jwt")).org_id
    // };
    // this.props
    //   .createMessageTemplate({
    //     variables: {
    //       input: input
    //     }
    //   })
    //   .then(data => {
    //     console.log("MessageTemplate data..", data);
    //     // var input = {
    //     //   entityId: "2", // campainId
    //     //   entityType: Campaign,
    //     //   messageTemplateId: "4",
    //     //   isScheduled: true,
    //     //   isRepeatable: true,
    //     //   organization_id: jwt.decode(localStorage.getItem("jwt")).org_id,
    //     //   status: ACTIVE,
    //     //   firstScheduleDateTime: "2019-09-15T15:53:00",
    //     //   repeatRuleId: "1",
    //     //   commsChannelName: "Test"
    //     // };
    //     // this.props(
    //     //   createCommunication({
    //     //     variables: {
    //     //       input: input
    //     //     }
    //     //   })
    //     // );
    //   });
  };

  ruleQuery = current => {
    const input = {
      name: Math.random()
        .toString(36)
        .substring(7),
      description: "",
      type: "SIMPLE",
      organizationId: jwt.decode(localStorage.getItem("jwt")).org_id,
      status: "ACTIVE",
      ruleConfiguration: JSON.stringify(this.state.query)
    };
    console.log("save....", this.props);
    console.log("Campaign Id..", this.props.campaign.campaign.id);
    this.props
      .rule({
        variables: {
          input: input
        }
      })
      .then(data => {
        console.log("Trigger Rule data...", data);
        if (current == 2)
          var input = {
            audienceFilterRule: data.data.createRule.id
          };
        if (current == 3) {
          var input = {
            triggerRule: data.data.createRule.id
          };
        }
        this.props
          .updateCampaign({
            variables: {
              id: this.props.campaign.campaign.id,
              input: input
            }
          })
          .then(data => {
            console.log("Update campaign data..", data);
          });
      })
      .catch(err => {
        console.log("Error creating the question", err);
      });
  };

  goToNextPage(current) {
    const { formValues } = this.state;
    if (isEmpty(formValues)) {
      const form =
        this.formRef && this.formRef.props && this.formRef.props.form;
      if (form) {
        form.validateFields((err, values) => {
          if (err) {
            return;
          } else {
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

  onFormNext = current => {
    const { formValues, communicationFormValues } = this.state;
    console.log(current);
    if (this.state.current == 2) {
      //Audience Rule
      this.ruleQuery(this.state.current);
    }
    if (this.state.current == 3) {
      //Trigger Rule
      this.ruleQuery(this.state.current);
    }
    if (this.state.current == 4) {
      this.createCommunicationMutation(this.state.current);
      console.log("Comm//////..", communicationFormValues);
    }
    if (isEmpty(formValues)) {
      const form =
        this.formRef && this.formRef.props && this.formRef.props.form;
      if (form) {
        form.validateFields((err, values) => {
          if (err) {
            return;
          } else {
            // this.ruleQuery();
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
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  saveComFormRef = formRef => {
    this.formRef1 = formRef;
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
  logQuery = query => {
    console.log("quu", query);
  };
  handleButtonGroupChange = e => {
    this.setState({ value: e.target.value });
  };

  getContainer = () => {
    const { campaign } = this.props.campaign;
    console.log(".......", this.props);
    let attributeData =
      this.props.allAttributes &&
      this.props.allAttributes.ruleAttributes &&
      this.props.allAttributes.ruleAttributes.map(el => ({
        name: el.attributeName,
        id: el.id,
        label: el.attributeName
      }));
    // let templateData = this.props.messageTemplate;
    const {
      formValues,
      query,
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
          <CustomScrollbars>
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
          </CustomScrollbars>
        );

      case 3:
        return (
          <Triggers attributeData={attributeData} logQuery={this.logQuery} />
        );
      case 4:
        return (
          <Comm
            saveFormRef={this.saveComFormRef}
            onFormNext={this.onFormNext}
            formValues={this.state.communicationFormValues}
          />
          // <Communication
          //   // campaign={this.props.campaign.campaign}
          //   saveFormRef={this.saveComFormRef}
          //   onFormNext={this.onFormNext}
          //   communicationFormValues={this.communicationFormValues}
          // />
        );
      default:
        return <Overview campaign={this.props.campaign.campaign} />;
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
        {/* <Row className="BottomBar">
          <Col offset={1}>
            <Button onClick={this.onFormNext} type="primary">Next</Button>
          </Col>

          <Col offset={1}>
            <Button>Save as Draft</Button>
          </Col>
        </Row> */}
        <div style={{ margin: "32px" }}>
          <CampaignFooter
            nextButtonText="Next"
            saveDraftText="Save Draft"
            onPage1SaveDraft={this.onPage1SaveDraft}
            goToPage2={this.onFormNext.bind(this, current + 1)}
          />
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(GET_CAMPAIGN, {
    name: "campaign",
    options: props => ({
      variables: {
        id: props.match.params.id
      }
    })
  }),
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
  // graphql(createRule, {
  //   name: "rule",
  //   options: props => ({
  //     variables: {
  //       name: Math.random()
  //         .toString(36)
  //         .substring(7),
  //       description: "",
  //       type: "SIMPLE",
  //       organizationId: jwt.decode(localStorage.getItem("jwt")).org_id,
  //       status: "ACTIVE",
  //       ruleConfiguration: JSON.stringify(query)
  //     },
  //     fetchPolicy: "cache-and-network"
  //   })
  // }),
  graphql(createRule, {
    name: "rule"
  }),
  graphql(UPDATE_CAMPAIGN, {
    name: "updateCampaign"
  }),
  graphql(attributes, {
    name: "allAttributes"
  }),
  graphql(createCommunication, {
    name: "communication"
  }),
  graphql(createMessageTemplate, {
    name: "messageTemplate"
  })
)(EditCampaign);
