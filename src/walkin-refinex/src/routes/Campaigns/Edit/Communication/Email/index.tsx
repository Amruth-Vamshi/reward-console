import * as React from 'react';
import PropTypes from 'prop-types';
import { Form, Upload, Icon, Button, Input, Row, Col } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

interface EmailFormProps extends FormComponentProps {
  onFormNext?: any;
  wrappedComponentRef?: any;
  formValues?: any;
  text?: any;
}
class EmailForm extends React.Component<EmailFormProps, {}> {
  constructor(props: EmailFormProps) {
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
    const {
      form,
      onFormNext,
      wrappedComponentRef,
      formValues,
      text,
    } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        style={{ paddingTop: '20px' }}
        layout="vertical"
        ref={wrappedComponentRef}
        onSubmit={onFormNext}
      >
        <Form.Item label="Subject">
          {getFieldDecorator('email_subject', {
            initialValue: `${
              Object.keys(formValues).length != 0
                ? formValues.email_subject
                  ? formValues.email_subject
                  : ''
                : ''
            }`,
            rules: [{ required: true, message: 'Please enter Email Subject!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Enter Email Subject"
            />
          )}
        </Form.Item>
        <Form.Item label="Compose">
          {getFieldDecorator('email_body', {
            initialValue: `${
              Object.keys(formValues).length != 0
                ? formValues.email_body
                  ? formValues.email_body
                  : ''
                : ''
            }`,
            rules: [{ required: true, message: 'Please enter Email body!' }],
          })(<Input.TextArea rows={6} placeholder="Enter Email body" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
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

const Email = Form.create<EmailFormProps>({ name: 'EmailForm' })(EmailForm);

export default Email;
