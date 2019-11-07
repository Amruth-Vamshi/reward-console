import * as React from 'react';
import { CampaignHeader, Popup } from '@walkinsole/walkin-components';
import { Col, Button, Alert, Breadcrumb, Modal, Spin, Icon } from 'antd';
import OrgCardDetails from '../../components/orgCardDetails';
import { Query, withApollo, ApolloProviderProps } from 'react-apollo';
import { orgDetails, addSubOrganization } from '../../query/organization';
import SubOrgList from '../../components/subOrgList';
import SubOrgForm from './subOrgForm';
import OrgStoreForm from './orgStoreForm';
import OrgStoreList from './orgStoreList';
import "./style.css"
import { RouteComponentProps } from 'react-router';


const { confirm } = Modal;

interface OrganizationRouterProps {
	id: string;
}

interface OrganizationCacheProps {
	data: object
}

interface OrganizationInfoProps extends ApolloProviderProps<OrganizationCacheProps>, RouteComponentProps<OrganizationRouterProps> {
	organization: object,
	loading: boolean,
	error: string
}

interface OrganizationInfoState {
	showSubOrgForm: boolean,
	formValues: object,
	showOrgStoreForm: boolean,
	storeFormValues: object,
	errorMessage: string,
	deleteOrgErrorMessage: object,
	orgId: string
}
class OrganizationInfo extends React.Component<OrganizationInfoProps, OrganizationInfoState> {
	constructor(props: OrganizationInfoProps) {
		super(props);
		this.state = {
			showSubOrgForm: false,
			formValues: {},
			showOrgStoreForm: false,
			storeFormValues: {},
			errorMessage: '',
			deleteOrgErrorMessage: {},
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
		this.setState({ showSubOrgForm: false, formValues: {}, storeFormValues: {} });
	};
	handleStoreCancel = () => {
		this.setState({ showOrgStoreForm: false });
	};
	displayError = (state: string, message: string) => {
		console.log('>>', state, message);
		this.setState({ [state]: message }, () => {
			setTimeout(() => {
				this.setState({ [state]: '' });
			}, 4000);
		});
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
							let { client, match } = this.props;
							let { orgId } = this.state;
							client
								.mutate({
									mutation: addSubOrganization,
									variables: {
										parentId:
											match.params.id,
										name: values.name,
										code: values.code,
										addressLine1: values.address,
										status: 'ACTIVE',
										phoneNumber: values.phoneNumber,
										organizationType: type,
									},
								})
								.then(({ data }) => {
									this.setState({ [popupState]: false, [formState]: {} });
									refetch();
								})
								.catch(error => {
									// console.log(error);
									this.displayError(
										'errorMessage',
										error && error.graphQLErrors[0]
											? error.graphQLErrors[0].message
											: 'Error in submitting the form'
									);
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

	onSubOrgCardClick = (id: string) => {
		const { history } = this.props;
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
	onSubOrgDelete(refetch, id) {
		//const { deleteOrgErrorMessage } = this.state;
		confirm({
			title: 'Are you sure you want to delete?',
			// content: (
			// 	<Fragment>
			// 		{deleteOrgErrorMessage !== '' && <Alert message={deleteOrgErrorMessage} type="error" />}
			// 	</Fragment>
			// ),
			onOk() {
				return new Promise((resolve, reject) => { }).catch(() => console.log('Oops errors!'));

				// this.props.client
				// 	.mutate({
				// 		mutation: deleteSubOrganization,
				// 		variables: {
				// 			id: id,
				// 		},
				// 	})
				// 	.then(({ data }) => {
				// 		refetch();
				// 	})
				// 	.catch(error => {
				// 		this.displayError(
				// 			'deleteOrgErrorMessage',
				// 			error && error.graphQLErrors[0]
				// 				? error.graphQLErrors[0].message
				// 				: 'Error in deleting the org'
				// 		);
				// 	});
			},
			onCancel() { },
		});
	}
	render() {
		const { client, match } = this.props;
		const { showSubOrgForm, formValues, storeFormValues,
			showOrgStoreForm,
			errorMessage,

		} = this.state;
		const { Item } = Breadcrumb;
		const antIcon = <Icon type="loading" style={{ fontSize: 100 }} spin />;
		return (
			<div style={{ margin: '-32px -16px 0px -16px' }}>
				<React.Fragment>
					<Query query={orgDetails}
						variables={{ id: match.params.id }}
					>
						{({ data, loading, error, refetch }) => {
							if (loading) return (<div> <br /> <br /> <br /> <br />
								<div className="divCenter">
									<Spin size="large" indicator={antIcon} />
								</div> <br /> <br /> <br />
							</div>)
							if (error) {
								return <p>Error :(</p>;
							}
							const { organization } = data;
							let orgDetails = {
								userName: client.cache.data.data['$ROOT_QUERY.auth'].firstName,
								org: organization,
							};
							let subOrgDetails =
								organization &&
								organization.children &&
								organization.children.filter(val => {
									return val.organizationType == 'ORGANIZATION';
								});
							let storeDetails =
								organization &&
								organization.children &&
								organization.children.filter(val => {
									return val.organizationType == 'STORE';
								});

							let orgHeirarchy = ['SAMPLE']; //Remove this
							if (organization && !orgHeirarchy.includes(organization.name)) {
								orgHeirarchy.push(organization.name);
							}
							return (
								<React.Fragment>
									<CampaignHeader
										children={
											<Col span={12}>
												<h3 className="gx-text-grey paddingLeftStyle">Organization Info</h3>
												<Breadcrumb>
													{orgHeirarchy &&
														orgHeirarchy.map((orgName, index) => (
															<Item
																key={index}
															>
																{orgName}
															</Item>
														))}
												</Breadcrumb>
											</Col>
										}
									/>
									<OrgCardDetails orgDetails={orgDetails} />
									<p className="gx-text-grey gx-mb-1">Sub Organizations</p>
									<SubOrgList
										subOrgDetails={subOrgDetails}
										onNewSubOrg={this.onNewSubOrg}
										onSubOrgCardClick={this.onSubOrgCardClick}
										onSubOrgDelete={this.onSubOrgDelete.bind(this, refetch)}
									/>
									<Popup
										visible={showSubOrgForm}
										title="Create Sub Organization"
										handleCancel={this.handleCancel}
										handleOnClick={this.onCreateNewOrg.bind(
											this,
											'formValues',
											'showSubOrgForm',
											'ORGANIZATION',
											refetch
										)}
										popupContent={
											<React.Fragment>
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
												{errorMessage !== '' && <Alert message={errorMessage} type="error" />}
											</React.Fragment>
										}
										buttonText="Done"
									/>
									<p className="gx-text-grey gx-mb-1">Stores</p>
									<React.Fragment>
										<div className="subOrgButtonContainer">
											<Button type="primary" onClick={this.onNewStore}>
												New Store
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
									</React.Fragment>
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
											<React.Fragment>
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
												{errorMessage && <Alert message={errorMessage} type="error" />}
											</React.Fragment>
										}
										buttonText="Done"
									/>
								</React.Fragment>
							);
						}}
					</Query>
				</React.Fragment>
			</div>
		);
	}
}

export default withApollo(OrganizationInfo);
