import * as React from "react";
import { Form, Input } from "antd";

const Form = props => {
  const { getFieldDecorator } = props.form;
  const { items } = props;
  return (
    <Form layout={props.layout}>
      {items.map(item => {
        return (
          <Form.Item label={props.item.label}>
            {getFieldDecorator(item.name, {
              rules: item.rule
            })(<Input />)}
          </Form.Item>
        );
      })}
    </Form>
  );
};

const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    console.log(changedFields);
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    const { items } = props;
    items.map(item => {
      return {
        [item.name]: Form.createFormField({
          value: item.value
        })
      };
    });
  },
  onValuesChange(_, values) {
    console.log(values);
  }
})(Form);

export default CustomizedForm;
