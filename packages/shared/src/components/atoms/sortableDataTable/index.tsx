import * as React from 'react';
import { Table } from 'antd';
import { ColumnProps, PaginationConfig, SorterResult, TableProps } from 'antd/lib/table';

interface SortableDataTableProps {
	columns?: ColumnProps<any>[],
	data?: any[],
	onChange: (pagination: PaginationConfig, filters: Record<string | number | symbol, string[]>, sorter: SorterResult<any>, key: any, e: TableProps<any>) => any,
	pagination?: object,
	loading?: boolean
}

const SortableDataTable = ({ columns, data, onChange, pagination, loading }: SortableDataTableProps) => {
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

export default SortableDataTable;
