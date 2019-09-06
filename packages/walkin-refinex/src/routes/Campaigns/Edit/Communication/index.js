import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Col,
  Row,
  Typography,
  Tabs,
  Radio,
  Form,
  Input,
  Upload,
  Button,
  Icon
} from "antd";
import SMSForm from "./SMS";
import EmailForm from "./Email";
const { TabPane } = Tabs;
const { Title } = Typography;

class Communication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "sms"
    };
  }

  static propTypes = {
    prop: PropTypes
  };

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    console.log("render", this.state.mode);
    return (
      <Row
        style={{
          margin: "1rem"
        }}
      >
        <Col span={24}>
          <Title level={3} className="gx-text-grey">
            Communication
          </Title>
        </Col>
        <Col span={24}>
          <Row
            style={{
              margin: "1rem",
              height: "-webkit-fill-available",
              paddingBottom: "5rem",
              overflowX: "scroll"
            }}
          >
            <Col span={24}>
              <Radio.Group
                onChange={this.handleModeChange}
                defaultValue={this.state.mode}
                buttonStyle="solid"
              >
                <Radio.Button value="sms">SMS</Radio.Button>
                <Radio.Button value="email">Email</Radio.Button>
              </Radio.Group>
              <Row style={{ marginTop: "1rem" }}>
                <Col span={14}>
                  <div>
                    {this.state.mode === "sms" ? <SMSForm /> : <EmailForm />}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Communication;
