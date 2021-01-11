import React from 'react';
import './style.css';
import { Row, Col, Input, message, Icon, Dropdown } from 'antd';
import Button from '../../../components/shared/Button/index';
import CInput from '../../../components/shared/Input/index';
import {
  GET_COMMUNICATIONS,
  CREATE_COMMUNICATION,
  UPDATE_COMMUNICATION,
  GET_CAMPAIGNS,
  SEND_MESSAGE,
  GET_MESSAGE_TEMPLATE_AND_SEND_SMS,
  GET_LOYALTY_CARD,
  GET_EXPIRY_COMMUNICAIONS,
  CREATE_EXPIRY_COMMUNICATION,
  UPDATE_EXPIRY_COMMUNICATION,
} from '../../../query/index';
import MessageTemplateVariables from '../MessageTempateVariables/index';
import * as jwt from 'jsonwebtoken';

interface NotificationTemplateFormProps {
  formName: string;
  templateType: string;
  type: string;
  updateNotificationOption: any;
  client?: any;
  loyaltyProgramId: number;
}

interface NotificationTemplateFormState {
  templateBody: string;
  phoneNumber: any;
  daysInput: string;
  timeInput: string;
  email: string;
  communicationId: any;
  currentMessageTempateId: any;
  messageTemplateVariables: any;
  loyaltyCardCode: any;
  expiryCommunicationId: any;
}

class NotificationTemplateForm extends React.Component<
  NotificationTemplateFormProps,
  NotificationTemplateFormState
