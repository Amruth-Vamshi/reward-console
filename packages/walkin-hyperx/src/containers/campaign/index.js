import React, { Component } from 'react';
import CampaignHeader from '../../components/molecules/campaignHeader';
import CampaignFooter from '../../components/molecules/campaignFooter';
import { withRouter } from 'react-router-dom';
import BasicInfo from './campaignCreation/basicInfo';
import Audience from './campaignCreation/audience';
import { allSegments, attributes } from '../../query/audience';
import { withApollo, graphql, compose } from 'react-apollo';

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
		title: 'Communication',
		route: 'ommunication',
	},
	{
		id: 4,
		title: 'Offer',
		route: 'offer',
	},
	{
		id: 5,
		title: 'Overview',
		route: 'overview',
	},
];

const fields = [
	{ name: 'firstName', label: 'First Name' },
	{ name: 'lastName', label: 'Last Name' },
	{ name: 'age', label: 'Age' },
	{ name: 'address', label: 'Address' },
	{ name: 'phone', label: 'Phone' },
	{ name: 'email', label: 'Email' },
	{ name: 'twitter', label: 'Twitter' },
	{ name: 'isDev', label: 'Is a Developer?', value: false },
];

class CampaignCreation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formValues: {},
			current: 0,
			priorityChosen: '',
			priorityNumberError: false,
			showTestAndControl: false,
			testValue: 95,
			controlValue: 5,
			testControlSelected: '',
		};
	}
	saveFormRef = formRef => {
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

	goToAudiencePage(current) {
		if (current === 1) {
			const form = this.formRef && this.formRef.props && this.formRef.props.form;
			if (form) {
				form.validateFields((err, values) => {
					if (err) {
						return;
					} else {
						this.setState({
							formValues: values,
							current: current,
						});
					}
				});
			}
		} else {
			this.setState({
				current: current,
			});
		}
	}

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
		console.log('vvv', e.target.value);
		this.setState({ value: e.target.value });
	};

	logQuery = query => {
		console.log('quu', query);
	};

	render() {
		const {
			formValues,
			current,
			showTestAndControl,
			testValue,
			controlValue,
			testControlSelected,
			rows,
			values,
		} = this.state;
		let attributeData =
			this.props.allAttributes &&
			this.props.allAttributes.ruleAttributes &&
			this.props.allAttributes.ruleAttributes.map(el => ({
				name: el.attributeName,
				id: el.id,
				label: el.attributeName,
			}));
		console.log('attributeData', this.props.allAttributes.ruleAttributes);
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
					text="Create Campaign"
					current={current}
					stepData={stepData}
					onChange={this.goToAudiencePage.bind(this)}
					isHeaderStepper={true}
				/>
				{current === 0 && (
					<BasicInfo
						subTitle="Basic information"
						onFormNext={this.onFormNext}
						saveFormRef={this.saveFormRef}
						formValues={formValues}
						testAndControlText="Test & Control"
						promptText="prompt text"
						toolTipText="what is test and control?"
						prioritySelectionTitle="Campaign Priority"
						priorityButtonText="Custom no"
						testControlTitle="Test & Control"
						testControlPercentage={testControlSelected ? testControlSelected : '95% - 5%'}
						handleButtonGroupChange={this.handleButtonGroupChange}
						testControlPercentageEditText="Edit"
						onPriorityButtonClick="onPriorityButtonClick"
						priorityNumberInvalidErrorMessage="Enter a value between 6 and 99"
						onTestAndControlEdit={this.onTestAndControlEdit}
						showTestAndControl={showTestAndControl}
						popupTitle="Test & Control"
						handleOk={this.handleOk}
						handleCancel={this.handleCancel}
						applyTestControlChange={this.applyTestControlChange}
						popupbodyText="Divide customers selected for a specific audience into local test and local control
								groups"
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
				<div style={{ margin: '32px' }}>
					<CampaignFooter
						nextButtonText="Next"
						saveDraftText="Save Draft"
						onPage1SaveDraft={this.onPage1SaveDraft}
						goToPage2={this.goToAudiencePage.bind(this, 1)}
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
						organization_id: ownProps.client.cache.data.data['$ROOT_QUERY.auth'].organizationId,
						status: 'ACTIVE',
					},
					fetchPolicy: 'network-only',
				}),
			}),
			graphql(attributes, {
				name: 'allAttributes',
			})
		)(CampaignCreation)
	)
);
