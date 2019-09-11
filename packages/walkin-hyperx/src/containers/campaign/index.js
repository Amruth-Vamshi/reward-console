import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import BasicInfo from './campaignCreation/basicInfo';
import Audience from './campaignCreation/audience';
import Offer from './campaignCreation/offer';
import Communication from './campaignCreation/communication';
import { campaignOverview as Overview } from "@walkinsole/walkin-components";
import { allSegments, attributes } from '../../query/audience';
import { getOffers } from "../../query/offer";
import { withApollo, graphql, compose } from 'react-apollo';
import isEmpty from 'lodash/isEmpty';
import { GET_ALL_APPS_OF_ORGANIZATION } from "@walkinsole/walkin-components/src/PlatformQueries";
import { Col } from 'antd';
import jwt from "jsonwebtoken";
import { CampaignFooter, CampaignHeader, Stepper } from '@walkinsole/walkin-components';
import { CREATE_CAMPAIGN, UPDATE_CAMPAIGN } from '../../query/campaign';

const stepData = [
	{
		id: 1,
		route: 'basicInfo',
		title: 'Basic Info',
	},
	{
		id: 2,
		title: 'Audience',
		route: 'audience',
	},
	{
		id: 3,
		title: 'Offer',
		route: 'offer',
	},
	{
		id: 4,
		title: 'Communication',
		route: 'ommunication',
	},
	{
		id: 5,
		title: 'Overview',
		route: 'overview',
	},
];

const communicationData = [
	{ value: '1', title: 'SMS' },
	{ value: '2', title: 'Push Notification' },
	{ value: '3', title: 'Email' },
];

