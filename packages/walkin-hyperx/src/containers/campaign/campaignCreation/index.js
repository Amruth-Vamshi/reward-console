import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import BasicInfo from "./basicInfo";
import Audience from "./audience";
import Offer from "./offer";
import Communication from "./communication";
import { campaignOverview as Overview } from "@walkinsole/shared";
import { allSegments, RULE_ATTRIBUTES, GET_AUDIENCES, CREATE_AUDIENCE, CREATE_RULE, AUDIENCE_COUNT, UPDATE_RULE, UPDATE_AUDIENCES } from "../../../query/audience";
import { getOffers, ADD_OFFER_TO_CAMPAIGN, GET_OFFER_FOR_CAMPAIGN } from "../../../query/offer";
import { withApollo, graphql, compose } from 'react-apollo';
import { GET_ALL_APPS_OF_ORGANIZATION } from "@walkinsole/walkin-core/src/PlatformQueries";
import { Col, Row, message } from 'antd';
import jwt from "jsonwebtoken";
import '../styles.css'
import { DEFAULT_ACTIVE_STATUS, DEFAULT_HYPERX_CAMPAIGN } from "../../../utils"
import moment from "moment";
import { CampaignFooter, CampaignHeader, Stepper } from '@walkinsole/shared';
import { GET_CAMPAIGN, CREATE_CAMPAIGN, UPDATE_CAMPAIGN, CREATE_MESSAGE_TEMPLETE, CREATE_COMMUNICATION, LAUNCH_CAMPAIGN, CREATE_COMMUNICATION_WITH_MESSAGE_TEMPLETE, COMMUNICATIONS, VIEW_CAMPAIGN, UPDATE_COMMUNICATION_WITH_MESSAGE_TEMPLETE, PREPROCESS_LAUNCH_CAMPAIGN } from '../../../query/campaign';

