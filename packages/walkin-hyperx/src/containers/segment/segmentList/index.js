import React, { Component, Fragment } from 'react';
import CampaignHeader from '../../../components/molecules/campaignHeader';
import { withRouter } from 'react-router-dom';
import { allSegments, disableSegment } from '../../../query/audience';
import { withApollo, graphql } from 'react-apollo';
import { NEW_SEGMENT } from '../../../utils/RouterConstants';
import SortableDataTable from '../../../components/atoms/sortableDataTable';
import { Card, Menu, Dropdown, Input } from 'antd';
import moment from 'moment';

// const data = [
// 	{
// 		key: 1,
// 		segmentName: '5000+ visitors',
// 		audienceSize: 32000,
// 		createdOn: '2019-06-21T17:27:18.794Z',
// 	},
// 	{
// 		key: 2,
// 		segmentName: 'welcome push',
// 		audienceSize: 35000,
// 		createdOn: '2019-03-21T17:27:18.794Z',
// 	},
// 	{
// 		key: 3,
// 		segmentName: 'Anniversary sale',
// 		audienceSize: 32000,
// 		createdOn: '2019-05-21T17:27:18.794Z',
// 	},
// 	{
// 		key: 4,
// 		segmentName: '2013 sms',
// 		audienceSize: 32000,
// 		createdOn: '2019-07-21T17:27:18.794Z',
// 	},
// ];

class SegmentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortedInfo: null,
			filtered: null,
		};
	}

	handleChange = (pagination, filters, sorter) => {
		console.log('Various parameters', pagination, filters, sorter);
		this.setState({
			sortedInfo: sorter,
		});
	};

	onNewSegment = () => {
		const { history } = this.props;
		history.push({
			pathname: NEW_SEGMENT,
		});
	};
	onDeleteContact = contact => {
		console.log('delete', contact);
		let { client } = this.props;
		client
			.mutate({
				mutation: disableSegment,
				variables: {
					id: contact.id,
				},
			})
			.then(({ data }) => {
				console.log('delete segment', data);
			})
			.catch(error => {
				console.log('err', error);
			});
	};
	onDuplicateContact = record => {
		console.log('clickedsegment', record);
		const { history } = this.props;
		history.push({
			pathname: `/hyperx/segment/newSegment/${record.id}`,
			state: {
				segmentSelected: record,
			},
		});
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

	onSegmentSearch = e => {
		let currentList = [];
		let newList = [];
		const { segments } = this.props;

		if (e.target.value !== '') {
			currentList = segments;
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
			newList = segments;
		}

		// Set the filtered state based on what our rules added to newList
		this.setState({
			filtered: newList,
		});
	};

	render() {
		let { sortedInfo, filteredInfo, filtered } = this.state;
		const { segments, extensions } = this.props;
		console.log('segments', segments, extensions);
		sortedInfo = sortedInfo || {};
		filteredInfo = filteredInfo || {};
		let segmentData = [];
		if (filtered != null) {
			segmentData = filtered;
		} else {
			segmentData = segments;
		}
		// const columnData = reduce(
		// 	data,
		// 	(result, entry) => {
		// 		// common data
		// 		const commonData = {
		// 			title: startCase(property),
		// 			dataIndex: property,
		// 			key: property,
		// 			sortOrder: sortedInfo.columnKey === property && sortedInfo.order,
		// 		};

		// 		// check for date
		// 		if (moment(value).isValid()) {
		// 			return [
		// 				...result,
		// 				{
		// 					...commonData,
		// 					sorter: (a, b) => moment(a[property]).valueOf() - moment(b[property]).valueOf(),
		// 				},
		// 			];
		// 		}

		// 		// check is numeric
		// 		if (isNumber(value)) {
		// 			return [
		// 				...result,
		// 				{
		// 					...commonData,
		// 					sorter: (a, b) => a[property] - b[property],
		// 				},
		// 			];
		// 		}

		// 		// alphabetical sorting for rest
		// 		return [
		// 			...result,
		// 			{
		// 				...commonData,
		// 				sorter: (a, b) => (a[property] !== b[property] ? (a[property] < b[property] ? -1 : 1) : 0),
		// 			},
		// 		];
		// 	},
		// 	[]
		// );

		// console.log('columnData', columnData);

		const columns = [
			{
				title: 'Segment Name',
				dataIndex: 'name',
				key: 'name',
				sorter: (a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0),
				sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
			},
			{
				title: 'Segment type',
				dataIndex: 'segmentType',
				key: 'segmentType',
				sorter: (a, b) => a.segmentType - b.segmentType,
				sortOrder: sortedInfo.columnKey === 'segmentType' && sortedInfo.order,
			},
			// {
			// 	title: 'Created On',
			// 	dataIndex: 'createdOn',
			// 	key: 'createdOn',
			// 	sorter: (a, b) => moment(a.createdOn).valueOf() - moment(b.createdOn).valueOf(),
			// 	sortOrder: sortedInfo.columnKey === 'createdOn' && sortedInfo.order,
			// },
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
			<Fragment>
				<div style={{ margin: '-32px -32px 0px' }}>
					<CampaignHeader
						text="Segments"
						campaignHeaderButtonText="New Segment"
						isHeaderStepper={false}
						onCampaignHeaderButtonClick={this.onNewSegment}
					/>
				</div>
				<Card style={{ margin: '32px' }}>
					<div style={{ marginBottom: '24px' }}>
						<Input
							style={{ width: 200 }}
							placeholder="Search segment"
							allowClear
							onChange={this.onSegmentSearch}
						/>
					</div>
					<SortableDataTable data={segmentData} onChange={this.handleChange} columns={columns} />
				</Card>
			</Fragment>
		);
	}
}

export default withRouter(
	withApollo(
		graphql(allSegments, {
			options: ownProps => ({
				variables: {
					organization_id: ownProps.client.cache.data.data['$ROOT_QUERY.auth'].organizationId,
					status: 'ACTIVE',
				},
				forceFetch: true,
				fetchPolicy: 'network-only',
			}),
			props: ({ data: { loading, error, segments } }) => ({
				loading,
				segments,
				error,
			}),
		})(SegmentList)
	)
);
