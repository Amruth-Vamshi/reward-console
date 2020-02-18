import * as React from 'react';
import { Form, Input, DatePicker } from 'antd';
import moment from 'moment';
import { FormComponentProps, FormItemProps } from 'antd/lib/form';

interface iProps extends FormComponentProps {
  edit?: boolean;
  onFormNext?: any;
  wrappedComponentRef?: any;
  formValues?: any;
  text?: any;
}

interface iState {
  // checkEnd: () => any
}

const BasicInfoForm = Form.create<iProps>({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class BasicInfoForm extends React.Component<iProps, iState> {
    checkStart = (rule: any, value: any, callback: any): any => {
      const { validateFields } = this.props.form;
      const { edit } = this.props;
      if (edit) callback();
      const start = value;
      if (start.valueOf() < moment()) {
        callback('start time should not be less than present time');
      } else {
        validateFields(['endTime'], { force: true });
        callback();
      }
    };

    checkEnd = (rule: any, value: any, callback: any) => {
      if (!value) callback();
      if (this.props.edit) callback();
      const end = value;
      console.log('value', value);
      const { getFieldValue } = this.props.form;
      const start = getFieldValue('startTime');
      if (end.valueOf() < start.valueOf()) {
        callback('end time should not be less than start time');
      } else callback();
    };

    render() {
      const {
        form,
        onFormNext,
        wrappedComponentRef,
        formValues = {},
        text,
        edit,
      } = this.props;
      let startTime = moment().add(10, 'm');
      let endTime; //= moment().add(1, "d");
      if (Object.keys(formValues).length != 0) {
        startTime = moment(formValues.startTime);
        endTime = moment(formValues.endTime);
      }

      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: { span: 15 },
        wrapperCol: { span: 18 },
      };
      const dateItemLayout = {
        wrapperCol: { span: 18 },
        labelCol: { span: 18 },
      };
      return (
        <Form layout="vertical" ref={wrappedComponentRef} onSubmit={onFormNext}>
          <Form.Item label="Campaign name" {...formItemLayout}>
            {getFieldDecorator('name', {
              initialValue: `${
                Object.keys(formValues).length != 0
                  ? formValues.name
                    ? formValues.name
                    : ''
                  : ''
              }`,
              rules: [
                { transform: value => value.trim() },
                { required: true, message: 'Name is required' },
              ],
            })(<Input required maxLength={80} size="large" />)}
          </Form.Item>

          <Form.Item label="Description" {...formItemLayout}>
            {getFieldDecorator('description', {
              initialValue: `${
                Object.keys(formValues).length != 0
                  ? formValues.description
                    ? formValues.description
                    : ''
                  : ''
              }`,
            })(<Input type="textarea" size="large" />)}
          </Form.Item>

          <Form.Item
            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
            label="Start date"
            {...dateItemLayout}
          >
            {getFieldDecorator('startTime', {
              initialValue: startTime,
              rules: [
                {
                  type: 'object',
                  required: true,
                  message: 'Please select start time!',
                },
                { validator: this.checkStart },
              ],
            })(<DatePicker showTime format="DD-MM-YYYY HH:mm:ss" />)}
          </Form.Item>

          <Form.Item
            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
            label="End date"
            {...dateItemLayout}
          >
            {getFieldDecorator('endTime', {
              initialValue: endTime,
              rules: [
                {
                  type: 'object',
                  required: true,
                  message: 'Please select end time!',
                },
                { validator: this.checkEnd },
              ],
            })(<DatePicker showTime format="DD-MM-YYYY HH:mm:ss" />)}
          </Form.Item>
        </Form>
      );
    }
  }
);

export default BasicInfoForm;
