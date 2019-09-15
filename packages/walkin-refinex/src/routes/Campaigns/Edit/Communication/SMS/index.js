import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Icon } from "antd";
import {
  AddAndDeleteSelectDynamically,
  WalkinQueryBuilder
} from "@walkinsole/walkin-components";
class SMS extends Component {
  static propTypes = {
    prop: PropTypes
  };
  constructor(props) {
    super(props);
    this.state = {
      sms_tag: "",
      sms_body: ""
    };
  }

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;
    console.log("SMS...", this.props.form);
    const { formValues, saveFormRef, onFormNext } = this.props;
    // const { getFieldDecorator } = form;

    return (
      <Form
        layout="vertical"
        //onSubmit={this.handleSubmit}
        ref={saveFormRef}
        onSubmit={onFormNext}
      >
        <Form.Item label="SMS Tag">
          {getFieldDecorator("sms_tag", {
            rules: [{ required: true, message: "Please enter SMS tag!" }]
          })(
            <Input
              prefix={
                <Icon type="message" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Enter SMS Tag"
            />
          )}
        </Form.Item>
        <Form.Item label="SMS Body">
          {getFieldDecorator("sms_body", {
            rules: [{ required: true, message: "Please enter SMS body!" }]
          })(<Input.TextArea rows={6} placeholder="Enter SMS body" />)}
          {/* <Input.TextArea rows={6} placeholder="Enter SMS body" size="large" /> */}
        </Form.Item>
        {/* <WalkinQueryBuilder onQueryChange={this.props.logCommunication} /> */}
      </Form>
    );
  }
}

const SMSFORM = Form.create({ name: "SMS" })(SMS);

export default SMSFORM;
