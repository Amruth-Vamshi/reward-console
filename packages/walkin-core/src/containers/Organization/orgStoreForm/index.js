import React, { Fragment } from 'react';
import { Form, Input, DatePicker } from 'antd';
import moment from 'moment';

const OrgStoreForm = Form.create({ name: 'form_in_modal' })(
	// eslint-disable-next-line
	class OrgStoreForm extends React.Component {
		render() {
			const { form, onOrgStoreFormSubmit, wrappedComponentRef, storeFormValues, text } = this.props;
			const { getFieldDecorator } = form;
			const formItemLayout = {
				labelCol: { span: 7 },
				wrapperCol: { span: 19 },
			};
			return (
				<Form layout="vertical" ref={wrappedComponentRef} onSubmit={onOrgStoreFormSubmit}>
					<Form.Item size={'large'} label="Store Code" {...formItemLayout}>
						{getFieldDecorator('code', {
							initialValue: `${Object.keys(storeFormValues).length != 0 ? storeFormValues.code : ''}`,
							rules: [{ required: true, message: 'Store Code is required' }],
						})(<Input />)}
					</Form.Item>
					<Form.Item label="Name" {...formItemLayout}>
						{getFieldDecorator('name', {
							initialValue: `${Object.keys(storeFormValues).length != 0 ? storeFormValues.name : ''}`,
							rules: [{ required: true, message: 'Code is required' }],
						})(<Input />)}
					</Form.Item>
					<Form.Item label="Address" {...formItemLayout}>
						{getFieldDecorator('address', {
							initialValue: `${Object.keys(storeFormValues).length != 0 ? storeFormValues.address : ''}`,
							rules: [{ required: true, message: 'Address is required' }],
						})(<Input />)}
					</Form.Item>
				</Form>
			);
		}
	}
);
export default OrgStoreForm;
