import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo"
import {
  Col,
  Row,
  Typography,
  Divider,
  Form,
  Select,
  Input,
  Button,
  Spin
} from "antd";
import { EVENT_TYPES } from "../../../../../containers/Query"
class EventType extends Component {

  componentDidMount() {
    this.setFieldValues()
  }
  setFieldValues = () => {
    const { event } = this.props;
    this.props.form.setFieldsValue({
      event: event.type
    });
  };

  getOptions = () => {
    return this.props.eventType.eventTypes.map(event => {
      return (
        <Select.Option value={event.id} key={event.id}>{event.type}</Select.Option>
      )
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    console.log(this.props.eventType.loading)
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
                  notFoundContent={this.props.eventType.loading ? <Spin size="small" /> : null}
                  placeholder="Select a option and change input text above"
                  onChange={this.handleSelectChange}
                >
                  {
                    this.props.eventType.loading ? (
                      <Select.Option value="loading" key="999999">loading</Select.Option>
                    ) : this.getOptions()
                  }

                </Select>
              )}
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const EventTypeForm = Form.create({
  name: "EventType",
  onValuesChange(props, values) {
    console.log("values", values)
    props.onEventTypeEdited(values);
  }
})(EventType);

export default graphql(EVENT_TYPES, {
  name: "eventType",
  options: {
    fetchPolicy: "cache-first",
    variables: {
      status: "ACTIVE"
    }
  }
})(EventTypeForm);
