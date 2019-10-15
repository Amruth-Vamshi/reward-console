import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { NEW_CAMPAIGN, CAMPAIGN_MANAGEMENT, CAMPAIGN_DASHBOARD } from '../../../utils/RouterConstants';
import { campaigns } from '../../../query/campaign';
import { Card, Menu, Dropdown, Col, Spin, Button, Progress, Tabs } from 'antd';
import moment from 'moment';
import { withApollo, graphql } from 'react-apollo';
import { SortableDataTable, InstantSearch, CampaignHeader } from '@walkinsole/shared';
import { CircularProgress, Widget } from '@walkinsole/walkin-components';

import './style.css';
import jwt from 'jsonwebtoken'

const DEFAULT_STATUS = 'ACTIVE';
const DEFAULT_TYPE = 'OFFER';

const { TabPane } = Tabs;

class CampaignList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortedInfo: null,
			filtered: null,
			allCampaigns: null,
			data: null,
			loading: null,
			key: this.props.location.tabKey ? this.props.location.tabKey : '1'
		};
	}
	componentDidMount() {
		const { campaigns, loading } = this.props;
		this.setState({ loading: loading })
	}


	componentDidUpdate(preValue) {
		if (this.props.loading !== preValue.loading) {
			this.setInitialValues()
			console.log(this.props)
		}
	}

	setInitialValues = () => {
		const { campaigns, loading } = this.props;
		this.setState({ allCampaigns: campaigns, loading: false }, () => {
			this.onTabChange(this.state.key)
		})

	}
	onNewCampaign = () => {
		const { history } = this.props;
		history.push({
			pathname: NEW_CAMPAIGN,
		});
	};
	handleChange = (pagination, filters, sorter) => {
		this.setState({ sortedInfo: sorter });
	};

	onDeleteContact = contact => {
		console.log('delete', contact);
	};

	onViewCampaign = campaign => {
		console.log('View', campaign);
		this.props.history.push({
			pathname: `${CAMPAIGN_DASHBOARD}/${campaign.id}`,
			state: { campaignSelected: campaign },
		});
	};

	onDuplicateContact = contact => {
		console.log('dupl', contact);
		const { history, match } = this.props;
		console.log(this.props)
		history.push({
			pathname: `${NEW_CAMPAIGN}/${contact.id}`,
			state: {
				campaignSelected: contact,
			},
		});
	};

	menus = record => (
		<Menu
			onClick={e => {
				if (e.key === 'duplicate') {
					this.onDuplicateContact(record);
				} else if (e.key === 'edit') {
					// this.props.history.push(`/refinex/feedback/${record.id}/edit`)

				} else if (e.key === "view") {
					this.onViewCampaign(record)
				} else {
					this.onDeleteContact(record);
				}
			}}
		>
			<Menu.Item key="view">View</Menu.Item>
			{/* <Menu.Item key="edit">Edit</Menu.Item>
			<Menu.Item key="duplicate">Duplicate</Menu.Item> */}
			<Menu.Item key="delete">Delete</Menu.Item>
		</Menu>
	);

	onCampaignFilteredList = newList => {
		console.log("new list", newList)
		this.setState({
			filtered: newList,
		});
	};

	onTabChange = key => {
		const { allCampaigns } = this.state

		console.log(key)
		if (!allCampaigns || allCampaigns.length < 1) return
		if (key == 2) {
			let upcomingCampaigns = allCampaigns.filter(val => {
				if (val.status == 'ACTIVE') {
					return val.campaignStatus == 'LIVE' && moment(val.startTime).isAfter(moment());
				}
			});
			this.setState({ data: upcomingCampaigns, filtered: null });
		}

		if (key == 3) {
			let completedCampaigns = allCampaigns.filter(val => {
				if (val.status == 'ACTIVE') {
					return moment(val.endTime).isBefore(moment());
				}
			});
			this.setState({ data: completedCampaigns, filtered: null });
		}
		if (key == 4) {
			let draftCampaigns = allCampaigns.filter(val => {
				return val.campaignStatus == 'DRAFT';
			});
			this.setState({ data: draftCampaigns, filtered: null });
		}
		if (key == 5) {
			let draftCampaigns = allCampaigns.filter(val => {
				return val.campaignStatus == 'PAUSE';
			});
			this.setState({ data: draftCampaigns, filtered: null });
		}
		if (key == 1) {
			let liveCampaigns = allCampaigns.filter(val => {
				if (val.status == 'ACTIVE') {
					return val.campaignStatus == 'LIVE' && moment().isBetween(val.startTime, val.endTime);
				}
			});
			this.setState({ data: liveCampaigns, filtered: null });
		}
	};

	render() {
		let { sortedInfo, filteredInfo, filtered, data, loading, key } = this.state;
		sortedInfo = sortedInfo || {};
		filteredInfo = filteredInfo || {};
		let campaignData = [];
		if (filtered != null) {
			campaignData = filtered;
		} else {
			campaignData = data;
		}
		const paginationData = {
			position: "bottom",
			total: campaignData ? campaignData.length : 0,
			defaultPageSize: 6,
			showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
		}

		console.log(this.state.key);

		const columns = [
			{
				title: 'Name',
				dataIndex: 'name',
				key: 'name',
				render: (text, row) => <div style={{ color: '#292929' }}> {text} </div>,
				sorter: (a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0),
				sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
			},
			{
				title: 'Start date & end date',
				dataIndex: 'startTime',
				key: 'startTime',
				render: (text, row) => (
					<div>
						{moment(text).format('DD-MMM-YY')}
						<Progress
							style={{ width: '35%', margin: '0px 5px 0px 5px' }}
							percent={Math.round(
								((moment() - moment(text)) / (moment(row.endTime) - moment(text))) * 100
							)}
							showInfo={false}
						/>
						{moment(row.endTime).format('DD-MMM-YY')}
					</div>
				),
			},
			{
				title: 'Priority',
				dataIndex: 'priority',
				key: 'priority',
				render: (text, row) => <div className="priorityTextStyle">
					{text < 10 ? `0${text}` : text} </div>,
				sorter: (a, b) => (a.priority !== b.priority ? (a.priority < b.priority ? -1 : 1) : 0),
				sortOrder: sortedInfo.columnKey === 'priority' && sortedInfo.order,
			},
			{
				title: '',
				key: 'action',
				width: 10,
				render: (text, record) => (
					<div className="gx-module-contact-right">
						<Dropdown overlay={this.menus(record)} placement="bottomRight" trigger={['click']}>
							<i className="gx-icon-btn icon icon-ellipse-v" />
						</Dropdown>
					</div>
				),
			},
		];
		return (
			<div>
				<CampaignHeader
					children={
						<Fragment>
							<Col span={12}>
								<h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">Campaigns</h3>
							</Col>
							<Col className="searchInputStyle" span={12}>
								<Button type="primary" style={{ marginBottom: 0 }} onClick={this.onNewCampaign}>
									CREATE CAMPAIGN
								</Button>
							</Col>
						</Fragment>
					}
				/>
				{loading ?
					<div>
						<br /> <br /> <br /> <br /><br /> <br />
						<div className="divCenter">
							<Spin size="large" />
						</div>
						<br /> <br /> <br />
					</div>
					:
					// <div className="gx-card" style={{ margin: '32px' }}>
					// 	<div className="gx-card-body">
					// 		<div className="searchInputStyle">
					// 			<InstantSearch
					// 				placeHolder="Search campaign"
					// 				data={data}
					// 				onFilteredList={this.onCampaignFilteredList}
					// 			/>
					// 		</div>
					<div className="HyperX-campaignList">
						<Widget title="Campaign List" style={{ margin: '32px' }} styleName="gx-card-tabs"
							extra={
								<InstantSearch
									placeHolder="Search campaign"
									data={data}
									onFilteredList={this.onCampaignFilteredList}
								/>}
						>
							<Tabs defaultActiveKey={key ? key : "1"} onChange={this.onTabChange}>
								<TabPane tab="Live" key="1">
									<SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} />
								</TabPane>
								<TabPane tab="Upcoming" key="2">
									<SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} />
								</TabPane>
								<TabPane tab="Completed" key="3">
									<SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} />
								</TabPane>
								<TabPane tab="Draft" key="4">
									<SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} />
								</TabPane>
								<TabPane tab="Paused" key="5">
									<SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} pagination={paginationData} />
								</TabPane>
							</Tabs>
						</Widget>
					</div>
					// 	</div>
					// </div>
				}
			</div>
		);
	}
}

export default withRouter(
	withApollo(
		graphql(campaigns, {
			options: () => ({
				variables: {
					organization_id: jwt.decode(localStorage.getItem("jwt")).org_id,
					status: DEFAULT_STATUS,
					campaignType: DEFAULT_TYPE
				}, fetchPolicy: "network-only"
			}),
			props: ({ data: { loading, error, campaigns, refetch } }) => ({
				loading,
				campaigns,
				error,
				changeStatus: status => {
					const variables = { status };
					refetch(variables);
				},
			}),
		})(CampaignList)
	)
);
