import React, { Component, Fragment } from 'react';
import CampaignHeader from '../../../components/molecules/campaignHeader';
import { withRouter } from 'react-router-dom';
import { NEW_CAMPAIGN } from '../../../utils/RouterConstants';
import { campaigns } from '../../../query/campaign';
import SortableDataTable from '../../../components/atoms/sortableDataTable';
import { Card, Menu, Dropdown, Input, Progress, Tabs } from 'antd';
import moment from 'moment';
import { withApollo, graphql } from 'react-apollo';
// import './style.css';
const { TabPane } = Tabs;
const data = [
	{
		name: 'welcome push',
		startTime: '2019-05-06T09:10:22.574Z',
		endTime: '2019-06-06T09:10:22.574Z',
	},
	{
		name: 'welcome push',
		startTime: '2019-08-06T09:10:22.574Z',
		endTime: '2019-09-06T09:10:22.574Z',
	},
	{
		name: 'welcome push',
		startTime: '2019-06-21T09:10:22.574Z',
		endTime: '2019-07-06T09:10:22.574Z',
	},
	{
		name: 'welcome push',
		startTime: '2019-07-06T09:10:22.574Z',
		endTime: '2019-0-096T09:10:22.574Z',
	},
	{
		name: 'welcome push',
		startTime: '2019-04-06T09:10:22.574Z',
		endTime: '2019-06-06T09:10:22.574Z',
	},
];
class CampaignList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortedInfo: null,
			filtered: null,
		};
	}
	onNewCampaign = () => {
		const { history } = this.props;
		history.push({
			pathname: NEW_CAMPAIGN,
		});
	};
	handleChange = (pagination, filters, sorter) => {
		console.log('Various parameters', pagination, filters, sorter);
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
				console.log('ee', e.key);
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

	onCampaignSearch = e => {
		let currentList = [];
		let newList = [];

		if (e.target.value !== '') {
			currentList = data;
			// Use .filter() to determine which items should be displayed
			// based on the search terms
			newList = currentList.filter(item => {
				// change current item to lowercase
				const lc = item.name.toLowerCase();
				// change search term to lowercase
				const filter = e.target.value.toLowerCase();
				// check to see if the current list item includes the search term
				// If it does, it will be added to newList. Using lowercase eliminates
				// issues with capitalization in search terms and search content
				return lc.includes(filter);
			});
		} else {
			// If the search bar is empty, set newList to original task list
			newList = data;
		}

		// Set the filtered state based on what our rules added to newList
		this.setState({
			filtered: newList,
		});
	};

	render() {
		let { sortedInfo, filteredInfo, filtered } = this.state;
		sortedInfo = sortedInfo || {};
		filteredInfo = filteredInfo || {};
		//Format start and end date according to status of the campaign using moment
		// let liveCampaigns = campaigns.filter(val => {
		// 	if (val.status === 'ACTIVE') {
		// 		return moment(val.endTime).isBefore(moment(), 'day')
		// 		}
		// })
		// console.log("liveCampaigns",liveCampaigns)
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
		console.log('campaigns', data);
		return (
			<div style={{ margin: '-32px' }}>
				<CampaignHeader
					text="Campaigns"
					isHeaderStepper={false}
					onCampaignHeaderButtonClick={this.onNewCampaign}
					campaignHeaderButtonText="CREATE CAMPAIGN"
				/>
				<Card style={{ margin: '32px' }}>
					<div style={{ marginBottom: '24px' }}>
						<Input
							style={{ width: 200 }}
							placeholder="Search campaign"
							allowClear
							onChange={this.onCampaignSearch}
						/>
						<Tabs defaultActiveKey="1" onChange={this.callback}>
							<TabPane tab="Live" key="1">
								<SortableDataTable data={campaignData} onChange={this.handleChange} columns={columns} />
							</TabPane>
							<TabPane tab="A/B Testing" key="2">
								Content of Tab Pane 2
							</TabPane>
							<TabPane tab="Completed" key="3">
								Content of Tab Pane 3
							</TabPane>
							<TabPane tab="Draft" key="4">
								Content of Tab Pane 4
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
					status: 'ACTIVE',
				},
			}),
			props: ({ data: { loading, error, campaigns } }) => ({
				loading,
				campaigns,
				error,
			}),
		})(CampaignList)
	)
);
