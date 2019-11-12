import "./Create.css";
import * as React from "react";
import { Row, Col, Button } from "antd";
import CampaignConfig from "../Edit/Campaign";
// import Audience from "./Audience";
import Audience from "@walkinsole/shared/src/components/campaignCreation/audience";
import {
  CampaignFooter,
  CampaignHeader,
  CircularProgress
} from "@walkinsole/walkin-components";
import "@walkinsole/shared/src/components/campaignCreation/audience/style.css";
import Comm from "@walkinsole/shared/src/components/campaignCreation/communication";
// import Communication from "../Edit/Communication";
import Triggers from "../Edit/Triggers";
import { campaignOverview as Overview} from "@walkinsole/shared";
import FeedbackFormConfig from "../Edit/FeedbackForm";
import ContainerHeader from "../CampaignHeader";
import gql from "graphql-tag";
import { compose, graphql, withApollo, ApolloProviderProps, Query } from "react-apollo";
import Stepper from "../Stepper"
import isEmpty from "lodash/isEmpty";
import {
  CREATE_FEEDBACK_FORM,
  CREATE_CAMPAIGN,
  allSegments,
  attributes,
  createRule,
  UPDATE_CAMPAIGN,
  createCommunication,
  createMessageTemplate,
  ADD_APPLICATION
} from "../../../containers/Query";
import { CAMPAIGN_TYPE, TEMPLATE_STYLE } from "../../../Utils";
import jwt from "jsonwebtoken";
import { GET_ALL_APPS_OF_ORGANIZATION } from "@walkinsole/walkin-core/src/PlatformQueries";
import { CustomScrollbars } from "@walkinsole/walkin-components";
import { RouteChildrenProps } from "react-router";

const communicationData = [
  { value: "SMS", title: "SMS" },
  // { value: 'push', title: 'Push Notification' },
  { value: "EMAIL", title: "EMAIL" }
];


interface CreateCampaignProps extends RouteChildrenProps,ApolloProviderProps<any>{
  updateCampaign?:any,
  rule?:any,
  campaign?:any
  messageTemplate?:any
  communication?:any
  communications?:any
  allAttributes?:any
  segmentList?:any
  allApplications?:any
}

interface CreateCampaignState {
  current: number,
  loading: boolean,
  priorityChosen: any,
  priorityNumberError: boolean,
  showTestAndControl: boolean,
  testValue: number,
  controlValue: any,
  testControlSelected: any,
  communicationSelected: string,
  communicationFormValues: any,
  formValues: any,
  campaign: any,
  segmentList: any,
  attributeData: any,
  query:any,
  formName: string,
  stepperData: any,
  feedbackForm:any,
  communications:any,
  communication:any
}

