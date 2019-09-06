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

class EventType extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row style={{ marginTop: "1rem" }}>
        <Col span={6}>
          <h2>Event</h2>
        </Col>
        <Col span={12}>
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <Form.Item label="Choose an event type">
              {getFieldDecorator("event", {
                rules: [
                  {
                    required: true,
                    message: "Please select an event type!"
                  }
                ]
              })(
                <Select
                  placeholder="Select a option and change input text above"
                  onChange={this.handleSelectChange}
                >
                  <Select.Option value="ccd_event">CCD events</Select.Option>
                  <Select.Option value="ccd_event2">CCD events 2</Select.Option>
                </Select>
              )}
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const EventTypeForm = Form.create({ name: "EventType" })(EventType);

export default EventTypeForm;
