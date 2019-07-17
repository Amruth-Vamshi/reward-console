import React, { Fragment } from 'react';
import { Form, Input, DatePicker } from 'antd';
import moment from 'moment';

const SubOrgForm = Form.create({ name: 'form_in_modal' })(
	// eslint-disable-next-line
	class SubOrgForm extends React.Component {
		render() {
			const { form, onFormSubmit, wrappedComponentRef, formValues, text } = this.props;
			const { getFieldDecorator } = form;
			const formItemLayout = {
				labelCol: { span: 7 },
				wrapperCol: { span: 19 },
			};
			return (
				<Form layout="vertical" ref={wrappedComponentRef} onSubmit={onFormSubmit}>
					<Form.Item size={'large'} label="Name" {...formItemLayout}>
						{getFieldDecorator('name', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.name : ''}`,
							rules: [{ required: true, message: 'Name is required' }],
						})(<Input />)}
					</Form.Item>
					<Form.Item label="Code" {...formItemLayout}>
						{getFieldDecorator('code', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.code : ''}`,
							rules: [{ required: true, message: 'Code is required' }],
						})(<Input />)}
					</Form.Item>
					<Form.Item label="Address" {...formItemLayout}>
						{getFieldDecorator('address', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.address : ''}`,
							rules: [{ required: true, message: 'Address is required' }],
						})(<Input />)}
					</Form.Item>
					<Form.Item label="Phone Number" {...formItemLayout}>
						{getFieldDecorator('phoneNumber', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.phoneNumber : ''}`,
							rules: [{ required: true, message: 'Phone number is required' }],
						})(<Input />)}
					</Form.Item>
				</Form>
			);
		}
	}
);
export default SubOrgForm;
