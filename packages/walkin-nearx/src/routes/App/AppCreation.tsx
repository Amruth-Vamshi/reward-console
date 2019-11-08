import React, { Component } from "react";
import { Col, Card, Row, Select, Form, Input, Button, Icon } from "antd";
import "../../styles/app.css";
import {
  GET_ALL_APPS_OF_ORGANIZATION,
  USER_DATA,
  UPDATE_APP
} from "@walkinsole/walkin-core/src/PlatformQueries";
import { nearXClient } from "../../nearXApollo";
import { CREATE_APP } from "../../queries";
import * as jwt from "jsonwebtoken";
import { withApollo, compose, graphql } from "react-apollo";
import gql from "graphql-tag";

const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 8 }
  },
  wrapperCol: {
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 16 }
  }
};

class AppCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizations: [],
      update: false,
      id: "",
      errors: {},
      loading: false,
      firstName: "",
      lastName: "",
      appName: "",
      description: "",
      platform: "",
      organizationId: ""
    };
  }

  choosePlatform = (e, n) => {
    // console.log(e.target.name, n)
    this.setState({ platform: e.target.name });
  };

  getAppDetails = appData => {
    console.log("APPDATA>>>", appData);
    this.setState({
      id: appData.id,
      appName: appData.appName,
      description: appData.discription,
      platform: appData.platform,
      organizationId: appData.org_id,
      update: true
    });
  };

  componentDidMount() { }

  componentWillMount() {
    const { id, org_id } = jwt.decode(localStorage.getItem("jwt"));
    this.setState({ userId: id, org_id });

    sessionStorage.getItem("AppData")
      ? this.getAppDetails(JSON.parse(sessionStorage.getItem("AppData")))
      : "";
    sessionStorage.removeItem("AppData");

    id
      ? this.props.client
        .query({
          query: USER_DATA,
          variables: { userId: id },
          fetchPolicy: "cache-first"
        })
        .then(res => {
          console.log(res.data.user);
          this.setState({
            firstName: res.data.user.firstName,
            lastName: res.data.user.lastName
          });
        })
        .catch(err => console.log("Failed to get User Details" + err))
      : console.log("Error getting JwtData");

    org_id
      ? this.props.client
        .query({
          query: GET_ALL_APPS_OF_ORGANIZATION,
          variables: { id: org_id },
          fetchPolicy: "network-only" // skip the cache
        })
        .then(res => {
          console.log(res.data);
          var orgs = [];
          let org = res.data.organization;

          function recOrg(org, orgs) {
            orgs.push({ name: org.name, id: org.id });
            if (org && org.children) org.children.map(ch => recOrg(ch, orgs));
          }
          recOrg(org, orgs);
          this.setState({ organizations: orgs });
        })
        .catch(err => {
          console.log("Failed to get User Details" + err);
        })
      : console.log("Error getting JwtData");
  }

  handleOnChange = (e, n) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e, n)
  };

  onChange = (e, n) => {
    // console.log(e, n)
    this.setState({ organizationId: e });
  };

  handleSubmit = orgId => {
    let errors = {};
    if (this.state.appName.trim() == "")
      errors.appName = "* this field is mandatory";
    if (this.state.platform == "") errors.platform = "* select your platform";
    if (this.state.organizationId == "")
      errors.organizationId = "* this field is mandatory";
    if (Object.keys(errors).length !== 0) {
      this.setState({ errors });
      console.log("Errors in submition" + Object.keys(errors).length);
    } else {
      if (this.state.update) {
        this.setState({ loading: true });
        this.props.client
          .mutate({
            mutation: UPDATE_APP,
            variables: {
              input: {
                id: this.state.id,
                name: this.state.appName,
                description: this.state.description,
                platform: this.state.platform
              }
            }
          })
          .then(res => {
            console.log("Results", res);
            this.setState({ loading: false });
            this.props.history.push("/nearx/apps");
          })
          .catch(err => {
            console.log("Failed to get Places Details" + err);
            this.setState({ loading: false });
          });
      } else {
        this.setState({ loading: true });
        nearXClient
          .mutate({
            mutation: CREATE_APP,
            variables: {
              organizationId: this.state.organizationId,
              input: {
                name: this.state.appName,
                description: this.state.description,
                platform: this.state.platform
              }
            }
          })
          .then(res => {
            console.log("Results", res);
            this.setState({ loading: false });
            this.props.history.push("/nearx/apps");
            // this.setState({ organizations:res.data.organizationHierarchies })
          })
          .catch(err => {
            console.log("Failed to get Places Details" + err.graphQLErrors);

            console.log(err && err.graphQLErrors
              ? error.graphQLErrors[0].errorCode
              : 'Error in submitting the form');

            if (err.graphQLErrors[0].message) {
              message.warn(graphQLErrors[0].message)
            }
            this.setState({ loading: false });
          });
      }
    }
  };

  render() {
    let { firstName, lastName } = this.state;
    var options = this.state.organizations.map((item, index) => (
      <Option key={index} value={item.id}>
        {item.name}
      </Option>
    ));
    // console.log(this.props.localdata.auth.firstName);
    // let auth = this.props
    return (
      // <div>Auth consumer here</div>
      //   <AuthConsumer>
      //     {({ isAuth, login, logout, auth }) => (
      <div className="gx-card">
        <div
          className="gx-card-body"
          style={{
            backgroundColor: "#ffffff",
            height: "90vh",
            minHeight: "700px"
          }}
        >
          {/* <div className="appHeader">
            <div className="name">
              Hi,{" "}
              {firstName
                ? `${firstName + "  " + `${lastName ? lastName : ""}`}`
                : ""}
            </div>
            <div className="title"> Welcome to NearX Application</div>
          </div>
          <hr /> */}

          <div style={{ height: "100%" }}>
            <div className="divCenter">
              <Col sm={18} md={13} lg={13} xl={12}>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: 25,
                      marginBottom: 50,
                      alignContent: "center",
                      justifyContent: "center"
                    }}
                  >
                    Integrate your App with <b>NearX</b>
                  </p>
                </div>

                <Form className="appForm">
                  <Form.Item {...formItemLayout} label="App Name">
                    <Input
                      id="myInput"
                      placeholder="App Name"
                      value={this.state.appName}
                      size="large"
                      name="appName"
                      onChange={c => this.handleOnChange(c)}
                    />
                    <span style={{ color: "Red" }}>
                      {this.state.errors.appName}
                    </span>
                  </Form.Item>

                  <Form.Item {...formItemLayout} label="Choose Platform">
                    <Button
                      name="Android"
                      onClick={c => this.choosePlatform(c)}
                      type={this.state.platform === "Android" ? "primary" : ""}
                    >
                      <Icon type="android" theme="filled" /> Android{" "}
                    </Button>
                    <Button
                      name="IOS"
                      onClick={c => this.choosePlatform(c)}
                      type={this.state.platform === "IOS" ? "primary" : ""}
                    >
                      <Icon type="apple" theme="filled" /> IOS{" "}
                    </Button>

                    <span style={{ color: "Red" }}>
                      {this.state.errors.platform}
                    </span>
                  </Form.Item>

                  {this.state.update ? (
                    ""
                  ) : (
                      <Form.Item {...formItemLayout} label="Industry">
                        <Select
                          showSearch
                          size="large"
                          style={{ width: "100%" }}
                          placeholder="Select Industy"
                          // value = { auth.user.organization.name }
                          optionFilterProp="children"
                          onChange={this.onChange}
                          // onSearch={onSearch}
                          filterOption={(input, option) =>
                            option.props.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {/* <Option value={auth.user.organization.name}>{auth.user.organization?auth.user.organization.name:''}</Option> */}
                          {options}
                        </Select>
                        <span style={{ color: "Red" }}>
                          {this.state.errors.organizationId}
                        </span>
                      </Form.Item>
                    )}

                  <Form.Item {...formItemLayout} label="Description (Optional)">
                    <Input
                      required
                      placeholder="Description (Optional)"
                      value={this.state.description}
                      size="large"
                      name="description"
                      onChange={c => this.handleOnChange(c)}
                    />
                    <span style={{ color: "Red" }}>
                      {this.state.errors.description}
                    </span>
                  </Form.Item>

                  {/* <p><Button  onClick={this.props.showModal}>Add Hotspot</Button></p> */}
                  <div style={{ overflow: "hidden", textAlign: "center" }}>
                    <Button
                      onClick={() => this.handleSubmit()}
                      loading={this.state.loading}
                      className="buttonPrimary"
                      style={{
                        textAlign: "center",
                        width: "200px",
                        float: "center",
                        margin: "25px 30px 20px 0"
                      }}
                    >
                      {!this.state.update ? "Create App" : "Update App"}
                    </Button>
                  </div>
                </Form>
              </Col>
            </div>
          </div>
        </div>
      </div>
      //     )}
      //   </AuthConsumer>
    );
  }
}

export default compose(withApollo)(AppCreation);
