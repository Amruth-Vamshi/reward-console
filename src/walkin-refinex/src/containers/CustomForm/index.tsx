import * as React from 'react';
import { Form, Input } from 'antd';
import { FormProps } from 'antd/lib/form';

interface CustomFormProps extends FormProps {
  items?: any;
}

const CustomForm: React.FunctionComponent<CustomFormProps> = props => {
  const { getFieldDecorator } = props.form;
  const { items } = props;
  return (
    <Form layout={props.layout}>
      {items.map((item: any) => {
        const a: string = item.name;
        return (
          <Form.Item label={item.label}>
            {getFieldDecorator(a, {
              rules: item.rule,
            })(<Input />)}
          </Form.Item>
        );
      })}
    </Form>
  );
};

const CustomizedForm = Form.create({
  onFieldsChange(props: CustomFormProps, changedFields) {
    console.log(changedFields);
    props.onChange(changedFields);
  },
  mapPropsToFields(props: CustomFormProps) {
    const { items } = props;
    items.map((item: any) => {
      return {
        [item.name]: Form.createFormField({
          value: item.value,
        }),
      };
    });
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})(CustomForm);

export default CustomizedForm;
