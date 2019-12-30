import "./Edit.css";
import * as React from "react";
import { Row, Col, Button, message, Spin, Icon } from "antd";
import CampaignConfig from "./Campaign";
// import Audience from "./Audience";
import Audience from "@walkinsole/shared/src/components/campaignCreation/audience";
import { CampaignFooter } from "@walkinsole/shared";
import "@walkinsole/shared/src/components/campaignCreation/audience/style.css";
import Comm from "@walkinsole/shared/src/components/campaignCreation/communication";
import Communication from "./Communication";
import Triggers from "./Triggers";
import { campaignOverview as Overview } from "@walkinsole/shared";
import FeedbackFormConfig from "./FeedbackForm";
import ContainerHeader from "../CampaignHeader";
import gql from "graphql-tag";
import { compose, graphql, ApolloProviderProps } from "react-apollo";
import Stepper from "../Stepper";
import isEmpty from "lodash/isEmpty";
import moment from "moment";
import {
  GET_CAMPAIGN,
  allSegments,
  attributes,
  createRule,
  UPDATE_CAMPAIGN,
  createCommunication,
  updateAudiencesWithCampaignId,
  updateRule,
  createMessageTemplate,
  createAudience,
  communications,
  audiences,
  updateCommunication,
  updateMessageTemplate,
  CREATE_EVENT_SUBSCRIPTION,
  UPDATE_EVENT_SUBSCRIPTION,
  LINK_CAMPAIGN_TO_APPLICATION,
  UNLINK_CAMPAIGN_FROM_APPLICATION,
  SEND_FEEDBACK_MESSAGE
} from "../../../containers/Query";
import { CustomScrollbars } from "@walkinsole/walkin-components";
import jwt from "jsonwebtoken";
import {
  TEMPLATE_STYLE,
  DEFAULT_QUEUE,
  DEFAULT_ACTIVE_STATUS,
  DEFAULT_INACTIVE_STATUS
} from "../../../Utils";
import { async } from "q";
import { GET_ALL_APPS_OF_ORGANIZATION } from "@walkinsole/walkin-core/src/PlatformQueries";
import pick from "lodash/pick";
import { RouteComponentProps } from "react-router";
import { any } from "prop-types";

interface RouteParams {
  id?: string;
}
interface EditCampaignProps
  extends RouteComponentProps<RouteParams>,
    ApolloProviderProps<any> {
  updateCampaign?: any;
  rule?: any;
  campaign?: any;
  messageTemplate?: any;
  communication?: any;
  communications?: any;
  allAttributes?: any;
  segmentList?: any;
  allApplications?: any;
  allAudiences?: any;
  allCommunications?: any;
  createEventSubscription?: any;
  updateEventSubscription?: any;
  updateAudiencesWithCampaignIdWithSegments?: any;
  audience?: any;
  updateMessageTemplate?: any;
  updateRule?: any;
  linkCampaignToApplication?: any;
  unlinkCampaignFromApplication?: any;
  sendTestCommunication?: any;
}

interface EditCampaignState {
  current: number;
  loading: boolean;
  priorityChosen: any;
  priorityNumberError: boolean;
  showTestAndControl: boolean;
  testValue: number;
  controlValue: any;
  testControlSelected: any;
  communicationSelected: string;
  communicationFormValues: any;
  formValues: any;
  campaign: any;
  segmentList: any;
  attributeData: any;
  query: any;
  formName: string;
  stepperData: any;
  feedbackForm: any;
  communications: any;
  communication: any;
  oldQueryTriggers: any;
  oldQueryAudience: any;
  emailForm: any;
  pushForm: any;
  eventValues: any;
  selectedSegments: any;
  communicationId: any;
}

const communicationData = [
  { value: "SMS", title: "SMS" },
  { value: "PUSH", title: "Push Notification" },
  { value: "EMAIL", title: "Email" }
];
//Math.random().toString(36).substring(7);
// import { allSegments } from "@walkinsole/walkin-hyperx/src/query/audience";
class EditCampaign extends React.Component<
  EditCampaignProps,
  Partial<EditCampaignState>
