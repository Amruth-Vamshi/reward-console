import React, { Component, Fragment } from 'react';
import { Table } from 'antd';

const SortableDataTable = ({ columns, data, onChange }) => {
	return <Table className="gx-table-responsive" dataSource={data} onChange={onChange} columns={columns} />;
};

export default SortableDataTable;
