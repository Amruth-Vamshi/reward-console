import './style.css';

import { CampaignFooter, Stepper, WHeader, OfferRedemptionRulesForm, OfferBasicInfoForm } from '@walkinsole/shared';
import { Alert, message, Spin } from 'antd';
import jwt from 'jsonwebtoken';
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';
import moment from 'moment'
import React, { Component, Fragment } from 'react';
import { ApolloProviderProps, compose, graphql, withApollo } from 'react-apollo';
import { RouteChildrenProps } from 'react-router';
import { createRule } from '../../../query/audience';
import { categories, createOffer, products, subOrganizations, UPDATE_OFFER } from '../../../query/offer';
import { isValidObject, transposeObject } from '../../../utils';
import { OFFER_LIST } from '../../../constants/RouterConstants';
import { cappingData, cartValueConditionData, couponTypeData, dummyBrandData, locationData, offerStepData, offerTypeData, productData, transactionTimeData } from '../../../constants/offerData'
import HyperXContainer from '../../../utils/HyperXContainer';
import { DEFAULT_RULE_TYPE, DEFAULT_ACTIVE_STATUS } from '../../../constants';

interface IProps extends RouteChildrenProps<any>, ApolloProviderProps<any> {
	// pauseCampaign: (variables: any) => any
	loading?, error?, categories?, products?, organizationHierarchy?, subOrganizations?, data?
}

// this.props.history.push({ pathname: '/hyperx/campaigns', tabKey: "2" })

interface IState {
	current: number,
	offerId: String,
	couponTypeSelected: any,
	newOfferErrorMessage: '',
	offerEligibityRule: any,
	offerType: any,
	transactionTime: '',
	couponLableSelected: '',
	offerRedemptionRuleId: ''
	productValues: Array<any>,
	redemptionRule: any,
	loading1: boolean,
	offerEligibityRuleId: String,
	locationValues: Array<any>,
	formValues: any
	offerTypeStatus: any
	transactionTimeStatus: any
	productDropDown: any
	locationDropDown: any
	values,
	timeLimitType

};

class NewOffer extends Component<IProps, Partial<IState>> {
	private basicFormRef
	private redemptionRef
	constructor(props: IProps) {
		super(props);
		this.state = {
			current: 0,
			offerId: '',
			couponTypeSelected: null,
			newOfferErrorMessage: '',
			offerEligibityRule: {},
			offerType: '',
			couponLableSelected: '',
			productValues: [],
			redemptionRule: {},
			loading1: false,
			transactionTime: '',
			offerEligibityRuleId: '',
			offerRedemptionRuleId: '',
			locationValues: [],
			timeLimitType: '/day',
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
				showStateList: false,
				showPincodeList: false,
				showStoreList: true,
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
		if (value === 'FLATX_DISCOUNT') {
			this.setState(
				Object.assign(this.state.offerTypeStatus, { showRupee: true, showPercent: false, showList: false })
			);
		}
		if (value === 'FREE_ITMES_FROM_LIST') {
			this.setState(
				Object.assign(this.state.offerTypeStatus, { showList: true, showPercent: false, showRupee: false })
			);
		}
		if (value === 'FLATX_CASHBACK') {
			this.setState(
				Object.assign(this.state.offerTypeStatus, { showList: false, showPercent: false, showRupee: false })
			);
		}
	};

	onTransactionTimeChange = value => {
		if (value === 'dayPart') {
			this.setState(
				Object.assign(this.state.transactionTimeStatus, { showFrequency: false, showDayPart: true, showCartValue: false })
			);
		}
		if (value === 'frequency') {
			this.setState(
				Object.assign(this.state.transactionTimeStatus, { showFrequency: true, showDayPart: false, showCartValue: false })
			);
		}
		if (value === 'cartValue') {
			this.setState(
				Object.assign(this.state.transactionTimeStatus, { showFrequency: false, showDayPart: false, showCartValue: true })
			);
		}
		this.setState({ transactionTime: value })
	};

	onValuesSelected = (value, str, stateValues) => {
		console.log('value: ', value + ' str: ' + str + ' stateValues: ' + stateValues);
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
			this.setState({ productValues: stateValues });
		} else {
			if (value == 'location_city') {
				this.setState(
					Object.assign(this.state.locationDropDown, {
						showCityList: true, showStateList: false, showPincodeList: false, showStoreList: false,
					})
				);
			}
			if (value == 'location_state') {
				this.setState(
					Object.assign(this.state.locationDropDown, {
						showCityList: false, showStateList: true, showPincodeList: false, showStoreList: false,
					})
				);
			}
			if (value == 'location_pincode') {
				this.setState(
					Object.assign(this.state.locationDropDown, {
						showCityList: false, showStateList: false, showPincodeList: true, showStoreList: false,
					})
				);
			}
			if (value == 'location_store') {
				this.setState(
					Object.assign(this.state.locationDropDown, {
						showCityList: false, showStateList: false, showPincodeList: false, showStoreList: true,
					})
				);
			}
			this.setState({ locationValues: stateValues });
		}
	};

