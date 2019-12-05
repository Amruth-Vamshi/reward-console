import * as React from 'react';
import { Table } from 'antd';
import { ColumnProps, PaginationConfig, SorterResult, TableProps, TableCurrentDataSource } from 'antd/lib/table';

interface SortableDataTableProps {
	columns?: ColumnProps<any>[],
	data?: any[],
	onChange: (pagination: PaginationConfig, filters: Record<string | number | symbol, string[]>, sorter: SorterResult<any>, extra: TableCurrentDataSource<any>) => any;
	pagination?: object,
	loading?: boolean,
	rowKey?
}

const SortableDataTable = ({ columns, data, onChange, pagination, loading, rowKey }: SortableDataTableProps) => {
	return (
		<Table
			className="gx-table-responsive"
			dataSource={data}
			onChange={onChange}
			columns={columns}
			pagination={pagination}
			loading={loading}
			rowKey={rowKey}
		/>
	);
};

export default SortableDataTable;