class CampaignCreation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formValues: {},
			current: 0,
			priorityChosen: 3,
			priorityNumberError: false,
			showTestAndControl: false,
			testValue: 95,
			controlValue: 5,
			testControlSelected: '',
			communicationSelected: '1',
			communicationFormValues: {},
			errors: {},
			offer: '',
			campaignCreated: false
		};
	}
	saveFormRef = formRef => {
		this.formRef = formRef;
	};
	communicationWrappedComponentRef = formRef => {
		this.formRef = formRef;
	};

	onTestAndControlEdit = () => {
		this.setState({
			showTestAndControl: true,
		});
	};

	handleCancel = () => {
		this.setState({ showTestAndControl: false });
	};

	onFormNext = e => {
		e.preventDefault();
	};

	goToNextPage(current) {
		console.log(current);
		let current1 = this.state.current

		if (current1 == 0)
			this.createOrUpdateBasicCampaign(current)
		else this.setState({ current });


	}

	createOrUpdateBasicCampaign = current => {
		const form = this.formRef && this.formRef.props && this.formRef.props.form;
		if (form) {
			form.validateFields((err, values) => {
				if (err) return
				else {
					console.log('values', values);
					!this.state.campaignCreated ? this.createCampaign(values) : this.updateBasicCampaign(values);
					this.setState({
						formValues: values,
						current: current,
					});
				}
			});
		}
	}

	createCampaign = async values => {
		const { client } = this.props;
		const { priorityChosen, controlValue } = this.state;
		const { allApplications: { organization } } = this.props;
		const input = {
			...values,
			priority: parseInt(priorityChosen),
			campaignControlPercent: parseInt(controlValue),
			organization_id: organization.id,
			application_id: organization.applications[0].id,
			campaignType: "OFFER"
		};
		this.setState({ loading: true });
		try {
			const createCampaign = await client.mutate({
				mutation: CREATE_CAMPAIGN,
				variables: { input: input }
			});
			this.setState({
				loading: false, campaignCreated: true,
				campaign: createCampaign.data.createCampaign
			});
		} catch (err) {
			console.log(err);
		}
	};

	updateBasicCampaign = async values => {
		const { client } = this.props;
		const { priorityChosen, controlValue } = this.state;
		const { allApplications: { organization } } = this.props;
		const input = {
			...values,
			priority: parseInt(priorityChosen),
			campaignControlPercent: parseInt(controlValue),
			campaignType: "OFFER"
		}; this.setState({ loading: true });
		try {
			const createCampaign = await client.mutate({
				mutation: UPDATE_CAMPAIGN,
				variables: { input: input }
			});
			console.log("Updated");
			// this.setState({
			// 	loading: false,
			// 	campaign: createCampaign.data.createCampaign
			// });
		} catch (err) {
			console.log(err);
		}
	};

	onControlValueChange = val => {
		this.setState({ controlValue: val });
	};

	onTestValueChange = val => {
		this.setState({ testValue: val });
	};

	applyTestControlChange = () => {
		const { testValue, controlValue } = this.state;
		this.setState({ testControlSelected: `${testValue} % - ${controlValue}%`, showTestAndControl: false });
	};

	handleButtonGroupChange = e => {
		this.setState({ priorityChosen: e.target.value });
	};

	logQuery = query => {
		console.log('quu', query);
	};

	onCommunicationChange = e => {
		this.setState({ communicationSelected: e.target.value });
	};

	handleOnOfferChange = e => {
		console.log('offer >> ', e);
		this.setState({ offer: e })
	}

	render() {
		const { formValues, current, showTestAndControl, testValue, controlValue, testControlSelected, rows, values, communicationSelected, communicationFormValues } = this.state;
		let attributeData = this.props.allAttributes && this.props.allAttributes.ruleAttributes &&
			this.props.allAttributes.ruleAttributes.map(el => ({
				name: el.attributeName,
				id: el.id,
				label: el.attributeName,
			}));
		const props = {
			name: 'file',
			action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
			headers: {
				authorization: 'authorization-text',
			},
		};
		return (
			<div style={{ margin: '-32px' }}>
				<CampaignHeader
					children={
						<Fragment>
							<Col span={12}>
								<h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">
									Create Campaign
								</h3>
							</Col>
							<Col style={{ display: 'flex', justifyContent: 'flexEnd' }} span={12}>
								<Stepper
									stepData={stepData}
									current={current}
									onChange={this.goToNextPage.bind(this)}
								/>
							</Col>
						</Fragment>
					}
				/>
				<div style={{ margin: '32px' }}>
					{current === 0 && (
						<BasicInfo
							subTitle="Basic information"
							onFormNext={this.onFormNext}
							saveFormRef={this.saveFormRef}
							formValues={formValues}
							priorityChosen={this.state.priorityChosen}
							testAndControlText="Test & Control"
							promptText="prompt text"
							toolTipText="what is test and control?"
							prioritySelectionTitle="Campaign Priority"
							priorityButtonText="Custom no"
							testControlTitle="Test & Control"
							testControlPercentage={testControlSelected ? testControlSelected : '95% - 5%'}
							handleButtonGroupChange={this.handleButtonGroupChange}
							testControlPercentageEditText="Edit"
							priorityNumberInvalidErrorMessage="Enter a value between 1 and 99"
							onTestAndControlEdit={this.onTestAndControlEdit}
							showTestAndControl={showTestAndControl}
							popupTitle="Test & Control"
							handleOk={this.handleOk}
							handleCancel={this.handleCancel}
							applyTestControlChange={this.applyTestControlChange}
							popupbodyText="Divide customers selected for a specific audience into local test and local control groups"
							controlValue={controlValue}
							testValue={testValue}
							maxValueAllowed={75}
							onTestValueChange={this.onTestValueChange}
							onControlValueChange={this.onControlValueChange}
							popupButtonText="apply"
						/>
					)}
					{current === 1 && (
						<Audience
							audienceTitle="Audience"
							segmentSubTitle="Segment"
							onValuesSelected={this.onValuesSelected}
							segmentSelectionData={this.props.segmentList.segments}
							uploadCsvText="Upload CSV"
							uploadProps={props}
							segmentFilterText="Filter"
							segmentFilterSubText="Campaign applies to :"
							attributeData={attributeData}
							logQuery={this.logQuery}
						/>
					)}
					{current === 2 &&
						<Offer onFormNext={this.onFormNext}
							offersList={this.props.allOffers.getOffers}
							errors={this.state.errors}
							offer={this.state.offer}
							handleOnOfferChange={this.handleOnOfferChange}
							subTitle="Offer" />}
					{current === 3 && (
						<Communication
							subTitle="Communication"
							onChange={this.onCommunicationChange}
							communicationData={communicationData}
							defaultValue="1"
							value={communicationSelected}
							OnCommunicationFormNext={this.onFormNext}
							communicationWrappedComponentRef={this.communicationWrappedComponentRef}
							communicationFormValues={communicationFormValues}
						/>
					)}
					{current === 4 ? <Overview campaign={this.state.formValues} /> : ""}
				</div>
				<div style={{ margin: '32px' }}>
					<CampaignFooter
						nextButtonText="Next"
						saveDraftText="Save Draft"
						onPage1SaveDraft={this.onPage1SaveDraft}
						goToPage2={this.goToNextPage.bind(this, current + 1)}
					/>
				</div>
			</div>
		);
	}
}

export default withRouter(
	withApollo(
		compose(
			graphql(allSegments, {
				name: 'segmentList',
				options: ownProps => ({
					variables: {
						organization_id: ownProps.client.cache.data.data['$ROOT_QUERY.auth'].organizationId ?
							ownProps.client.cache.data.data['$ROOT_QUERY.auth'].organizationId : jwt.decode(localStorage.getItem('jwt')),
						status: 'ACTIVE',
					},
					fetchPolicy: 'network-only',
				}),
			}),
			graphql(attributes, {
				name: 'allAttributes',
			}),
			graphql(getOffers, {
				options: ownProps => ({
					variables: {
						organizationId: ownProps.client.cache.data.data['$ROOT_QUERY.auth'].organizationId,
					}
				}),
				name: 'allOffers',
			}),
			graphql(GET_ALL_APPS_OF_ORGANIZATION, {
				name: "allApplications",
				options: props => {
					return {
						variables: {
							id: jwt.decode(localStorage.getItem("jwt")).org_id
						}
					};
				}
			})
		)(CampaignCreation)
	)
);
