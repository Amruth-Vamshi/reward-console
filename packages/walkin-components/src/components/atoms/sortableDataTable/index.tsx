import * as React from "react";
import { Table } from 'antd';

export const SortableDataTable = ({ columns, data, onChange, pagination, loading }) => {
	return (
		<Table
			className="gx-table-responsive"
			dataSource={data}
			onChange={onChange}
			columns={columns}
			pagination={pagination}
			loading={loading}
		/>
	);
};
