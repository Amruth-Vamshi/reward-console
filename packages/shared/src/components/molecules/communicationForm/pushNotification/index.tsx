import * as React from 'react';
import { Form, Input, Upload, Button } from 'antd';
import moment from 'moment';
const { TextArea } = Input;

const props = {
	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	listType: 'picture',
};

interface iProps {
	form?: any,
	onFormNext?: any,
	wrappedComponentRef?: any,
	formValues?: any,
	text?: string
}

const PushNotificationForm = Form.create({ name: 'form_in_modal' })(
	// eslint-disable-next-line
	class PushNotificationForm extends React.Component<iProps, {}> {
		render() {
			const { form, onFormNext, wrappedComponentRef, formValues, text } = this.props;
			const { getFieldDecorator } = form;
			const formItemLayout = {
				labelCol: { span: 24 },
				wrapperCol: { span: 24 },
			};
			return (
				<Form
					style={{ paddingTop: '20px', paddingBottom: '20px' }}
					layout="vertical" ref={wrappedComponentRef} onSubmit={onFormNext}
				>
					<Form.Item size={'large'} label="Notification tag" {...formItemLayout}>
						{getFieldDecorator('notificationTag', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.notificationTag : ""}`,
							rules: [{ required: true, message: 'Notification tag is required' }],
						})(<Input />)}
					</Form.Item>
					<Form.Item size={'large'} label="Title for notification" {...formItemLayout}>
						{getFieldDecorator('notificationTitle', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.notificationTitle : ""}`,
							rules: [{ required: true, message: 'Notification title is required' }],
						})(<Input />)}
					</Form.Item>
					<Form.Item label="Notification body" {...formItemLayout}>
						{getFieldDecorator('notificationBody', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.notificationBody : ""}`,
							rules: [{ required: true, message: 'Notification body is required' }],
						})(<TextArea rows={3} />)}
					</Form.Item>
					<Form.Item style={{ paddingLeft: '16px' }}>
						<Upload {...props}>
							<Button>Attach image</Button>
						</Upload>
					</Form.Item>
					{/* <Form.Item size={'large'} label="Deep linking path" {...formItemLayout}>
						{getFieldDecorator('deepLinking', {
							initialValue: '',
						})(<Input />)}
					</Form.Item> */}
				</Form>
			);
		}
	}
);
export default PushNotificationForm;
