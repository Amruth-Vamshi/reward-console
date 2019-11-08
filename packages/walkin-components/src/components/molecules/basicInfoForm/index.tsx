import React, { Fragment } from "react";
import { Form, Input, DatePicker } from "antd";
import moment, { Moment } from "moment";
import { FormComponentProps } from "antd/lib/form";

interface IProps extends FormComponentProps {
  edit: boolean;
  onFormNext: any;
  wrappedComponentRef: any;
  formValues: any;
  text: string;
}

interface IState {}

export const BasicInfoForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class BasicInfoForm extends React.Component<IProps, IState> {
    checkStart = (rule, value, callback) => {
      const { validateFields } = this.props.form;
      const { edit } = this.props;
      if (edit) {
        callback();
      }
      const start = value;
      if (start.valueOf() < moment()) {
        callback("start time should not be less than present time");
      } else {
        validateFields(["endTime"], { force: true });
        callback();
      }
    };

    checkEnd = (rule, value, callback) => {
      const { edit } = this.props;
      if (edit) {
        callback();
      }
      const end = value;
      const { getFieldValue } = this.props.form;
      const start = getFieldValue("startTime");
      if (end.valueOf() < start.valueOf()) {
        callback("end time should not be less than start time");
      } else {
        callback();
      }
    };

    render() {
      const {
        form,
        onFormNext,
        wrappedComponentRef,
        formValues = {},
        text,
        edit
      } = this.props;
      let startTime = moment().add(10, "m");
      let endTime: Moment;
      if (Object.keys(formValues).length != 0) {
        startTime = moment(formValues.startTime);
        endTime = moment(formValues.endTime);
      }

      const { getFieldDecorator } = form;
      const formItemLayout = {
        labelCol: { span: 15 },
        wrapperCol: { span: 18 }
      };
      const dateItemLayout = {
        wrapperCol: { span: 18 },
        labelCol: { span: 18 }
      };
      return (
        <Form layout="vertical" ref={wrappedComponentRef} onSubmit={onFormNext}>
          <Form.Item label="Campaign name" {...formItemLayout}>
            {getFieldDecorator("name", {
              initialValue: `${
                Object.keys(formValues).length != 0
                  ? formValues.name
                    ? formValues.name
                    : ""
                  : ""
              }`,
              rules: [{ required: true, message: "Name is required" }]
            })(<Input value={formValues.name} size="large" />)}
          </Form.Item>
          <Form.Item label="Description" {...formItemLayout}>
            {getFieldDecorator("description", {
              initialValue: `${
                Object.keys(formValues).length != 0
                  ? formValues.description
                    ? formValues.description
                    : ""
                  : ""
              }`
            })(<Input type="textarea" size="large" />)}
          </Form.Item>
          <Form.Item
            style={{ display: "inline-block", width: "calc(50% - 12px)" }}
            label="Start date"
            {...dateItemLayout}
          >
            {getFieldDecorator("startTime", {
              initialValue: startTime,
              rules: [
                {
                  type: "object",
                  required: true,
                  message: "Please select start time!"
                },
                {
                  validator: this.checkStart
                }
              ]
            })(<DatePicker showTime format="DD-MM-YYYY HH:mm:ss" />)}
          </Form.Item>
          <Form.Item
            style={{ display: "inline-block", width: "calc(50% - 12px)" }}
            label="End date"
            {...dateItemLayout}
          >
            {getFieldDecorator("endTime", {
              initialValue: endTime,
              rules: [
                {
                  type: "object",
                  required: true,
                  message: "Please select end time!"
                },
                {
                  validator: this.checkEnd
                }
              ]
            })(<DatePicker showTime format="DD-MM-YYYY HH:mm:ss" />)}
          </Form.Item>
        </Form>
      );
    }
  }
);