	saveFormValues = (current, state, ref) => {
		const form = ref && ref.props.form;
		let fmValues
		if (form) {
			form.validateFields((err, values) => {
				if (err) return;
				else {
					fmValues = values;
					this.setState(Object.assign(this.state.formValues, { [state]: values }));
				}
			});
		}
		return fmValues
	};

	createRule = async (rule, type) => {
		let ruleInput = {
			name: Math.random().toString(36).substring(7),
			type: DEFAULT_RULE_TYPE,
			organizationId: jwt.decode(localStorage.getItem('jwt'))['org_id'],
			status: DEFAULT_ACTIVE_STATUS,
			ruleConfiguration: rule,
		}
		let ruleId
		console.log('ruleInput >>> ', JSON.stringify(ruleInput));
		return this.props.client
			.mutate({ mutation: createRule, variables: ruleInput })
			.then(({ data }) => {
				console.log('created rule', data);
				ruleId = data.createRule.id
				this.setState({ [type]: data.createRule.id });
				return ruleId;
			}).catch(error => {
				console.log('error', error);
				this.setState({ loading1: false })
			});
	}

	changePage = current => this.setState({ current })

	goToNextPage = async (current: number, e: any) => {
		let { formValues } = this.state;
		const { org_id }: any = jwt.decode(localStorage.getItem('jwt'))
		if (e && e.target.innerText === 'Next') {
			if (isValidObject(formValues.basicForm)) {
				let basicForm: any = this.saveFormValues(current, 'basicForm', this.basicFormRef);
				if (basicForm) {
					let { productValues, locationValues } = this.state;
					let reward = {}, reArrangedObj = {};


					reward[basicForm.offerType] = basicForm.offerType == "FREE_ITMES_FROM_LIST" ?
						basicForm.offerTypeValue : parseFloat(basicForm.offerTypeValue);

					let combinedArray = productValues.concat(locationValues);
					let arr: Array<{}> = [];
					combinedArray.map(val => { reArrangedObj[val.valueOne] = val.valueTwo });


					console.log('FV', basicForm);

					if (basicForm.transactionTime) {
						if (basicForm.transactionTime == "cartValue" && basicForm.cartValue != "")
							arr.push({ attributeName: "cartValue", attributeValue: basicForm.cartValue, expressionType: basicForm.cartValueCondition })
						else if (basicForm.transactionTime == "frequency" && basicForm.noOfTransaction && basicForm.noOfDay) {
							arr.push({ attributeName: "frequency_transaction", attributeValue: basicForm.noOfTransaction, expressionType: "EQUALS" })
							arr.push({ attributeName: "frequency_days", attributeValue: basicForm.noOfDays, expressionType: "EQUALS" })
						}
						else if (basicForm.transactionTime == "dayPart") {
							arr.push({ attributeName: "dayPart_startTime", attributeValue: moment(basicForm.startTime).format('h:mm:ss a'), expressionType: "EQUALS" })
							arr.push({ attributeName: "dayPart_endTime", attributeValue: moment(basicForm.endTime).format('h:mm:ss a'), expressionType: "EQUALS" })
						}

					}

					arr = [...arr, ...transposeObject(reArrangedObj && reArrangedObj, 'IN')]


					// return console.log('>>', basicForm, reward);

					let basicFormArray = { rules: arr, combinator: 'AND' };

					this.setState({ offerEligibityRule: basicFormArray, offerType: basicForm.offerType, loading1: true });

					let ruleId = await this.createRule(basicFormArray, 'offerEligibityRuleId')

					if (!ruleId) return console.log('Error in Rule Creation');

					console.log('ruleInput >>> ', JSON.stringify(basicFormArray), ruleId);

					const { offerEligibityRuleId, couponLableSelected, couponTypeSelected } = this.state;
					let offerInput = {
						name: basicForm.offerName.trim(),
						offerType: basicForm.offerType,
						reward: reward,
						organizationId: org_id,
						offerEligibilityRule: ruleId,
						offerCategory: couponTypeSelected === 1 ? 'COUPONS' : 'AUTO_APPLY',
						isCustomCoupon: couponTypeSelected === 1 ? true : false,
						coupon: couponTypeSelected === 1 ? couponLableSelected : null,
						// rewardRedemptionRule: data.createRule.id,
					}

					console.log('Create Offer Input', offerInput);
					this.props.client
						.mutate({ mutation: createOffer, variables: offerInput })
						.then(({ data }) => {
							console.log('created offer', data);
							this.setState({ loading1: false, current, offerId: data.createOffer.id })
							// this.props.history.push({ pathname: OFFER_LIST });
							message.success('Your changes were saved', 5);
						})
						.catch(error => {
							console.log('error', error);
							this.setState({ loading1: false })
							this.displayError('newOfferErrorMessage',
								error && error.graphQLErrors[0] ? error.graphQLErrors[0].message : 'Error in submitting the form'
							);
						});

				}
			}
		} else if (e && e.target.innerText === 'Save') {
			let { formValues, timeLimitType } = this.state;
			// if (this.state.offerId) {
			this.saveFormValues(current, 'redemptionForm', this.redemptionRef);
			console.log('>>', formValues.redemptionForm);
			if (!isEmpty(formValues.redemptionForm)) {

				let redemptionFormObject = this.state.formValues.redemptionForm;
				redemptionFormObject[redemptionFormObject.cappingType] = redemptionFormObject.cappingValue;

				if (redemptionFormObject.redemption_time_limit && redemptionFormObject.redemption_time_limit != "")
					redemptionFormObject.redemption_time_limit = redemptionFormObject.redemption_time_limit + timeLimitType

				let ommitedObject = omit(redemptionFormObject, ['cappingType', 'cappingValue', ""]);
				let redemptionArray = { rules: transposeObject(ommitedObject, 'EQUALS'), combinator: 'AND' };


				// return console.log('>>', redemptionArray, formValues.redemptionForm);

				this.setState({ loading1: true })
				let ruleId = await this.createRule(redemptionArray, 'offerRedemptionRuleId')
				if (!ruleId) return console.log('Error in Rule Creation');

				console.log('ruleInput >>> ', JSON.stringify(redemptionArray), ruleId);

				let offerInput = { id: this.state.offerId, rewardRedemptionRule: ruleId }

				console.log('Create Offer Input', offerInput);
				this.props.client
					.mutate({ mutation: UPDATE_OFFER, variables: { input: offerInput } })
					.then(({ data }) => {
						console.log('Update offer', data);
						this.setState({ loading1: false })
						this.props.history.push({ pathname: OFFER_LIST });
						message.success('Your changes were saved', 5);
					})
					.catch(error => {
						console.log('error', error);
						this.setState({ loading1: false })
						// message.warn(error.graphQLErrors[0] ? error.graphQLErrors[0].message : 'Error in submitting the form')
					});


			} else {
				// this.props.history.push({ pathname: OFFER_LIST });
				// message.success('Your changes were saved', 5);
			}
			// } else message.warn("Complete and Save Basic Info First")
		} else {
			//this.setState({ current: current });
		}
	};

