import * as React from 'react';
import { Form, Input, Upload, Button, message } from 'antd';
import moment from 'moment';
const { TextArea } = Input;

const Item = Form.Item

interface iProps {
	form?: any,
	onFormNext?: any,
	wrappedComponentRef?: any,
	formValues?: any,
	text?: string
}

const props = {
	name: 'file',
	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	headers: {
		authorization: 'authorization-text',
	},
	onChange(info: any) {
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

const SMSForm = Form.create({ name: 'form_in_modal' })(
	// eslint-disable-next-line
	class SMSForm extends React.Component<iProps, {}> {
		render() {
			const { form, onFormNext, wrappedComponentRef, formValues, text } = this.props;
			const { getFieldDecorator } = form;
			const formItemLayout = {
				labelCol: { span: 24 },
				wrapperCol: { span: 24 },
			};
			return (
				<Form style={{ paddingTop: '20px' }} layout="vertical" ref={wrappedComponentRef} onSubmit={onFormNext}>
					<Item size={'large'} label="SMS tag" {...formItemLayout}>
						{getFieldDecorator('smsTag', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.smsTag ? formValues.smsTag : "" : ""}`,
							rules: [{ required: true, message: 'SMS tag is required' }],
						})(<Input />)}
					</Item>
					<Item label="SMS body" {...formItemLayout}>
						{getFieldDecorator('smsBody', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.smsBody ? formValues.smsBody : "" : ""}`,
							rules: [{ required: true, message: 'SMS body is required' }],
						})(<TextArea rows={3} />)}
					</Item>
					<Item style={{ paddingLeft: '16px' }}>
						<Upload {...props}>
							<Button>Upload and link file</Button>
						</Upload>
					</Item>
				</Form>
			);
		}
	}
);
export default SMSForm;
