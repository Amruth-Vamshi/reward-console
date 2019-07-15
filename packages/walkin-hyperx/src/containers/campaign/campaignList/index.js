import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { NEW_CAMPAIGN } from '../../../utils/RouterConstants';
import { campaigns } from '../../../query/campaign';
import { Card, Menu, Dropdown, Col, Button, Progress, Tabs } from 'antd';
import moment from 'moment';
import { withApollo, graphql } from 'react-apollo';
import { SortableDataTable, InstantSearch, CampaignHeader } from '@walkinsole/walkin-components';
import './style.css';

const DEFAULT_STATUS = 'ACTIVE';

const { TabPane } = Tabs;
const data = [
	{
		name: 'welcome push',
		startTime: '2019-05-06T09:10:22.574Z',
		endTime: '2019-06-06T09:10:22.574Z',
		status: 'ACTIVE',
	},
	{
		name: 'birthday offer',
		startTime: '2019-08-06T09:10:22.574Z',
		endTime: '2019-09-06T09:10:22.574Z',
		status: 'ACTIVE',
	},
	{
		name: 'bean redemption',
		startTime: '2019-06-21T09:10:22.574Z',
		endTime: '2019-07-06T09:10:22.574Z',
		status: 'ACTIVE',
	},
	{
		name: '30% offer',
		startTime: '2019-07-06T09:10:22.574Z',
		endTime: '2019-08-096T09:10:22.574Z',
		status: 'ACTIVE',
	},
	{
		name: 'store opening offer',
		startTime: '2019-04-06T09:10:22.574Z',
		endTime: '2019-06-06T09:10:22.574Z',
		status: 'ACTIVE',
	},
	{
		name: '50% on beverages',
		startTime: '2019-08-06T09:10:22.574Z',
		endTime: '2019-10-06T09:10:22.574Z',
		status: 'DRAFT',
	},
	{
		name: 'draft test',
		startTime: '2019-06-06T09:10:22.574Z',
		endTime: '2019-07-06T09:10:22.574Z',
		status: 'DRAFT',
	},
];
class CampaignList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortedInfo: null,
			filtered: null,
			data: data.filter(val => {
				if (val.status == 'ACTIVE') {
					return moment().isBetween(val.startTime, val.endTime);
				}
			}),
		};
	}
	onNewCampaign = () => {
		const { history } = this.props;
		history.push({
			pathname: NEW_CAMPAIGN,
		});
	};
	handleChange = (pagination, filters, sorter) => {
		this.setState({
			sortedInfo: sorter,
		});
	};

	onDeleteContact = contact => {
		console.log('delete', contact);
	};
	onDuplicateContact = contact => {
		console.log('dupl', contact);
	};
	menus = record => (
		<Menu
			onClick={e => {
				if (e.key === 'duplicate') {
					this.onDuplicateContact(record);
				} else {
					this.onDeleteContact(record);
				}
			}}
		>
			<Menu.Item key="duplicate">Duplicate</Menu.Item>
			<Menu.Item key="delete">Delete</Menu.Item>
		</Menu>
	);

	onCampaignFilteredList = newList => {
		this.setState({
			filtered: newList,
		});
	};

	onTabChange = key => {
		if (key == 2) {
			let upcomingCampaigns = data.filter(val => {
				if (val.status == 'ACTIVE') {
					return moment(val.startTime).isAfter(moment(), 'day');
				}
			});
			this.setState({ data: upcomingCampaigns });
		}
		if (key == 3) {
			this.setState({ data: data });
		}
		if (key == 4) {
			let completedCampaigns = data.filter(val => {
				if (val.status == 'ACTIVE') {
					return moment(val.endTime).isBefore(moment(), 'day');
				}
			});
			this.setState({ data: completedCampaigns });
		}
		if (key == 5) {
			const { changeStatus } = this.props;
			//If api works
			// changeStatus('DRAFT')
			// this.setState({data: this.props.campaigns})
			let draftCampaigns = data.filter(val => {
				return val.status == 'DRAFT';
			});
			this.setState({ data: draftCampaigns });
		}
		if (key == 1) {
			let liveCampaigns = data.filter(val => {
				if (val.status == 'ACTIVE') {
					return moment().isBetween(val.startTime, val.endTime);
				}
			});
			this.setState({ data: liveCampaigns });
		}
	};

	render() {
		let { sortedInfo, filteredInfo, filtered, data } = this.state;
		sortedInfo = sortedInfo || {};
		filteredInfo = filteredInfo || {};
		let campaignData = [];
		if (filtered != null) {
			campaignData = filtered;
		} else {
			campaignData = data;
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
				title: 'Start date & end date',
				dataIndex: 'startTime',
				key: 'startTime',
				render: (text, row) => (
					<div>
						{moment(text).format('DD-MM-YYYY')}
						<Progress
							style={{ width: '35%', margin: '0px 5px 0px 5px' }}
							percent={Math.round(
								((moment() - moment(text)) / (moment(row.endTime) - moment(text))) * 100
							)}
							showInfo={false}
						/>
						{moment(row.endTime).format('DD-MM-YYYY')}
					</div>
				),
			},
			{
				title: '',
				key: 'action',
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
			<div style={{ margin: '-32px' }}>
				<CampaignHeader
					children={
						<Fragment>
							<Col span={12}>
								<h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">Campaigns</h3>
							</Col>
							<Col className="searchInputStyle" span={12}>
								<Button type="primary" onClick={this.onNewCampaign}>
									CREATE CAMPAIGN
								</Button>
							</Col>
						</Fragment>
					}
				/>
				<Card>
					<div style={{ marginBottom: '24px' }}>
						<div className="searchInputStyle">
							<InstantSearch
								placeHolder="Search campaign"
								data={data}
								onFilteredList={this.onCampaignFilteredList}
							/>
						</div>
						<Tabs defaultActiveKey="1" onChange={this.onTabChange}>
							<TabPane tab="Live" key="1">
								<SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} />
							</TabPane>
							<TabPane tab="Upcoming" key="2">
								<SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} />
							</TabPane>
							<TabPane tab="A/B Testing" key="3">
								<SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} />
							</TabPane>
							<TabPane tab="Completed" key="4">
								<SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} />
							</TabPane>
							<TabPane tab="Draft" key="5">
								<SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} />
							</TabPane>
						</Tabs>
					</div>
				</Card>
			</div>
		);
	}
}

export default withRouter(
	withApollo(
		graphql(campaigns, {
			options: () => ({
				variables: {
					status: DEFAULT_STATUS,
				},
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
