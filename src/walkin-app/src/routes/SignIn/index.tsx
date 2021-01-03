import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox, Switch } from 'antd';
import { compose, graphql, Mutation, MutationFunc } from 'react-apollo';
import gql from 'graphql-tag';
import { sample } from 'lodash';
import { Link } from 'react-router-dom';
import { IntlMessages } from 'walkin-components';
import { History } from 'history';
import { FormComponentProps } from 'antd/lib/form';

interface IProps extends FormComponentProps {
  history?: History;
  routeQuery?: any;
}

interface IState {}

class NormalLoginForm extends React.Component<IProps, IState> {
  readonly state = {
    background: sample([
      'linear-gradient(45deg, black, transparent)',
      'radial-gradient(black, transparent)',
    ]),
  };
  constructor(props: IProps) {
    super(props);
  }
  UNSAFE_componentWillMount() {
    if (localStorage.getItem('jwt')) this.props.history.push('/');
  }
  render() {
    const { history, routeQuery } = this.props;
    const { getFieldDecorator } = this.props.form;
    const SIGN_IN = gql`
      mutation signIn($input: SignInInput!) {
        signIn(input: $input) @client
      }
    `;
    return (
      <div style={{ backgroundColor: '#00825F' }} className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-login-content">
              <div className="gx-app-logo">
                <img
                  alt="example"
                  src={require('walkin-components/src/assets/images/Peppo_logo.svg')}
                  style={{ width: 180 }}
                />
              </div>
              <Mutation mutation={SIGN_IN} fetchPolicy="no-cache">
                {(signIn: MutationFunc, { loading, error, data }: any) => (
                  <Form
                    onSubmit={async e => {
                      e.preventDefault();
                      this.props.form.validateFields(async (err, values) => {
                        if (!err) {
                          // console.log("Received values of form: ", values);
                          const { email, password, remember } = values;
                          const data = await signIn({
                            variables: {
                              input: {
                                email,
                                password,
                              },
                            },
                          });

                          if (data && data.data && data.data.signIn) {
                            // const redirectRoute = routeQuery.redirectRoute
                            //   ? routeQuery.redirectRoute
                            //   : '/core';
                            const redirectRoute = '/core';
                            console.log(
                              'Login Successfull. Redirecting...',
                              redirectRoute
                            );
                            history.push(redirectRoute);
                          } else {
                            console.log('Login Failed');
                          }
                        }
                      });
                    }}
                    className="login-form"
                  >
                    <Form.Item>
                      <p className="login-form-lable">Email</p>
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
                          placeholder="Enter email here"
                        />
                      )}
                    </Form.Item>
                    <Form.Item>
                      <p className="login-form-lable">Password</p>
                      {getFieldDecorator('password', {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your Password!',
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
                          placeholder="Password"
                        />
                      )}
                    </Form.Item>
                    <Form.Item>
                      <div className="login-options-section">
                        <div>
                          {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                          })(
                            <Switch size="small" className="remember-toggle" />
                          )}
                          <span
                            style={{
                              marginLeft: '10px',
                              color: '#434343',
                              fontWeight: 400,
                            }}
                          >
                            Remember me
                          </span>
                        </div>
                        <Link
                          className="login-form-forgot"
                          to="/forgotpassword"
                        >
                          <span style={{ fontWeight: 500 }}>
                            Forgot password?
                          </span>
                        </Link>
                      </div>
                      <br />
                      <Button
                        htmlType="submit"
                        loading={loading}
                        className="login-form-button"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '210px',
                          backgroundColor: '#00825F',
                          alignSelf: 'center',
                          justifyContent: 'center',
                          margin: '0px',
                          color: '#fff',
                          height: '50px',
                          border: 'none',
                          borderRadius: '4px',
                        }}
                      >
                        Log in
                      </Button>
                      {/* Or
                      <Link to="/signup"> Sign Up!</Link> */}
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

const GET_REDIRECT_ROUTE = gql`
  query redirectRoute {
    redirectRoute @client
  }
`;

export default compose(
  graphql(GET_REDIRECT_ROUTE, {
    name: 'routeQuery',
  }),
  Form.create({ name: 'vertical_login' })
)(NormalLoginForm);

//<div className="gx-app-logo-content">
//              <div className="gx-app-logo-content-bg">
//                <img
//                  src="https://media.golfdigest.com/photos/569688b4273cde6003f797c8/master/w_768,c_limit/El-Camaleon-15-hole-Riviera-Maya.jpg"
//                  alt="Neature"
//                />
//                {/* https://via.placeholder.com/272x395 */}
//                </div>
//                <div className="gx-app-logo-wid">
//                  <h1>
//                    <IntlMessages id="app.userAuth.signIn" />
//                  </h1>
//                  <p>
//                    <IntlMessages id="app.userAuth.bySigning" />
//                  </p>
//                  <p>
//                    <IntlMessages id="app.userAuth.getAccount" />
//                  </p>
//                </div>
//                <div className="gx-app-logo">
//                  <img
//                    alt="example"
//                    src={require('walkin-components/src/assets/images/walkin_logo_white.png')}
//                    style={{ width: 100 }}
//                  />
//                </div>
//              </div>
