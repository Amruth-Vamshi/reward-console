import React, { Fragment } from 'react';
import { Form, Icon, Input, Select, Row, Col, DatePicker } from 'antd';
const { Option } = Select;

import './style.css';

const OfferRedemptionRulesForm = Form.create({ name: 'offer_redemption_rule' })(
	class OfferRedemptionRulesForm extends React.Component {
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
				<Form {...formItemLayout} style={{ padding: '50px' }} ref={wrappedComponentRef} layout="vertical">
					<Form.Item style={{ display: 'inline-block', width: 'calc(35% - 12px)' }} label="Usage Limit">
						{getFieldDecorator('redemption_usage_limit', {
							initialValue: `${
								Object.keys(formValues).length != 0 ? formValues.redemption_usage_limit : ''
							}`,
						})(<Input type="number" />)}
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
					<Form.Item
						className="textPaddingTop"
						style={{ display: 'inline-block', width: 'calc(65% - 12px)' }}
					>
						<span>
							Maximum no. of times offer can be used by a customer. Ex: User cannot use the offer once
							used
						</span>
					</Form.Item>
					<Form.Item
						className="textPaddingTop"
						style={{ display: 'inline-block', width: 'calc(35% - 12px)' }}
						label="Time Limit"
					>
						{getFieldDecorator('redemption_time_limit', {
							initialValue: `${
								Object.keys(formValues).length != 0 ? formValues.redemption_time_limit : ''
							}`,
						})(
							<Input
								type="number"
								addonAfter={
									<Select defaultValue="day" style={{ width: 80 }}>
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
						<h3>Capping</h3>
						<span>Max discount, cashback or points and no. of items for an offer</span>
					</Form.Item>
					<Form.Item style={{ display: 'inline-block', width: 'calc(35% - 12px)' }} label="Type">
						{getFieldDecorator('type', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.type : ''}`,
						})(
							<Select placeholder="Select a type" onChange={this.handleSelectChange}>
								{cappingData &&
									cappingData.map((el, i) => (
										<Option key={i} value={el.val}>
											{el.title}
										</Option>
									))}
							</Select>
						)}
					</Form.Item>
					<Form.Item style={{ display: 'inline-block', width: 'calc(65% - 12px)' }} label="Value">
						{getFieldDecorator('cappingValue', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.cappingValue : ''}`,
						})(<Input type="number" />)}
					</Form.Item>
					<Form.Item style={{ display: 'inline-block', width: 'calc(35% - 12px)' }} label="Limit on Sku's">
						{getFieldDecorator('redemption_limit_sku_number', {
							initialValue: `${
								Object.keys(formValues).length != 0 ? formValues.redemption_limit_sku_number : ''
							}`,
						})(<Input type="number" />)}
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
