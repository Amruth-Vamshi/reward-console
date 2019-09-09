import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { allSegments, disableSegment } from '../../Query';
import { withApollo, graphql } from 'react-apollo';
import { NEW_SEGMENT } from '../../../Utils';
import { Card, Menu, Dropdown, Button, Col } from 'antd';
import moment from 'moment';
import { SortableDataTable, InstantSearch, CampaignHeader } from '@walkinsole/walkin-components';
import jwt from "jsonwebtoken";

class SegmentList extends Component {
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
		const { history, match } = this.props;
		history.push({
			pathname: NEW_SEGMENT,
		});
	};
	onDeleteContact = contact => {
		let { client } = this.props;
		client
			.mutate({
				mutation: disableSegment,
				variables: {
					id: contact.id,
				},
			})
			.then(({ data }) => {
				const { refetchSegments } = this.props;
				refetchSegments();
			})
			.catch(error => {
				console.log('err', error);
			});
	};
	onDuplicateContact = record => {
		const { history, match } = this.props;
		console.log(this.props)
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

	onSegmentFilteredList = newList => {
		this.setState({
			filtered: newList,
		});
	};

	render() {
		let { sortedInfo, filteredInfo, filtered } = this.state;
		const { segments } = this.props;
		sortedInfo = sortedInfo || {};
		filteredInfo = filteredInfo || {};
		let segmentData = [];
		if (filtered != null) {
			segmentData = filtered;
		} else {
			segmentData = segments;
		}
		//Have a utility function for sorting
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
			{
				title: 'Status',
				dataIndex: 'status',
				key: 'status'
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
			<Fragment>
				<div style={{ margin: '-32px -32px 0px' }}>
					<CampaignHeader
						children={
							<Fragment>
								<Col span={12}>
									<h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">Segments</h3>
								</Col>
								<Col style={{ display: 'flex', justifyContent: 'flex-end' }} span={12}>
									<Button type="primary" onClick={this.onNewSegment}>
										New Segment
									</Button>
								</Col>
							</Fragment>
						}
					/>
				</div>
				<Card style={{ margin: '32px' }}>
					<div style={{ marginBottom: '24px' }}>
						<InstantSearch
							placeHolder="Search segment"
							data={segments}
							onFilteredList={this.onSegmentFilteredList}
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
					org_id: jwt.decode(localStorage.getItem("jwt")).org_id,
					status: 'ACTIVE',
				},
				forceFetch: true,
				fetchPolicy: 'network-only',
			}),
			props: ({ data: { loading, error, segments, refetch } }) => ({
				loading,
				segments,
				error,
				refetchSegments: ownProps => {
					refetch({
						variables: {
							org_id: jwt.decode(localStorage.getItem("jwt")).org_id, //get it from props
							status: 'ACTIVE',
						},
					});
				},
			}),
		})(SegmentList)
	)
);
