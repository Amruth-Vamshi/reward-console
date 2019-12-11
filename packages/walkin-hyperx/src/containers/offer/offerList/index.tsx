import { CampaignHeader, InstantSearch, SortableDataTable, WHeader } from '@walkinsole/shared';
import { Button, Col, Dropdown, Menu } from 'antd';
import * as jwt from 'jsonwebtoken';
import React, { Component, Fragment } from 'react';
import { graphql, withApollo, ApolloProviderProps } from 'react-apollo';
import { RouteChildrenProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { closeOffer, getOffers, LAUNCH_OFFER } from '../../../query/offer';
import { NEW_OFFER, OFFER_DASHBOARD } from '../../../constants/RouterConstants';
import { DEFAULT_ACTIVE_STATUS } from '../../../constants';
import HyperXContainer from '../../../components/atoms/HyperXContainer';

interface IProps extends RouteChildrenProps, ApolloProviderProps<any> {
	refetchOffers
	getOffers
	loading
	data
	changeStatus: () => any
}

interface IState {
	filteredInfo
	sortedInfo: any,
	filtered: any,
	loading: any
}
class OfferList extends Component<IProps, Partial<IState>> {
	constructor(props) {
		super(props);
		this.state = {
			sortedInfo: null,
			filtered: null,
		};
	}

	handleChange = (pagination, filters, sorter) => {
		this.setState({
			sortedInfo: sorter,
		});
	};

	onNewSegment = () => {
		const { history } = this.props;
		history.push({
			pathname: NEW_OFFER,
		});
	};
	onDeleteContact = contact => {
		let { client } = this.props;
		this.setState({ loading: true })
		client
			.mutate({
				mutation: closeOffer,
				variables: {
					id: contact.id,
				},
			})
			.then(({ data }) => {
				console.log('close offer', data);
				const { refetchOffers } = this.props;
				this.setState({ loading: false })
				refetchOffers();
			})
			.catch(error => {
				console.log('err', error);
				this.setState({ loading: false })
			});
	};

	onLaunchOffer = contact => {
		let { client } = this.props;
		client.mutate({
			mutation: LAUNCH_OFFER,
			variables: { id: contact.id },
		}).then(({ data }) => {
			console.log('close offer', data);
			const { refetchOffers } = this.props;
			refetchOffers();
		}).catch(error => {
			console.log('err', error);
		});
	};

	onViewOffer = record => {
		this.props.history.push({
			pathname: `${OFFER_DASHBOARD}/${record.id}`,
			state: { campaignSelected: record },
		});
	}

	onDuplicateContact = record => {
		// const { history } = this.props;
		// history.push({
		// 	pathname: `/hyperx/segments/creste/${record.id}`,
		// 	state: {
		// 		segmentSelected: record,
		// 	},
		// });
	};
	menus = record => (
		<Menu
			onClick={e => {
				if (e.key === 'duplicate') {
					this.onDuplicateContact(record);
				} else if (e.key === 'CLOSED') {
					this.onDeleteContact(record);
				} else if (e.key === 'VIEW') {
					this.onViewOffer(record);
				} else this.onLaunchOffer(record)
			}}
		>
			{record.state == "DRAFT" ? <Menu.Item key="LIVE">Launch Offer</Menu.Item> :
				record.state == "LIVE" ? <Menu.Item key="CLOSED">Close Offer</Menu.Item> : ''}
			{/* <Menu.Item key="duplicate">Duplicate</Menu.Item> */}
			<Menu.Item key="VIEW">View Offer</Menu.Item>
		</Menu>
	);

	onOfferFilteredList = newList => {
		this.setState({
			filtered: newList,
		});
	};

	render() {
		let { sortedInfo, filteredInfo, filtered, loading } = this.state;
		const { getOffers } = this.props;
		sortedInfo = sortedInfo || {};
		filteredInfo = filteredInfo || {};
		let offerData = [];
		if (filtered != null) {
			offerData = filtered;
		} else {
			offerData = getOffers;
		}

		const paginationData = {
			position: "bottom",
			total: offerData ? offerData.length : 0,
			defaultPageSize: 6,
			showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
		}

		const columns = [
			{
				title: 'Name',
				dataIndex: 'name',
				key: 'name',
				sorter: (a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0),
				sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
			},
			{
				title: 'Type',
				dataIndex: 'offerType',
				key: 'offerType',
				sorter: (a, b) => a.offerType - b.offerType,
				sortOrder: sortedInfo.columnKey === 'offerType' && sortedInfo.order,
			},
			{
				title: 'Status',
				dataIndex: 'state',
				key: 'state',
				sorter: (a, b) => a.offerType - b.offerType,
				sortOrder: sortedInfo.columnKey === 'state' && sortedInfo.order,
			},
			{
				title: '',
				key: 'action',
				width: 10,
				render: (text: any, record: any) => (
					<div className="gx-module-campaign-right">
						<Dropdown overlay={this.menus(record)} placement="bottomRight" trigger={['click']}>
							<i className="gx-icon-btn icon icon-ellipse-v" />
						</Dropdown>
					</div>
				),
			},
		];
		return (
			<Fragment>
				{/* <div>
					<CampaignHeader
						children={
							<Fragment>
								<Col span={12}>
									<h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">Offers</h3>
								</Col>
								<Col style={{ display: 'flex', justifyContent: 'flex-end' }} span={12}>
									<Button type="primary" style={{ marginBottom: 0 }} onClick={this.onNewSegment}>
										Create Offer
									</Button>
								</Col>
							</Fragment>
						}
					/>
				</div> */}
				<WHeader title='Offers' extra={<Button type="primary" style={{ marginBottom: 0 }} onClick={this.onNewSegment}>CREATE OFFER</Button>} />
				<HyperXContainer margin='32px' headerHeightInPX={152}>
					<div className="gx-card">
						<div className="gx-card-body">
							<div style={{ marginBottom: '24px' }}>
								<InstantSearch
									placeHolder="Search offer"
									data={getOffers}
									onFilteredList={this.onOfferFilteredList}
								/>
							</div>
							<SortableDataTable loading={this.props.loading} pagination={paginationData} data={offerData} onChange={this.handleChange} columns={columns} />
						</div>
					</div>
				</HyperXContainer>
			</Fragment>
		);
	}
}

export default withRouter(
	graphql(getOffers, {
		options: (ownProps: any) => {
			const { org_id }: any = jwt.decode(localStorage.getItem('jwt'))
			return ({
				variables: {
					organizationId: org_id,
				},
				forceFetch: true,
				fetchPolicy: 'network-only',
			})
		},
		props: ({ data: { loading, error, getOffers, refetch } }: any) => {
			const { org_id }: any = jwt.decode(localStorage.getItem('jwt'))
			return ({
				loading, getOffers, error,
				refetchOffers: (props: any) => {
					refetch({
						variables: {
							organization_id: org_id,
							status: DEFAULT_ACTIVE_STATUS,
						},
					});
				},
			})
		},
	})(withApollo(OfferList))
);
