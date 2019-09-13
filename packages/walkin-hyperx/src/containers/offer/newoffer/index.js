import React, { Component, Fragment } from 'react';
import { Col, Alert, message, Radio, Checkbox, Input } from 'antd';
import { withRouter } from 'react-router-dom';
import { withApollo, graphql, compose, mutate } from 'react-apollo';
import { CREATE_RULE } from '../../../query/audience';
import { OFFER_LIST } from '../../../utils/RouterConstants';
import get from 'lodash/get';
import { Stepper, CampaignHeader, CampaignFooter } from '@walkinsole/walkin-components';
import OfferBasicInfoForm from '../../../components/atoms/offerForm/basicInfo';
import isEmpty from 'lodash/isEmpty';
import './style.css';
import OfferRedemptionRulesForm from '../../../components/atoms/offerForm/redemptionRule';
import { products, categories, subOrganizations, createOffer, updateOffer, launchOffer } from '../../../query/offer';
import { returnMatchingKeyvalues } from '../../../utils/common/index';
import omit from 'lodash/omit';
import remove from 'lodash/remove';
import { transposeObject, isValidObject } from '../../../utils/common';

const offerStepData = [
	{
		id: 1,
		route: 'basicInfo',
		title: 'Basic Info',
	},
	{
		id: 2,
		title: 'Redemption Rule',
		route: 'redemptionRule',
	},
];
const couponTypeData = [
	{
		id: 1,
		value: 1,
		title: 'Static',
	},
	{
		id: 2,
		value: '2',
		title: 'No Coupon Code',
	},
];
const offerTypeData = [
	{
		id: 1,
		val: 'PERCENTAGE_DISCOUNT',
		title: 'Discount on the bill',
	},
	{
		id: 2,
		val: 'FLATX_DISCOUNT',
		title: 'Flat Xrs off on the bill',
	},
	{
		id: 3,
		val: 'PERCENTAGE_CASHBACK',
		title: '% Cashback on the bill',
	},
	{
		id: 4,
		val: 'FLATX_CASHBACK',
		title: 'Flat X Cashback on the bill',
	},
	{
		id: 5,
		val: 'FREE_ITMES_FROM_LIST',
		title: 'Any item/items from the list',
	},
];

let transactionTimeData = [
	{
		id: 1,
		val: 'frequency',
		title: 'Frequency',
	},
	{
		id: 2,
		val: 'dayPart',
		title: 'Daypart',
	},
	{
		id: 3,
		val: 'cartValue',
		title: 'Cart value aka Bill size',
	},
];

let productData = [
	{
		id: 1,
		value: 'product_sku',
		title: 'SKU',
	},
	{
		id: 2,
		value: 'product_brand',
		title: 'Brand',
	},
	{
		id: 3,
		value: 'product_category',
		title: 'Category',
	},
];

let locationData = [
	{
		id: 1,
		value: 'location_city',
		title: 'City',
	},
	{
		id: 2,
		value: 'location_state',
		title: 'State',
	},
	{
		id: 3,
		value: 'location_pincode',
		title: 'Pincode',
	},
	{
		id: 4,
		value: 'location_store',
		title: 'Store',
	},
];

let cartValueConditionData = [
	{
		id: 1,
		val: 'equalTo',
		title: 'Equal to',
	},
	{
		id: 2,
		val: 'notEqualTo',
		title: 'Not Equal to',
	},
	{
		id: 3,
		val: 'greaterThan',
		title: 'Greater than',
	},
	{
		id: 4,
		val: 'equalToOrGreaterThan',
		title: 'Equal/Greater than',
	},
	{
		id: 5,
		val: 'equalToOrLessThan',
		title: 'Equal/Less than',
	},
];

let cappingData = [
	{
		id: 1,
		val: 'redemption_cap_max_discount',
		title: 'Max discount',
	},
	{
		id: 2,
		val: 'redemption_cap_max_cashback',
		title: 'Max Cashback',
	},
	{
		id: 3,
		val: 'redemption_cap_no_of_items',
		title: 'No. of items',
	},
];

