import React, { Component, Fragment } from 'react';
import { Row, Col, Typography } from 'antd';
import CampaignHeader from '../../../components/molecules/campaignHeader';
import CampaignFooter from '../../../components/molecules/campaignFooter';
import CampaignPriority from '../../../components/organisms/campaignPriority';
import BasicInfoForm from '../../../components/molecules/basicInfoForm';
import { Route, Switch } from 'react-router-dom';
import WalkinQueryBuilder from '../../../components/atoms/queryBuilder';
import Audience from '../audience';
import BasicSlider from '../../../components/atoms/testAndControlSlider';
import Popup from '../../../components/atoms/popup';
import { withRouter } from 'react-router-dom';

const { Text } = Typography;

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

class BasicInfo extends Component {
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
					// e.stopPropagation();
					// e.stopPropagation();
					const { history } = this.props;
					history.push({
						pathname: '/hyperx/audience',
					});
				}
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
	};

	render() {
		const { formValues, current, showTestAndControl, testValue, controlValue, testControlSelected } = this.state;
		return (
			<div style={{ margin: '-32px' }}>
				<CampaignHeader
					text="Create Campaign"
					current={current}
					stepData={stepData}
					onChange={this.goToAudiencePage.bind(this)}
				/>
				<Switch>
					<Route
						exact
						path={'/hyperx/basicInfo'}
						render={props => {
							return (
								<Fragment>
									<div style={{ margin: '32px' }}>
										{' '}
										<h3 className="gx-text-grey">Basic information</h3>
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
												text="Test & Control"
												promptText="prompt text"
												tootTipText="what is test and control?"
												prioritySelectionTitle="Campaign Priority"
												priorityButtonText="Custom no"
												testControlTitle="Test & Control"
												testControlPercentage={
													testControlSelected ? testControlSelected : '95% - 5%'
												}
												handleChange={this.handleButtonGroupChange}
												testControlPercentageEditText="Edit"
												onClick={this.onPriorityButtonClick}
												priorityNumberInvalidErrorMessage="Enter a value between 6 and 99"
												onTestAndControlEdit={this.onTestAndControlEdit}
											/>
										</Col>
									</Row>
									<Popup
										visible={showTestAndControl}
										title="Test & Control"
										handleOk={this.handleOk}
										handleCancel={this.handleCancel}
										handleOnClick={this.applyTestControlChange}
										popupContent={
											<Fragment>
												<Text>
													Divide customers selected for a specific audience into local test
													and local control groups
												</Text>
												<BasicSlider
													controlValue={controlValue}
													testValue={testValue}
													maxValueAllowed={75}
													onTestValueChange={this.onTestValueChange}
													onControlValueChange={this.onControlValueChange}
												/>
											</Fragment>
										}
										buttonText="Apply"
									/>
								</Fragment>
							);
						}}
					/>
					{/* {Object.keys(formValues).length > 0 ? ( */}
					<Route path={'/hyperx/audience'} component={Audience} />
					{/* ) : (
						<Route path={'/hyperx/basicInfo'} component={BasicInfo} />
					)} */}
				</Switch>

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

export default withRouter(BasicInfo);
