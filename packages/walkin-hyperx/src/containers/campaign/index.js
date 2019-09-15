import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import BasicInfo from "./campaignCreation/basicInfo";
import Audience from "./campaignCreation/audience";
import Offer from "./campaignCreation/offer";
import Communication from "./campaignCreation/communication";
import { campaignOverview as Overview } from "@walkinsole/walkin-components";
import { allSegments, attributes, GET_AUDIENCE, CREATE_AUDIENCE, CREATE_RULE } from "../../query/audience";
import { getOffers, ADD_OFFER_TO_CAMPAIGN } from "../../query/offer";
import { withApollo, graphql, compose } from 'react-apollo';
import isEmpty from 'lodash/isEmpty';
import { GET_ALL_APPS_OF_ORGANIZATION } from "@walkinsole/walkin-components/src/PlatformQueries";
import { Col, Row, message } from 'antd';
import jwt from "jsonwebtoken";
import { CampaignFooter, CampaignHeader, Stepper } from '@walkinsole/walkin-components';
import { CREATE_CAMPAIGN, UPDATE_CAMPAIGN } from '../../query/campaign';

const stepData = [
	{
		id: 1,
		route: "basicInfo",
		title: "Basic Info"
	},
	{
		id: 2,
		title: "Audience",
		route: "audience"
	},
	{
		id: 3,
		title: "Offer",
		route: "offer"
	},
	{
		id: 4,
		title: "Communication",
		route: "ommunication"
	},
	{
		id: 5,
		title: "Overview",
		route: "overview"
	}
];

