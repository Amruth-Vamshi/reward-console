import { CampaignHeader, InstantSearch, SortableDataTable } from '@walkinsole/shared';
import { Button, Col, Dropdown, Icon, Menu } from 'antd';
import { History } from 'history';
import * as jwt from 'jsonwebtoken';
import React, { Component, Fragment } from 'react';
import { ApolloProviderProps, graphql, withApollo } from 'react-apollo';
import { RouteChildrenProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { allSegments, disableSegment } from '../../../query/audience';
import { NEW_SEGMENT } from '../../../utils/RouterConstants';

const { org_id, id }: any = jwt.decode(localStorage.getItem("jwt"));

interface IProps extends RouteChildrenProps, ApolloProviderProps<any> {
	history: History
	loading: any,
	error: any
	refetchSegments: () => void
}

interface IState {
	sortedInfo: any,
	filtered: any,
	filteredInfo: any
	// loading: boolean
	// update: boolean
}
class SegmentList extends Component<IProps, IState> {
	constructor(props) {
		super(props);
		this.state = {
			sortedInfo: null,
			filtered: null,
			filteredInfo: {},
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

	// onUpdateStatusContact = (contact, status) => {
	// 	let { client } = this.props;
	// 	console.log(contact.id + " " + status);
	// 	client
	// 		.mutate({
	// 			mutation: UPDATE_SEGMENT,
	// 			variables: {
	// 				id: contact.id,
	// 				status: status
	// 			},
	// 		})
	// 		.then(({ data }) => {
	// 			const { refetchSegments } = this.props;
	// 			refetchSegments();
	// 		})
	// 		.catch(error => {
	// 			console.log('err', error);
	// 		});
	// };

	onDuplicateContact = record => {
		const { history } = this.props;
		history.push({
			pathname: `/hyperx/segments/create/${record.id}`,
			state: {
				segmentSelected: record,
			},
		});
	};

	onUpdateSegment = record => {
		const { history } = this.props;
		history.push({
			pathname: `/hyperx/segments/create/${record.id}`,
			state: {
				segmentSelected: record, update: true
			},
		});
	}

	menus = record => (
		<Menu
			onClick={e => {
				if (e.key === 'duplicate') {
					this.onDuplicateContact(record);
				} else if (e.key === 'delete') {
					this.onDeleteContact(record);
				} else this.onUpdateSegment(record)
			}}
		>
			{/* {record.status != "ACTIVE" ? <Menu.Item key="ACTIVE">Make Active</Menu.Item> : <Menu.Item key="INACTIVE">Make Inactive</Menu.Item>} */}

			{/* <Menu.Item key="view"><Icon type="eye" /> View</Menu.Item> */}
			<Menu.Item key="edit"><Icon type="edit" /> Edit</Menu.Item>
			<Menu.Item key="delete"><Icon type="delete" /> Delete</Menu.Item>
			<Menu.Item key="duplicate"><Icon type="copy" /> Duplicate</Menu.Item>
		</Menu>
	);

	onSegmentFilteredList = newList => {
		this.setState({
			filtered: newList,
		});
	};

	render() {
		let { sortedInfo, filteredInfo, filtered } = this.state;
		const { segments }: any = this.props;
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

		const paginationData = {
			position: "bottom",
			total: segmentData ? segmentData.length : 0,
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
				dataIndex: 'segmentType',
				key: 'segmentType',
				sorter: (a, b) => a.segmentType - b.segmentType,
				sortOrder: sortedInfo.columnKey === 'segmentType' && sortedInfo.order,
			},
			// {
			// 	title: 'Status',
			// 	dataIndex: 'status',
			// 	key: 'status',
			// 	sorter: (a, b) => a.status - b.status,
			// 	sortOrder: sortedInfo.columnKey === 'status' && sortedInfo.order,
			// },
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
				<div style={{ margin: '0 0 32px' }}>
					<CampaignHeader
						children={
							<Fragment>
								<Col span={12}>
									<h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">Segments</h3>
								</Col>
								<Col style={{ display: 'flex', justifyContent: 'flex-end' }} span={12}>
									<Button type="primary" style={{ marginBottom: 0 }} onClick={this.onNewSegment}>
										Create Segment
									</Button>
								</Col>
							</Fragment>
						}
					/>
				</div>
				<div className="gx-card" style={{ margin: '32px' }}>
					<div className="gx-card-body">
						<div style={{ marginBottom: '15px' }}>
							<InstantSearch
								placeHolder="Search segment"
								data={segments}
								onFilteredList={this.onSegmentFilteredList}
							/>
						</div>
						<SortableDataTable loading={this.props.loading} data={segmentData} pagination={paginationData} onChange={this.handleChange} columns={columns} />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withRouter(
	withApollo(
		graphql(allSegments, {
			options: ownProps => ({
				variables: {
					organization_id: org_id,
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
							organization_id: org_id
							status: 'ACTIVE',
						},
					});
				},
			}),
		})(SegmentList)
	)
);
