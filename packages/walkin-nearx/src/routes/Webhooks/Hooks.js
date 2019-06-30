import React, { Component } from "react";
import { Col, Row, Pagination, Card, Select, Timeline, Form, Modal, Spin, Tooltip, Input, Icon, Button } from "antd";
// import AppListCard from "./AppListCard";
import { GET_WEBHOOKS, LIST_WEBHOOK_EVENTS, CREATE_WEBHOOK } from "../../queries/platformQuries";
import jwt from "jsonwebtoken";
import { withApollo } from "react-apollo";
// import { nearXClient as client } from "../../nearXApollo";
const { TextArea } = Input;
import HooksListCard from './HooksListCard'

// const text = <code></code>

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

class Hooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      hooksList: [],
      spin: false,
      visible: false,
      loading: false,
      eventTypes: [],
      hookName: '',
      headers: '',
      event: '',
      method: '',
      url: '',
      errors: {}
    };
  }

  addHook = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });

  };


  componentWillMount() {
    this.getWebhooks()
    this.props.client
      .query({ query: LIST_WEBHOOK_EVENTS })
      .then(res => {
        console.log(res.data.webhookEventTypes);
        this.setState({ eventTypes: res.data.webhookEventTypes });
      }).catch(err => console.log("Failed to get Event Types" + err))
  }

  getWebhooks = () => {
    this.setState({ spin: true });

    const jwtData = jwt.decode(localStorage.getItem("jwt"));

    jwtData
      ? this.props.client
        .query({
          query: GET_WEBHOOKS,
          variables: { org_id: jwtData.org_id, "status": "ACTIVE" },
          fetchPolicy: "network-only"
        })
        .then(res => {
          console.log(res.data.webhooks);
          this.setState({ hooksList: res.data.webhooks, spin: false });
        })
        .catch(err => {
          console.log("Failed to get User Details" + err);
        })
      : console.log("Error getting JwtData");
  }

  onChange = (e, n) => this.setState({ event: e });
  onChangeMethod = (e, n) => this.setState({ method: e });

  handleOnChange = (e, n) => {
    this.setState({ [e.target.name]: e.target.value });

  };

  createHook = () => {
    this.setState({ loading: true })
    let errors = {};
    // if (this.state.hookName.trim() == "")
    //   errors.hookName = "* this field is mandatory";
    if (this.state.event == "") errors.event = "* this field is mandatory";
    if (this.state.url.trim() == "") errors.url = "* this field is mandatory";
    if (this.state.method == "") errors.method = "* this field is mandatory";

    if (Object.keys(errors).length !== 0) {
      this.setState({ errors });
      console.log("Errors in submition" + Object.keys(errors).length);
    } else {
      const { org_id } = jwt.decode(localStorage.getItem("jwt"));
      this.props.client
        .mutate({
          mutation: CREATE_WEBHOOK,
          variables: {
            input: {
              event: this.state.event,
              method: this.state.method,
              url: this.state.url,
              headers: this.state.headers,
              organization_id: org_id
            }
          }
        })
        .then(res => {
          console.log("Results", res);
          this.setState({ visible: false, loading: false })
          this.getWebhooks()
        })
        .catch(err => {
          this.setState({ loading: false });
          console.log("Failed to get Places Details" + err)
        });
    }
  }


  render() {
    var options = this.state.eventTypes.map((item, index) => (
      <Option key={index} value={item.event}> {item.event} </Option>
    ));
    // const data = this.state.appsList?this.state.appsList:[]
    // console.log(this.state.eventTypes)
    return (
      <div>
        <Row className="headerRow1">
          <div style={{ width: "100%" }}>
            <span style={{ fontSize: 25 }}>Web Hooks</span>
            <div style={{ float: "right", flexFlow: "right" }}>
              <Button
                style={{ margin: 0 }}
                onClick={() => this.addHook()}
                className="buttonPrimary"
              >
                Add Hook
                </Button>
            </div>
          </div>
        </Row>
        <br />

        {this.state.spin ? (
          <div> <br />  <br /> <br />  <br />{" "}
            <div className="divCenter">  <Spin size="large" /> </div> <br /> <br /> <br />  </div>) :
          this.state.hooksList.length ? (
            <div >
              <Row className="placeTableHeaders">
                <Col span={4}>Event</Col>
                <Col span={2}>Method</Col>
                <Col span={2}>Status</Col>
                <Col span={7}>headers</Col>
                <Col span={7}>url</Col>
              </Row>
              {this.state.hooksList.map((item, i) => (
                <HooksListCard key={i} index={i} data={item}
                />
              ))}
            </div>
          ) : (
              <div style={{ margin: 100, fontSize: 25 }}>
                <div className="divCenter">No Hooks Present</div>
                <div className="divCenter">
                  <Button
                    style={{ margin: 30, fontSize: 18 }}
                    onClick={() => this.addHook()}
                    className="buttonPrimary"
                  >
                    Create New Hook
                </Button>
                  {/* <div style={{margin:10, fontSize:20}}>Create A new Place</div> */}
                </div>
              </div>
            )}

        <Modal
          width="600px"
          // size='large'
          key="model1"
          visible={this.state.visible}
          onOk={this.createHook}
          onCancel={this.handleCancel}
          title="Create Webhook"
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={this.state.loading}
              onClick={this.createHook}
            >
              Submit
            </Button>
          ]}
        >
          {/* <p>Submit your Google API key to search places</p> */}

          <Form className="appForm">
            {/* <Form.Item {...formItemLayout} label="App Name">
              <Input id="myInput" placeholder="App Name" value={this.state.hookName}
                size="large" name="hookName" onChange={c => this.handleOnChange(c)} />
              <span style={{ color: "Red" }}> {this.state.errors.hookName} </span>
            </Form.Item> */}

            <Form.Item {...formItemLayout} label="Event Type">
              <Select
                showSearch
                size="large"
                style={{ width: "100%" }}
                placeholder="Select Event Type"
                // value = { auth.user.organization.name }
                optionFilterProp="children"
                onChange={this.onChange}
              // onSearch={onSearch}
              >
                {options}
              </Select>
              <span style={{ color: "Red" }}>
                {this.state.errors.event}
              </span>
            </Form.Item>

            <Form.Item {...formItemLayout} label="Method">
              <Select size="large" style={{ width: "100%" }}
                placeholder="Select method"
                optionFilterProp="children"
                onChange={this.onChangeMethod}
              // onSearch={onSearch}
              >
                <Option value="POST">POST</Option>
                <Option value="GET">GET</Option>
                <Option value="PUT">PUT</Option>
                <Option value="DELETE">DELETE</Option>
              </Select>
              <span style={{ color: "Red" }}>
                {this.state.errors.method}
              </span>
            </Form.Item>


            <Form.Item
              {...formItemLayout}
              label="Headers (Optional)"
            >
              <Input
                placeholder="Headers (Optional)"
                value={this.state.headers}
                size="large" name="headers"
                onChange={c => this.handleOnChange(c)}
              />
              <span style={{ color: "Red" }}>
                {this.state.errors.headers}
              </span>
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label="URL"
            >
              <Input
                required placeholder="Enter URL"
                value={this.state.url} size="large" name="url"
                onChange={c => this.handleOnChange(c)}
              />
              <span style={{ color: "Red" }}>
                {this.state.errors.url}
              </span>
            </Form.Item>

            {/* <p><Button  onClick={this.props.showModal}>Add Hotspot</Button></p> */}
            {/* <div style={{ overflow: "hidden", textAlign: "center" }}>
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
                CREATE APP
                          </Button>
            </div> */}
          </Form>


          <br />
        </Modal>
      </div>
    );
  }
}

export default withApollo(Hooks);
