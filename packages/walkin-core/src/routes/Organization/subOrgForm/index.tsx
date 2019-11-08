import * as React from "react";
import { Form, Input } from "antd";

interface OrgStoreFormProps {
  form?: any;
  onFormSubmit: () => void;
  wrappedComponentRef?: any;
  formValues?: any;
  text?: string;
}

// eslint-disable-next-line
export class SubOrgForm extends React.Component<OrgStoreFormProps, {}> {
  render() {
    const { form, onFormSubmit, wrappedComponentRef, formValues } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 19 }
    };
    const { Item } = Form;
    return (
      <Form layout="vertical" ref={wrappedComponentRef} onSubmit={onFormSubmit}>
        <Item label="Name" {...formItemLayout}>
          {getFieldDecorator("name", {
            initialValue: `${
              Object.keys(formValues).length != 0 ? formValues.name : ""
            }`,
            rules: [{ required: true, message: "Name is required" }]
          })(<Input />)}
        </Item>
        <Item label="Code" {...formItemLayout}>
          {getFieldDecorator("code", {
            initialValue: `${
              Object.keys(formValues).length != 0 ? formValues.code : ""
            }`,
            rules: [{ required: true, message: "Code is required" }]
          })(<Input />)}
        </Item>
        <Item label="Address" {...formItemLayout}>
          {getFieldDecorator("address", {
            initialValue: `${
              Object.keys(formValues).length != 0 ? formValues.address : ""
            }`,
            rules: [{ required: true, message: "Address is required" }]
          })(<Input />)}
        </Item>
        <Item label="Phone Number" {...formItemLayout}>
          {getFieldDecorator("phoneNumber", {
            initialValue: `${
              Object.keys(formValues).length != 0 ? formValues.phoneNumber : ""
            }`,
            rules: [{ required: true, message: "Phone number is required" }]
          })(<Input type="number" />)}
        </Item>
      </Form>
    );
  }
}

export const SubOrgFormComponent = Form.create({ name: "form_in_modal" })(
  SubOrgForm
);

export default SubOrgFormComponent as any; // TODO: Fix this
