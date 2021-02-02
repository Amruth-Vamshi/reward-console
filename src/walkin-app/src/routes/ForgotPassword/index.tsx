import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox, message, Modal } from 'antd';
import { compose, graphql, Mutation, MutationFunc } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { IntlMessages } from 'walkin-components';
import { History } from 'history';
import { FormComponentProps } from 'antd/lib/form';
import EmailSent from './EmailSent';

interface IProps extends FormComponentProps {
  history?: History;
  location?: any;
}

interface IState {
  showEmailSent: boolean;
  emailSentTo: string;
  showCheckEmail: boolean;
  tokenExpired: boolean;
}

class ForgotPassword extends React.Component<IProps, IState> {
  state = {
    showEmailSent: false,
    emailSentTo: '',
    showCheckEmail: false,
    tokenExpired: false,
  };

  UNSAFE_componentWillMount() {
    if (localStorage.getItem('jwt')) this.props.history.push('/');
    if (this.props.location.search.indexOf('expired') != -1) {
      this.setState({
        tokenExpired:
          this.props.location.search.substr(
            this.props.location.search.indexOf('=') + 1
          ) === 'true',
      });
    } else {
      this.setState({ tokenExpired: false });
    }
  }

  render() {
    const { history } = this.props;
    const { getFieldDecorator } = this.props.form;
    const SIGN_IN = gql`
      mutation signIn($input: SignInInput!) {
        signIn(input: $input) @client
      }
    `;
    const SEND_PASSWORD_RESET_LINK = gql`
      mutation sendPasswordResetLink($email: String) {
        sendPasswordResetLink(email: $email) {
          userId
          email
          sentLink
        }
      }
    `;
    return (
      <div style={{ backgroundColor: '#00946E' }} className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-forgot-logo">
            <img
              alt="example"
              src={require('walkin-components/src/assets/images/peppo_logo_light.svg')}
              style={{ width: 100 }}
            />
          </div>
          <div
            className="gx-app-forgot-password-main-content"
            style={{ padding: '24px', paddingTop: '20px' }}
          >
            {/* <div className="gx-app-logo-content">
              <div className="gx-app-logo-content-bg">
                <img
                  src="https://media.golfdigest.com/photos/569688b4273cde6003f797c8/master/w_768,c_limit/El-Camaleon-15-hole-Riviera-Maya.jpg"
                  alt="Neature"
                />
                 https://via.placeholder.com/272x395 
              </div>
              <div className="gx-app-logo-wid">
                <p style={{ fontSize: 25 }}>
                  <IntlMessages id="app.userAuth.forgotPassword" />
                </p>
              </div>
              <div className="gx-app-logo">
                <img
                  alt="example"
                  src={require('walkin-components/src/assets/images/walkin_logo_white.png')}
                  style={{ width: 100 }}
                />
              </div>
            </div> */}

            <div
              style={{ padding: '24px' }}
              className="gx-app-forgot-password-content gx-app-login-content"
            >
              <Mutation
                mutation={SEND_PASSWORD_RESET_LINK}
                fetchPolicy="no-cache"
              >
                {(
                  sendPasswordResetLink: MutationFunc,
                  { loading, error, data }: any
                ) => (
                  <Form
                    onSubmit={async e => {
                      e.preventDefault();
                      this.props.form.validateFields(async (err, values) => {
                        if (!err) {
                          // console.log("Received values of form: ", values);
                          const { email } = values;
                          const data = await sendPasswordResetLink({
                            variables: {
                              email,
                            },
                          });

                          if (
                            data &&
                            data.data &&
                            data.data.sendPasswordResetLink &&
                            data.data.sendPasswordResetLink.sentLink
                          ) {
                            console.log(data);
                            this.setState({
                              emailSentTo: email,
                              showEmailSent: true,
                            });
                            this.props.form.setFieldsValue({
                              email: '',
                            });
                          } else {
                            console.log('/signin');
                            message.info(
                              'Error occured while sending the reset link!, Please check your email.'
                            );
                          }
                        }
                      });
                    }}
                    className="login-form"
                  >
                    <div className="header-row">
                      <p className="forgot-password-heading">
                        {this.state.tokenExpired
                          ? 'Password reset link expired'
                          : 'Reset your password'}
                      </p>
                      <Link to="/">
                        <Icon className="forgot-password-close" type="close" />
                      </Link>
                    </div>
                    <p className="forgot-password-subheading">
                      {this.state.tokenExpired
                        ? 'Please enter your email, so that we can send you the link again'
                        : 'Don’t worry, happens to the best of us!'}
                    </p>
                    <Form.Item style={{ margin: '0px' }}>
                      {!this.state.tokenExpired ? (
                        <p className="login-form-lable">Email</p>
                      ) : null}
                      {getFieldDecorator('email', {
                        rules: [
                          {
                            required: true,
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                          },
                        ],
                      })(
                        <Input
                          // prefix={
                          //   <Icon
                          //     type="mail"
                          //     style={{ color: 'rgba(0,0,0,.25)' }}
                          //   />
                          // }
                          placeholder={
                            this.state.tokenExpired
                              ? "What's your email address?"
                              : 'john@wayne.com'
                          }
                        />
                      )}
                    </Form.Item>

                    <Form.Item style={{ marginBottom: '0px' }}>
                      <Button
                        htmlType="submit"
                        loading={loading}
                        className="forgot-password-form-button"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '12px 24px',
                          backgroundColor: '#00825F',
                          alignSelf: 'center',
                          justifyContent: 'center',
                          margin: '0px',
                          marginTop: '10px',
                          color: '#FCFCFC',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '15px',
                        }}
                      >
                        Email me a recovery link
                      </Button>
                    </Form.Item>
                  </Form>
                )}
              </Mutation>
            </div>
          </div>
        </div>
        <EmailSent
          visible={this.state.showEmailSent}
          emailSentTo={this.state.emailSentTo}
          closeDialog={() => {
            this.setState({ showEmailSent: false, emailSentTo: '' });
          }}
          showCheckEmail={() => {
            this.setState({ showCheckEmail: true });
          }}
        />
        <Modal
          centered
          visible={this.state.showCheckEmail}
          footer={null}
          onCancel={() => {
            this.setState({ showCheckEmail: false });
          }}
          className="email-sent-popup"
          style={{ marginTop: '50px' }}
        >
          <p className="check-email-header">Check these steps</p>
          <ol className="check-email-body">
            <li className="check-email-listElement">
              {' '}
              Check the email entered in the previous step (displayed above).
            </li>
            <li className="check-email-listElement">
              {' '}
              Check the "spam" or "junk" folder of your email.
            </li>
            <li className="check-email-listElement">
              {' '}
              Wait for 5 minutes for the password reset link to arrive. If none
              of the above work, write to us: help@peppo.co.in.
            </li>
          </ol>
        </Modal>
      </div>
    );
  }
}

export default compose(Form.create({ name: 'vertical_login' }))(ForgotPassword);
