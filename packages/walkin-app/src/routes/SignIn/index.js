import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { compose, graphql, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import IntlMessages from "@walkinsole/walkin-components/src/util/IntlMessages";

class NormalLoginForm extends React.Component {
  componentWillMount() {
    if (localStorage.getItem("jwt")) this.props.history.push("/");
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
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-logo-content">
              <div className="gx-app-logo-content-bg">
                <img
                  src="https://media.golfdigest.com/photos/569688b4273cde6003f797c8/master/w_768,c_limit/El-Camaleon-15-hole-Riviera-Maya.jpg"
                  alt="Neature"
                />
                {/* https://via.placeholder.com/272x395 */}
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
                  src={require("@walkinsole/walkin-components/src/assets/images/walkin_logo_white.png")}
                  style={{ width: 100 }}
                />
              </div>
            </div>
            <div className="gx-app-login-content">
              <Mutation mutation={SIGN_IN} fetchPolicy="no-cache">
                {(signIn, { loading, error, data }) => (
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
                                password
                              }
                            }
                          });

                          if (data && data.data && data.data.signIn) {
                            const redirectRoute = routeQuery.redirectRoute
                              ? routeQuery.redirectRoute
                              : "/home";
                            console.log(
                              "Login Successfull. Redirecting...",
                              redirectRoute
                            );
                            history.push(redirectRoute);
                          } else {
                            console.log("Login Failed");
                          }
                        }
                      });
                    }}
                    className="login-form"
                  >
                    <Form.Item>
                      {getFieldDecorator("email", {
                        rules: [
                          {
                            required: true,
                            type: "email",
                            message: "The input is not valid E-mail!"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="mail"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          placeholder="Email"
                        />
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator("password", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your Password!"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="lock"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          type="password"
                          placeholder="Password"
                        />
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator("remember", {
                        valuePropName: "checked",
                        initialValue: true
                      })(<Checkbox>Remember me</Checkbox>)}
                      <a className="login-form-forgot" href="">
                        Forgot password
                      </a>
                      <br />
                      <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        className="login-form-button"
                        style={{ marginTop: 10 }}
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
    name: "routeQuery"
  }),
  Form.create({ name: "vertical_login" })
)(NormalLoginForm);
