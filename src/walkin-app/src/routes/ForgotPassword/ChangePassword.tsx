import { Button, Form, Icon, Input, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import gql from 'graphql-tag';
import { History } from 'history';
import * as React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import {
  compose,
  Mutation,
  MutationFunc,
  withApollo,
  ApolloProviderProps,
} from 'react-apollo';
import jwt from 'jsonwebtoken';

interface IProps extends FormComponentProps, ApolloProviderProps<any> {
  history?: History;
  location?: any;
  userEmail: string;
  redirectToForgotPassword: boolean;
}

interface IState {}

class ChangePassword extends React.Component<IProps, IState> {
  state = {
    confirmDirty: false,
    userEmail: '',
    redirectToForgotPassword: false,
  };
  unlisten;

  async UNSAFE_componentWillMount() {
    if (this.props.location.search.indexOf('token') == -1) {
      message.error('invalid link!');
      this.setState({ redirectToForgotPassword: true });
      return;
    } else {
      this.unlisten = this.props.history.listen((location, action) => {
        localStorage.clear();
        this.unlisten();
      });
      let token = this.props.location.search.substr(
        this.props.location.search.indexOf('=') + 1
      );
      localStorage.setItem('jwt', token);
      let decode = jwt.decode(token);
      if (!decode) {
        this.setState({ redirectToForgotPassword: true });
        return;
      }
      const GET_USER_EMAIL = gql`
        query user($id: ID!, $organizationId: String!) {
          user(id: $id, organizationId: $organizationId) {
            email
          }
        }
      `;
      let response = await this.props.client.query({
        query: GET_USER_EMAIL,
        variables: {
          id: decode['id'],
          organizationId: decode['org_id'],
        },
      });
      if (response.data.user) {
        this.setState({
          userEmail: response.data.user.email,
        });
      } else {
        this.setState({ redirectToForgotPassword: true });
      }
    }
  }

  handleConfirmBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  compareToFirstPassword = (rule: any, value: any, callback: any) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule: any, value: any, callback: any) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['conformPassword'], { force: true });
      callback();
    } else if (value && value.length < 6) {
      callback('Password should contain atleast 6 characters');
    } else callback();
  };

  render() {
    if (this.state.redirectToForgotPassword) {
      return <Redirect to="forgotpassword?expired=true" />;
    }
    const { history } = this.props;
    const { getFieldDecorator } = this.props.form;
    const SIGN_IN = gql`
      mutation signIn($input: SignInInput!) {
        signIn(input: $input) @client
      }
    `;
    const RESET_PASSWORD = gql`
      mutation resetPassword($newPassword: String!) {
        resetPassword(newPassword: $newPassword) {
          updated
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
              style={{ width: 100, marginBottom: '15px' }}
            />
          </div>
          <div className="gx-app-login-main-content">
            {/* <div className="gx-app-logo-content">
              <div className="gx-app-logo-content-bg">
                <img
                  src="https://media.golfdigest.com/photos/569688b4273cde6003f797c8/master/w_768,c_limit/El-Camaleon-15-hole-Riviera-Maya.jpg"
                  alt="Neature"
                />
                 https://via.placeholder.com/272x395
              </div>
              <div className="gx-app-logo-wid">
                <p style={{ fontSize: 25 }}>New Password</p>
              </div>
              <div className="gx-app-logo">
                <img
                  alt="example"
                  src={require('walkin-components/src/assets/images/walkin_logo_white.png')}
                  style={{ width: 100 }}
                />
              </div>
            </div> */}
            <div style={{ padding: '24px' }} className="gx-app-login-content">
              <div className="header-row">
                <p className="forgot-password-heading">Reset your password</p>
                <Link to="/">
                  <Icon className="forgot-password-close" type="close" />
                </Link>
              </div>
              <p className="forgot-password-subheading">
                Enter a new password for your {this.state.userEmail} account.
              </p>
              <Mutation mutation={RESET_PASSWORD} fetchPolicy="no-cache">
                {(
                  resetPassword: MutationFunc,
                  { loading, error, data }: any
                ) => (
                  <Form
                    onSubmit={async e => {
                      e.preventDefault();
                      this.props.form.validateFields(async (err, values) => {
                        if (!err) {
                          console.log('Received values of form: ', values);
                          const { password, conformPassword } = values;
                          const data = await resetPassword({
                            variables: {
                              newPassword: password,
                            },
                          });

                          if (data && data.data && data.data.resetPassword) {
                            console.log(data);
                            message.info(
                              'Password has been sucessfully updated!'
                            );
                            history.push('/');
                          } else {
                            console.log('/signin');
                          }
                        }
                      });
                    }}
                    className="login-form"
                  >
                    <Form.Item
                      hasFeedback
                      style={{ margin: '0px', marginBottom: '15px' }}
                    >
                      <p className="login-form-lable">New Password</p>
                      {getFieldDecorator('password', {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your password!',
                          },
                          {
                            validator: this.validateToNextPassword,
                          },
                        ],
                      })(
                        <Input.Password
                          // prefix={
                          //   <Icon
                          //     type="lock"
                          //     style={{ color: 'rgba(0,0,0,.25)' }}
                          //   />
                          // }
                          placeholder="New Password"
                        />
                      )}
                    </Form.Item>
                    <Form.Item
                      hasFeedback
                      style={{ margin: '0px', marginBottom: '10px' }}
                    >
                      <p className="login-form-lable">Retype Password</p>
                      {getFieldDecorator('conformPassword', {
                        rules: [
                          {
                            required: true,
                            message: 'Please confirm your password!',
                          },
                          {
                            validator: this.compareToFirstPassword,
                          },
                        ],
                      })(
                        <Input.Password
                          // prefix={
                          //   <Icon
                          //     type="lock"
                          //     style={{ color: 'rgba(0,0,0,.25)' }}
                          //   />
                          // }
                          onBlur={this.handleConfirmBlur}
                          placeholder="Retype Password"
                        />
                      )}
                    </Form.Item>

                    <Form.Item style={{ marginBottom: '0px' }}>
                      <Button
                        htmlType="submit"
                        loading={loading}
                        className="login-form-button"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '12px 24px',
                          backgroundColor: '#00825F',
                          alignSelf: 'center',
                          justifyContent: 'center',
                          margin: '0px',
                          color: '#FCFCFC',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '15px',
                          minWidth: '150px',
                        }}
                      >
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                )}
              </Mutation>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  compose(Form.create({ name: 'vertical_login' }))(withApollo(ChangePassword))
);
