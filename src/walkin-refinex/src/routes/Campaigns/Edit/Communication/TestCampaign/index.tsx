import * as React from 'react';
import {
  Card,
  Row,
  Col,
  Button,
  TimePicker,
  DatePicker,
  InputNumber,
  Input,
  Icon,
  Select,
  Form,
  message,
} from 'antd';
import { Widget } from 'walkin-components';

interface TestComponentProps {
  text: string;
  label: any;
  placeholder: any;
  testCommunication: any;
  name: any;
}

interface TestComponentState {
  phoneNumber?: string;
  fcmToken?: string;
  email?: string;
}

export default class TestComponent extends React.Component<
  TestComponentProps,
  TestComponentState
> {
  constructor(props: TestComponentProps) {
    super(props);
    this.state = {
      phoneNumber: '',
      fcmToken: '',
      email: '',
    };
  }
  onChange = e => {
    console.log(e.target.name, e.target.value);
    switch (e.target.name) {
      case 'EMAIL':
        this.setState({ phoneNumber: '', fcmToken: '', email: e.target.value });
        break;
      case 'PUSH':
        this.setState({ phoneNumber: '', fcmToken: e.target.value, email: '' });
        break;
      case 'SMS':
        this.setState({ phoneNumber: e.target.value, fcmToken: '', email: '' });
        break;
      default:
        this.setState({ phoneNumber: e.target.value, fcmToken: '', email: '' });
        break;
    }
  };

  getValue = (): string => {
    console.log(this.props.name);
    switch (this.props.name) {
      case 'EMAIL':
        return this.state.email;
      case 'PUSH':
        return this.state.fcmToken;
      case 'SMS':
        return this.state.phoneNumber;
      default:
        return this.state.phoneNumber;
    }
  };
  testComms = async () => {
    const notify = await this.props.testCommunication(
      this.state.phoneNumber,
      this.state.email,
      this.state.fcmToken
    );

    if (notify) {
      message.success('Communication successfully sent!');
    }
  };
  render() {
    return (
      <Widget
        style={{ backgroundColor: '#FAFAFA' }}
        title={
          <h1 className="gx-text-primary gx-text-capitalize gx-mb-0">
            {this.props.text}
          </h1>
        }
      >
        <Form className="gx-signup-form gx-form-row0 gx-mb-0">
          <div className="gx-mb-2">
            <label>{this.props.label}</label>
          </div>

          <div className="gx-mb-3">
            <Input
              value={this.getValue()}
              name={this.props.name}
              onChange={this.onChange}
              placeholder={this.props.placeholder}
            />
          </div>
          <Button
            onClick={this.testComms}
            type="primary"
            className="gx-mb-0"
            htmlType="submit"
          >
            Send
          </Button>
        </Form>
      </Widget>
    );
  }
}
