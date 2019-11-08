import * as React from "react";
import { Form, Input } from "antd";

interface OrgStoreFormProps {
  form: any;
  onOrgStoreFormSubmit: () => void;
  wrappedComponentRef: any;
  storeFormValues: any;
  text: string;
}

const OrgStoreForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class OrgStoreForm extends React.Component<OrgStoreFormProps, {}> {
    render() {
      const {
        form,
        onOrgStoreFormSubmit,
        wrappedComponentRef,
        storeFormValues
      } = this.props;
      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: { span: 7 },
        wrapperCol: { span: 19 }
      };
      const { Item } = Form;
      return (
        <Form
          layout="vertical"
          ref={wrappedComponentRef}
          onSubmit={onOrgStoreFormSubmit}
        >
          <Item label="Store Code" {...formItemLayout}>
            {getFieldDecorator("code", {
              initialValue: `${
                Object.keys(storeFormValues).length != 0
                  ? storeFormValues.code
                  : ""
              }`,
              rules: [{ required: true, message: "Store Code is required" }]
            })(<Input />)}
          </Item>
          <Item label="Name" {...formItemLayout}>
            {getFieldDecorator("name", {
              initialValue: `${
                Object.keys(storeFormValues).length != 0
                  ? storeFormValues.name
                  : ""
              }`,
              rules: [{ required: true, message: "Name is required" }]
            })(<Input />)}
          </Item>
          <Item label="Address" {...formItemLayout}>
            {getFieldDecorator("address", {
              initialValue: `${
                Object.keys(storeFormValues).length != 0
                  ? storeFormValues.address
                  : ""
              }`,
              rules: [{ required: true, message: "Address is required" }]
            })(<Input />)}
          </Item>
        </Form>
      );
    }
  }
);
export default OrgStoreForm as any; // TODO: Fix this
