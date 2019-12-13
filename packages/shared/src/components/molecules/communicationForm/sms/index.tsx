import * as React from 'react';
import { Form, Input, Upload, Button, message, Popover, Select } from 'antd';
import moment from 'moment';
import { FormComponentProps } from 'antd/lib/form';
import { UploadProps } from 'antd/lib/upload';
const { TextArea } = Input;

const Option = Select.Option;
const Item = Form.Item

interface iProps extends FormComponentProps {
	onFormNext?: any,
	wrappedComponentRef?: any,
	formValues?: any,
	text?: string
	linkTypeSelect?
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


const SMSForm = Form.create<iProps>({
	name: 'form_in_modal', mapPropsToFields(props) {
		return {
			smsBody: Form.createFormField({
				value: props.formValues.smsBody
			}),
			smsTag: Form.createFormField({
				value: props.formValues.smsTag
			}),
		};
	},

})(
	// eslint-disable-next-line
	class SMSForm extends React.Component<iProps, {}> {
		state = {
			visible: false, linkType: ''
		};

		hide = () => this.setState({ visible: false });

		handleVisibleChange = visible => {
			this.setState({ visible });
		};

		handleTypeChange = (e) => {
			console.log('handleTypeChange', e);

			// let { formValues } = this.props
			// this.props.formValues.smsBody = formValues.smsBody ? formValues.smsBody + e : e

			this.props.linkTypeSelect(e)
			this.setState({ visible: false, linkType: '' });
			// this.setState({ repeatType: e, saved: false })
		}

		popupContent = () => <div>
			<Select
				getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
				style={{ width: '100%' }} value={this.state.linkType} autoFocus
				placeholder="Select Type" optionFilterProp="children" //defaultOpen
				onChange={e => this.handleTypeChange(e)} showSearch
				filterOption={(input: any, option: any) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
				<Option value="firstName">First Name</Option>
				<Option value="lastName">Last Name</Option>
				<Option value="date">Date</Option>
				<Option value="time">Time</Option>
			</Select>
		</div>



		render() {
			const { form, onFormNext, wrappedComponentRef, text } = this.props;
			const formValues = this.props.formValues ? this.props.formValues : {}
			const { getFieldDecorator } = form;
			const formItemLayout = {
				labelCol: { span: 24 },
				wrapperCol: { span: 24 },
			};
			console.log('>>>', this.props.formValues.smsBody);
			return (
				<Form style={{ paddingTop: '20px' }} layout="vertical" ref={wrappedComponentRef} onSubmit={onFormNext}>
					<Item label="SMS tag" {...formItemLayout}>
						{getFieldDecorator('smsTag', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.smsTag ? formValues.smsTag : "" : ""}`,
							rules: [{ required: true, message: 'SMS tag is required' }],
						})(<Input />)}
					</Item>
					<Item label="SMS body" {...formItemLayout}>
						{getFieldDecorator('smsBody', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.smsBody ? formValues.smsBody : "" : ""}`,
							rules: [{ required: true, message: 'SMS body is required' }],
						})(<TextArea rows={3} name='smsBody' onChange={(e: any) => { this.props.formValues.smsBody = e.target.value }} //defaultValue={this.props.formValues.smsBody} value={this.props.formValues.smsBody} 
						/>)}
						<div style={{ float: 'right' }}>
							<Popover title="Select Link Type" trigger="click" content={this.popupContent()}
								visible={this.state.visible} onVisibleChange={this.handleVisibleChange}>
								<Button style={{ margin: 0 }}>{'</>'}</Button>
							</Popover>
						</div>
					</Item>
					{/* <Item style={{ paddingLeft: '16px' }}>
						<Upload {...props}>
							<Button>Upload and link file</Button>
						</Upload>
					</Item> */}
				</Form>
			);
		}
	}
);
export default SMSForm;
