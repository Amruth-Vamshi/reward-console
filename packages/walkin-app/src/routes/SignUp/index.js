import React from "react";
import { Button, Checkbox, Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";

import { message } from "antd/lib/index";

import IntlMessages from "@walkinsole/walkin-components/src/util/IntlMessages";
import { CircularProgress } from "@walkinsole/walkin-components";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";

const { create, Item: FormItem } = Form;
class SignUp extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("values", values);
      if (!err) {
        this.props.showAuthLoader();
        this.props.userSignUp(values);
      }
    });
  };

  constructor() {
    super();
    this.state = {
      email: "demo@example.com",
      password: "demo#123"
    };
  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.userId !== null) {
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
                  <IntlMessages id="app.userAuth.signUp" />
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
                  src={require("@walkinsole/walkin-components/src/assets/images/logo.png")}
                />
              </div>
            </div>

            <div className="gx-app-login-content">
              <Form
                onSubmit={this.handleSubmit}
                className="gx-signup-form gx-form-row0"
              >
                <FormItem>
                  {getFieldDecorator("userName", {
                    rules: [
                      { required: true, message: "Please input your username!" }
                    ]
                  })(<Input placeholder="Username" />)}
                </FormItem>

                <FormItem>
                  {getFieldDecorator("email", {
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
                  <span className="gx-link gx-signup-form-forgot">
                    <IntlMessages id="appModule.termAndCondition" />
                  </span>
                </FormItem>
                <FormItem>
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    <IntlMessages id="app.userAuth.signUp" />
                  </Button>
                  <span>
                    <IntlMessages id="app.userAuth.or" />
                  </span>{" "}
                  <Link to="/signin">
                    <IntlMessages id="app.userAuth.signIn" />
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
              </Form>
            </div>
            {loader && (
              <div className="gx-loader-view">
                <CircularProgress />
              </div>
            )}
            {showMessage && message.error(alertMessage)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ localData }) => {
  const { loader, alertMessage, showMessage, userId } = localData.auth;
  return { loader, alertMessage, showMessage, userId };
};

// export default connect(
//   mapStateToProps,
//   {
//     userSignUp,
//     hideMessage,
//     showAuthLoader,
//     userFacebookSignIn,
//     userGoogleSignIn,
//     userGithubSignIn,
//     userTwitterSignIn
//   }
// )(WrappedSignUpForm);

// const USER_SIGN_IN = gql`
//   mutation userSignIn {
//     userSignIn @client
//   }
// `;

const HIDE_MESSAGE = gql`
  mutation hideMessage {
    hideMessage @client
  }
`;

const SHOW_AUTH_LOADER = gql`
  mutation showAuthLoader {
    showAuthLoader @client
  }
`;

// export default connect(
//   mapStateToProps,
//   {
//     userSignIn,
//     hideMessage,
//     showAuthLoader
//   }
// )(WrappedNormalLoginForm);
const GET_AUTH = gql`
  query auth {
    auth @client {
      loader
      alertMessage
      showMessage
      userId
    }
  }
`;
export default compose(
  graphql(GET_AUTH, { name: "localData", props: mapStateToProps }),
  // graphql(USER_SIGN_IN, { name: "userSignIn" }),
  graphql(HIDE_MESSAGE, { name: "hideMessage" }),
  graphql(SHOW_AUTH_LOADER, { name: "showAuthLoader" }),
  create()
)(SignUp);
