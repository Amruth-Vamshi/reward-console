import { Button, Form, Icon, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import gql from 'graphql-tag';
import { History } from 'history';
import * as React from 'react';
import { compose, Mutation, MutationFunc } from 'react-apollo';

interface IProps extends FormComponentProps {
  history?: History;
}

interface IState { }

class ChangePassword extends React.Component<IProps, IState> {
  state = {
    confirmDirty: false
  };

  // UNSAFE_componentWillMount() {
  //     if (localStorage.getItem("jwt")) this.props.history.push("/");
  // }

  handleConfirmBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  compareToFirstPassword = (rule: any, value: any, callback: any) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule: any, value: any, callback: any) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    } else if (value && value.length < 6) {
      callback("Password should contain atleast 6 characters");
    } else callback();
  };

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
                <p style={{ fontSize: 25 }}>New Password</p>
              </div>
              <div className="gx-app-logo">
                <img
                  alt="example"
                  src={require("walkin-components/src/assets/images/walkin_logo_white.png")}
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
                          const {
                            password,
                            conformPassword,
                            remember
                          } = values;
                          const data = await signIn({
                            variables: {
                              input: {
                                password,
                                conformPassword
                              }
                            }
                          });

                          if (data && data.data && data.data.signIn) {
                            history.push("/");
                          } else {
                            console.log("/signin");
                          }
                        }
                      });
                    }}
                    className="login-form"
                  >
                    <Form.Item hasFeedback>
                      {getFieldDecorator("password", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your password!"
                          },
                          {
                            validator: this.validateToNextPassword
                          }
                        ]
                      })(
                        <Input.Password
                          prefix={
                            <Icon
                              type="lock"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          placeholder="New Password"
                        />
                      )}
                    </Form.Item>
                    <Form.Item hasFeedback>
                      {getFieldDecorator("conform", {
                        rules: [
                          {
                            required: true,
                            message: "Please confirm your password!"
                          },
                          {
                            validator: this.compareToFirstPassword
                          }
                        ]
                      })(
                        <Input.Password
                          prefix={
                            <Icon
                              type="lock"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          onBlur={this.handleConfirmBlur}
                          placeholder="Conform Password"
                        />
                      )}
                    </Form.Item>

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

export default compose(Form.create({ name: "vertical_login" }))(ChangePassword);
