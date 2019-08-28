import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Upload, Icon, Button, Input, Row, Col } from "antd";
class EmailForm extends Component {
  static propTypes = {
    prop: PropTypes
  };
  constructor(props) {
    super(props);
    this.state = {
      email_subject: "",
      email_body: ""
    };
  }

  componentDidMount() {
    const { email_subject, email_body } = this.state;

    this.props.form.setFieldsValue({
      email_subject,
      email_body
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical">
        <Form.Item label="Subject">
          {getFieldDecorator("email_subject", {
            rules: [{ required: true, message: "Please enter Email Subject!" }]
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Enter Email Subject"
            />
          )}
        </Form.Item>
        <Form.Item label="Compose">
          {getFieldDecorator("email_body", {
            rules: [{ required: true, message: "Please enter Email body!" }]
          })(
            <Input.TextArea
              rows={6}
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Enter Email body"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("upload", {
            valuePropName: "fileList",
            getValueFromEvent: this.normFile
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Attach Media
              </Button>
            </Upload>
          )}
        </Form.Item>
      </Form>
    );
  }
}

const Email = Form.create({ name: "EmailForm" })(EmailForm);

export default Email;
