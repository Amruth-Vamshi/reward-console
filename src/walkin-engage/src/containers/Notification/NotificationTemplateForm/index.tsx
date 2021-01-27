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
import moment from 'moment';
import { convertTime12to24 } from '../../../utils';

interface NotificationTemplateFormProps {
  formName: string;
  templateType: string;
  type: string;
  updateNotificationOption: any;
  client?: any;
  loyaltyProgramId: number;
  changeSMSStatus?: any;
  changeEmailStatus?: any;
  isSMSActive?: boolean;
  isEmailActive?: boolean;
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
  isDropdownVisible: boolean;
  AMorPM: string;
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
      isDropdownVisible: false,
      AMorPM: 'PM',
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
      if (this.props.formName == 'Expiry Reminder') {
        this.setState({
          templateBody: '',
          communicationId: 0,
          currentMessageTempateId: 0,
          messageTemplateVariables: [],
        });
        return;
      }

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
        let expiryCommunications = Object.assign(
          communicationsResponse.data
            .expiryCommunicationByLoyaltyCardCodeAndEventType
        );

        if (this.props.formName.indexOf('Expiry Reminder') != -1) {
          let days = '';
          for (let i = 17; ; i++) {
            if (!parseInt(formName[i]) && parseInt(formName[i]) != 0) {
              break;
            }
            days += formName[i];
          }
          expiryCommunications = expiryCommunications.filter(
            comm => comm.numberOfDays == days
          );
        }

        let expiryCommunicationsSMS = expiryCommunications.find(
          comm => comm.communication.messageTemplate.messageFormat == 'SMS'
        );
        if (expiryCommunicationsSMS) {
          if (
            this.props.isSMSActive !=
            (expiryCommunicationsSMS.communication.status == 'ACTIVE')
          )
            this.props.changeSMSStatus(
              expiryCommunicationsSMS.communication.status == 'ACTIVE'
            );
        } else {
          if (this.props.isSMSActive) this.props.changeSMSStatus(false);
        }

        let expiryCommunicationsEmail = expiryCommunications.find(
          comm => comm.communication.messageTemplate.messageFormat == 'EMAIL'
        );
        if (expiryCommunicationsEmail) {
          if (
            this.props.isEmailActive !=
            (expiryCommunicationsEmail.communication.status == 'ACTIVE')
          )
            this.props.changeEmailStatus(
              expiryCommunicationsEmail.communication.status == 'ACTIVE'
            );
        } else {
          if (this.props.isEmailActive) this.props.changeEmailStatus(false);
        }

        expiryCommunications = expiryCommunications.filter(comm => {
          if (comm.communication.commsChannelName.indexOf(templateType) == -1) {
            return false;
          }
          return true;
        });

