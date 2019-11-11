import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { allSegments, disableSegment } from '../../Query';
import { withApollo, graphql, ApolloProviderProps, compose } from 'react-apollo';
import { NEW_SEGMENT } from '../../../Utils';
import { Card, Menu, Dropdown, Button, Col, Spin } from 'antd';
import * as moment from 'moment';
import { SortableDataTable, InstantSearch, CampaignHeader } from '@walkinsole/shared';
import { ErrorBoundary } from '@walkinsole/walkin-components';
import * as jwt from "jsonwebtoken";
import { RouteChildrenProps } from 'react-router';

interface SegmentListProps extends RouteChildrenProps, ApolloProviderProps<any> {
	segments?: any
	loading?: boolean
}

interface SegmentListState {
	sortedInfo?: any,
	filtered?: any,
	spinner?: boolean,
	filteredInfo?: any
}

class SegmentList extends React.Component<SegmentListProps, SegmentListState> {
	constructor(props: SegmentListProps) {
		super(props);
		this.state = {
			sortedInfo: null,
			filtered: null,
			spinner: false,
			filteredInfo: ''
		};
	}

	handleChange = (pagination: any, filters: any, sorter: any) => {
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
	onDeleteContact = (contact: any) => {
		let { client } = this.props;
		client
			.mutate({
				mutation: disableSegment,
				variables: {
					id: contact.id,
				},
			})
			.then(({ data }) => {
				const { refetchSegments }: any = this.props;
				refetchSegments();
			})
			.catch(error => {
				console.log('err', error);
			});
	};
	onDuplicateContact = (record: any) => {
		const { history, match } = this.props;
		console.log(record)
		history.push({
			pathname: `${NEW_SEGMENT}/${record.id}`,
			state: {
				segmentSelected: record,
			},
		});
	};
	menus = (record: any) => (
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

	onSegmentFilteredList = (newList: any) => {
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
				sorter: (a: any, b: any) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0),
				sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
			},
			{
				title: 'Segment type',
				dataIndex: 'segmentType',
				key: 'segmentType',
				sorter: (a: any, b: any) => a.segmentType - b.segmentType,
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
				render: (text: any, record: any) => (
					<div className="gx-module-contact-right">
						<Dropdown overlay={this.menus(record)} placement="bottomRight" trigger={['click']}>
							<i className="gx-icon-btn icon icon-ellipse-v" />
						</Dropdown>
					</div>
				),
			},
		];
		return (
			<ErrorBoundary>
				<div style={{
					minHeight: "100vh"
				}}>
					<div style={{
						margin: '1 32px'
					}}>
						<CampaignHeader
							children={
								<React.Fragment>
									<Col span={12}>
										<h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">Segments</h3>
									</Col>
									<Col style={{ display: 'flex', justifyContent: 'flex-end' }} span={12}>
										<Button type="primary" onClick={this.onNewSegment}>
											New Segment
									</Button>
									</Col>
								</React.Fragment>
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
						<SortableDataTable loading={this.props.loading} data={segmentData} onChange={this.handleChange} columns={columns} />
					</Card>
				</div>
			</ErrorBoundary>

		);
	}
}

export default withRouter(
	compose(
		graphql(allSegments, {
			options: (ownProps: any) => {
				const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
				return ({
					variables: {
						org_id: org_id,
						status: 'ACTIVE',
					},
					forceFetch: true,
					fetchPolicy: 'network-only',
				})
			},
			props: ({ data: { loading, error, segments, refetch } }: any) => ({
				loading,
				segments,
				error,
				refetchSegments: (ownProps: any) => {
					const { org_id }: any = jwt.decode(localStorage.getItem("jwt"));
					refetch({
						variables: {
							org_id: org_id, //get it from props
							status: 'ACTIVE',
						},
					});
				},
			}),
		})
	)(withApollo(SegmentList))

);