const dummyBrandData = [
	{
		id: 1,
		title: 'sample1',
		val: 'sampleOne',
	},
	{
		id: 3,
		name: 'sample2',
		val: 'sampleTwo',
	},
];

class NewOffer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 0,
			offerId: '',
			couponTypeSelected: null,
			newOfferErrorMessage: '',
			offerEligibityRule: {},
			offerType: {},
			couponLableSelected: '',
			productValues: [],
			redemptionRule: {},
			offerEligibityRuleId: '',
			locationValues: [],
			formValues: {
				basicForm: {},
				redemptionForm: {},
			},
			offerTypeStatus: {
				showPercent: false,
				showRupee: false,
				showList: false,
			},
			transactionTimeStatus: {
				showFrequency: true,
				showDayPart: false,
				cartValue: false,
			},
			productDropDown: {
				showProductList: false,
				showCategoryList: true,
				showBrandList: false,
			},
			locationDropDown: {
				showCityList: false,
				showStateList: true,
				showPincodeList: false,
				showStoreList: false,
			},
		};
	}

	displayError = (state, message) => {
		this.setState({ [state]: message }, () => {
			setTimeout(() => {
				this.setState({ [state]: '' });
			}, 4000);
		});
	};

	onOfferTypeChange = value => {
		if (value === 'PERCENTAGE_DISCOUNT' || value === 'PERCENTAGE_CASHBACK') {
			this.setState(
				Object.assign(this.state.offerTypeStatus, { showRupee: false, showPercent: true, showList: false })
			);
		}
		if (value === 'FLATX_OFF_ON_BILL') {
			this.setState(
				Object.assign(this.state.offerTypeStatus, { showRupee: true, showPercent: false, showList: false })
			);
		}
		if (value === 'FREE_ITEMS') {
			this.setState(
				Object.assign(this.state.offerTypeStatus, { showList: true, showPercent: false, showRupee: false })
			);
		}
		if (value === 'FLAT_CASHBACK') {
			this.setState(
				Object.assign(this.state.offerTypeStatus, { showList: false, showPercent: false, showRupee: false })
			);
		}
	};

	onTransactionTimeChange = value => {
		if (value === 'dayPart') {
			this.setState(
				Object.assign(this.state.transactionTimeStatus, {
					showFrequency: false,
					showDayPart: true,
					showCartValue: false,
				})
			);
		}
		if (value === 'frequency') {
			this.setState(
				Object.assign(this.state.transactionTimeStatus, {
					showFrequency: true,
					showDayPart: false,
					showCartValue: false,
				})
			);
		}
		if (value === 'cartValue') {
			this.setState(
				Object.assign(this.state.transactionTimeStatus, {
					showFrequency: false,
					showDayPart: false,
					showCartValue: true,
				})
			);
		}
	};

	onValuesSelected = (value, str, stateValues) => {
		if (str === 'product') {
			if (value === 'product_sku') {
				this.setState(
					Object.assign(this.state.productDropDown, {
						showProductList: true,
						showCategoryList: false,
						showBrandList: false, //not available atm
					})
				);
			}
			if (value === 'product_category') {
				this.setState(
					Object.assign(this.state.productDropDown, {
						showProductList: false,
						showCategoryList: true,
						showBrandList: false, //not available atm
					})
				);
			}
			if (value === 'product_brand') {
				this.setState(
					Object.assign(this.state.productDropDown, {
						showProductList: false,
						showCategoryList: false,
						showBrandList: true, //not available atm
					})
				);
			}
			this.setState({
				productValues: stateValues,
			});
		} else {
			if (value == 'location_city') {
				this.setState(
					Object.assign(this.state.locationDropDown, {
						showCityList: true,
						showStateList: false,
						showPincodeList: false,
						showStoreList: false,
					})
				);
			}
			if (value == 'location_state') {
				this.setState(
					Object.assign(this.state.locationDropDown, {
						showCityList: false,
						showStateList: true,
						showPincodeList: false,
						showStoreList: false,
					})
				);
			}
			if (value == 'location_pincode') {
				this.setState(
					Object.assign(this.state.locationDropDown, {
						showCityList: false,
						showStateList: false,
						showPincodeList: true,
						showStoreList: false,
					})
				);
			}
			if (value == 'location_store') {
				this.setState(
					Object.assign(this.state.locationDropDown, {
						showCityList: false,
						showStateList: false,
						showPincodeList: false,
						showStoreList: true,
					})
				);
			}
		}
	};

	onBasicInfoSubmit = val => { };
	saveFormValues = (current, state, ref) => {
		const form = ref && ref.props.form;
		if (form) {
			form.validateFields((err, values) => {
				if (err) {
					return;
				} else {
					this.setState(
						Object.assign(this.state.formValues, {
							[state]: values,
						})
					);
				}
			});
		}
	};

	goToNextPage = (current, e) => {
		let { client } = this.props;
		const { formValues } = this.state;
		if (current === 1 && e && e.target.innerText === 'Next') {
			if (isEmpty(formValues.basicForm) || isValidObject(formValues.basicForm)) {
				this.saveFormValues(current, 'basicForm', this.basicFormRef);
				let { productValues, locationValues, formValues } = this.state;
				let { basicForm } = formValues;
				let offerType = {};
				offerType[basicForm.offerType] = parseInt(basicForm.offerTypeValue);

				let combinedArray = productValues.concat(locationValues);
				let reArrangedObj = {};
				let arr;
				combinedArray.map(val => {
					reArrangedObj[val.valueOne] = val.valueTwo;
					arr = transposeObject(reArrangedObj && reArrangedObj, 'in');
				});
				let basicFormArray = { rules: arr, combinator: 'and' };
				this.setState({
					offerEligibityRule: basicFormArray,
					offerType: offerType,
					current: current,
				});
			}
		} else if (e && e.target.innerText === 'Save') {
			const { formValues } = this.state;
			if (!isEmpty(formValues.basicForm)) {
				if (isEmpty(formValues.redemptionForm) || isValidObject(formValues.redemptionForm)) {
					this.saveFormValues(current, 'redemptionForm', this.redemptionRef);
					if (this.state.formValues && this.state.formValues.redemptionForm) {
						let redemptionFormObject = this.state.formValues.redemptionForm;
						redemptionFormObject[redemptionFormObject.type] = redemptionFormObject.cappingValue;
						let ommitedObject = omit(redemptionFormObject, ['type', 'cappingValue']);
						let redemptionArray = { rules: transposeObject(ommitedObject, '='), combinator: 'and' };
						const { offerEligibityRule, redemptionRule } = this.state;
						let org_id = get(client, 'cache.data.data["$ROOT_QUERY.auth"].organizationId');
						client
							.mutate({
								mutation: CREATE_RULE,
								variables: {
									name: Math.random()
										.toString(36)
										.substring(7),
									type: 'SIMPLE',
									organizationId: org_id,
									status: 'ACTIVE',
									ruleConfiguration: JSON.stringify(offerEligibityRule),
								},
							})
							.then(({ data }) => {
								console.log('created rule', data);
								this.setState({
									offerEligibityRuleId: data.createRule.id,
								});
								client
									.mutate({
										mutation: CREATE_RULE,
										variables: {
											name: Math.random()
												.toString(36)
												.substring(7),
											type: 'SIMPLE',
											organizationId: org_id,
											status: 'ACTIVE',
											ruleConfiguration: JSON.stringify(redemptionArray),
										},
									})
									.then(({ data }) => {
										console.log('created redemption rule', data);
										const {
											offerEligibityRuleId,
											offerType,
											formValues,
											couponLableSelected,
											couponTypeSelected,
										} = this.state;
										client
											.mutate({
												mutation: createOffer,
												variables: {
													name: formValues.basicForm.offerName,
													offerType: formValues.basicForm.offerType,
													reward: JSON.stringify(offerType),
													organizationId: org_id,
													offerEligibilityRule: offerEligibityRuleId,
													offerCategory: couponTypeSelected === 1 ? 'COUPONS' : 'AUTO_APPLY',
													isCustomCoupon: couponTypeSelected === 1 ? true : false,
													coupon: couponTypeSelected === 1 ? couponLableSelected : null,
													rewardRedemptionRule: data.createRule.id,
												},
											})
											.then(({ data }) => {
												console.log('created offer', data);
												client
													.mutate({
														mutation: launchOffer,
														variables: {
															id: data.createOffer.id,
														},
													})
													.then(({ data }) => {
														console.log('created offer', data);
														const { history } = this.props;
														history.push({
															pathname: OFFER_LIST,
														});

														message.success('Your changes were saved', 5);
													})
													.catch(error => {
														console.log('error', error);
														this.displayError(
															'newOfferErrorMessage',
															error && error.graphQLErrors[0]
																? error.graphQLErrors[0].message
																: 'Error in submitting the form'
														);
													});
											})
											.catch(error => {
												console.log('error', error);
												this.displayError(
													'newOfferErrorMessage',
													error && error.graphQLErrors[0]
														? error.graphQLErrors[0].message
														: 'Error in submitting the form'
												);
											});
									})
									.catch(error => {
										console.log('error', error);
										this.displayError(
											'newOfferErrorMessage',
											error && error.graphQLErrors[0]
												? error.graphQLErrors[0].message
												: 'Error in submitting the form'
										);
									});
							})
							.catch(error => {
								console.log('error', error);
								this.displayError(
									'newOfferErrorMessage',
									error && error.graphQLErrors[0]
										? error.graphQLErrors[0].message
										: 'Error in submitting the form'
								);
							});
					}
				}
			}
		} else {
			this.setState({
				current: current,
			});
		}
	};

	saveFormRef = basicFormRef => {
		this.basicFormRef = basicFormRef;
	};

	saveRedemptionFormRef = redemptionRef => {
		this.redemptionRef = redemptionRef;
	};

	isKeyExists = (obj, key) => {
		if (obj[key]) {
			return [obj[key]];
		} else {
			return [];
		}
	};

	onSelectTwoValuesSelected = values => {
		this.setState({
			locationValues: values,
		});
	};

	onCouponChange = e => {
		this.setState({
			couponTypeSelected: e.target.value,
		});
	};

	onCouponLabelChange = e => {
		this.setState({
			couponLableSelected: e.target.value,
		});
	};

	render() {
		const {
			current,
			offerTypeStatus,
			transactionTimeStatus,
			productDropDown,
			locationDropDown,
			values,
			newOfferErrorMessage,
			couponTypeSelected,
			productValues,
			locationValues,
			formValues,
		} = this.state;
		const { loading, error, categories, products, organizationHierarchy, subOrganizations } = this.props;
		console.log(
			'productsproductsproductsproducts',
			products,
			this.props.client.cache.data.data['$ROOT_QUERY.auth'].organizationId,
			subOrganizations
		);
		let productItems;
		if (productDropDown.showProductList == true) {
			productItems =
				products &&
				products.map(el => ({
					value: el.sku,
					id: el.id,
					title: el.name,
				}));
		}
		if (productDropDown.showCategoryList == true) {
			productItems =
				categories &&
				categories
					.map(el => ({
						value: el.code,
						id: el.id,
						title: el.name,
					}))
					.concat([
						{
							value: 'all',
							id: 'default',
							title: 'All',
						},
					]);
		}
		if (productDropDown.showBrandList == true) {
			productItems =
				dummyBrandData &&
				dummyBrandData.map(el => ({
					value: el.val,
					id: el.id,
					title: el.title,
				}));
		}
		let locationArray;
		if (locationDropDown.showCityList === true) {
			locationArray =
				subOrganizations &&
				subOrganizations.map(el => ({
					value: el.city,
					title: el.city,
				}));
		}
		if (locationDropDown.showPincodeList === true) {
			locationArray =
				subOrganizations &&
				subOrganizations.map(el => ({
					value: el.pinCode,
					title: el.pinCode,
				}));
		}
		if (locationDropDown.showStateList === true) {
			locationArray =
				subOrganizations &&
				subOrganizations
					.map(el => ({
						value: el.state,
						title: el.state,
					}))
					.concat([
						{
							value: 'all',
							title: 'All',
						},
					]);
		}
		if (locationDropDown.showStoreList === true) {
			locationArray =
				subOrganizations &&
				subOrganizations.map(el => ({
					value: el.code,
					title: el.code,
				}));
		}

		if (loading) {
			return <p>Please wait...</p>;
		}
		if (error) {
			return <p>{error}</p>;
		}
		return (
			<Fragment>
				<div style={{ margin: '-32px -32px 0px' }}>
					<CampaignHeader
						children={
							<Fragment>
								<Col span={12}>
									<h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">
										Create Offer
									</h3>
								</Col>
								<Col span={12} className="searchInputStyle" span={12}>
									<Stepper stepData={offerStepData} current={current} onChange={this.goToNextPage} />
								</Col>
							</Fragment>
						}
					/>
					{/* Each step is different step because the form has to be validated and saved as draft */}
					{current === 0 && (
						<Fragment>
							<div>
								<h3 className="gx-text-grey subTitlePadding">Basic Information</h3>
							</div>
							<div className="offerBasicFormContainer">
								<OfferBasicInfoForm
									offerTypeData={offerTypeData}
									handleOfferTypeChange={this.onOfferTypeChange}
									offerTypeStatus={offerTypeStatus}
									transactionTimeData={transactionTimeData}
									productData={productData}
									locationData={locationData}
									handleTransactionTimeChange={this.onTransactionTimeChange}
									transactionTimeStatus={transactionTimeStatus}
									cartValueConditionData={cartValueConditionData}
									wrappedComponentRef={this.saveFormRef}
									cappingData={cappingData}
									handleProductChange={this.onProductChange}
									productDropDown={productDropDown}
									location={organizationHierarchy}
									handleLocationChange={this.onLocationChange}
									locationDropDown={locationDropDown}
									locationArray={locationArray}
									values={values}
									productItems={productItems}
									onSelectOneValuesSelected={this.onValuesSelected}
									onSelectTwoValuesSelected={this.onSelectTwoValuesSelected}
									productValues={productValues}
									locationValues={locationValues}
									formValues={formValues.basicForm}
									products={products}
									couponDefaultValue={1}
									onCouponChange={this.onCouponChange}
									couponTypeSelected={couponTypeSelected}
									couponInputLabel="Enter Coupon label"
									onCouponLabelChange={this.onCouponLabelChange}
									OnNoCouponCodeChange={this.OnNoCouponCodeChange}
									checked={true}
									couponTypeData={couponTypeData}
								/>
							</div>
							{newOfferErrorMessage !== '' && <Alert message={newOfferErrorMessage} type="error" />}
						</Fragment>
					)}
					{current === 1 && (
						<Fragment>
							<div>
								<h3 className="gx-text-grey subTitlePadding">Redemption Rules</h3>
							</div>
							<div className="offerBasicFormContainer">
								<OfferRedemptionRulesForm
									cappingData={cappingData}
									wrappedComponentRef={this.saveRedemptionFormRef}
									formValues={formValues.redemptionForm}
								/>
							</div>
						</Fragment>
					)}
					<div className="offerFooterStyle">
						<CampaignFooter
							nextButtonText={current === 1 ? 'Save' : 'Next'}
							// saveDraftText="Save Draft"
							onPage1SaveDraft={this.onPage1SaveDraft}
							goToPage2={e => {
								this.goToNextPage(current + 1, e);
							}}
						/>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withApollo(
	compose(
		graphql(products, {
			options: props => ({
				variables: {
					organizationId: props.client.cache.data.data['$ROOT_QUERY.auth'].organizationId,
				},
			}),
			props: ({ data: { loading, error, products } }) => ({
				loading,
				products,
				error,
			}),
		}),
		graphql(categories, {
			options: () => ({
				variables: {
					catalogId: '2',
				},
			}),
			props: ({ data: { loading, error, categories } }) => ({
				loading,
				categories,
				error,
			}),
		}),
		graphql(subOrganizations, {
			options: props => ({
				variables: {
					parentId: props.client.cache.data.data['$ROOT_QUERY.auth'].organizationId,
					type: 'STORE',
				},
			}),
			props: ({ data: { loading, error, subOrganizations } }) => ({
				loading,
				subOrganizations,
				error,
			}),
		})
	)(NewOffer)
);
