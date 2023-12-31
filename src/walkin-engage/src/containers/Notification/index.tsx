import React from 'react';
import './style.css';
import { Row, Col, Checkbox, message } from 'antd';
import NotificationOption from '../../components/Notification/NotificationOptions';
import NotificationTemplateForm from './NotificationTemplateForm';
import Button from '../../components/shared/Button/index';
import { withApollo, ApolloProviderProps } from 'react-apollo';
import {
  GET_LOYALTY_CARD,
  GET_EXPIRY_COMMUNICAIONS,
  GET_LOYALTY_PROGRAM,
} from '../../query/index';
import * as jwt from 'jsonwebtoken';

interface NotificationProps extends ApolloProviderProps<any> {}

interface NotificationState {
  sendNotificationState: string;
  notificationOptions: Array<string>;
  templateType: string;
  loyaltyProgramId: number;
  checkedSMS: boolean;
  checkedEmail: boolean;
}

class Notification extends React.Component<
  NotificationProps,
  NotificationState
> {
  constructor(props: NotificationProps) {
    super(props);
    this.state = {
      sendNotificationState: 'On Earn Transaction',
      templateType: 'SMS',
      notificationOptions: ['On Earn Transaction', 'On Redeem Transaction'],
      loyaltyProgramId: -1,
      checkedSMS: false,
      checkedEmail: false,
    };
  }

  async UNSAFE_componentWillMount() {
    const jwtToken: any = localStorage.getItem('jwt');
    const { org_id }: any = jwt.decode(jwtToken);

    //getting loyalty card
    try {
      let loyaltyCardResponse = await this.props.client.query({
        query: GET_LOYALTY_CARD,
        variables: { organizationId: org_id },
      });

      let loyaltyCards = loyaltyCardResponse.data.loyaltyCards.data;
      if (!loyaltyCards.length) {
        message.warn('Create a loyalty card to avail this feature!');
        return;
      }

      let loyaltyProgramResponse = await this.props.client.query({
        query: GET_LOYALTY_PROGRAM,
        variables: {
          organizationId: org_id,
          loyaltyCardCode: loyaltyCards[0].code,
        },
        fetchPolicy: 'network-only',
      });
      this.setState({
        loyaltyProgramId:
          loyaltyProgramResponse.data.loyaltyPrograms.data[0].id,
      });
      //get expiryCommunications
      let expiryCommunicationsResponse = await this.props.client.query({
        query: GET_EXPIRY_COMMUNICAIONS,
        variables: {
          organizationId: org_id,
          loyaltyCardCode: loyaltyCards[0].code,
          eventType: 'EXPIRY_REMINDER',
        },
        fetchPolicy: 'network-only',
      });
      let expiryCommunications = Object.assign(
        expiryCommunicationsResponse.data
          .expiryCommunicationByLoyaltyCardCodeAndEventType
      );

      let expiryCommunicationsNames = [];
      expiryCommunications.forEach((comm, index) => {
        if (
          comm.eventType == 'EXPIRY_REMINDER' &&
          index != 0 &&
          comm.communication.commsChannelName.indexOf('SMS') != -1
        ) {
          expiryCommunicationsNames.push(
            `Expiry Reminder (${comm.numberOfDays} Days)`
          );
        }
      });
      this.setState({
        notificationOptions: [
          ...this.state.notificationOptions,
          ...expiryCommunicationsNames,
        ],
      });
    } catch (e) {
      console.log(e);
    }
  }

  addExpireRemainder = () => {
    this.setState({
      notificationOptions: [...this.state.notificationOptions],
    });
  };

  updateNotificationOption = (prevOption, newOption, type) => {
    if (type == 'Reminder') {
      let currentOptions = this.state.notificationOptions;
      currentOptions.splice(currentOptions.indexOf(prevOption), 1, newOption);
      this.setState({
        notificationOptions: currentOptions,
        sendNotificationState: newOption,
      });
    }
  };

  changeNotificationOption = option => {
    this.setState({
      sendNotificationState: option,
    });
  };

  changeSMSStatus = value => {
    this.setState({
      checkedSMS: value,
    });
  };

  changeEmailStatus = value => {
    this.setState({
      checkedEmail: value,
    });
  };

  templateTypes = ['SMS'];

  render() {
    const { templateType } = this.state;
    return (
      <React.Fragment>
        <div className="n-container">
          <div className="n-header">
            <Row className="n-title">Notification</Row>
            <Row className="n-subHeader">
              Communication sent to your customer triggered by the associated
              action.
            </Row>
          </div>

          <div className="n-content" style={{ paddingTop: '20px' }}>
            <Row>
              <Col
                /*span={7}*/ xs={{ span: 24 }}
                sm={{ span: 7 }}
                className="notification-button-section"
              >
                <div style={{ marginBottom: '20px' }}>
                  <p className="n-subHeader">When to send?</p>
                  {this.state.notificationOptions.map((option, i) => (
                    <NotificationOption
                      key={i}
                      sendNotificationState={option}
                      isActive={this.state.sendNotificationState == option}
                      changeNotificationOption={this.changeNotificationOption}
                    />
                  ))}
                  {/* <Button
                    style="btnn-secondary"
                    size="btnn-small"
                    onClick={this.addExpireRemainder}
                  >
                    Add Expire Reminder
                  </Button> */}
                </div>
              </Col>

              <Col
                /*span={17}*/ xs={{ span: 24 }}
                sm={{ span: 17 }}
                style={{ paddingRight: '0px', borderLeft: '1px solid #D9D9D9' }}
              >
                <div className="form-selection-row">
                  {this.templateTypes.map((type, i) => (
                    <div
                      key={`form-type-${i}`}
                      className={`form-type ${
                        templateType == type ? 'form-type-active' : null
                      }`}
                    >
                      <Checkbox
                        className="checkbox-active"
                        checked={
                          type == 'SMS'
                            ? this.state.checkedSMS
                            : this.state.checkedEmail
                        }
                        onClick={e => {
                          type == 'SMS'
                            ? this.changeSMSStatus(!this.state.checkedSMS)
                            : this.changeEmailStatus(!this.state.checkedEmail);
                        }}
                      ></Checkbox>
                      <span
                        onClick={() => {
                          this.setState({ templateType: type });
                        }}
                        style={{ paddingLeft: '10px', fontSize: '14px' }}
                      >
                        Send {type}
                      </span>
                    </div>
                  ))}
                </div>
                <NotificationTemplateForm
                  templateType={this.state.templateType}
                  formName={this.state.sendNotificationState}
                  type={
                    this.state.sendNotificationState.substr(0, 6) == 'Expiry'
                      ? 'Reminder'
                      : 'normal'
                  }
                  updateNotificationOption={this.updateNotificationOption}
                  client={this.props.client}
                  loyaltyProgramId={this.state.loyaltyProgramId}
                  changeSMSStatus={this.changeSMSStatus}
                  changeEmailStatus={this.changeEmailStatus}
                  isSMSActive={this.state.checkedSMS}
                  isEmailActive={this.state.checkedEmail}
                />
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withApollo(Notification);
