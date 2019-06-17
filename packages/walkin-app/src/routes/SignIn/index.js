import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { compose, graphql, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import IntlMessages from "@walkinsole/walkin-components/src/util/IntlMessages";

class NormalLoginForm extends React.Component {
  render() {
    const { history } = this.props;
    const { getFieldDecorator } = this.props.form;
    // const LOGIN = gql`
    //   mutation login($input: LoginInput!) {
    //     login(input: $input) {
    //       jwt
    //     }
    //   }
    // `;
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
                  src={require("@walkinsole/walkin-components/src/assets/images/walkin_logo.png")}
                />
              </div>
            </div>
            <div className="gx-app-login-content">
              <Mutation mutation={SIGN_IN}>
                {(signIn, { data }) => (
                  <Form
                    onSubmit={async e => {
                      e.preventDefault();
                      this.props.form.validateFields(async (err, values) => {
                        if (!err) {
                          console.log("Received values of form: ", values);
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
                            console.log("Login Successfull. Redirecting...");
                            history.push("/");
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
                        className="login-form-button"
                      >
                        Log in
                      </Button>
                      Or
                      <Link to="/signup"> Sign Up!</Link>
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

export default Form.create({ name: "vertical_login" })(NormalLoginForm);
