import * as React from "react";
import * as PropTypes from "prop-types";
import { Form, Upload, Icon, Button, Input } from "antd";
import { FormComponentProps } from "antd/lib/form";

interface IProps extends FormComponentProps {
  onFormNext?: any,
  wrappedComponentRef?: any,
  formValues?: any,
  text?: string
}
class EmailForm extends React.Component<IProps, {}> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      // email_subject: "",
      // email_body: ""
    };
  }

  // componentDidMount() {
  //   const { email_subject, email_body } = this.state;

  //   this.props.form.setFieldsValue({
  //     email_subject,
  //     email_body
  //   });
  // }

  render() {
    const { form, onFormNext, wrappedComponentRef, formValues, text } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical" ref={wrappedComponentRef} onSubmit={onFormNext}>
        <Form.Item label="Subject">
          {getFieldDecorator("email_subject", {
            initialValue: `${Object.keys(formValues).length != 0 ? formValues.email_subject ? formValues.email_subject : "" : ""}`,
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
            initialValue: `${Object.keys(formValues).length != 0 ? formValues.email_body ? formValues.email_body : "" : ""}`,
            rules: [{ required: true, message: "Please enter Email body!" }]
          })(
            <Input.TextArea rows={6}
              placeholder="Enter Email body"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("upload", {
            valuePropName: "fileList",
            // getValueFromEvent: this.normFile
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

const Email1 = Form.create<IProps>({ name: "EmailForm" })(EmailForm);

export default Email1;
