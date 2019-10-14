import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Col,
  Row,
  Typography,
  Divider,
  Form,
  Select,
  Input,
  Button
} from "antd";
class Delay extends Component {


  constructor(props) {
    super(props);
    this.state = {
      delay: 0,
      delay_type: "min"
    };
  }

  handleNumberChange = event => {
    const { value } = event.target;
    this.setState({
      delay: value
    });
  };

  handleDelayChange = value => {
    this.setState({
      delay_type: value
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row style={{ marginTop: "1rem" }}>
        <Col span={6}>
          <h2>Delay</h2>
        </Col>
        <Col span={12}>
          <span>
            <Input
              type="text"
              value={this.state.delay}
              onChange={this.handleNumberChange}
              style={{ width: "35%", marginRight: "0%" }}
            />
            <Select
              style={{ width: 100 }}
              value={this.state.delay_type}
              onChange={this.handleDelayChange}
            >
              <Select.Option value="day">Days</Select.Option>
              <Select.Option value="hour">Hours</Select.Option>
              <Select.Option value="min">Minutes</Select.Option>
              <Select.Option value="mon">Month</Select.Option>
            </Select>
          </span>
        </Col>
      </Row>
    );
  }
}

const DelayForm = Form.create({ name: "Delay" })(Delay);
export default DelayForm;
