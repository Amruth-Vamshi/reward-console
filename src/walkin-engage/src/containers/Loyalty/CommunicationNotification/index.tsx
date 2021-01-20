import React from 'react';
import './style.css';
import { Row, Col } from 'antd';
import Button from '../../../components/shared/Button';
import { Link } from 'react-router-dom';
import { GET_COMMUNICATIONS } from '../../../query/index';
import * as jwt from 'jsonwebtoken';

interface CommunicationNotificationProps {
  client: any;
  loyaltyCardCode: string;
}

interface CommunicationNotificationState {
  notificationMessages: any;
}

export default class CommunicationNotification extends React.Component<
  CommunicationNotificationProps,
  CommunicationNotificationState
> {
  constructor(props: CommunicationNotificationProps) {
    super(props);
    this.state = {
      notificationMessages: [],
    };
  }

  async UNSAFE_componentWillMount() {
    const jwtToken: any = localStorage.getItem('jwt');
    const { org_id }: any = jwt.decode(jwtToken);

    try {
      let communicationsResponse = await this.props.client.query({
        query: GET_COMMUNICATIONS,
        variables: { entityType: 'LOYALTY', organization_id: org_id },
        fetchPolicy: 'network-only',
      });
      let communications = Object.assign(
        communicationsResponse.data.communications
      );
      communications = communications.filter(
        comm => comm.organization.id == org_id
      );

      communications.forEach(comm => {
        if (comm.commsChannelName.indexOf('ISSUE') != -1) {
          this.setState({
            notificationMessages: [
              ...this.state.notificationMessages,
              '✔ earn notification',
            ],
          });
        }
        if (comm.commsChannelName.indexOf('REDUCE') != -1) {
          this.setState({
            notificationMessages: [
              ...this.state.notificationMessages,
              '✔ redemption notification',
            ],
          });
        }
        if (comm.commsChannelName.indexOf('EXPIRED') != -1) {
          this.setState({
            notificationMessages: [
              ...this.state.notificationMessages,
              '✔ expiry notification',
            ],
          });
        }
        if (comm.commsChannelName.indexOf('EXPIRY_REMINDER') != -1) {
          this.setState({
            notificationMessages: [
              ...this.state.notificationMessages,
              '✔ expiry reminder',
            ],
          });
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let notifications = this.state.notificationMessages.filter(
      (text, index) => {
        if (this.state.notificationMessages.indexOf(text) != index) {
          return false;
        }
        return true;
      }
    );
    notifications = notifications.map((text, index) => (
      <p className="edit-text" key={`notifiy-msg-${index}`}>
        {text}
      </p>
    ));
    return (
      <React.Fragment>
        <Row
          gutter={16}
          style={{
            paddingBottom: '20px',
            borderBottom: '0.5px solid #DCE7E4',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Col span={24}>
            <p className="nn-header">Customer Notifications</p>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <p className="nn-sub-header">
              Customer Notifications, Triggered by the associated actions
            </p>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} className="notification-box">
            <div className="notification-edit">
              <div style={{ marginRight: '10px' }}>
                {notifications.length ? (
                  notifications
                ) : (
                  <React.Fragment>
                    <p className="edit-text">Currently configured for:</p>
                    <p className="edit-text">No notifications</p>
                  </React.Fragment>
                )}
              </div>

              <Link to="/engage/notification">
                <Button style="btnn-secondary" size="btnn-small">
                  Edit
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
