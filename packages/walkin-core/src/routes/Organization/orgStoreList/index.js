import React, { Component, Fragment } from 'react';
import { InstantSearch, SortableDataTable } from '@walkinsole/walkin-components';
import PropTypes from 'prop-types';
import { Dropdown, Menu } from 'antd';

class OrgStoreList extends Component {
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
	onOrgFilteredList = newList => {
		this.setState({
			filtered: newList,
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
			<Menu.Item key="delete">Delete</Menu.Item>
		</Menu>
	);
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
	render() {
		const { location, match } = this.props;
		let storeData;
		let orgStoreData = [];
		const { data, pagination, showStoreFilter, placeholder, filterData } = this.props;
		const { sortedInfo, filtered } = this.state;
		// TODO get it from context
		if (location && location.state) {
			if (location.state.storeDetails) {
				storeData = location.state.storeDetails;
				if (filtered != null) {
					orgStoreData = filtered;
				} else {
					orgStoreData = storeData;
				}
			}
		}
		let newSortedInfo = sortedInfo || {};

		const orgColumns = [
			{
				title: 'Store code',
				dataIndex: 'code',
				key: 'code',
				sorter: (a, b) => (a.code !== b.code ? (a.code < b.code ? -1 : 1) : 0),
				sortOrder: newSortedInfo.columnKey === 'code' && newSortedInfo.order,
			},
			{
				title: 'Name',
				dataIndex: 'name',
				key: 'name',
				sorter: (a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0),
				sortOrder: newSortedInfo.columnKey === 'name' && newSortedInfo.order,
			},
			{
				title: 'Address',
				dataIndex: 'addressLine1',
				key: 'addressLine1',
				sorter: (a, b) => a.addressLine1 - b.addressLine1,
				sortOrder: newSortedInfo.columnKey === 'addressLine1' && newSortedInfo.order,
				render: (text, row) => (
					<div>
						{text != null
							? text
							: '' + ', ' + row.addressLine1 != null
							? row.addressLine1
							: '' + ', ' + row.addressLine2 != null
							? ow.addressLine2
							: '' + ', ' + row.city != null
							? row.city
							: '' + ', ' + row.state != null
							? row.state
							: '' + ', ' + row.pinCode != null
							? row.pinCode
							: '' + ', ' + row.country != null
							? row.country
							: ''}
					</div>
				),
			},
			{
				title: 'Status',
				dataIndex: 'status',
				key: 'status',
				sorter: (a, b) => (a.status !== b.status ? (a.status < b.status ? -1 : 1) : 0),
				sortOrder: newSortedInfo.columnKey === 'status' && newSortedInfo.order,
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
				{showStoreFilter && (
					<div style={{ paddingBottom: '20px' }} className="searchInputStyle">
						<InstantSearch
							placeHolder="Search"
							data={location && location.state && location.state.storeDetails}
							onFilteredList={this.onOrgFilteredList}
						/>
					</div>
				)}
				<SortableDataTable
					data={data || orgStoreData}
					onChange={this.handleChange}
					columns={orgColumns}
					pagination={pagination}
				/>
			</Fragment>
		);
	}
}
OrgStoreList.propTypes = {
	showStoreFilter: PropTypes.bool,
};

OrgStoreList.defaultProps = {
	showStoreFilter: true,
};

export default OrgStoreList;