        if (expiryCommunications.length) {
          let expiryCommunication = expiryCommunications[0];

          this.setState({
            templateBody:
              expiryCommunication.communication.messageTemplate
                .templateBodyText,
            communicationId: expiryCommunication.communication.id,
            currentMessageTempateId:
              expiryCommunication.communication.messageTemplate.id,
            messageTemplateVariables:
              expiryCommunication.communication.messageTemplate
                .messageTemplateVariables,
            expiryCommunicationId: expiryCommunication.id,
          });

          if (type == 'Reminder') {
            this.setState({
              daysInput: expiryCommunication.numberOfDays,
              timeInput: moment(
                expiryCommunication.communication.repeatRuleConfiguration.time,
                'HH:mm'
              )
                .format('hh:mm A')
                .split(' ')[0],
              AMorPM: moment(
                expiryCommunication.communication.repeatRuleConfiguration.time,
                'HH:mm'
              )
                .format('hh:mm A')
                .split(' ')[1],
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
        if (comm.organization.id != org_id) {
          return false;
        }
        return true;
      });

      let communicationsSMS = communications.find(
        comm => comm.messageTemplate.messageFormat == 'SMS'
      );
      if (communicationsSMS) {
        if (this.props.isSMSActive != (communicationsSMS.status == 'ACTIVE'))
          this.props.changeSMSStatus(communicationsSMS.status == 'ACTIVE');
      } else {
        if (this.props.isSMSActive) this.props.changeSMSStatus(false);
      }

      let communicationsEmail = communications.find(
        comm => comm.messageTemplate.messageFormat == 'EMAIL'
      );
      if (communicationsEmail) {
        if (
          this.props.isEmailActive !=
          (communicationsEmail.status == 'ACTIVE')
        )
          this.props.changeEmailStatus(communicationsEmail.status == 'ACTIVE');
      } else {
        if (this.props.isEmailActive) this.props.changeEmailStatus(false);
      }

      communications = communications.filter(comm => {
        if (comm.commsChannelName.indexOf(templateType) == -1) {
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
    if (
      this.props.isSMSActive == nextProps.isSMSActive &&
      this.props.isEmailActive == nextProps.isEmailActive
    )
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
          status:
            this.props.templateType == 'SMS'
              ? this.props.isSMSActive
                ? 'ACTIVE'
                : 'INACTIVE'
              : this.props.isEmailActive
              ? 'ACTIVE'
              : 'INACTIVE',
          isRepeatable: false,
        },
        messageTemplate: {
          id: this.state.currentMessageTempateId,
          templateBodyText: this.state.templateBody,
          templateSubjectText: 'Loyalty Points Update',
        },
      };
      if (this.props.type == 'Reminder') {
        expiryInputVariables['numberOfDays'] = parseInt(this.state.daysInput);
        expiryInputVariables.communication['repeatRuleConfiguration'] = {
          time: convertTime12to24(
            `${this.state.timeInput} ${this.state.AMorPM}`
          ),
        };
      }

      try {
        let updateExpiryCommunicationResponse = await this.props.client.mutate({
          mutation: UPDATE_EXPIRY_COMMUNICATION,
          variables: { input: expiryInputVariables },
        });
        let updateExpiryCommunication =
          updateExpiryCommunicationResponse.data.updateExpiryCommunication;
        if (this.props.type == 'Reminder')
          this.props.updateNotificationOption(
            this.props.formName,
            `Expiry Reminder (${updateExpiryCommunication.numberOfDays} Days)`,
            this.props.type
          );
        message.info(`${this.props.formName} is updated!`);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await this.props.client.mutate({
          mutation: UPDATE_COMMUNICATION,
          variables: {
            communicationInput: {
              id: this.state.communicationId,
              entityId: `${this.props.loyaltyProgramId}`,
              status:
                this.props.templateType == 'SMS'
                  ? this.props.isSMSActive
                    ? 'ACTIVE'
                    : 'INACTIVE'
                  : this.props.isEmailActive
                  ? 'ACTIVE'
                  : 'INACTIVE',
            },
            messageTemplateInput: {
              id: this.state.currentMessageTempateId,
              templateBodyText: this.state.templateBody,
              templateSubjectText: 'Loyalty Points Update',
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
    if (this.props.loyaltyProgramId == -1) {
      message.warn('Create a loyalty program to save notification.');
      return;
    }

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
          status:
            this.props.templateType == 'SMS'
              ? this.props.isSMSActive
                ? 'ACTIVE'
                : 'INACTIVE'
              : this.props.isEmailActive
              ? 'ACTIVE'
              : 'INACTIVE',
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
          templateSubjectText: 'Loyalty Points Update',
          templateStyle: 'MUSTACHE',
          organization_id: org_id,
          status: 'ACTIVE',
          //url: "https://dummyurl.com",
          //imageUrl: "https://dummyurl.com"
        },
      };
      if (this.props.type == 'Reminder') {
        expiryInputVariables['numberOfDays'] = parseInt(this.state.daysInput);
        expiryInputVariables.communication['repeatRuleConfiguration'] = {
          time: convertTime12to24(
            `${this.state.timeInput} ${this.state.AMorPM}`
          ),
        };
      }

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
              status:
                this.props.templateType == 'SMS'
                  ? this.props.isSMSActive
                    ? 'ACTIVE'
                    : 'INACTIVE'
                  : this.props.isEmailActive
                  ? 'ACTIVE'
                  : 'INACTIVE',
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
              templateSubjectText: 'Loyalty Points Update',
              templateStyle: 'MUSTACHE',
              organization_id: org_id,
              status: 'ACTIVE',
              //url: "https://dummyurl.com",
              //imageUrl: "https://dummyurl.com"
            },
          },
        });

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
    if (this.props.type == 'Reminder') {
      if (
        !this.state.templateBody ||
        !this.state.timeInput ||
        !this.state.daysInput
      ) {
        message.warn('Please Enter all required fields!');
        return;
      }
      let hh = this.state.timeInput.split(':')[0];
      let mm = this.state.timeInput.split(':')[1];
      if (isNaN(parseInt(hh)) || isNaN(parseInt(mm))) {
        message.warn('please enter valid time!');
        return;
      }
      if (hh.length == 2 && mm.length == 2) {
        if (isNaN(parseInt(hh[1])) || isNaN(parseInt(mm[1]))) {
          message.warn('please enter valid time!');
          return;
        }
      } else {
        message.warn('please enter valid time!');
        return;
      }
      if (
        parseInt(hh) > 12 ||
        parseInt(hh) < 1 ||
        parseInt(mm) > 60 ||
        parseInt(mm) < 0
      ) {
        message.warn('please enter valid time!');
        return;
      }
      if (isNaN(parseInt(this.state.daysInput))) {
        message.warn('please enter number for days!');
        return;
      }
    }
    if (this.state.communicationId) {
      this.updateCommunication();
    } else {
      this.createCommunication();
    }
  };

  // because communication is picked up based on commsChannel name like "ISSUE, REDUCE, EXPIRED".
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
                replacableData: {
                  pointsEarned: 10,
                  pointsRedeemed: 20,
                  pointsToExpire: 100,
                  pointsBalance: 500,
                  expiryDate: moment.utc().format('YYYY-MM-DD'),
                  daysToExpire: 7,
                },
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
          this.props.client.mutate({
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

  addVariable = value => {
    this.setState({
      templateBody: `${this.state.templateBody} {{${value}}}`,
      isDropdownVisible: false,
    });
  };

  replaceVariables = msg => {
    let replacableData = {
      pointsEarned: 10,
      pointsRedeemed: 20,
      pointsToExpire: 100,
      pointsBalance: 500,
      expiryDate: moment()
        .add(7, 'days')
        .utc()
        .format('YYYY-MM-DD'),
      daysToExpire: 7,
    };

    for (let key in replacableData) {
      msg = msg.replace(`{{${key}}}`, replacableData[key]);
    }
    return msg;
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
                      visible={this.state.isDropdownVisible}
                      overlay={
                        <MessageTemplateVariables
                          messageTemplateId={this.state.currentMessageTempateId}
                          messageTemplateVariables={
                            this.state.messageTemplateVariables
                          }
                          client={this.props.client}
                          addVariable={this.addVariable}
                        />
                      }
                      overlayClassName="drop-down"
                      trigger={['click']}
                      placement="bottomRight"
                    >
                      <Button
                        style="btnn-secondary"
                        size="btnn-small"
                        onClick={() => {
                          this.setState({
                            isDropdownVisible: !this.state.isDropdownVisible,
                          });
                        }}
                      >
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
                          suffix={
                            <span
                              style={{ color: '#B3B3B3', cursor: 'pointer' }}
                              onClick={() => {
                                if (this.state.AMorPM == 'AM')
                                  this.setState({ AMorPM: 'PM' });
                                else this.setState({ AMorPM: 'AM' });
                              }}
                            >
                              {this.state.AMorPM}
                            </span>
                          }
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
                style={`btnn-primary${
                  this.props.type !== 'Reminder'
                    ? !templateBody
                      ? '-disabled'
                      : ''
                    : !templateBody || !daysInput || !timeInput
                    ? '-disabled'
                    : ''
                }`}
                size="btnn-medium"
                onClick={this.saveCommunication}
              >
                Save
              </Button>
            </Col>

            <Col
              xs={{ span: 24 }}
              md={{ span: 8 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div className="template-preview">
                <div className="SMS-preview-bubble">
                  {this.replaceVariables(templateBody)}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default NotificationTemplateForm;
