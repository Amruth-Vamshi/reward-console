import React from 'react';
import { Icon } from 'antd';
import './style.css';

interface NotificationOptionProps {
  sendNotificationState: string;
  isActive: boolean;
  changeNotificationOption: any;
}

class NotificationOption extends React.Component<NotificationOptionProps, {}> {
  render() {
    return (
      <React.Fragment>
        <div
          className={`notification-send-option ${
            this.props.isActive ? 'active' : null
          }`}
          onClick={() =>
            this.props.changeNotificationOption(
              this.props.sendNotificationState
            )
          }
        >
          <p className="button-text">{this.props.sendNotificationState}</p>
          {this.props.isActive ? (
            <p className="button-text" style={{ fontSize: '12px' }}>
              <Icon type="right" theme="outlined" />
            </p>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default NotificationOption;