> {
  private pushFormRef;
  private formRef1;
  private formRef;
  private emailFormRef;
  constructor(props: EditCampaignProps) {
    super(props);
    this.state = {
      communicationId: "",
      current: 0,
      priorityChosen: "",
      priorityNumberError: false,
      showTestAndControl: false,
      testValue: 95,
      controlValue: 5,
      oldQueryTriggers: null,
      oldQueryAudience: null,
      testControlSelected: "",
      communicationSelected: "SMS",
      communicationFormValues: {},
      emailForm: {},
      pushForm: {},
      formValues: {},
      campaign: {},
      segmentList: {},
      attributeData: {},
      eventValues: {},
      formName: "",
      selectedSegments: [],
      query: { combinator: "and", rules: [] },
      loading: false,
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

  componentDidMount() {
    console.log("component mounted...");
    const { location } = this.props;
    if (location && location.state) {
      if (location.state.current) {
        this.setState({ current: location.state.current });
      }
    }
  }

  onEventTypeEdited = value => {
    console.log(
      "top level values of event type",
      value,
      this.state.eventValues
    );
    const event = {
      event: value.event
    };
    this.setState({ eventValues: event });
  };

  success = text => {
    message.success(text);
  };

  error = text => {
    message.error(text);
  };

  warning = text => {
    message.warning(text);
  };

  componentDidUpdate(preValue) {
    if (this.props.allAudiences.loading !== preValue.allAudiences.loading) {
      if (this.props.allAudiences.audiences) {
        let selectedSegments = [];
        this.props.allAudiences.audiences.map(item =>
          selectedSegments.push(item.segment.id)
        );
        this.setState({ selectedSegments: selectedSegments });
      }
    }
    if (
      this.props.allCommunications.loading !==
      preValue.allCommunications.loading
    ) {
      let { communicationFormValues } = this.state;
      let communicationId: any = {};
      if (this.props.allCommunications.communications) {
        this.props.allCommunications.communications.map(item => {
          if (item.messageTemplate.messageFormat == "SMS") {
            communicationId.smsid = item.messageTemplate.id;
            communicationFormValues.smsTag =
              item.messageTemplate.templateSubjectText;
            communicationFormValues.smsBody =
              item.messageTemplate.templateBodyText;
          } else if (item.messageTemplate.messageFormat == "PUSH") {
            communicationId.pushid = item.messageTemplate.id;
            communicationFormValues.notificationTitle =
              item.messageTemplate.templateSubjectText;
            communicationFormValues.notificationBody =
              item.messageTemplate.templateBodyText;
          } else {
            communicationId.emailid = item.messageTemplate.id;
            communicationFormValues.email_subject =
              item.messageTemplate.templateSubjectText;
            communicationFormValues.email_body =
              item.messageTemplate.templateBodyText;
          }
        });
      }

      this.setState({ communicationFormValues, communicationId });
    }
  }

  createEvenetSubscription = () => {
    const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
    const input = {
      queue: DEFAULT_QUEUE,
      meta: {},
      application_id: this.props.campaign.campaign.application.id,
      organization_id: org_id,
      event_type_id: this.state.eventValues.event,
      description: "",
      name: Math.random()
        .toString(36)
        .substring(7)
    };
    this.props
      .createEventSubscription({
        variables: {
          input
        }
      })
      .then(async data => {
        console.log(data.data.createEventSubscription);
        if (
          data.data.createEventSubscription.status === DEFAULT_INACTIVE_STATUS
        ) {
          const activeSubs = await this.props.updateEventSubscription({
            variables: {
              input: {
                id: data.data.createEventSubscription.id,
                status: DEFAULT_ACTIVE_STATUS
              }
            }
          });
          try {
            console.log(activeSubs);
          } catch (err) {
            console.log(err);
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  onTestAndControlEdit = () => {
    this.setState({
      showTestAndControl: false
    });
  };
  onChange = current => {
    this.setState({ current });
  };

  logQuery = (query, oldQuery) => {
    this.setState({ query: query, oldQueryTriggers: oldQuery });
  };
  logQueryAudience = (query, oldQuery) => {
    this.setState({ query: query, oldQueryAudience: oldQuery });
  };

  onValuesSelected = selectedSegments => {
    this.setState({ selectedSegments });
  };

  onFormNext = current => {
    const { formValues, selectedSegments } = this.state;
    this.setState({
      loading: true
    });
    //Audience module
    if (this.state.current == 2) {
      //Audience Rule
      if (this.props.campaign.campaign.audienceFilterRule == null) {
        this.ruleQuery(this.state.current);
      } else {
        this.updateRule(this.state.current);
      }
      if (!(selectedSegments == "Undefined")) {
        //  this.createAudience(this.state.current, segmentId);
        this.updateAudiencesWithCampaignId(
          this.state.current,
          selectedSegments
        );
      }
    }
    //Trigger module
    if (this.state.current == 3) {
      if (this.state.eventValues.event !== null) {
        this.createEvenetSubscription();
      }
      //Trigger Rule
      if (this.props.campaign.campaign.triggerRule == null) {
        this.ruleQuery(this.state.current);
      } else {
        this.updateRule(this.state.current);
      }
    }
    //Communication module
    if (this.state.current == 4) {
      let { communicationFormValues, communicationSelected } = this.state;
      let comForm;
      console.log(
        "saveEmailFormRef",
        this.pushFormRef,
        this.formRef1,
        this.emailFormRef
      );

      if (communicationSelected === "PUSH") {
        comForm =
          this.pushFormRef &&
          this.pushFormRef.props &&
          this.pushFormRef.props.form;
      } else if (communicationSelected === "SMS") {
        comForm =
          this.formRef1 && this.formRef1.props && this.formRef1.props.form;
      } else {
        comForm =
          this.emailFormRef &&
          this.emailFormRef.props &&
          this.emailFormRef.props.form;
      }

      comForm.validateFields((err, values) => {
        if (err) {
          this.setState({ loading: false });
          return;
        } else {
          if (this.state.communicationSelected == "SMS") {
            communicationFormValues.templateSubjectText = values.smsTag;
            communicationFormValues.templateBodyText = values.smsBody;
          } else if (this.state.communicationSelected == "EMAIL") {
            communicationFormValues.templateSubjectText = values.email_subject;
            communicationFormValues.templateBodyText = values.email_body;
          } else {
            communicationFormValues.templateSubjectText =
              values.notificationTitle;
            communicationFormValues.templateBodyText = values.notificationBody;
          }
          this.setState({ communicationFormValues });
          this.createCommunicationMutation(
            this.state.current,
            communicationFormValues
          );
        }
      });
    }
    const form = this.formRef && this.formRef.props && this.formRef.props.form;
    if (form) {
      form.validateFields((err, values) => {
        if (err) {
          this.setState({
            loading: false
          });
          return;
        } else {
          if (
            this.props.campaign &&
            this.props.campaign.campaign &&
            moment(this.props.campaign.campaign.startTime).isSame(
              values.startTime
            )
          ) {
            delete values.startTime;
          }
          if (
            this.props.campaign &&
            this.props.campaign.campaign &&
            moment(this.props.campaign.campaign.endTime).isSame(values.endTime)
          ) {
            delete values.endTime;
          }
          // this.ruleQuery();
          this.setState({
            formValues: values,
            current: current
          });
          switch (current) {
            case 1:
              this.onCampaignUpdate(values);
          }
        }
      });
    } else {
      this.setState({
        current: current,
        loading: false
      });
    }
  };

  a = () => {
    let a = this.state.current;
    let c;
    const b = {
      someMethod: () => {
        if (!c) {
          console.log(c);
        }
      }
    };
    return () => {
      a = a + 1;
      return a;
    };
  };

  updateAudiencesWithCampaignId = (current, segmentId) => {
    this.props
      .updateAudiencesWithCampaignIdWithSegments({
        variables: {
          campaignId: this.props.campaign.campaign.id,
          segments: segmentId
        }
      })
      .then(data => {
        console.log("updateAudiencesWithCampaignIdWithSegments...", data);
      })
      .catch(err => {
        console.log(
          "Error while updateAudiencesWithCampaignIdWithSegments",
          err
        );
      });
  };
  createAudience = (current, segmentId) => {
    const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
    let input = {
      campaign_id: this.props.campaign.campaign.id,
      segment_id: segmentId,
      organization_id: org_id,
      application_id: this.props.campaign.campaign.application.id,
      status: DEFAULT_ACTIVE_STATUS
    };
    this.props
      .audience({
        variables: {
          input: input
        }
      })
      .then(data => {
        console.log("Audience..", data);
      })
      .catch(err => {
        console.log("Error while creating audience..", err);
      });
  };

  createCommunicationMutation = (current, values) => {
    const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
    //Update
    let update = false;
    let input = {
      ...values,
      organization_id: org_id
    };
    input = pick(input, [
      "organization_id",
      "templateBodyText",
      "templateSubjectText"
    ]);
    if (
      this.state.communicationId.smsid &&
      this.state.communicationSelected === "SMS"
    ) {
      update = true;
      input.id = this.state.communicationId.smsid;
    }
    if (
      this.state.communicationId.pushid &&
      this.state.communicationSelected === "PUSH"
    ) {
      update = true;
      input.id = this.state.communicationId.pushid;
    }
    if (
      this.state.communicationId.emailid &&
      this.state.communicationSelected === "EMAIL"
    ) {
      update = true;
      input.id = this.state.communicationId.emailid;
    }
    if (update) {
      this.props
        .updateMessageTemplate({
          variables: {
            input: input
          }
        })
        .then(async data => {
          console.log("UpdateMessageTemplateData...", updateMessageTemplate);
        })
        .catch(err => {
          console.log(
            "Error while updating messageTemptae for communication",
            err
          );
        });
    } else {
      //Create
      let inputCreate = {
        name:
          this.props.campaign.campaign.name +
          "_" +
          Math.random()
            .toString(36)
            .substring(2),
        description: "",
        messageFormat: this.state.communicationSelected,
        ...input,
        templateStyle: TEMPLATE_STYLE,
        status: DEFAULT_ACTIVE_STATUS
      };
      this.props
        .messageTemplate({
          variables: {
            input: inputCreate
          }
        })
        .then(async data => {
          const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
          var input = {
            entityId: this.props.campaign.campaign.id,
            entityType: "CAMPAIGN",
            messageTemplateId: data.data.createMessageTemplate.id,
            isScheduled: true,
            isRepeatable: false,
            organization_id: org_id,
            status: DEFAULT_ACTIVE_STATUS,
            firstScheduleDateTime: this.props.campaign.campaign.startTime,
            commsChannelName: "Test",
            campaign_id: this.props.campaign.campaign.id
          };
          const createdCommunication = await this.props.communication({
            variables: {
              input: input
            }
          });
          console.log("createCommunication", createdCommunication);
          const cummunicationCreationInput = {
            communication_id: parseInt(
              createdCommunication.data.createCommunication.id
            )
          };
        })
        .catch(err => {
          console.log("Error creating for message template", err);
        });
    }
    this.setState({ loading: false });
  };

  communicationHandler = async () => {
    let { communicationFormValues, communicationSelected } = this.state;
    let comForm;
    console.log(
      "saveEmailFormRef",
      this.pushFormRef,
      this.formRef1,
      this.emailFormRef
    );

    if (communicationSelected === "PUSH") {
      comForm =
        this.pushFormRef &&
        this.pushFormRef.props &&
        this.pushFormRef.props.form;
    } else if (communicationSelected === "SMS") {
      comForm =
        this.formRef1 && this.formRef1.props && this.formRef1.props.form;
    } else {
      comForm =
        this.emailFormRef &&
        this.emailFormRef.props &&
        this.emailFormRef.props.form;
    }

    comForm.validateFields((err, values) => {
      if (err) {
        this.setState({ loading: false });
        return;
      } else {
        if (this.state.communicationSelected == "SMS") {
          communicationFormValues.templateSubjectText = values.smsTag;
          communicationFormValues.templateBodyText = values.smsBody;
        } else if (this.state.communicationSelected == "EMAIL") {
          communicationFormValues.templateSubjectText = values.email_subject;
          communicationFormValues.templateBodyText = values.email_body;
        } else {
          communicationFormValues.templateSubjectText =
            values.notificationTitle;
          communicationFormValues.templateBodyText = values.notificationBody;
        }
        this.setState({ communicationFormValues });
        this.createCommunicationMutation(
          this.state.current,
          communicationFormValues
        );
      }
    });
  };
  sendTestCommunication = async (
    phoneNumber: string,
    email: string,
    fcmToken: string
  ): Promise<Boolean> => {
    const { campaign } = this.props.campaign;
    await this.communicationHandler();
    try {
      const sendFeedback = await this.props.sendTestCommunication({
        variables: {
          campaignId: campaign.id,
          customer: {
            phoneNumber: phoneNumber,
            email: email
          },
          customerDevice: {
            fcmToken: fcmToken
          },
          forTest: true
        }
      });
      return true;
    } catch (e) {
      return false;
    }
  };

  saveDraft = current => {
    this.props.history.push("/refinex/feedback");
    this.props.history.push({
      pathname: "/refinex/feedback",
      state: {
        tabKey: "4"
      }
    });
  };

  onPage1SaveDraft = () => {
    this.props.history.push({
      pathname: "/refinex/feedback/overview",
      state: {
        showPopup: true,
        message: "Feedback saved in draft state"
      }
    });
  };

  updateRule = current => {
    let id;
    let input = {
      ruleConfiguration: this.state.query
    };
    if (current == 2) id = this.props.campaign.campaign.audienceFilterRule.id;
    if (current == 3) {
      id = this.props.campaign.campaign.triggerRule.id;
    }
    this.props
      .updateRule({
        variables: {
          id,
          input: input
        }
      })
      .then(data => {
        console.log("Updating rule..", data);
      })
      .catch(err => {
        console.log("Error whilw updating..", err);
      });
  };
  ruleQuery = current => {
    const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
    const input = {
      name: Math.random()
        .toString(36)
        .substring(7),
      description: "",
      type: "SIMPLE",
      organizationId: org_id,
      status: DEFAULT_ACTIVE_STATUS,
      ruleConfiguration: this.state.query
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

  onCampaignUpdate = formValues => {
    console.log("formValues", formValues);
    this.props
      .updateCampaign({
        variables: {
          id: this.props.campaign.campaign.id,
          input: formValues
        }
      })
      .then(data => {
        console.log(data);
        this.setState(prevState => {
          return {
            ...prevState,
            loading: false
          };
        });
      })
      .catch(err => {
        console.log(err);
        this.setState(prevState => {
          return {
            ...prevState,
            loading: false
          };
        });
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

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  setFeedbackForm = (formName, e) => {
    this.setState({
      formName: formName
    });
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

  handleButtonGroupChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCommunicationChange = e => {
    this.setState({ communicationSelected: e.target.value });
  };

  commWrappedComponentRef = formRef => {
    console.log("commWrappedComponentRef", formRef);
    this.formRef1 = formRef;
  };

  saveEmailFormRef = formRef => {
    console.log("saveEmailFormRef", formRef);
    this.emailFormRef = formRef;
  };

  savePushFormRef = formRef => {
    console.log("savePushFormRef", formRef);
    this.pushFormRef = formRef;
  };

  linkCampaignToApplication = async applicationId => {
    const { campaign } = this.props.campaign;
    try {
      const linkedCampaign = await this.props.linkCampaignToApplication({
        variables: {
          campaignId: campaign.id,
          applicationId: applicationId
        }
      });
      await this.props.campaign.refetch();
      this.success("Successfully linked Campaign to application");
      console.log(linkedCampaign);
    } catch (err) {
      console.log(err);
    }
  };

  unlinkCampaignFromApplication = async applicationId => {
    const { campaign } = this.props.campaign;
    try {
      const unlinkedCampaign = await this.props.unlinkCampaignFromApplication({
        variables: {
          campaignId: campaign.id,
          applicationId
        }
      });
      await this.props.campaign.refetch();
      this.success("Successfully unlinked Campaign from application");
    } catch (err) {
      console.log(err);
    }
  };

  getContainer = () => {
    const { campaign } = this.props.campaign;
    let triggerRule: any = { id: 1, combinator: "and", rules: [] };
    let audienceRule: any = { id: 1, combinator: "and", rules: [] };
    if (campaign && campaign.triggerRule) {
      triggerRule = campaign.triggerRule.ruleConfiguration;
      var mapObj = {
        ruleAttributeId: "field",
        attributeValue: "value",
        expressionType: "operator"
      };
      triggerRule = JSON.stringify(triggerRule);
      triggerRule = triggerRule.replace(
        /ruleAttributeId|attributeValue|expressionType/gi,
        function(matched) {
          return mapObj[matched];
        }
      );
      triggerRule = JSON.parse(triggerRule);
    }
    if (campaign && campaign.audienceFilterRule) {
      audienceRule = campaign.audienceFilterRule.ruleConfiguration;
      audienceRule = JSON.stringify(audienceRule);
      var mapObj = {
        ruleAttributeId: "field",
        attributeValue: "value",
        expressionType: "operator"
      };
      audienceRule = audienceRule.replace(
        /ruleAttributeId|attributeValue|expressionType/gi,
        function(matched) {
          return mapObj[matched];
        }
      );
      audienceRule = JSON.parse(audienceRule);
    }
    let attributeData =
      this.props.allAttributes &&
      this.props.allAttributes.ruleAttributes &&
      this.props.allAttributes.ruleAttributes.map(el => ({
        name: el.id,
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
            setFeedbackForm={this.setFeedbackForm}
            subTitle="Basic information"
            formName={
              campaign.feedbackForm ? campaign.feedbackForm.title : "default"
            }
            onFormNext={this.onFormNext}
            saveFormRef={this.saveFormRef}
            formValues={this.props.campaign.campaign}
            testAndControlText="Test & Control"
            promptText="prompt text"
            toolTipText="what is test and control?"
            prioritySelectionTitle="Survey Priority"
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
            edit={true}
            showFeedbackFormType={false}
          />
        );
      case 1:
        return (
          <FeedbackFormConfig
            campaign={campaign}
            feedbackForm={campaign.feedbackForm}
          />
        );
      case 2:
        return (
          <CustomScrollbars>
            {this.props.segmentList.loading ? (
              <Spin />
            ) : (
              <Audience
                audienceTitle="Audience"
                segmentSubTitle="Segment"
                onValuesSelected={this.onValuesSelected}
                selectedSegments={this.state.selectedSegments}
                segmentSelectionData={this.props.segmentList.segments}
                uploadCsvText="Upload CSV"
                // uploadProps={props}
                segmentFilterText="Filter"
                segmentFilterSubText="Campaign applies to :"
                attributeData={attributeData}
                logQuery={this.logQueryAudience}
                ruleQuery={
                  this.state.oldQueryAudience
                    ? this.state.oldQueryAudience
                    : audienceRule
                }
              />
            )}
          </CustomScrollbars>
        );

      case 3:
        return (
          <Triggers
            unlinkCampaignFromApplication={this.unlinkCampaignFromApplication}
            selectedApplication={
              campaign.application ? campaign.application.id : ""
            }
            linkCampaignToApplication={this.linkCampaignToApplication}
            onEventTypeEdited={this.onEventTypeEdited}
            eventValues={this.state.eventValues}
            query={
              this.state.oldQueryTriggers
                ? this.state.oldQueryTriggers
                : triggerRule
            }
            attributeData={attributeData}
            applications={this.props.allApplications.organization.applications}
            logQuery={this.logQuery}
          />
        );
      case 4:
        return (
          <CustomScrollbars>
            <Communication
              subTitle="Communication"
              onChange={this.onCommunicationChange}
              communicationData={communicationData}
              defaultValue={this.state.communicationSelected}
              value={this.state.communicationSelected}
              commWrappedComponentRef={this.commWrappedComponentRef}
              communicationFormValues={this.state.communicationFormValues}
              campaign={this.state.formValues}
              OnCommunicationFormNext={this.onFormNext}
              emailFormRef={this.saveEmailFormRef}
              emailFormData={this.state.emailForm}
              pushFormRef={this.savePushFormRef}
              pushFormData={this.state.pushForm}
              onFormNext={this.onFormNext}
              testCommunication={this.sendTestCommunication}
            />
          </CustomScrollbars>
        );
      default:
        return (
          <CustomScrollbars>
            <Overview
              campaign={this.props.campaign.campaign}
              communication={
                this.props.allCommunications.communications &&
                this.props.allCommunications.communications.length > 0
                  ? this.props.allCommunications.communications[0]
                      .messageTemplate.messageFormat
                  : this.state.communicationSelected
              }
            />
          </CustomScrollbars>
        );
    }
  };

  render() {
    const { current, stepperData } = this.state;
    const { campaign } = this.props;
    const antIcon = <Icon type="loading" style={{ fontSize: 50 }} spin />;
    //exit to all campaign screen if all the steppers are completed
    if (current > 5) {
      let tabKey = "4";
      moment(this.props.campaign.campaign.startTime).isAfter(moment())
        ? (tabKey = "2")
        : moment(this.props.campaign.campaign.endTime).isBefore(moment())
        ? (tabKey = "3")
        : (tabKey = "4");
      this.props.history.push({
        pathname: "/refinex/feedback/overview",
        state: {
          tabKey: tabKey,
          showPopup: true,
          message: "Feedback form successfully created"
        }
      });
    }
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
        <div className="stepperContainerRefineX">
          <div style={{ margin: "20px 20px 20px 30px", height: "70vh" }}>
            {this.state.loading ? (
              <div className="divCenter">
                <Spin size="large" indicator={antIcon} />{" "}
              </div>
            ) : (
              <React.Fragment>
                {campaign.loading ? (
                  <div className="divCenter">
                    <Spin size="large" indicator={antIcon} />{" "}
                  </div>
                ) : (
                  this.getContainer()
                )}
              </React.Fragment>
            )}
          </div>
        </div>

        <div
          className="campFooterRefinex"
          style={{ position: "absolute", width: "100%" }}
        >
          <div className="gx-card-body" style={{ background: "#FFFFFF" }}>
            <CampaignFooter
              loading={this.state.loading}
              nextButtonText={current > 4 ? "Finalize" : "Save and Next"}
              saveDraftText={current === 0 || current > 4 ? "" : "Save Draft"}
              saveDraft={() => this.saveDraft(current + 1)}
              goToPage2={this.onFormNext.bind(this, current + 1)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(GET_ALL_APPS_OF_ORGANIZATION, {
    name: "allApplications",
    options: props => {
      const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
      return {
        variables: {
          id: org_id
        },
        fetchPolicy: "cache-and-network"
      };
    }
  }),
  graphql(GET_CAMPAIGN, {
    name: "campaign",
    options: (props: EditCampaignProps) => ({
      variables: {
        id: props.match.params.id
      },
      fetchPolicy: "network-only"
    })
  }),
  graphql(allSegments, {
    name: "segmentList",
    options: ownProps => {
      const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
      return {
        variables: {
          org_id: org_id,
          status: DEFAULT_ACTIVE_STATUS
        },
        fetchPolicy: "cache-and-network"
      };
    }
  }),
  graphql(createRule, {
    name: "rule"
  }),
  graphql(updateRule, {
    name: "updateRule"
  }),
  graphql(UPDATE_CAMPAIGN, {
    name: "updateCampaign"
  }),
  graphql(attributes, {
    name: "allAttributes",
    options: props => {
      const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
      const input = {
        status: DEFAULT_ACTIVE_STATUS,
        organizationId: org_id
      };
      const a = {
        variables: {
          input: input
        }
      };
      return a;
    }
  }),
  graphql(LINK_CAMPAIGN_TO_APPLICATION, {
    name: "linkCampaignToApplication"
  }),
  graphql(UNLINK_CAMPAIGN_FROM_APPLICATION, {
    name: "unlinkCampaignFromApplication"
  }),
  graphql(createCommunication, {
    name: "communication"
  }),
  graphql(createMessageTemplate, {
    name: "messageTemplate"
  }),
  graphql(createAudience, {
    name: "audience"
  }),
  graphql(updateAudiencesWithCampaignId, {
    name: "updateAudiencesWithCampaignIdWithSegments"
  }),
  graphql(updateCommunication, {
    name: "updateCommunication"
  }),
  graphql(updateMessageTemplate, {
    name: "updateMessageTemplate"
  }),
  graphql(CREATE_EVENT_SUBSCRIPTION, {
    name: "createEventSubscription"
  }),
  graphql(UPDATE_EVENT_SUBSCRIPTION, {
    name: "updateEventSubscription"
  }),
  graphql(SEND_FEEDBACK_MESSAGE, {
    name: "sendTestCommunication"
  }),
  graphql(communications, {
    name: "allCommunications",
    options: (props: EditCampaignProps) => {
      const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
      return {
        variables: {
          entityId: props.match.params.id,
          entityType: "CAMPAIGN",
          organization_id: org_id,
          status: DEFAULT_ACTIVE_STATUS
        },
        fetchPolicy: "network-only"
      };
    }
  }),
  graphql(audiences, {
    name: "allAudiences",
    options: (props: EditCampaignProps) => {
      const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
      return {
        variables: {
          status: DEFAULT_ACTIVE_STATUS,
          campaign_id: props.match.params.id,
          organization_id: org_id
        },
        fetchPolicy: "network-only"
      };
    }
  })
)(EditCampaign);