class CreateCampaign extends React.Component<CreateCampaignProps,CreateCampaignState> {
  private formRef:any;
  constructor(props:CreateCampaignProps) {
    super(props);
    this.state = {
      communication:'',
      communications:'',
      feedbackForm:'',
      current: 0,
      loading: false,
      priorityChosen: 3,
      priorityNumberError: false,
      showTestAndControl: false,
      testValue: 95,
      controlValue: 5,
      testControlSelected: "",
      communicationSelected: "SMS",
      communicationFormValues: {},
      formValues: {},
      campaign: {},
      segmentList: {},
      attributeData: {},
      query: { id: "1", combinator: "and", rules: [] },
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


  componentDidMount(){
    const {location}= this.props;
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
    const {org_id}:any=jwt.decode(localStorage.getItem("jwt"));
    const input = {
      ...values,
      priority: parseInt(priorityChosen),
      campaignControlPercent: parseInt(controlValue),
      organization_id: org_id,
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
      console.log("createCampaign...",createCampaign);
      const feedbackForm = await this.createFeedbackForm(
        createCampaign.data.createCampaign.id
      );
      this.setState({
        loading: false,
        campaign: createCampaign.data.createCampaign,
        feedbackForm: feedbackForm.data.createFeedbackForm
      });
      if(createCampaign.data.createCampaign.id){
        this.props.history.push({
          pathname: `/refinex/feedback/${createCampaign.data.createCampaign.id}/edit`,
			state: {
				current: this.state.current + 1,
			},
    }); 
      }
     
    } catch (err) {
      console.log(err);
    }
  };

  goToNextPage(current) {
    const { formValues } = this.state;
    if (this.state.current == 2) {
      //Audience Rule
      this.ruleQuery(this.state.current);
    }
    if (this.state.current == 3) {
      //Trigger Rule
      this.ruleQuery(this.state.current);
    }
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

  ruleQuery = current => {
    const {org_id}:any=jwt.decode(localStorage.getItem("jwt"));
    const input = {
      name: Math.random()
        .toString(36)
        .substring(7),
      description: "",
      type: "SIMPLE",
      organizationId: org_id,
      status: "ACTIVE",
      ruleConfiguration: JSON.stringify(this.state.query)
    };
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
          let input = {
            triggerRule: data.data.createRule.id
          };
        }
        this.props
          .updateCampaign({
            variables: {
              id: this.state.campaign.id,
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

  

  createCommunicationMutation = (current, values) => {
    console.log("message format..", this.state.communicationSelected)
    const {org_id}:any=jwt.decode(localStorage.getItem("jwt"))
    var input = {
      name: this.props.campaign.campaign.name,
      description: "",
      messageFormat: this.state.communicationSelected,
      templateBodyText: this.state.communicationSelected == "SMS"?values.smsBody:values.email_body,
      templateSubjectText: this.state.communicationSelected == "SMS"?values.smsTag:values.email_subject,
      templateStyle: TEMPLATE_STYLE,
      organization_id: org_id,
      status:"ACTIVE"
    };
    this.props
      .messageTemplate({
        variables: {
          input: input
        }
      })
      .then(data => {
        console.log("MessageTemplate data..", data);
        const {org_id}:any=jwt.decode(localStorage.getItem("jwt"))
        let input = {
          entityId: this.props.campaign.campaign.id, // campainId
          entityType: "Campaign",
          messageTemplateId: data.data.createMessageTemplate.id,
          isScheduled: true,
          isRepeatable: false,
          organization_id: org_id,
          status: "ACTIVE",
          firstScheduleDateTime: this.props.campaign.campaign.startTime,
          commsChannelName: "Test"
        };
        this.props
          .communication({
            variables: {
              input: input
            }
          }).then(data =>{
            console.log("Communication data..", data)
            console.log("this.setState...",data.data.createCommunication)
            this.setState({communications:data.data.createCommunication})
          }).catch(err =>{
            console.log("Error creating for communication", err)
          })
      }).catch(err => {
        console.log("Error creating for message template", err);
      });
  };

  onFormNext = e => {
    console.log("e",e)
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
    console.log("This.state...", this.state)
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
            handleOk={()=>console.log("okay")}
            handleCancel={()=>console.log("cancel")}
            applyTestControlChange={this.applyTestControlChange}
            popupbodyText="Divide customers selected for a specific audience into local test and local control
            groups"
            controlValue={controlValue}
            testValue={testValue}
            maxValueAllowed={75}
            onTestValueChange={this.onTestValueChange}
            onControlValueChange={this.onControlValueChange}
            popupButtonText="apply"
            showFeedbackFormType={true}
            // campaign={this.props.campaign.campaign}
          />
        );
      case 1:
        return (
          <FeedbackFormConfig 
          campaign={campaign} 
          feedbackForm={feedbackForm} />
        );
      case 2:
        return (
          <CustomScrollbars>
          <Audience
            audienceTitle="Audience"
            segmentSubTitle="Segment"
            onValuesSelected={()=>console.log("value selected")}
            segmentSelectionData={this.props.segmentList.segments}
            uploadCsvText="Upload CSV"
            // uploadProps={props}
            segmentFilterText="Filter"
            segmentFilterSubText="Campaign applies to :"
            attributeData={attributeData}
            logQuery={(query)=>console.log(query)}
          />
          </CustomScrollbars>
        );
      case 3:
        return <Triggers 
        applications={this.props.allApplications.organization.applications}
        attributeData={attributeData} 
        logQuery={(query)=>console.log(query)}/>;
      case 4:
        return <Comm
        subTitle="Communication"
        onChange={()=>console.log("communication change")}
        communicationData={communicationData}
        defaultValue={this.state.communicationSelected}
        value={this.state.communicationSelected}
        commWrappedComponentRef={()=>console.log("reference")}
        communicationFormValues={this.state.communicationFormValues}
        emailFormRef={()=>console.log("reference")}
        emailFormData={this.state.communicationFormValues}
        // saveFormRef={this.saveComFormRef}
        onFormNext={this.onFormNext}
      /> ;
      default:
        return <Overview campaign={this.state.campaign} communication={this.state.communication}/>;
    }
  };

  render() {
    const { current, stepperData, loading } = this.state;
    return (
        <div>
        <ContainerHeader
        children={
            <React.Fragment>
                <Col sm={5} md={6} lg={8} xl={8} xxl={13}>
                    <h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">
                        Create Survey
                    </h3>
                </Col>
                <Col sm={19} md={18} lg={16} xl={16} xxl={11}>
                    <Stepper
                    StepperData={stepperData}
                        current={current}
                        onChange={this.goToNextPage.bind(this)}
                    />
                </Col>
            </React.Fragment>
        }
        />
        <div className="stepperContainer">
        <div style={{ margin: '30px 30px 30px 10px', height: '60vh' }}>
         {this.getContainer()}
        </div>
         
        </div>
       
         
        <div style={{}}>
        <div className="gx-card campFooter" style={{ position: 'absolute', width: '100%' }}>
        <div className="gx-card-body" style={{ background: "#F6F6F6" }}>
        <CampaignFooter
            loading={this.state.loading}
            nextButtonText={current>=5?"Launch" : 'Save and Next'}
            saveDraftText={current === 0 ? "" : 'Save Draft'}
            saveDraft={()=>console.log("save to draft")}
            goToPage2={this.goToNextPage.bind(this, current + 1)}
          />
        </div>
        </div>
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
      options: props =>  {
        const {org_id}:any=jwt.decode(localStorage.getItem("jwt"));
        return ({
          variables: {
            id: org_id
          },
          fetchPolicy: "cache-and-network"
        })}
      }
    ),
    graphql(allSegments, {
      name: "segmentList",
      options: ownProps => {
        const {org_id}:any=jwt.decode(localStorage.getItem("jwt"));
        return ({
        variables: {
          org_id: org_id,
          status: "ACTIVE"
        },
        fetchPolicy: "cache-and-network"
      })}
    }),
    graphql(createRule, {
      name: "rule"
    }),
    graphql(UPDATE_CAMPAIGN, {
      name: "updateCampaign"
    }),
    graphql(createCommunication, {
      name: "communication"
    }),
    graphql(createMessageTemplate, {
      name: "messageTemplate"
    }),
    graphql(attributes, {
      name: "allAttributes",
      options:props=>{
        const input= {
          status: "ACTIVE", 
        organizationId: "577bddb7-17df-4884-b16f-8b5db5b00b95"
        }
       const a= {
         variables:{
          input:input
        }}
        return a;
      }
    }),
    graphql(GET_USER_IDENTITY, {
      name: "auth"
    }),
    graphql(ADD_APPLICATION,{name:"addApplication"}),
    withApollo
)(CreateCampaign);
