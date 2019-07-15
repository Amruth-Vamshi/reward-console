import React, { Component, Fragment } from 'react';
import { Table } from 'antd';

const SortableDataTable = ({ columns, data, onChange, pagination }) => {
	return (
		<Table
			className="gx-table-responsive"
			dataSource={data}
			onChange={onChange}
			columns={columns}
			pagination={pagination}
		/>
	);
};

export default SortableDataTable;
