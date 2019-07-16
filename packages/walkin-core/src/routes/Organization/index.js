import React, { Component, Fragment } from 'react';
import { CampaignHeader, Popup, SortableDataTable } from '@walkinsole/walkin-components';
import { Row, Col, Avatar, Button, Dropdown, Alert } from 'antd';
import OrgCardDetails from '../../components/orgCardDetails';
import { Query, withApollo, graphql } from 'react-apollo';
import { userDetails, orgDetails, addSubOrganization } from '../../query/organization';
import SubOrgList from '../../components/subOrgList';
import SubOrgForm from './subOrgForm';
import OrgStoreForm from './orgStoreForm';
import OrgStoreList from './orgStoreList';

class OrganizationInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSubOrgForm: false,
			formValues: {},
			showOrgStoreForm: false,
			storeFormValues: {},
			errorMessage: false,
			orgId: this.props.client && this.props.client.cache.data.data['$ROOT_QUERY.auth'].organizationId,
		};
	}
	onNewSubOrg = () => {
		this.setState({
			showSubOrgForm: true,
		});
	};
	onNewStore = () => {
		this.setState({
			showOrgStoreForm: true,
		});
	};
	handleCancel = () => {
		this.setState({ showSubOrgForm: false });
	};
	handleStoreCancel = () => {
		this.setState({ showOrgStoreForm: false });
	};
	onCreateNewOrg = (formState, popupState, type, refetch) => {
		const form = this.formRef && this.formRef.props && this.formRef.props.form;
		if (form) {
			form.validateFields((err, values) => {
				if (err) {
					return;
				} else {
					this.setState(
						{
							[formState]: values,
						},
						() => {
							let { client } = this.props;
							let { orgId } = this.state;
							client
								.mutate({
									mutation: addSubOrganization,
									variables: {
										parentId: orgId || client.cache.data.data['$ROOT_QUERY.auth'].organizationId,
										name: values.name,
										code: values.code,
										addressLine1: values.address,
										status: 'ACTIVE',
										phoneNumber: values.phoneNumber,
										organizationType: type,
									},
								})
								.then(({ data }) => {
									this.setState({ [popupState]: false });
									refetch();
								})
								.catch(error => {
									this.setState({ errorMessage: true });
								});
						}
					);
				}
			});
		}
	};

	saveFormRef = formRef => {
		this.formRef = formRef;
	};
	orgStoreComponentRef = formRef => {
		this.formRef = formRef;
	};

	onSubOrgCardClick = id => {
		const { history, match } = this.props;
		history.push({
			pathname: `/core/organization/${id}`,
		});
	};
	showAllStores(storeDetails) {
		const {
			history,
			match: { url: currentUrl },
		} = this.props;
		history.push({
			pathname: `${currentUrl}/stores`,
			state: {
				storeDetails: storeDetails,
			},
		});
	}
	render() {
		const { client, organization, loading, error, match } = this.props;
		const {
			showSubOrgForm,
			formValues,
			sortedInfo,
			storeFormValues,
			showOrgStoreForm,
			errorMessage,
			orgId,
		} = this.state;
		return (
			<div style={{ margin: '-32px -16px 0px -16px' }}>
				<Fragment>
					<Query
						query={orgDetails}
						variables={{ id: match.params.id || client.cache.data.data['$ROOT_QUERY.auth'].organizationId }}
					>
						{({ data, loading, error, refetch }) => {
							if (loading) return <p>Loading...</p>;
							if (error) {
								return <p>Error :(</p>;
							}
							const { organization } = data;
							let orgDetails = {
								userName: client.cache.data.data['$ROOT_QUERY.auth'].firstName,
								org: organization,
							};
							let subOrgDetails =
								organization.children &&
								organization.children.filter(val => {
									return val.organizationType == 'ORGANIZATION';
								});
							let storeDetails =
								organization.children &&
								organization.children.filter(val => {
									return val.organizationType == 'STORE';
								});
							return (
								<Fragment>
									<CampaignHeader
										children={
											<Col span={12}>
												<h3 className="gx-text-grey paddingLeftStyle">Organization Info</h3>
												<p className="gx-text-grey gx-mb-1">{`${organization.name} /`}</p>
											</Col>
										}
									/>
									<OrgCardDetails orgDetails={orgDetails} />
									<p className="gx-text-grey gx-mb-1">Sub Organizations</p>
									<SubOrgList
										subOrgDetails={subOrgDetails}
										onNewSubOrg={this.onNewSubOrg}
										onSubOrgCardClick={this.onSubOrgCardClick}
									/>
									<Popup
										visible={showSubOrgForm}
										title="Create Sub organization"
										handleCancel={this.handleCancel}
										handleOnClick={this.onCreateNewOrg.bind(
											this,
											'formValues',
											'showSubOrgForm',
											'ORGANIZATION',
											refetch
										)}
										popupContent={
											<Fragment>
												<SubOrgForm
													onFormSubmit={this.onCreateNewOrg.bind(
														this,
														'formValues',
														'showSubOrgForm',
														'ORGANIZATION'
													)}
													wrappedComponentRef={this.saveFormRef}
													formValues={formValues}
												/>
												{errorMessage && (
													<Alert message="Error in submitting the form" type="error" />
												)}
											</Fragment>
										}
										buttonText="Done"
									/>
									<p className="gx-text-grey gx-mb-1">Stores</p>
									<Fragment>
										<div className="subOrgButtonContainer">
											<Button type="primary" onClick={this.onNewStore}>
												New store
											</Button>
										</div>
										<OrgStoreList
											data={storeDetails ? storeDetails.slice(0, 4) : []}
											pagination={false}
											showStoreFilter={false}
										/>
										{storeDetails && storeDetails.length > 0 && (
											<div style={{ paddingTop: '10px' }}>
												<Button onClick={this.showAllStores.bind(this, storeDetails)}>
													View all
												</Button>
											</div>
										)}
									</Fragment>
									<Popup
										visible={showOrgStoreForm}
										title="Create Store"
										handleCancel={this.handleStoreCancel}
										handleOnClick={this.onCreateNewOrg.bind(
											this,
											'storeFormValues',
											'showOrgStoreForm',
											'STORE',
											refetch
										)}
										popupContent={
											<Fragment>
												<OrgStoreForm
													onOrgStoreFormSubmit={this.onCreateNewOrg.bind(
														this,
														'storeFormValues',
														'showOrgStoreForm',
														'STORE'
													)}
													wrappedComponentRef={this.saveFormRef}
													storeFormValues={storeFormValues}
												/>
												{errorMessage && (
													<Alert message="Error in submitting the form" type="error" />
												)}
											</Fragment>
										}
										buttonText="Done"
									/>
								</Fragment>
							);
						}}
					</Query>
				</Fragment>
			</div>
		);
	}
}

export default withApollo(OrganizationInfo);
