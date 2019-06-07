import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import CampaignHeader from '../../../components/molecules/campaignHeader';
import CampaignFooter from '../../../components/molecules/campaignFooter';
import CampaignPriority from '../../../components/organisms/campaignPriority';
import BasicInfoForm from '../../../components/molecules/basicInfoForm';
import HeaderTitle from '../../../components/atoms/headerTitle';
import { Route, Switch } from 'react-router-dom';
import WalkinQueryBuilder from '../../../components/atoms/queryBuilder';

const stepData = [
	{
		id: 1,
		title: 'Basic Info',
	},
	{
		id: 2,
		title: 'Audience',
	},
	{
		id: 3,
		title: 'Communication',
	},
	{
		id: 4,
		title: 'Offer',
	},
	{
		id: 5,
		title: 'Overview',
	},
];

const buttonData = [
	{
		text: 1,
	},
	{
		text: 2,
	},
	{
		text: 3,
	},
	{
		text: 4,
	},
	{
		text: 5,
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

class BasicInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formValues: {},
			current: 0,
		};
	}
	saveFormRef = formRef => {
		this.formRef = formRef;
	};

	logQuery = query => {
		console.log('quu', query);
	};

	onFormNext = e => {
		e.preventDefault();
		const form = this.formRef.props.form;
		form.validateFields((err, values) => {
			if (err) {
				return;
			}
			this.setState({
				formValues: values,
			});
		});
	};

	render() {
		const { formValues, current } = this.state;
		return (
			<div style={{ margin: '-32px' }}>
				<CampaignHeader text="Create Campaign" current={current} stepData={stepData} onChange={this.onChange} />
				<div style={{ margin: '32px' }}>
					{' '}
					<HeaderTitle text="Basic Information" />
				</div>
				<Row style={{ margin: '32px' }}>
					<Col span={14}>
						<BasicInfoForm
							onFormNext={this.onFormNext}
							wrappedComponentRef={this.saveFormRef}
							formValues={formValues}
						/>
					</Col>
					<Col span={10}>
						<CampaignPriority
							buttons={buttonData}
							text="Test & Control"
							promptText="prompt text"
							tootTipText="what is test and control"
							prioritySelectionTitle="Campaign Priority"
							priorityButtonText="Custom"
							testControlTitle="Test & Control"
							testControlPercentage="95% - 5%"
							testControlPercentageEditText="Edit"
						/>
					</Col>
				</Row>

				<div style={{ margin: '32px' }}>
					<CampaignFooter />
				</div>
			</div>
		);
	}
}

export default BasicInfo;