> {
  constructor(props: NotificationTemplateFormProps) {
    super(props);
    this.state = {
      templateBody: '',
      phoneNumber: '',
      daysInput: '7',
      timeInput: '06:00',
      email: '',
      communicationId: 0,
      currentMessageTempateId: 0,
      messageTemplateVariables: [],
      loyaltyCardCode: '',
      expiryCommunicationId: 0,
    };
  }

  init = async (nextProps = null) => {
    let formName = nextProps ? nextProps.formName : this.props.formName;
    let type = nextProps ? nextProps.type : this.props.type;
    let templateType = nextProps
      ? nextProps.templateType
      : this.props.templateType;

    const jwtToken: any = localStorage.getItem('jwt');
    const { org_id }: any = jwt.decode(jwtToken);

    let loyaltyCardResponse = await this.props.client.query({
      query: GET_LOYALTY_CARD,
      variables: { organizationId: org_id },
    });

    let loyaltyCards = loyaltyCardResponse.data.loyaltyCards.data;
    if (!loyaltyCards.length) {
      message.warn('Create a loyalty card to configure notifications!');
      return;
    }
    this.setState({
      loyaltyCardCode: loyaltyCards[0].code,
    });
    let communicationsResponse;

    if (formName == 'On Points Expiry' || type == 'Reminder') {
      try {
        communicationsResponse = await this.props.client.query({
          query: GET_EXPIRY_COMMUNICAIONS,
          variables: {
            eventType: type == 'Reminder' ? 'EXPIRY_REMINDER' : 'EXPIRY',
            organizationId: org_id,
            loyaltyCardCode: loyaltyCards[0].code,
          },
          fetchPolicy: 'network-only',
        });
        let communications = Object.assign(
          communicationsResponse.data
            .expiryCommunicationByLoyaltyCardCodeAndEventType
        );

        communications = communications.filter(comm => {
          if (comm.communication.commsChannelName.indexOf(templateType) == -1) {
            return false;
          }
          return true;
        });

        if (this.props.formName == 'Expiry Reminder') {
          this.setState({
            templateBody: '',
            communicationId: 0,
            currentMessageTempateId: 0,
            messageTemplateVariables: [],
          });
          return;
        }
        if (communications.length) {
          let communication = communications[0];
          if (this.props.formName.indexOf('Expiry Reminder') != -1) {
            let days = '';
            for (let i = 17; ; i++) {
              if (!parseInt(formName[i]) && parseInt(formName[i]) != 0) {
                break;
              }
              days += formName[i];
            }
            communication = communications.find(
              comm => comm.numberOfDays == days
            );
          }

          this.setState({
            templateBody:
              communication.communication.messageTemplate.templateBodyText,
            communicationId: communication.communication.id,
            currentMessageTempateId:
              communication.communication.messageTemplate.id,
            messageTemplateVariables:
              communication.communication.messageTemplate
                .messageTemplateVariables,
            expiryCommunicationId: communication.id,
          });
          if (type == 'Reminder') {
            this.setState({
              daysInput: communication.numberOfDays,
            });
          }
        } else {
          this.setState({
            templateBody: '',
            communicationId: 0,
            currentMessageTempateId: 0,
            messageTemplateVariables: [],
          });
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      communicationsResponse = await this.props.client.query({
        query: GET_COMMUNICATIONS,
        variables: { entityType: 'LOYALTY', organization_id: org_id },
        fetchPolicy: 'network-only',
      });
      let communications = Object.assign(
        communicationsResponse.data.communications
      );

      communications = communications.filter(comm => {
        if (
          comm.commsChannelName.indexOf(this.commsChannelName[formName]) == -1
        ) {
          return false;
        }
        return true;
      });

      communications = communications.filter(comm => {
        if (comm.commsChannelName.indexOf(templateType) == -1) {
          return false;
        }
        return true;
      });

      communications = communications.filter(comm => {
        if (comm.organization.id != org_id) {
          return false;
        }
        return true;
      });

      if (communications.length) {
        this.setState({
          templateBody: communications[0].messageTemplate.templateBodyText,
          communicationId: communications[0].id,
          currentMessageTempateId: communications[0].messageTemplate.id,
          messageTemplateVariables:
            communications[0].messageTemplate.messageTemplateVariables,
        });
      } else {
        this.setState({
          templateBody: '',
          communicationId: 0,
          currentMessageTempateId: 0,
          messageTemplateVariables: [],
        });
      }
    }
  };

  async componentWillMount() {
    this.init();
  }

  async componentWillReceiveProps(nextProps) {
    this.init(nextProps);
  }

  handleInputChange = (e, value) => {
    let state = {};
    state[value] = e.target.value;
    this.setState(state);
    return e.target.value;
  };

  updateCommunication = async () => {
    if (
      this.props.formName == 'On Points Expiry' ||
      this.props.type == 'Reminder'
    ) {
      let expiryInputVariables = {
        id: this.state.expiryCommunicationId,
        loyaltyCardCode: this.state.loyaltyCardCode,
        eventType: this.props.type == 'Reminder' ? 'EXPIRY_REMINDER' : 'EXPIRY',
        communication: {
          id: this.state.communicationId,
          entityId: `${this.props.loyaltyProgramId}`,
          status: 'ACTIVE',
        },
        messageTemplate: {
          id: this.state.currentMessageTempateId,
          templateBodyText: this.state.templateBody,
        },
      };
      if (this.props.type == 'Reminder')
        expiryInputVariables['numberOfDays'] = parseInt(this.state.daysInput);

      try {
        let updateExpiryCommunicationResponse = await this.props.client.mutate({
          mutation: UPDATE_EXPIRY_COMMUNICATION,
          variables: { input: expiryInputVariables },
        });
        let updateExpiryCommunication =
          updateExpiryCommunicationResponse.data.updateExpiryCommunication;
        if (this.props.type == 'Reminder')
          this.props.updateNotificationOption(
            'Expiry Reminder',
            `Expiry Reminder (${updateExpiryCommunication.numberOfDays} Days)`,
            this.props.type
          );
        message.info(`${this.props.formName} is updated!`);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        let updateCommunicationResponse = await this.props.client.mutate({
          mutation: UPDATE_COMMUNICATION,
          variables: {
            communicationInput: {
              id: this.state.communicationId,
              entityId: `${this.props.loyaltyProgramId}`,
              status: 'ACTIVE',
            },
            messageTemplateInput: {
              id: this.state.currentMessageTempateId,
              templateBodyText: this.state.templateBody,
            },
          },
        });
        message.info(`${this.props.formName} is updated!`);
      } catch (e) {
        console.log(e);
      }
    }
  };

  createCommunication = async () => {
    const jwtToken: any = localStorage.getItem('jwt');
    const { org_id }: any = jwt.decode(jwtToken);

    let campaignResponse;

    try {
      campaignResponse = await this.props.client.query({
        query: GET_CAMPAIGNS,
        variables: {
          status: 'ACTIVE',
          campaignType: 'LOYALTY',
          organization_id: org_id,
        },
        fetchPolicy: 'network-only',
      });
      if (!campaignResponse.data.campaigns.length) {
        message.warn('Create campaign to create a communication!');
        return;
      }
    } catch (e) {
      console.log(e);
    }

    if (
      this.props.formName == 'On Points Expiry' ||
      this.props.type == 'Reminder'
    ) {
      let formName =
        this.props.type == 'Reminder'
          ? this.props.formName.substr(0, 15)
          : this.props.formName;

      let expiryInputVariables = {
        loyaltyCardCode: this.state.loyaltyCardCode,
        eventType: this.props.type == 'Reminder' ? 'EXPIRY_REMINDER' : 'EXPIRY',
        communication: {
          entityId: `${this.props.loyaltyProgramId}`,
          entityType: 'LOYALTY',
          status: 'ACTIVE',
          isScheduled: false,
          firstScheduleDateTime: campaignResponse.data.campaigns[0].startTime,
          isRepeatable: false,
          organization_id: org_id,
          commsChannelName: `${this.commsChannelName[formName]}_${this.props.templateType}`,
          campaign_id: campaignResponse.data.campaigns[0].id,
        },
        messageTemplate: {
          name:
            this.props.type == 'Reminder'
              ? `${this.props.templateType}_TEMPLATE_${this.state.daysInput}_${this.commsChannelName[formName]}`
              : `${this.props.templateType}_TEMPLATE_${this.commsChannelName[formName]}`,
          description: '',
          messageFormat: this.props.templateType,
          templateBodyText: this.state.templateBody,
          templateSubjectText: `${this.commsChannelName[formName]}`,
          templateStyle: 'MUSTACHE',
          organization_id: org_id,
          status: 'ACTIVE',
          //url: "https://dummyurl.com",
          //imageUrl: "https://dummyurl.com"
        },
      };
      if (this.props.type == 'Reminder')
        expiryInputVariables['numberOfDays'] = parseInt(this.state.daysInput);

      try {
        let createExpiryCommunicationResponse = await this.props.client.mutate({
          mutation: CREATE_EXPIRY_COMMUNICATION,
          variables: { input: expiryInputVariables },
        });
        let createExpiryCommunication =
          createExpiryCommunicationResponse.data.createExpiryCommunication;
        if (this.props.type == 'Reminder')
          this.props.updateNotificationOption(
            'Expiry Reminder',
            `Expiry Reminder (${createExpiryCommunication.numberOfDays} Days)`,
            this.props.type
          );
        this.setState({
          templateBody:
            createExpiryCommunication.communication.messageTemplate
              .templateBodyText,
          communicationId: createExpiryCommunication.communication.id,
          currentMessageTempateId:
            createExpiryCommunication.communication.messageTemplate.id,
          messageTemplateVariables:
            createExpiryCommunication.communication.messageTemplate
              .messageTemplateVariables,
        });
        message.info(`${this.props.formName} is configured!`);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        let createCommunicationResponse = await this.props.client.mutate({
          mutation: CREATE_COMMUNICATION,
          variables: {
            communicationInput: {
              entityId: `${this.props.loyaltyProgramId}`,
              entityType: 'LOYALTY',
              status: 'ACTIVE',
              isScheduled: false,
              firstScheduleDateTime:
                campaignResponse.data.campaigns[0].startTime,
              isRepeatable: false,
              organization_id: org_id,
              commsChannelName: `${
                this.commsChannelName[this.props.formName]
              }_${this.props.templateType}`,
              campaign_id: campaignResponse.data.campaigns[0].id,
            },
            messageTemplateInput: {
              name: `${this.props.templateType}_TEMPLATE_${
                this.commsChannelName[this.props.formName]
              }`,
              description: '',
              messageFormat: this.props.templateType,
              templateBodyText: this.state.templateBody,
              templateSubjectText: `${
                this.commsChannelName[this.props.formName]
              }`,
              templateStyle: 'MUSTACHE',
              organization_id: org_id,
              status: 'ACTIVE',
              //url: "https://dummyurl.com",
              //imageUrl: "https://dummyurl.com"
            },
          },
        });
        console.log(createCommunicationResponse);
        let communication =
          createCommunicationResponse.data
            .createCommunicationWithMessageTempate;
        this.setState({
          templateBody: communication.messageTemplate.templateBodyText,
          communicationId: communication.id,
          currentMessageTempateId: communication.messageTemplate.id,
          messageTemplateVariables:
            communication.messageTemplate.messageTemplateVariables,
        });
        message.info(`${this.props.formName} is configured!`);
      } catch (e) {
        console.log(e);
      }
    }
  };

  saveCommunication = async () => {
    if (!this.state.templateBody) {
      message.warn('Please Enter message template body!');
      return;
    }
    if (this.state.communicationId) {
      this.updateCommunication();
    } else {
      this.createCommunication();
    }
  };

  // because communication is picked up based on commsChannel name like "ISSUE, REDEEM, EXPIRY".(I might be wrong)
  commsChannelName = {
    'On Earn Transaction': 'ISSUE',
    'On Redeem Transaction': 'REDUCE',
    'On Points Expiry': 'EXPIRED',
    'Expiry Reminder': 'EXPIRY_REMINDER',
  };

  sendMessage = async () => {
    if (this.state.currentMessageTempateId == 0) {
      message.warn(
        'Please save your notification settings before sending a message!'
      );
      return;
    }
    try {
      if (this.props.templateType == 'SMS') {
        if (
          isNaN(this.state.phoneNumber) ||
          this.state.phoneNumber.length != 10
        ) {
          message.warn('Please Enter a valid phone number!');
          return;
        }
        try {
          let sendMessageResponse = await this.props.client.mutate({
            mutation: GET_MESSAGE_TEMPLATE_AND_SEND_SMS,
            variables: {
              input: {
                templateName:
                  this.props.type == 'Reminder'
                    ? `${this.props.templateType}_TEMPLATE_${
                        this.state.daysInput
                      }_${this.commsChannelName[this.props.formName]}`
                    : `${this.props.templateType}_TEMPLATE_${
                        this.commsChannelName[this.props.formName]
                      }`,
                phoneNumber: this.state.phoneNumber,
                communicationEntityType: 'LOYALTY',
                replacableData: { points: 10 },
                consumerName: 'defaultUser',
                //userId
              },
            },
          });
          if (
            sendMessageResponse.data.getMessageTemplateAndSendSMS.status ==
            'SUCCESS'
          ) {
            message.info('SMS has been sent!');
          }
        } catch (e) {
          console.log(e);
        }
      } else {
        if (!this.state.email) {
          message.warn('Please Enter Email Id!');
          return;
        }
        try {
          let sendMessageResponse = this.props.client.mutate({
            mutation: SEND_MESSAGE,
            variables: {
              input: {
                format: 'EMAIL',
                to: this.state.email,
                messageBody: this.state.templateBody,
                messageSubject: this.props.formName,
              },
            },
          });
          message.info('Email has been sent!');
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const {
      templateBody,
      phoneNumber,
      daysInput,
      timeInput,
      email,
    } = this.state;
    const { templateType } = this.props;

    return (
      <React.Fragment>
        <div className="form-section">
          <Row gutter={16}>
            <Col /*span={16}*/ xs={{ span: 24 }} md={{ span: 16 }}>
              <div className="notification-form">
                <div className="form-content">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: '5px',
                    }}
                  >
                    <p className="form-lable">{templateType} body</p>
                    <Dropdown
                      overlay={
                        <MessageTemplateVariables
                          messageTemplateId={this.state.currentMessageTempateId}
                          messageTemplateVariables={
                            this.state.messageTemplateVariables
                          }
                          client={this.props.client}
                        />
                      }
                      overlayClassName="drop-down"
                      trigger={['click']}
                      placement="bottomRight"
                    >
                      <Button style="btnn-secondary" size="btnn-small">
                        {'[{()}] '}
                        <Icon
                          type="down"
                          style={{ fontSize: '10px' }}
                          theme="outlined"
                        />
                      </Button>
                    </Dropdown>
                  </div>
                  <Input.TextArea
                    value={templateBody}
                    placeholder="Enter your template body here.."
                    rows={4}
                    className="SMS-body-input common-input"
                    onChange={e => {
                      this.handleInputChange(e, 'templateBody');
                    }}
                  />

                  <p className="form-subLable">
                    Maximum length: 160 characters
                  </p>
                </div>

                <div className="form-content">
                  <p className="form-lable">
                    Test {templateType} with your{' '}
                    {templateType == 'SMS' ? 'phone number' : 'mail id'}
                  </p>

                  <Row gutter={16} className="mobile-input-section">
                    <Col span={18}>
                      <CInput
                        value={templateType == 'SMS' ? phoneNumber : email}
                        onChange={this.handleInputChange}
                        target1={
                          templateType == 'SMS' ? 'phoneNumber' : 'email'
                        }
                        placeholder={
                          templateType == 'SMS'
                            ? 'Enter a phone number'
                            : 'Enter a email ID'
                        }
                        validations={templateType == 'SMS' ? ['numeric'] : []}
                        width="100%"
                        prefix={templateType == 'SMS' ? '+91' : null}
                      />
                    </Col>

                    <Col span={6}>
                      <Button
                        style="btnn-secondary"
                        size="btnn-medium"
                        onClick={this.sendMessage}
                      >
                        Send
                      </Button>
                    </Col>
                  </Row>
                </div>

                {this.props.type === 'Reminder' ? (
                  <div className="form-content">
                    <p className="form-lable">Reminder should send </p>

                    <Row gutter={16} className="mobile-input-section">
                      <Col span={7}>
                        <Input
                          value={daysInput}
                          suffix={
                            <span style={{ color: '#B3B3B3' }}>days</span>
                          }
                          className="mobile-input"
                          onChange={e => {
                            this.handleInputChange(e, 'daysInput');
                          }}
                        />
                      </Col>

                      <Col
                        span={5}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        Before at
                      </Col>

                      <Col span={7}>
                        <Input
                          value={timeInput}
                          suffix={<span style={{ color: '#B3B3B3' }}>PM</span>}
                          className="mobile-input"
                          onChange={e => {
                            this.handleInputChange(e, 'timeInput');
                          }}
                        />
                      </Col>
                    </Row>
                  </div>
                ) : null}
              </div>

              <Button
                style={`btnn-primary${!templateBody ? '-disabled' : ''}`}
                size="btnn-medium"
                onClick={this.saveCommunication}
              >
                Save
              </Button>
            </Col>

            <Col
              /*span={8}*/ xs={{ span: 24 }}
              md={{ span: 8 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div className="template-preview">
                <div className="SMS-preview-bubble">{templateBody}</div>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default NotificationTemplateForm;
