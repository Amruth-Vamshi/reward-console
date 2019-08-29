import React, { Fragment } from 'react';
import { Form, Icon, Input, Select, Button, Col, DatePicker, Radio, Checkbox } from 'antd';
const { TextArea } = Input;
const Option = Select.Option;
const { RangePicker } = DatePicker;
import AddAndDeleteComponentsDynamically from '../../addAndDeleteComponentsDynamically';

const OfferBasicInfoForm = Form.create({ name: 'offer_basic_info' })(
	class OfferBasicInfoForm extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				values: [{ product: '', productItem: '' }],
				productDropDown: {
					showProductList: true,
					showCategoryList: false,
					showBrandList: false,
				},
			};
		}
		addClick() {
			let array = this.state.values;
			array.push({ id: array.length + 1, product: '', productItem: '' });
			this.setState({ values: array });
			// const row = {
			// 	product: '',
			// 	productItem: [],
			// };
			// this.setState({
			// 	values: [...this.state.values, row],
			// });
		}

		handleProductChange(i, value) {
			let nextValues = this.state.values.slice();
			nextValues[i].product = value;
			this.setState({ values: nextValues });
			if (value === 'sku') {
				this.setState(
					Object.assign(this.state.productDropDown, {
						showProductList: true,
						showCategoryList: false,
						showBrandList: false, //not available atm
					})
				);
			}
			if (value === 'category') {
				this.setState(
					Object.assign(this.state.productDropDown, {
						showProductList: false,
						showCategoryList: true,
						showBrandList: false, //not available atm
					})
				);
			}
			if (value === 'brand') {
				this.setState(
					Object.assign(this.state.productDropDown, {
						showProductList: false,
						showCategoryList: false,
						showBrandList: true, //not available atm
					})
				);
			}
		}

		handleProductItemChange(i, value) {
			let nextValues = this.state.values.slice();
			nextValues[i].productItem = value;
			this.setState({ values: nextValues });
		}

		removeClick(i, e) {
			const values = [...this.state.values];
			values.splice(i, 1);
			this.setState({ values });
			// let someArray = this.state.values;
			// someArray.splice(i, 1);
			// this.setState({ values: someArray });
		}
		render() {
			const {
				offerTypeData,
				handleOfferTypeChange,
				offerTypeStatus,
				transactionTimeData,
				locationData,
				productData,
				handleTransactionTimeChange,
				transactionTimeStatus,
				cartValueConditionData,
				wrappedComponentRef,
				form,
				products,
				handleLocationChange,
				locationArray,
				productItems,
				onSelectOneValuesSelected,
				onSelectTwoValuesSelected,
				formValues,
				locationValues,
				productValues,
				couponDefaultValue,
				onCouponChange,
				couponTypeSelected,
				couponInputLabel,
				onCouponLabelChange,
				checked,
				OnNoCouponCodeChange,
				couponTypeData,
			} = this.props;
			const { productDropDown } = this.state;
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
					<Form.Item style={{ display: 'inline-block', width: 'calc(35% - 12px)' }} label="Offer Type">
						{getFieldDecorator('offerType', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.offerType : ''}`,
							rules: [{ required: true, message: 'Please input offer type!' }],
						})(
							<Select placeholder="Select an offer type" onChange={handleOfferTypeChange}>
								{offerTypeData &&
									offerTypeData.map((el, i) => (
										<Option key={i} value={el.val}>
											{el.title}
										</Option>
									))}
							</Select>
						)}
					</Form.Item>
					{offerTypeStatus.showList === false && (
						<Form.Item style={{ display: 'inline-block', width: 'calc(20% - 12px)' }} label="Value">
							{getFieldDecorator('offerTypeValue', {
								initialValue: `${Object.keys(formValues).length != 0 ? formValues.offerTypeValue : ''}`,
							})(
								<Input
									type="number"
									addonAfter={offerTypeStatus.showPercent === true ? <Icon type="percentage" /> : ''}
									addonBefore={offerTypeStatus.showRupee === true ? 'Rs.' : ''}
								/>
							)}
						</Form.Item>
					)}
					{offerTypeStatus.showList === true && (
						<Form.Item style={{ display: 'inline-block', width: 'calc(20% - 12px)' }} label="Value">
							{getFieldDecorator('offerTypeValue', {
								initialValue: `${Object.keys(formValues).length != 0 ? formValues.offerTypeValue : ''}`,
							})(
								<Select
									showSearch
									mode="multiple"
									style={{ width: '300px' }}
									placeholder="Please select"
									onChange={this.handleChange}
								>
									{products &&
										products.map((el, i) => (
											<Option key={i} value={el.sku}>
												{el.name}
											</Option>
										))}
								</Select>
							)}
						</Form.Item>
					)}
					<Form.Item style={{ width: 'calc(100% - 22px)' }} label="Offer Name">
						{getFieldDecorator('offerName', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.offerName : ''}`,
							rules: [{ required: true, message: 'Please input offer name!' }],
						})(<Input />)}
					</Form.Item>

					<Form.Item label="Product">
						{/* can't be a part of form as it breaks the functionality
					TODO: Figure out a way around it */}
						<AddAndDeleteComponentsDynamically
							onSelectOneValuesSelected={(val, state) => {
								onSelectOneValuesSelected(val, 'product', state);
							}}
							onSelectTwoValuesSelected={onSelectTwoValuesSelected}
							data_1={productData}
							data_2={productItems}
							form={this.props.form}
							productValues={productValues}
							defaultSelectOneValue="product_category"
							defaultSelectTwoValue="all"
						/>
					</Form.Item>

					<Form.Item label="Location">
						<AddAndDeleteComponentsDynamically
							onSelectOneValuesSelected={(...props) => {
								onSelectOneValuesSelected.apply(this, [...props, 'location']);
							}}
							onSelectTwoValuesSelected={onSelectTwoValuesSelected}
							data_1={locationData}
							data_2={locationArray}
							locationValues={locationValues}
							defaultSelectOneValue="location_state"
							defaultSelectTwoValue="all"
						/>
					</Form.Item>
					<Form.Item
						placeholder="Select a transaction time"
						style={{ display: 'inline-block', width: 'calc(35% - 12px)' }}
						label="Condition"
					>
						{getFieldDecorator('transactionTime', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.transactionTime : ''}`,
						})(
							<Select
								defaultValue="frequency"
								placeholder="Select a transaction time"
								onChange={handleTransactionTimeChange}
							>
								{transactionTimeData &&
									transactionTimeData.map((el, i) => (
										<Option key={i} value={el.val}>
											{el.title}
										</Option>
									))}
							</Select>
						)}
					</Form.Item>
					{transactionTimeStatus && transactionTimeStatus.showFrequency === true && (
						<Fragment>
							<Form.Item
								style={{ display: 'inline-block', width: 'calc(31% - 12px)' }}
								label="No. Of Transaction"
							>
								{getFieldDecorator('noOfTransaction', {
									initialValue: `${
										Object.keys(formValues).length != 0 ? formValues.noOfTransaction : ''
									}`,
								})(<Input />)}
							</Form.Item>
							<Form.Item style={{ display: 'inline-block', marginTop: '20px', width: 'calc(5% - 12px)' }}>
								<span>In</span>
							</Form.Item>
							<Form.Item
								style={{ display: 'inline-block', width: 'calc(31% - 12px)' }}
								label="No. Of Days"
							>
								{getFieldDecorator('noOfDays', {
									initialValue: `${Object.keys(formValues).length != 0 ? formValues.noOfDays : ''}`,
								})(<Input />)}
							</Form.Item>
						</Fragment>
					)}
					{transactionTimeStatus && transactionTimeStatus.showDayPart === true && (
						<Fragment>
							<Form.Item
								style={{ display: 'inline-block', width: 'calc(65% - 12px)' }}
								label="Choose Date"
							>
								{getFieldDecorator('dateRange', {
									initialValue: `${Object.keys(formValues).length != 0 ? formValues.dateRange : ''}`,
								})(<RangePicker showTime format="DD-MM-YYYY HH:mm:ss" />)}
							</Form.Item>
						</Fragment>
					)}
					{transactionTimeStatus && transactionTimeStatus.showCartValue === true && (
						<Fragment>
							<Form.Item
								style={{ display: 'inline-block', width: 'calc(33.5% - 12px)' }}
								label="Operator"
							>
								{getFieldDecorator('cartValueCondition', {
									initialValue: `${
										Object.keys(formValues).length != 0 ? formValues.cartValueCondition : ''
									}`,
								})(
									<Select onChange={this.handleSelectChange}>
										{cartValueConditionData &&
											cartValueConditionData.map((el, i) => (
												<Option key={i} value={el.val}>
													{el.title}
												</Option>
											))}
									</Select>
								)}
							</Form.Item>
							<Form.Item style={{ display: 'inline-block', width: 'calc(33.5% - 12px)' }} label="Value">
								{getFieldDecorator('cartValue', {
									initialValue: `${Object.keys(formValues).length != 0 ? formValues.cartValue : ''}`,
								})(<Input />)}
							</Form.Item>
						</Fragment>
					)}
					<Form.Item style={{ width: 'calc(35% - 12px)' }} label="Coupon">
						{getFieldDecorator('couponType', {
							initialValue: `${Object.keys(formValues).length != 0 ? formValues.couponType : ''}`,
							rules: [{ required: true, message: 'Please input coupon type!' }],
						})(
							<Radio.Group
								defaultValue={couponDefaultValue}
								onChange={onCouponChange}
								value={couponTypeSelected}
							>
								{couponTypeData &&
									couponTypeData.map((el, i) => (
										<Radio key={i} value={el.value}>
											{el.title}
										</Radio>
									))}
							</Radio.Group>
						)}
					</Form.Item>
					{couponTypeSelected == 1 && (
						<Form.Item style={{ marginLeft: '15px', width: 'calc(65% - 12px)' }} label="Enter Coupon Label">
							{getFieldDecorator('couponLabel', {
								initialValue: `${Object.keys(formValues).length != 0 ? formValues.couponLabel : ''}`,
								rules: [{ required: true, message: 'Please input coupon label!' }],
							})(<Input placeholder={couponInputLabel} onChange={onCouponLabelChange} />)}
						</Form.Item>
					)}
					{couponTypeSelected == 2 && (
						<Form.Item style={{ marginLeft: '15px', width: 'calc(65% - 12px)' }}>
							<Checkbox checked={checked} onChange={OnNoCouponCodeChange}>
								Auto apply coupon code
							</Checkbox>
						</Form.Item>
					)}
				</Form>
			);
		}
	}
);

export default OfferBasicInfoForm;
