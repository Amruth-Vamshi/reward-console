import * as React from "react";
import { Button, Checkbox, Form, Icon, Input, message } from "antd";
import { Link } from "react-router-dom";

import IntlMessages from "../util/IntlMessages";
import { CircularProgress } from "../components/CircularProgress/index";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import { History } from "history";

const FormItem = Form.Item;

interface iProps {
  showAuthLoader?: any;
  userSignIn?: any;
  form?: any;
  showMessage?: any;
  hideMessage?: any;
  authUser?: any;
  history: History;
  alertMessage?: string;
  loader?: Boolean;
  userGithubSignIn?: any;
  userGoogleSignIn?: any;
  userTwitterSignIn?: any;
  userFacebookSignIn?: any;
}

interface iState {}

class SignIn extends React.Component<iProps, iState> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: boolean, values: any) => {
      if (!err) {
        this.props.showAuthLoader();
        this.props.userSignIn(values);
      }
    });
  };

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.authUser !== null) {
      this.props.history.push("/");
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { showMessage, loader, alertMessage } = this.props;

    return (
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-logo-content">
              <div className="gx-app-logo-content-bg">
                <img src="https://via.placeholder.com/272x395" alt="Neature" />
              </div>
              <div className="gx-app-logo-wid">
                <h1>
                  <IntlMessages id="app.userAuth.signIn" />
                </h1>
                <p>
                  <IntlMessages id="app.userAuth.bySigning" />
                </p>
                <p>
                  <IntlMessages id="app.userAuth.getAccount" />
                </p>
              </div>
              <div className="gx-app-logo">
                <img
                  alt="example"
                  src={require("../assets/images/walkin_logo_white.png")}
                />
              </div>
            </div>
            <div className="gx-app-login-content">
              <Form
                onSubmit={this.handleSubmit}
                className="gx-signin-form gx-form-row0"
              >
                <FormItem>
                  {getFieldDecorator("email", {
                    initialValue: "demo@example.com",
                    rules: [
                      {
                        required: true,
                        type: "email",
                        message: "The input is not valid E-mail!"
                      }
                    ]
                  })(<Input placeholder="Email" />)}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("password", {
                    initialValue: "demo#123",
                    rules: [
                      { required: true, message: "Please input your Password!" }
                    ]
                  })(<Input type="password" placeholder="Password" />)}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("remember", {
                    valuePropName: "checked",
                    initialValue: true
                  })(
                    <Checkbox>
                      <IntlMessages id="appModule.iAccept" />
                    </Checkbox>
                  )}
                  <span className="gx-signup-form-forgot gx-link">
                    <IntlMessages id="appModule.termAndCondition" />
                  </span>
                </FormItem>
                <FormItem>
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    <IntlMessages id="app.userAuth.signIn" />
                  </Button>
                  <span>
                    <IntlMessages id="app.userAuth.or" />
                  </span>{" "}
                  <Link to="/signup">
                    <IntlMessages id="app.userAuth.signUp" />
                  </Link>
                </FormItem>
                <div className="gx-flex-row gx-justify-content-between">
                  <span>or connect with</span>
                  <ul className="gx-social-link">
                    <li>
                      <Icon
                        type="google"
                        onClick={() => {
                          this.props.showAuthLoader();
                          this.props.userGoogleSignIn();
                        }}
                      />
                    </li>
                    <li>
                      <Icon
                        type="facebook"
                        onClick={() => {
                          this.props.showAuthLoader();
                          this.props.userFacebookSignIn();
                        }}
                      />
                    </li>
                    <li>
                      <Icon
                        type="github"
                        onClick={() => {
                          this.props.showAuthLoader();
                          this.props.userGithubSignIn();
                        }}
                      />
                    </li>
                    <li>
                      <Icon
                        type="twitter"
                        onClick={() => {
                          this.props.showAuthLoader();
                          this.props.userTwitterSignIn();
                        }}
                      />
                    </li>
                  </ul>
                </div>
                <span className="gx-text-light gx-fs-sm">
                  {" "}
                  demo user email: 'demo@example.com' and password: 'demo#123'
                </span>
              </Form>
            </div>

            {loader ? (
              <div className="gx-loader-view">
                <CircularProgress />
              </div>
            ) : null}
            {showMessage ? message.error(alertMessage.toString()) : null}
          </div>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(SignIn);

const mapStateToProps = ({ auth }: any) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  return { loader, alertMessage, showMessage, authUser };
};

const GET_AUTH_DETAILS = gql`
  query testAuth {
    testAuth @client
  }
`;

export const SignInModule = compose(
  // Create resolvers and add as graphql mutation here
  // userSignIn,
  // hideMessage,
  // showAuthLoader,
  // userFacebookSignIn,
  // userGoogleSignIn,
  // userGithubSignIn,
  // userTwitterSignIn
  // graphql(USER_SIGN_IN, { name: "userSignIn" }),
  graphql(GET_AUTH_DETAILS, {
    props: mapStateToProps,
    name: "auth"
  })
)(WrappedNormalLoginForm);