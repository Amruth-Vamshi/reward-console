import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox, message, Modal } from 'antd';
import { compose, graphql, Mutation, MutationFunc } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { History } from 'history';
import { FormComponentProps } from 'antd/lib/form';

interface EmailSentProps {
  visible: boolean;
  closeDialog: any;
  emailSentTo: string;
  showCheckEmail: any;
}

interface EmailSentState {
  visible: boolean;
}

class EmailSent extends React.Component<EmailSentProps, EmailSentState> {
  render() {
    return (
      <Modal
        centered
        visible={this.props.visible}
        footer={null}
        onCancel={this.props.closeDialog}
        className="email-sent-popup"
        style={{ marginTop: '50px' }}
      >
        <div className="email-sent-logo">
          <img
            alt="example"
            src={require('walkin-components/src/assets/images/mail.svg')}
            style={{ width: '90px' }}
          />
        </div>
        <p className="email-sent-header">Email Sent!</p>
        <p className="email-sent-body">
          We have sent link to reset the password to{' '}
          <strong style={{ color: '#000' }}>{this.props.emailSentTo}</strong>,
          if it's associated with Peppo. If you have not yet received an email
          from us:{' '}
          <span onClick={this.props.showCheckEmail} className="email-sent-link">
            Click here
          </span>
        </p>
        <p className="email-sent-footer">
          Not your email address?{' '}
          <span onClick={this.props.closeDialog} className="email-sent-link">
            Try Again
          </span>
        </p>
      </Modal>
    );
  }
}

export default EmailSent;