	saveFormRef = basicFormRef => {
		this.basicFormRef = basicFormRef;
	};

	saveRedemptionFormRef = redemptionRef => {
		this.redemptionRef = redemptionRef;
	};

	isKeyExists = (obj, key) => {
		if (obj[key]) return [obj[key]];
		else return [];
	};

	onSelectTwoValuesSelected = (values, str) => {
		this.setState({ [str]: values });
	};

	onCouponChange = e => {
		this.setState({ couponTypeSelected: e.target.value });
	};

	onCouponLabelChange = e => {
		this.setState({ couponLableSelected: e.target.value });
	};

	timeLimitTypeChange = e => this.setState({ timeLimitType: e })

	cappingValue = () => {
		switch (this.state.offerType) {
			case "PERCENTAGE_DISCOUNT": return "redemption_cap_max_discount"
			case "PERCENTAGE_CASHBACK": return "redemption_cap_max_cashback"
			case "FREE_ITMES_FROM_LIST": return "redemption_cap_no_of_items"
			default: return undefined
		}
	}

	render() {
		const { current, loading1, offerTypeStatus, transactionTimeStatus, productDropDown, locationValues,
			locationDropDown, newOfferErrorMessage, couponTypeSelected, productValues, values, formValues } = this.state;
		const { loading, error, categories, products, organizationHierarchy, subOrganizations } = this.props;

		// console.log('productsproductsproductsproducts', products, subOrganizations);
		let productItems = [];
		if (productDropDown.showProductList == true) {
			productItems = products && products.map(el => ({ value: el.code, id: el.id, title: el.name }));
		}
		if (productDropDown.showCategoryList == true) {
			productItems = categories && categories
				.map(el => ({ value: el.code, id: el.id, title: el.name }))
				.concat([{ value: 'all', id: 'default', title: 'All', }]);
			// console.log('productItems>>', productItems);
		}
		if (productDropDown.showBrandList == true) {
			productItems =
				dummyBrandData && dummyBrandData.map(el => ({ value: el.value, id: el.id, title: el.title }));
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
					.map(el => ({ value: el.state, title: el.state }))
					.concat([{ value: 'all', title: 'All', }]);
		}
		if (locationDropDown.showStoreList === true) {
			locationArray =
				subOrganizations &&
				subOrganizations.map(el => ({
					value: el.code,
					title: el.name,
				}));
		}

		return (
			<Fragment>
				<div>
					<WHeader title='Create Offer' extra={<Stepper stepData={offerStepData} current={current} //onChange={this.changePage}
					/>} />
					{/* Each step is different step because the form has to be validated and saved as draft */}
					<HyperXContainer spin={loading} margin='32px' headerHeightInPX={225}>
						{current === 0 && (
							<Fragment>
								<h3 className="gx-text-grey subTitlePadding">Basic Information</h3>
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
										// handleProductChange={this.onProductChange}
										productDropDown={productDropDown}
										location={organizationHierarchy}
										// handleLocationChange={this.onLocationChange}
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
										// OnNoCouponCodeChange={this.OnNoCouponCodeChange}
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
										cappingValue={this.cappingValue()}
										offerType={this.state.offerType}
										cappingData={cappingData}
										wrappedComponentRef={this.saveRedemptionFormRef}
										formValues={formValues.redemptionForm}
										timeLimitTypeChange={this.timeLimitTypeChange}
									/>
								</div>
							</Fragment>
						)}

					</HyperXContainer>

					<div>
						<div className="gx-card campFooter" style={{ position: 'absolute', width: '100%' }}>
							<div className="gx-card-body" style={{ background: "#F6F6F6" }}>
								<CampaignFooter
									nextButtonText={current === 1 ? 'Save' : 'Next'}
									// saveDraftText="Save Draft"
									// saveDraft={this.onPage1SaveDraft}
									loading={loading1}
									goToPage2={e => this.goToNextPage(current + 1, e)}
									nextButtonClass={'offersNextButton'}
								/>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withApollo(
	compose(
		graphql(products, {
			options: (props: IProps) => ({ variables: { organizationId: jwt.decode(localStorage.getItem('jwt'))['org_id'] } }),
			props: ({ data: { loading, error, products } }: any) => ({ loading, products, error }),
		}),
		graphql(categories, {
			options: () => ({ variables: { catalogId: '2' } }),
			props: ({ data: { loading, error, categories } }: any) => ({ loading, categories, error }),
		}),
		graphql(subOrganizations, {
			options: props => ({
				variables: {
					parentId: jwt.decode(localStorage.getItem('jwt'))['org_id'],
					type: 'STORE',
				},
			}),
			props: ({ data: { loading, error, subOrganizations } }: any) => ({ loading, subOrganizations, error }),
		})
	)(NewOffer)
);