const communicationData = [
	{ value: "SMS", title: "SMS" },
	{ value: "PUSH", title: "Push Notification" },
	{ value: "EMAIL", title: "Email" }
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
			communicationSelected: 'SMS',
			communicationFormValues: {},
			errors: {},
			loading: false,
			offer: '',
			scheduleData: {},
			scheduleSaveMark: false,
			ruleQuery: { id: '1', combinator: 'and', rules: [] },
			selectedSegments: [''],
			campaignCreated: false,
			audienceCreated: false,
			audienceFilterRuleCreated: false,
			offerCreated: false,
			audience: [],
			audienceChange: { audience: false, rule: false }
		};
	}
	saveFormRef = formRef => {
		this.formRef = formRef;
	};
	communicationWrappedComponentRef = formRef => {
		this.formRef = formRef;
	};

	handleCancel = () => {
		this.setState({ showTestAndControl: false });
	};

	onFormNext = e => {
		e.preventDefault();
	};

	goToNextPage(current, e) {
		console.log(current);
		let current1 = this.state.current

		if (current1 == 0) {
			this.createOrUpdateBasicCampaign(current)
		} else if (current1 == 1) {
			this.createAudience(current)
			this.ruleQuery(current)
			// } else if (current1 == 2) {
			// 	this.linkOffer(current)
		} else if (e && e.target.innerText === 'Launch') {
			message.success('Campaign Launched')
			this.props.history.push('/hyperx/campaign')
		} else
			this.setState({ current });


	}

	linkOffer = current => {
		if (this.state.offer != "" && !this.state.offerCreated) {
			this.setState({ loading: true })
			let { allApplications: { organization } } = this.props;
			var input = {
				campaignId: this.state.campaign.id,
				offerId: this.state.offer,
				organizationId: organization.id,
				// status: "ACTIVE"
			};
			this.props.addOfferToCampaign({
				variables: { input: input }
			}).then(data => {
				console.log("Add Offer..", data)
				this.setState({ loading: false, current, offer: data.addOfferToCampaign })
			}).catch(err => {
				this.setState({ loading: false })
				console.log("Error while creating audience..", err)
			});
		}
	}

	ruleQuery = current => {
		if (this.state.audienceFilterRule.rules.length && !this.state.audienceFilterRuleCreated) {
			let { allApplications: { organization } } = this.props;
			const input = {
				name: Math.random().toString(36).substring(7),
				description: "",
				type: "SIMPLE",
				organizationId: organization.id,
				status: "ACTIVE",
				ruleConfiguration: JSON.stringify(this.state.audienceFilterRule)
			};
			this.props.createRule({ variables: { input: input } })
				.then(data => {
					console.log("Trigger Rule data...", data);
					var campaignInput = { audienceFilterRule: data.data.createRule.id };
					this.props.updateCampaign({
						variables: {
							id: this.state.campaign.id,
							input: campaignInput
						}
					}).then(data => {
						console.log("Update campaign data..", data);
						this.audienceChange(current, "rule")
					}).catch(err => {
						console.log("Error Update campaign", err)
						this.setState({ loading: false })
					});
				}).catch(err => {
					console.log("Error creating the question", err)
					this.setState({ loading: false })
				});
		} else this.audienceChange(current, "rule")
	};

	createAudience = current => {
		let segments = this.state.selectedSegments
		// if (segments[0] && segments[0] != "" && !this.state.audienceCreated) {
		let { allApplications: { organization } } = this.props;
		this.setState({ loading: true });
		var input = {
			campaign_id: this.state.campaign.id,
			segment_id: segments,
			organization_id: organization.id,
			application_id: organization.applications[0].id,
			status: "ACTIVE"
		};
		this.props.createAudience({
			variables: { input: input }
		}).then(data => {
			console.log("Create Audience..", data)
			this.audienceChange(current, "audience")
			this.setState({ audience: data.data.createAudience });
		}).catch(err => {
			console.log("Error while creating audience..", err)
		});
		// } else this.audienceChange(current, "audience")
	}

	createOrUpdateBasicCampaign = current => {
		const form = this.formRef && this.formRef.props && this.formRef.props.form;
		if (form) {
			form.validateFields((err, values) => {
				if (err) return
				else {
					console.log('values', values);
					!this.state.campaignCreated ? this.createCampaign(values, current) : this.updateBasicCampaign(values, current);
					this.setState({ formValues: values });
				}
			});
		}
	}

	createCampaign = (values, current) => {
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
		client.mutate({
			mutation: CREATE_CAMPAIGN,
			variables: { input: input }
		}).then(res =>
			this.setState({
				campaignCreated: true, current, loading: false,
				campaign: res.data.createCampaign
			})
		).catch(err => {
			console.log(err)
			this.setState({ loading: false })
		})
	};

	updateBasicCampaign = async values => {
		// 	const { client } = this.props;
		// 	const { priorityChosen, controlValue } = this.state;
		// 	const input = {
		// 		...values,
		// 		priority: parseInt(priorityChosen),
		// 		campaignControlPercent: parseInt(controlValue),
		// 		campaignType: "OFFER"
		// 	}; this.setState({ loading: true });
		// 	try {
		// 		const updateCampaign = await client.mutate({
		// 			mutation: UPDATE_CAMPAIGN,
		// 			variables: { input: input }
		// 		});
		// 		console.log("Updated");
		// 		// this.setState({
		// 		// 	loading: false,
		// 		// 	campaign: createCampaign.data.createCampaign
		// 		// });
		// 	} catch (err) {
		// 		console.log(err);
		// 	}
	};

	audienceChange = (current, type) => {
		let { audienceChange } = this.state
		audienceChange[type] = true
		if (audienceChange.audience && audienceChange.rule) {
			audienceChange = { audience: false, rule: false }
			this.setState({ current, audienceChange, loading: false })
		} else this.setState({ audienceChange })
	}

	applyTestControlChange = () => {
		const { testValue, controlValue } = this.state;
		this.setState({
			testControlSelected: `${testValue} % - ${controlValue}%`,
			showTestAndControl: false
		});
	};

	handleButtonGroupChange = e => {
		this.setState({ value: e.target.value });
	};

	handleButtonGroupChange = e => {
		this.setState({ priorityChosen: e.target.value });
	};

	onCommunicationChange = e => {
		this.setState({ communicationSelected: e.target.value });
	};

	handleOnOfferChange = e => {
		this.setState({ offer: e });
	};

	handleOnOfferChange = e => {
		this.setState({ offer: e })
	}

	onValuesSelected = e => {
		this.setState({ selectedSegments: e })
	}


	logQuery = (audienceFilterRule, ruleQuery) => {
		console.log('rule', audienceFilterRule);
		this.setState({ audienceFilterRule, ruleQuery });
	};

	saveSchedule = e => {
		message.success('schedule saved')
		this.setState({ scheduleSaveMark: true })
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
				<div style={{ margin: '40px' }}>
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
							selectedSegments={this.state.selectedSegments}
							segmentSelectionData={this.props.segmentList.segments}
							// uploadCsvText="Upload CSV"
							uploadProps={props}
							ruleQuery={this.state.ruleQuery}
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
							subTitle="Communizcation"
							schedule={[]}
							saveSchedule={this.saveSchedule}
							scheduleSaveMark={this.state.scheduleSaveMark}
							onChange={this.onCommunicationChange}
							communicationData={communicationData}
							defaultValue={communicationSelected}
							value={communicationSelected}
							OnCommunicationFormNext={this.onFormNext}
							communicationWrappedComponentRef={this.communicationWrappedComponentRef}
							communicationFormValues={communicationFormValues}
						/>
					)}
					{current === 4 &&
						<Overview
							campaign={this.state.formValues}
							audience={this.state.audience}
						/>}
				</div>
				<div style={{ margin: '32px' }}>
					<CampaignFooter
						loading={this.state.loading}
						nextButtonText={current === 4 ? 'Launch' : 'Next'}
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
							ownProps.client.cache.data.data['$ROOT_QUERY.auth'].organizationId : jwt.decode(localStorage.getItem('jwt')).org_id,
						status: 'ACTIVE',
					},
					fetchPolicy: 'network-only',
				}),
			}),
			graphql(attributes, {
				name: 'allAttributes',
				options: ownProps => ({
					variables: {
						organizationId: jwt.decode(localStorage.getItem("jwt")).org_id,
					},
					fetchPolicy: 'network-only',
				}),
			}), graphql(getOffers, {
				name: 'allOffers',
				options: ownProps => ({
					variables: {
						organizationId: jwt.decode(localStorage.getItem("jwt")).org_id,
						state: "LIVE"
					},
					fetchPolicy: 'network-only',
				})
			}), graphql(CREATE_RULE, {
				name: "createRule"
			}), graphql(ADD_OFFER_TO_CAMPAIGN, {
				name: "addOfferToCampaign"
			}), graphql(UPDATE_CAMPAIGN, {
				name: "updateCampaign"
			}),
			// graphql(createCommunication, {
			// 	name: "communication"
			// }),
			graphql(CREATE_AUDIENCE, {
				name: "createAudience"
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
