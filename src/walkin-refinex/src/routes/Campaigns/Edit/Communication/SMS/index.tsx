import * as React from 'react';
import { Form, Input, Upload, Button, message } from 'antd';
import moment from 'moment';
import { FormComponentProps } from 'antd/lib/form';
const { TextArea } = Input;

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

interface SMSFormProps extends FormComponentProps {
  onFormNext?: any;
  wrappedComponentRef?: any;
  formValues?: any;
  text?: any;
}

const SMSForm = Form.create<SMSFormProps>({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class SMSForm extends React.Component<SMSFormProps, {}> {
    constructor(props: SMSFormProps) {
      super(props);
    }
    render() {
      const {
        form,
        onFormNext,
        wrappedComponentRef,
        formValues,
        text,
      } = this.props;
      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
      };
      return (
        <Form
          style={{ paddingTop: '20px' }}
          layout="vertical"
          ref={wrappedComponentRef}
          onSubmit={onFormNext}
        >
          <Form.Item label="SMS tag" {...formItemLayout}>
            {getFieldDecorator('smsTag', {
              initialValue: `${
                Object.keys(formValues).length != 0
                  ? formValues.smsTag
                    ? formValues.smsTag
                    : ''
                  : ''
              }`,
              rules: [{ required: true, message: 'SMS tag is required' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="SMS body" {...formItemLayout}>
            {getFieldDecorator('smsBody', {
              initialValue: `${
                Object.keys(formValues).length != 0
                  ? formValues.smsBody
                    ? formValues.smsBody
                    : ''
                  : ''
              }`,
              rules: [{ required: true, message: 'SMS body is required' }],
            })(<TextArea rows={3} />)}
          </Form.Item>
          <Form.Item style={{ paddingLeft: '16px' }}>
            <Upload {...props}>
              <Button>Upload and link file</Button>
            </Upload>
          </Form.Item>
        </Form>
      );
    }
  }
);
export default SMSForm;
