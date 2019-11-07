import * as React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { compose, graphql, Mutation, MutationFunc } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import IntlMessages from "@walkinsole/walkin-components/src/util/IntlMessages";
import { History } from "history";
import { FormComponentProps } from "antd/lib/form";

interface IProps extends FormComponentProps {
  history?: History;
}

interface IState {}

class ForgotPassword extends React.Component<IProps, IState> {
  componentWillMount() {
    if (localStorage.getItem("jwt")) this.props.history.push("/");
  }
  render() {
    const { history } = this.props;
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
                <p style={{ fontSize: 25 }}>
                  <IntlMessages id="app.userAuth.forgotPassword" />
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
                                password
                              }
                            }
                          });

                          if (data && data.data && data.data.signIn) {
                            // history.push(redirectRoute);
                          } else {
                            console.log("/signin");
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
                    {/* <Form.Item>
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
                                        </Form.Item> */}
                    Please submit your email to create new password
                    <br />
                    <br />
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        className="login-form-button"
                        style={{ marginTop: 10 }}
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

export default compose(Form.create({ name: "vertical_login" }))(ForgotPassword);
