import './style.css';

import { Form, Input, Select } from 'antd';
import React from 'react';
import { FormComponentProps } from 'antd/lib/form';

const { Option } = Select;

interface IProps extends FormComponentProps {
	cappingData?: Array<any>;
	wrappedComponentRef?: any;
	formValues?: any
}



const OfferRedemptionRulesForm = Form.create<IProps>({ name: 'offer_redemption_rule' })(
	class OfferRedemptionRulesForm extends React.Component<IProps, {}> {
		render() {
			const { cappingData, wrappedComponentRef, form, formValues } = this.props;
			const { getFieldDecorator } = form;
			const formItemLayout = {
				labelCol: {
					xs: { span: 24 },
					sm: { span: 24 },
				},
				wrapperCol: {
					xs: { span: 24 },
					sm: { span: 24 },
				},
			};
			return (
				<Form {...formItemLayout} className='offerRedemptionForm' style={{ padding: '20px 50px' }} ref={wrappedComponentRef} layout="vertical">
					<Form.Item style={{ display: 'inline-block', width: 'calc(35% - 12px)' }} label="Usage Limit">
						{getFieldDecorator('redemption_usage_limit', {
							initialValue: `${
								Object.keys(formValues).length != 0 ? formValues.redemption_usage_limit : ''
								}`,
						})(<Input type="number" min={0} />)}
					</Form.Item>
					<Form.Item
						className="textPaddingTop"
						style={{ display: 'inline-block', width: 'calc(65% - 12px)' }}
					>
						<span>
							Defined as maximum number of times an offer can be used collectively by target segment
						</span>
					</Form.Item>
					<Form.Item
						style={{ display: 'inline-block', width: 'calc(35% - 12px)' }}
						label="Usage Limit At Customer Level"
					>
						{getFieldDecorator('redemption_usage_limit_at_customer', {
							initialValue: `${
								Object.keys(formValues).length != 0 ? formValues.redemption_usage_limit_at_customer : ''
								}`,
						})(<Input type="number" />)}
					</Form.Item>
					<Form.Item className="textPaddingTop"
						style={{ display: 'inline-block', width: 'calc(65% - 12px)' }} >
						<span>
							Maximum no. of times offer can be used by a customer. Ex: User cannot use the offer once used
						</span>
					</Form.Item>
					<Form.Item
						style={{ display: 'inline-block', width: 'calc(35% - 12px)' }}
						label="Time Limit"
					>
						{getFieldDecorator('redemption_time_limit', {
							initialValue: `${
								Object.keys(formValues).length != 0 ? formValues.redemption_time_limit : ''}`,
						})(
							<Input
								type="number" min={0}
								addonAfter={
									<Select getPopupContainer={(triggerNode: any) => triggerNode.parentNode} defaultValue="day" style={{ width: 100 }}>
										<Option value="day">/Day</Option>
										<Option value="week">/Week</Option>
										<Option value="month">/Month</Option>
									</Select>
								}
							/>
						)}
					</Form.Item>
					<Form.Item
						className="textPaddingTop"
						style={{ display: 'inline-block', width: 'calc(65% - 12px)' }}
					>
						<span>Maximum no. of times an offer can be used within a time duration</span>
					</Form.Item>
					<Form.Item>
						<h3 style={{ marginTop: 22 }}>Capping</h3>
						<span>Max discount, cashback or points and no. of items for an offer</span>
					</Form.Item>
					<Form.Item style={{ display: 'inline-block', width: 'calc(35% - 12px)' }} label="Type">
						{getFieldDecorator('type', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.type : ''}`,
						})(
							<Select placeholder="Select a type" //onChange={this.handleSelectChange}
								getPopupContainer={(triggerNode: any) => triggerNode.parentNode}>
								{cappingData &&
									cappingData.map((el: any, i: any) => (
										<Option key={i} value={el.value}> {el.title} </Option>
									))}
							</Select>
						)}
					</Form.Item>
					<Form.Item style={{ display: 'inline-block', width: 'calc(65% - 12px)' }} label="Value">
						{getFieldDecorator('cappingValue', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.cappingValue : ''}`,
						})(<Input type="number" min={0} />)}
					</Form.Item>
					<Form.Item style={{ display: 'inline-block', width: 'calc(35% - 12px)' }} label="Limit on Sku's">
						{getFieldDecorator('redemption_limit_sku_number', {
							initialValue: `${
								Object.keys(formValues).length != 0 ? formValues.redemption_limit_sku_number : ''
								}`,
						})(<Input type="number" min={0} />)}
					</Form.Item>
					<Form.Item
						className="textPaddingTop"
						style={{ display: 'inline-block', width: 'calc(65% - 12px)' }}
					>
						<span>Offer is applicable only on X number of SKU's</span>
					</Form.Item>
				</Form>
			);
		}
	}
);

export default OfferRedemptionRulesForm;