const stepData = [{
	id: 1,
	route: "basicInfo",
	title: "Basic Info"
}, {
	id: 2,
	title: "Audience",
	route: "audience"
}, {
	id: 3,
	title: "Offer",
	route: "offer"
}, {
	id: 4,
	title: "Communication",
	route: "ommunication"
}, {
	id: 5,
	title: "Overview",
	route: "overview"
}];

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
			communication: '',
			communicationSelected: 'SMS',
			errors: {},
			audienceCount: 0,
			loading: false,
			noOfferRequired: false,
			offer: '',
			audienceFilterRuleId: '',
			scheduleData: {},
			smsForm: {},
			emailForm: {},
			pushForm: {},
			scheduleSaveMark: false,
			ruleQuery: { id: '1', combinator: 'and', rules: [] },
			selectedSegments: [''],
			campaignCreated: false,
			audienceCreated: false,
			audienceFilterRuleCreated: false,
			offerCreated: false,
			createComm: false,
			audience: [],
			update: false,
			audienceChange: { audience: false, rule: false }
		};
	}

	componentWillMount = () => {
		const { location, match, client } = this.props;
		const { id, org_id } = jwt.decode(localStorage.getItem("jwt"))
		if (location && location.state) {
			console.log("this...", location.state)
			if (location.state.update)
				this.setState({ update: true });


			this.setState({ spin: true })
			client.query({
				query: VIEW_CAMPAIGN,
				variables: { campaignId: this.props.match.params.id },
				// fetchPolicy: 'network-only'
			}).then(res => {
				console.log('res', res.data.viewCampaignForHyperX);
				let { campaign, audiences, offers, communications } = res.data.viewCampaignForHyperX

				this.setState({ spin: false, campaign, formValues: campaign, communications, campaignCreated: true });

				if (audiences && audiences.length) {
					let selectedSegments = []
					audiences.map(item => selectedSegments.push(item.segment.id))
					selectedSegments = selectedSegments.length ? selectedSegments : ['']
					this.setState({ selectedSegments: selectedSegments, audiences, audienceCreated: true })
				}

				if (campaign.audienceFilterRule) {
					let str = campaign.audienceFilterRule.ruleConfiguration;
					var mapObj = {
						// ruleAttributeId: 'field',
						attributeName: 'field',
						attributeValue: 'value',
						expressionType: 'operator',
					};
					if (typeof str != 'string') str = JSON.stringify(str)
					str = str.replace(/attributeName|attributeValue|expressionType/gi, function (matched) {
						return mapObj[matched];
					});
					this.setState({
						ruleQuery: JSON.parse(str), audienceFilterRule: campaign.audienceFilterRule.ruleConfiguration,
						audienceFilterRuleCreated: true, audienceFilterRuleId: campaign.audienceFilterRule.id
					});
				}

				if (offers && offers.length) this.setState({ offer: offers[0].id, offerData: offers[0] })
				else this.setState({ noOfferRequired: true })

				if (communications && communications.length) {
					let { smsForm, emailForm, pushForm, scheduleData } = this.state
					let communicationSelected = communications[0].messageTemplate.messageFormat
					if (communicationSelected == "SMS") {
						smsForm.smsTag = communications[0].messageTemplate.templateSubjectText
						smsForm.smsBody = communications[0].messageTemplate.templateBodyText
					} else if (communicationSelected == "EMAIL") {
						emailForm.email_subject = communications[0].messageTemplate.templateSubjectText
						emailForm.email_body = communications[0].messageTemplate.templateBodyText
					} else {
						pushForm.notificationTag = communications[0].messageTemplate.templateSubjectText
						pushForm.notificationBody = communications[0].messageTemplate.templateBodyText
					}

					if (communications[0].repeatRuleConfiguration) {
						let { byMonthDate, byWeekDay, endAfter, frequency, repeatInterval, noOfOccurances, time } = communications[0].repeatRuleConfiguration
						scheduleData.repeatType = frequency
						scheduleData.time = moment(time, 'HH:mm a')
						scheduleData.days = byWeekDay
						if (endAfter && endAfter != '') scheduleData.endTime = moment(endAfter)
						else scheduleData.noOfOccurances = noOfOccurances
					}

					this.setState({ communication: communications[0], communicationSelected, smsForm, emailForm, pushForm, scheduleData, createComm: true })
				}

			}).catch(err => {
				this.setState({ spin: false });
				console.log("Failed to get Campaign Details" + err);
			});

		}
	}
	// componentDidUpdate(preValue) {
	// 	// console.log('>>>', this.props.offerForCampaign);
	// 	if (this.state.update) {
	// 		if (this.props.linkedAudiences.loading !== preValue.linkedAudiences.loading) {
	// 			if (this.props.linkedAudiences.audiences) {
	// 				let selectedSegments = []
	// 				this.props.linkedAudiences.audiences.map(item => selectedSegments.push(item.segment.id))
	// 				this.setState({ selectedSegments: selectedSegments })
	// 			}
	// 		}
	// 		// 	if (this.props.allCommunications.loading !== preValue.allCommunications.loading) {
	// 		// 		let { communicationFormValues } = this.state
	// 		// 		let communicationId = {}
	// 		// 		if (this.props.allCommunications.communications) {
	// 		// 			this.props.allCommunications.communications.map(item => {
	// 		// 				if (item.messageTemplate.messageFormat == "SMS") {
	// 		// 					communicationId.smsid = item.messageTemplate.id
	// 		// 					communicationFormValues.smsTag = item.messageTemplate.templateSubjectText
	// 		// 					communicationFormValues.smsBody = item.messageTemplate.templateBodyText
	// 		// 				} else if (item.messageTemplate.messageFormat == "EMAIL") {
	// 		// 					communicationId.emailid = item.messageTemplate.id
	// 		// 					communicationFormValues.email_subject = item.messageTemplate.templateSubjectText
	// 		// 					communicationFormValues.email_body = item.messageTemplate.templateBodyText
	// 		// 				}
	// 		// 			})
	// 		// 		}

	// 		// 		this.setState({ communicationFormValues, communicationId })
	// 		// 	}
	// 	}
	// }


	saveFormRef = formRef => {
		this.formRef = formRef;
	};

	saveSmsFormRef = formRef => this.smsForm = formRef;
	saveEmailFormRef = formRef => this.emailForm = formRef;
	savePushFormRef = formRef => this.pushForm = formRef;


	handleCancel = () => {
		this.setState({ showTestAndControl: false });
	};

	onControlValueChange = val => {
		this.setState({ controlValue: val });
	};

	onTestValueChange = val => {
		this.setState({ testValue: val });
	};

	onFormNext = e => {
		e.preventDefault();
	};

	// updateAudienceCount = () =>{
	// 	this.props.client.
	// }

	saveDraft = current => {
		this.props.history.push('/hyperx/campaigns')
		//  this.setState({ current });
		this.props.history.push({
			pathname: '/hyperx/campaigns',
			tabKey: "4",
			// state: { key: "4" }
		})
		// this.props.history.push('/hyperx/campaign', { key: "4" })
	}
	goToNextPage(current, e) {
		console.log(current);
		let errors = {}
		let segments = this.state.selectedSegments
		let current1 = this.state.current

		if (current1 == 0) {
			this.createOrUpdateBasicCampaign(current)
		} else if (current1 == 1) {
			if (segments[0] && segments[0] != "") {
				this.createOrUpdateAudience(current)
				this.ruleQuery(current)
			} else {
				errors.segment = "* this field is mandatory"
				this.setState({ errors })
			}
			// } else if (current1 == 2) {
			// 	this.linkOffer(current)
		} else if (current1 == 3) {
			this.createComm(current)
		} else if (e && e.target.innerText === 'Launch') {
			this.launchCampaign()
		} else
			this.setState({ current });

	}

	launchCampaign = () => {
		this.setState({ loading: true })
		this.props.launchCampaign({
			variables: { id: this.state.campaign.id }
		}).then(data => {
			console.log("campaign data..", data);
			message.success('Campaign Launched')
			moment().isBetween(this.state.campaign.startTime, this.state.campaign.endTime) ?
				this.props.history.push('/hyperx/campaigns') :
				this.props.history.push({ pathname: '/hyperx/campaigns', tabKey: "2" })
		}).catch(err => {
			console.log("Error Update campaign", err)
			this.setState({ loading: false })
		});
	}

	createComm = c => {
		let { communicationSelected, createComm } = this.state;
		let formRef =
			communicationSelected == "SMS" ? this.smsForm :
				communicationSelected == "EMAIL" ? this.emailForm : this.pushForm

		console.log('COMM', formRef, communicationSelected);
		const comForm = formRef && formRef.props && formRef.props.form;
		comForm.validateFields((err, values) => {
			if (err) return
			else {
				if (communicationSelected == "SMS")
					this.setState({ smsForm: values })
				else if (communicationSelected == "EMAIL")
					this.setState({ emailForm: values })
				else this.setState({ pushForm: values })
				console.log('COMM', formRef, createComm);
				!createComm ?
					this.createCommunicationWithMessageTemplate(c, values) :
					this.updateCommunicationWithMessageTemplate(c, values)
			}
		})

	}

	updateCommunicationWithMessageTemplate = (current, values) => {
		let { communicationSelected, scheduleData, scheduleSaveMark, communication } = this.state;
		console.log('COMM', communicationSelected, values);
		this.setState({ loading: true })
		var messageTemplateInput = {
			id: communication.messageTemplate.id,
			name: this.state.campaign.name + "_" + communicationSelected,
			description: "",
			messageFormat: communicationSelected,
			templateBodyText: communicationSelected == "SMS" ? values.smsBody : communicationSelected == "EMAIL" ? values.email_body : values.notificationBody,
			templateSubjectText: communicationSelected == "SMS" ? values.smsTag : communicationSelected == "EMAIL" ? values.email_subject : values.notificationTag,
			templateStyle: "MUSTACHE",
			organization_id: jwt.decode(localStorage.getItem("jwt")).org_id,
			status: DEFAULT_ACTIVE_STATUS
		};
		var communicationInput = {
			id: communication.id,
			entityId: this.state.offerData ? this.state.offerData.id : ' ',
			entityType: "Offer",
			isScheduled: scheduleSaveMark,
			isRepeatable: scheduleSaveMark,
			organization_id: jwt.decode(localStorage.getItem("jwt")).org_id,
			status: DEFAULT_ACTIVE_STATUS,
			firstScheduleDateTime: this.state.campaign.startTime
		};
		if (scheduleSaveMark) {
			let repeatRuleConf = { frequency: scheduleData.repeatType, time: moment(scheduleData.time).format('HH:MM:SS') }
			scheduleData.repeatType == "WEEKLY" ? repeatRuleConf.byWeekDay = scheduleData.days : ''
			scheduleData.hasOwnProperty('endTime') ? repeatRuleConf.endAfter = scheduleData.endTime : repeatRuleConf.noOfOccurances = scheduleData.noOfOccurances
			communicationInput.repeatRuleConfiguration = repeatRuleConf
		}

		this.props.updateCommunicationWithMessageTemplate({
			variables: { communicationInput: communicationInput, messageTemplateInput: messageTemplateInput }
		}).then(data => {
			console.log("Communication data..", data)
			this.setState({ loading: false, current, communication: data.data.createCommunicationWithMessageTempate })
		}).catch(err => {
			this.setState({ loading: false })
			console.log("Error Updating communication", err)
		})
	}

	createCommunicationWithMessageTemplate = (current, values) => {
		let { communicationSelected, scheduleData, scheduleSaveMark } = this.state;
		console.log('COMM', communicationSelected, values);
		this.setState({ loading: true })
		var messageTemplateInput = {
			name: this.state.campaign.name + "_" + communicationSelected,
			description: "",
			messageFormat: communicationSelected,
			templateBodyText: communicationSelected == "SMS" ? values.smsBody : communicationSelected == "EMAIL" ? values.email_body : values.notificationBody,
			templateSubjectText: communicationSelected == "SMS" ? values.smsTag : communicationSelected == "EMAIL" ? values.email_subject : values.notificationTag,
			templateStyle: "MUSTACHE",
			organization_id: jwt.decode(localStorage.getItem("jwt")).org_id,
			status: DEFAULT_ACTIVE_STATUS
		};
		var communicationInput = {
			entityId: this.state.offerData ? this.state.offerData.id : ' ',
			entityType: "Offer",
			campaign_id: this.state.campaign.id,
			isScheduled: scheduleSaveMark,
			isRepeatable: scheduleSaveMark,
			organization_id: jwt.decode(localStorage.getItem("jwt")).org_id,
			status: DEFAULT_ACTIVE_STATUS,
			firstScheduleDateTime: this.state.campaign.startTime,
			commsChannelName: "Test"
		};
		if (scheduleSaveMark) {
			console.log(this.state.scheduleData);
			let repeatRuleConf = { frequency: scheduleData.repeatType, time: moment(scheduleData.time).format('HH:MM:SS') }
			scheduleData.repeatType == "WEEKLY" ? repeatRuleConf.byWeekDay = scheduleData.days : ''
			scheduleData.hasOwnProperty('endTime') ? repeatRuleConf.endAfter = scheduleData.endTime : repeatRuleConf.noOfOccurances = scheduleData.noOfOccurances
			communicationInput.repeatRuleConfiguration = repeatRuleConf
		}

		this.props.createCommunicationWithMessageTemplate({
			variables: { communicationInput: communicationInput, messageTemplateInput: messageTemplateInput }
		}).then(data => {
			console.log("Communication data..", data)
			this.setState({ loading: false, current, communication: data.data.createCommunicationWithMessageTempate })
		}).catch(err => {
			this.setState({ loading: false })
			console.log("Error creating communication", err)
		})
	}

	// createCommunicationMutation = (current, values) => {
	// 	let { communicationSelected, scheduleData, scheduleSaveMark } = this.state;
	// 	console.log('COMM', communicationSelected, values);
	// 	this.setState({ loading: true })
	// 	var input = {
	// 		name: this.state.campaign.name + "_" + communicationSelected,
	// 		description: "",
	// 		messageFormat: communicationSelected,
	// 		templateBodyText: communicationSelected == "SMS" ? values.smsBody : communicationSelected == "EMAIL" ? values.email_body : values.notificationBody,
	// 		templateSubjectText: communicationSelected == "SMS" ? values.smsTag : communicationSelected == "EMAIL" ? values.email_subject : values.notificationTag,
	// 		templateStyle: "MUSTACHE",
	// 		organization_id: jwt.decode(localStorage.getItem("jwt")).org_id,
	// 		status: DEFAULT_ACTIVE_STATUS,
	// 	};
	// 	this.props.messageTemplate({
	// 		variables: { input: input }
	// 	}).then(data => {
	// 		console.log("MessageTemplate data..", data);
	// 		var input = {
	// 			entityId: this.state.offer ? this.state.offer.id : '', // campainId
	// 			entityType: "Offer",
	// 			campaign_id: this.state.campaign.id,
	// 			messageTemplateId: data.data.createMessageTemplate.id,
	// 			isScheduled: scheduleSaveMark,
	// 			isRepeatable: scheduleSaveMark,
	// 			organization_id: jwt.decode(localStorage.getItem("jwt")).org_id,
	// 			status: DEFAULT_ACTIVE_STATUS,
	// 			firstScheduleDateTime: this.state.campaign.startTime,
	// 			commsChannelName: "Test"
	// 		};
	// 		if (scheduleSaveMark) {
	// 			console.log(this.state.scheduleData);
	// 			let repeatRuleConf = { frequency: scheduleData.repeatType, time: moment(scheduleData.time).format('HH:MM:SS') }
	// 			scheduleData.repeatType == "WEEKLY" ? repeatRuleConf.byWeekDay = scheduleData.days : ''
	// 			scheduleData.hasOwnProperty('endTime') ? repeatRuleConf.endAfter = scheduleData.endTime : repeatRuleConf.noOfOccurances = scheduleData.noOfOccurances
	// 			input.repeatRuleConfiguration = repeatRuleConf
	// 		}
	// 		console.log(input);
	// 		this.props.createCommunication({
	// 			variables: { input: input }
	// 		}).then(data => {
	// 			console.log("Communication data..", data)
	// 			this.setState({ loading: false, current, communication: data.data.createCommunication })
	// 		}).catch(err => {
	// 			this.setState({ loading: false })
	// 			console.log("Error creating for communication", err)
	// 		})
	// 	}).catch(err => {
	// 		this.setState({ loading: false })
	// 		console.log("Error creating for message template", err);
	// 	});
	// };

	linkOffer = current => {
		if (this.state.noOfferRequired) this.setState({ current })
		else if (this.state.offer != "" && !this.state.offerCreated) {
			this.setState({ loading: true })
			let { allApplications: { organization } } = this.props;
			var input = {
				campaignId: this.state.campaign.id,
				offerId: this.state.offer,
				organizationId: organization.id,
				// status: DEFAULT_ACTIVE_STATUS
			};
			this.props.addOfferToCampaign({
				variables: { input: input }
			}).then(data => {
				console.log("Add Offer..", data)
				this.setState({ loading: false, current, offerData: data.data.addOfferToCampaign.offer })
			}).catch(err => {
				this.setState({ loading: false })
				console.log("Error while creating audience..", err)
			});
		}
	}

	ruleQuery = current => {
		if (this.state.audienceFilterRule.rules.length)
			if (!this.state.audienceFilterRuleCreated) {
				let { allApplications: { organization } } = this.props;
				const input = {
					name: Math.random().toString(36).substring(7),
					description: "",
					type: "SIMPLE",
					organizationId: organization.id,
					status: DEFAULT_ACTIVE_STATUS,
					ruleConfiguration: JSON.stringify(this.state.audienceFilterRule)
				};
				this.props.createRule({ variables: { input: input } })
					.then(data => {
						console.log("Rule data...", data);
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
						console.log("Error while creating the Rule", err)
						this.setState({ loading: false })
					});
			} else this.ruleUpdate(current)
		else this.audienceChange(current, "rule")
	};

	ruleUpdate = current => {
		if (this.state.audienceFilterRule.rules.length) {
			const input = { ruleConfiguration: JSON.stringify(this.state.audienceFilterRule) };
			this.props.updateRule({ variables: { id: this.state.audienceFilterRuleId, input: input } })
				.then(data => {
					console.log("Rule data...", data);
					this.audienceChange(current, "rule")
				}).catch(err => {
					console.log("Error while update the rule", err)
					this.setState({ loading: false })
				});
		} else this.audienceChange(current, "rule")
	};

	// createAudience = current => {
	// 	let segments = this.state.selectedSegments
	// 	if (!this.state.audienceCreated) {
	// 		let { allApplications: { organization } } = this.props;
	// 		this.setState({ loading: true });
	// 		var input = {
	// 			campaign_id: this.state.campaign.id,
	// 			segment_id: segments,
	// 			organization_id: organization.id,
	// 			application_id: organization.applications[0].id,
	// 			status: DEFAULT_ACTIVE_STATUS
	// 		};
	// 		this.props.createAudience({
	// 			variables: { input: input }
	// 		}).then(data => {
	// 			console.log("Create Audience..", data)
	// 			this.audienceChange(current, "audience")
	// 			this.setState({ audiences: data.data.createAudience });
	// 		}).catch(err => {
	// 			this.setState({ loading: false });
	// 			console.log("Error while creating audience..", err)
	// 		});
	// 	} else this.updateAudiences(current)
	// }

	createOrUpdateAudience = current => {
		this.setState({ loading: true });
		this.props.updateAudiences({
			variables: {
				campaignId: this.state.campaign.id,
				segments: this.state.selectedSegments
			}
		}).then(data => {
			console.log("updated Audiences", data)
			this.audienceChange(current, "audience")
			this.setState({ audiences: data.data.createAudienceForCampaign });
		}).catch(err => {
			this.setState({ loading: false });
			console.log("Error while update Audiences", err)
		})
	}

	createOrUpdateBasicCampaign = current => {
		const form = this.formRef && this.formRef.props && this.formRef.props.form;
		if (form) {
			form.validateFields((err, values) => {
				if (err) return
				else {
					(!this.state.campaignCreated && !this.state.update) ?
						this.createCampaign(values, current) : this.updateCampaign(values, current);
					this.setState({ formValues: values });
				}
			});
		}
	}

	updateCampaign = (values, current) => {
		const { client } = this.props;
		const { priorityChosen, controlValue } = this.state;

		const input = {
			...values,
			priority: parseInt(priorityChosen),
			campaignControlPercent: parseInt(controlValue),
			// campaignType: DEFAULT_HYPERX_CAMPAIGN
		};
		console.log('campInput', input);
		this.setState({ loading: true });
		client.mutate({
			mutation: UPDATE_CAMPAIGN,
			variables: { input: input, id: this.state.campaign.id ? this.state.campaign.id : this.props.match.params.id }
		}).then(res =>
			this.setState({
				current, loading: false,
				campaign: res.data.updateCampaign
			})
		).catch(err => {
			console.log(err)
			this.setState({ loading: false })
		})
	}

	createCampaign = (values, current) => {
		console.log('Create Campaign');
		const { client } = this.props;
		const { priorityChosen, controlValue } = this.state;
		if (!this.props.allApplications.organization) return console.log('No Applications for your organization');
		const { allApplications: { organization } } = this.props;

		console.log(organization.applications);
		const input = {
			...values,
			priority: parseInt(priorityChosen),
			campaignControlPercent: parseInt(controlValue),
			organization_id: organization.id,
			application_id: organization.applications[0].id,
			campaignType: DEFAULT_HYPERX_CAMPAIGN
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

	onTestAndControlEdit = () => {
		this.setState({ showTestAndControl: true });
	};

	handleButtonGroupChange = e => {
		this.setState({ priorityChosen: e.target.value });
	};

	onCommunicationChange = e => {
		this.setState({ communicationSelected: e.target.value });
	};

	offerChecked = e => this.setState({ noOfferRequired: e })

	handleOnOfferChange = e => {
		this.setState({ offer: e });
	};

	handleOnOfferChange = e => {
		this.setState({ offer: e })
	}

	onValuesSelected = e => {
		// let { allApplications: { organization } } = this.props;
		this.setState({ selectedSegments: e })
		this.state.errors.segment = ''
		this.props.client.query({
			query: AUDIENCE_COUNT,
			variables: { segments: e, organizationId: this.props.allApplications.organization.id },
			fetchPolicy: 'network-only'
		}).then(res => {
			console.log(res.data.audienceCount.count)
			this.setState({ audienceCount: res.data.audienceCount.count });
		})
			.catch(err => {
				this.setState({ spin: false });
				console.log("Failed to get Audience Count" + err);
			});

	}


	logQuery = (audienceFilterRule, ruleQuery) => {
		console.log('rule', audienceFilterRule);
		this.setState({ audienceFilterRule, ruleQuery });
	};

	saveSchedule = scheduleData => {
		console.log(scheduleData);
		message.success('schedule saved')
		this.setState({ scheduleData, scheduleSaveMark: true })
	}

	render() {
		const { formValues, current, showTestAndControl, testValue, controlValue, testControlSelected, update, rows, values, scheduleData, communicationSelected } = this.state;
		let attributeData = []
		if (this.props.allAttributes)
			attributeData = this.props.allAttributes && this.props.allAttributes.ruleAttributes &&
				this.props.allAttributes.ruleAttributes.map(el => ({
					name: el.attributeName,
					id: el.id,
					label: el.attributeName,
				}));
		else this.state.errors.rule = 'you dont have any rule attributes'
		const props = {
			name: 'file',
			action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
			headers: {
				authorization: 'authorization-text',
			},
		};

		return (
			<div>
				<CampaignHeader
					children={
						<Fragment>
							<Col sm={5} md={8} lg={10} xl={12} xxl={15}>
								<h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">
									{update ? "Update Campaign" : "Create Campaign"}
								</h3>
							</Col>
							<Col sm={19} md={16} lg={14} xl={12} xxl={9}>
								<Stepper
									stepData={stepData}
									current={current}
									onChange={this.goToNextPage.bind(this)}
								/>
							</Col>
						</Fragment>
					}
				/>
				<div className="stepperContainer">
					<div style={{ margin: '40px', height: '60vh' }}>
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
								testControlPercentage={testControlSelected ? testControlSelected : `${testValue}% - ${controlValue}%`}
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
								popupButtonText="Apply"
								edit={update}
							/>
						)}
						{current === 1 && <div style={{ marginBottom: 200 }}>
							<Audience
								audienceTitle="Audience"
								segmentSubTitle="Segment"
								audienceCount={this.state.audienceCount}
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
								errors={this.state.errors}
							/>
						</div>
						}
						{current === 2 &&
							<Offer onFormNext={this.onFormNext}
								offersList={this.props.allOffers.getOffers}
								errors={this.state.errors}
								offer={this.state.offer}
								offerChecked={this.offerChecked}
								noOfferRequired={this.state.noOfferRequired}
								handleOnOfferChange={this.handleOnOfferChange}
								subTitle="Offer" />}
						{current === 3 && (
							<Communication
								subTitle="Communication"
								schedule={true}
								scheduleData={scheduleData}
								campaign={this.state.formValues}
								saveSchedule={this.saveSchedule}
								scheduleSaveMark={this.state.scheduleSaveMark}
								onChange={this.onCommunicationChange}
								communicationData={communicationData}
								defaultValue={communicationSelected}
								value={communicationSelected}
								OnCommunicationFormNext={this.onFormNext}
								commWrappedComponentRef={this.saveSmsFormRef}
								communicationFormValues={this.state.smsForm}
								emailFormRef={this.saveEmailFormRef}
								emailFormData={this.state.emailForm}
								pushFormRef={this.savePushFormRef}
								pushFormData={this.state.pushForm}
							/>
						)}
						{current === 4 &&
							<div className="gx-card" style={{ margin: -20 }}>
								<div className="gx-card-body">
									<Overview
										campaign={this.state.formValues}
										audience={this.state.audiences}
										offer={this.state.offerData}
										communication={this.state.communication.messageTemplate ?
											`${communicationSelected} - ${this.state.communication.messageTemplate.templateSubjectText}` : ''}
									/>
								</div></div>
						}
					</div>
				</div>
				<div style={{}}>
					<div className="gx-card campFooter" style={{ position: 'absolute', width: '100%' }}>
						<div className="gx-card-body" style={{ background: "#F6F6F6" }}>
							<CampaignFooter
								loading={this.state.loading}
								nextButtonText={current === 4 ? 'Launch' : 'Save and Next'}
								saveDraftText={update ? 'Save Draft' : current === 0 ? '' : 'Save Draft'}
								saveDraft={() => this.saveDraft(current + 1)}
								goToPage2={this.goToNextPage.bind(this, current + 1)}
							/>
						</div>
					</div>
				</div>
			</div >
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
			graphql(RULE_ATTRIBUTES, {
				name: 'allAttributes',
				options: ownProps => ({
					variables: {
						input: {
							entityName: "CustomerSearch",
							status: DEFAULT_ACTIVE_STATUS,
							organizationId: jwt.decode(localStorage.getItem("jwt")).org_id,
						}
					},
					fetchPolicy: 'network-only',
				}),
			}),
			graphql(getOffers, {
				name: 'allOffers',
				options: ownProps => ({
					variables: {
						organizationId: jwt.decode(localStorage.getItem("jwt")).org_id,
						state: "LIVE"
					},
					fetchPolicy: 'network-only',
				})
			}),
			// graphql(GET_AUDIENCES, {
			// 	name: 'linkedAudiences',
			// 	options: ownProps => ({
			// 		variables: {
			// 			organization_id: jwt.decode(localStorage.getItem("jwt")).org_id,
			// 			campaign_id: ownProps.match.params.id,
			// 			status: DEFAULT_ACTIVE_STATUS
			// 		},
			// 		fetchPolicy: 'network-only',
			// 	})
			// }),
			graphql(GET_ALL_APPS_OF_ORGANIZATION, {
				name: "allApplications",
				options: props => {
					return {
						variables: {
							id: jwt.decode(localStorage.getItem("jwt")).org_id
						}
					};
				}
			}),
			// graphql(COMMUNICATIONS, {
			// 	name: "allCommunications",
			// 	options: props => ({
			// 		variables: {
			// 			entityId: props.match.params.id,
			// 			entityType: "Campaign",
			// 			organization_id: jwt.decode(localStorage.getItem("jwt")).org_id,
			// 			status: DEFAULT_ACTIVE_STATUS
			// 		},
			// 		fetchPolicy: "network-only"
			// 	})
			// }),

			graphql(CREATE_RULE, {
				name: "createRule"
			}), graphql(UPDATE_RULE, {
				name: "updateRule"
			}), graphql(ADD_OFFER_TO_CAMPAIGN, {
				name: "addOfferToCampaign"
			}), graphql(UPDATE_RULE, {
				name: "updateRule"
			}), graphql(UPDATE_CAMPAIGN, {
				name: "updateCampaign"
			}), graphql(LAUNCH_CAMPAIGN, {
				name: "launchCampaign"
			}), graphql(CREATE_AUDIENCE, {
				name: "createAudience"
			}), graphql(CREATE_MESSAGE_TEMPLETE, {
				name: "messageTemplate"
			}), graphql(CREATE_COMMUNICATION, {
				name: "createCommunication"
			}), graphql(CREATE_COMMUNICATION_WITH_MESSAGE_TEMPLETE, {
				name: "createCommunicationWithMessageTemplate"
			}), graphql(UPDATE_COMMUNICATION_WITH_MESSAGE_TEMPLETE, {
				name: "updateCommunicationWithMessageTemplate"
			}), graphql(UPDATE_AUDIENCES, {
				name: "updateAudiences"
			}),

		)(CampaignCreation)
	)
);
