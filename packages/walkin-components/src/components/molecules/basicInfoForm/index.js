import React, { Fragment } from 'react';
import { Form, Input, DatePicker } from 'antd';
import moment from 'moment';

const BasicInfoForm = Form.create({ name: 'form_in_modal' })(
	// eslint-disable-next-line
	class BasicInfoForm extends React.Component {

		checkStart = (rule, value, callback) => {
			const { validateFields } = this.props.form;

			const start = value;
			if (start.valueOf() < moment()) {
				callback('start time should not be less than present time');
			} else {
				validateFields(['endTime'], { force: true, });
				callback();
			}
		};

		checkEnd = (rule, value, callback) => {
			const end = value;
			const { getFieldValue } = this.props.form;
			const start = getFieldValue('startTime');
			if (end.valueOf() < start.valueOf()) {
				callback('end time should not be less than start time');
			} else {
				callback();
			}
		};

		render() {
			const { form, onFormNext, wrappedComponentRef, formValues = {}, text } = this.props;
			let startTime = moment()
			let endTime = moment()
			if (Object.keys(formValues).length != 0) {
				startTime = moment(formValues.startTime);
				endTime = moment(formValues.endTime);
			}

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
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.name ? formValues.name : '' : ''}`,
							rules: [{ required: true, message: 'Name is required' }],
						})(<Input value={formValues.name} />)}
					</Form.Item>
					<Form.Item label="Description" {...formItemLayout}>
						{getFieldDecorator('description', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.description ? formValues.description : '' : ''}`,
						})(<Input type="textarea" />)}
					</Form.Item>
					<Form.Item
						style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
						label="Start date"
						{...dateItemLayout}
					>
						{getFieldDecorator('startTime', {
							initialValue: startTime,
							rules: [{ type: 'object', required: true, message: 'Please select start time!' }, this.checkStart],
						})(<DatePicker showTime format="DD-MM-YYYY HH:mm:ss" />)}
					</Form.Item>
					<Form.Item
						style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
						label="End date"
						{...dateItemLayout}
					>
						{getFieldDecorator('endTime', {
							initialValue: endTime,
							rules: [{ type: 'object', required: true, message: 'Please select end time!' }, this.checkEnd],
						})(<DatePicker showTime format="DD-MM-YYYY HH:mm:ss" />)}
					</Form.Item>
				</Form>
			);
		}
	}
);


export default BasicInfoForm;
