import React, { Fragment } from 'react';
import { Form, Input, DatePicker } from 'antd';
import moment from 'moment';

const BasicInfoForm = Form.create({ name: 'form_in_modal' })(
	// eslint-disable-next-line
	class BasicInfoForm extends React.Component {
		render() {
			const { form, onFormNext, wrappedComponentRef, formValues, text } = this.props;
			const { getFieldDecorator } = form;
			const formItemLayout = {
				labelCol: { span: 6 },
				wrapperCol: { span: 18 },
			};
			const dateItemLayout = {
				wrapperCol: { span: 18 },
				labelCol: { span: 10 },
			};
			return (
				<Form layout="vertical" ref={wrappedComponentRef} onSubmit={onFormNext}>
					<Form.Item size={'large'} label="Campaign name" {...formItemLayout}>
						{getFieldDecorator('name', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.name : ''}`,
							rules: [{ required: true, message: 'Name is required' }],
						})(<Input />)}
					</Form.Item>
					<Form.Item label="Description" {...formItemLayout}>
						{getFieldDecorator('description', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.description : ''}`,
						})(<Input type="textarea" />)}
					</Form.Item>
					<Form.Item
						style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
						label="Start date"
						{...dateItemLayout}
					>
						{getFieldDecorator('startDate', {
							rules: [{ type: 'object', required: true, message: 'Please select start time!' }],
						})(<DatePicker showTime format="DD-MM-YYYY HH:mm:ss" />)}
					</Form.Item>
					<Form.Item
						style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
						label="End date"
						{...dateItemLayout}
					>
						{getFieldDecorator('endDate', {
							rules: [{ type: 'object', required: true, message: 'Please select end time!' }],
						})(<DatePicker showTime format="DD-MM-YYYY HH:mm:ss" />)}
					</Form.Item>
				</Form>
			);
		}
	}
);
export default BasicInfoForm;
