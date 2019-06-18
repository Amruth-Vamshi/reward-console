import QueryBuilder from 'react-querybuilder';
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Select } from 'antd';

const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class WalkinQueryBuilder extends React.Component {
	renameQueryProperties = query => {
		let str = JSON.stringify(query);
		var mapObj = {
			field: 'attributeName',
			value: 'attributeValue',
			operator: 'expressionType',
		};
		str = str.replace(/field|value|operator/gi, function(matched) {
			return mapObj[matched];
		});
		query = JSON.parse(str);
		this.props.onQueryChange(query);
	};

	handleMultiSelect = value => {
		console.log('val,', value);
	};

	render() {
		const { translations, operators, fields, handleQueryChange } = this.props;
		return (
			<div className="flex-box-outer">
				<hr />
				<div className="flex-box">
					<div className="scroll">
						<QueryBuilder
							fields={fields}
							controlClassnames={{ fields: 'form-control' }}
							onQueryChange={this.renameQueryProperties}
							operators={operators}
							// required to allow multiple values
							// controlElements={{
							// 	valueEditor: () => {
							// 		return (
							// 			<Select
							// 				mode="multiple"
							// 				size="default"
							// 				placeholder="Please select"
							// 				defaultValue={['a10', 'c12']}
							// 				onChange={this.handleMultiSelect}
							// 				style={{ width: '500px' }}
							// 			>
							// 				{children}
							// 			</Select>
							// 		);
							// 	},
							// }}
						/>
					</div>
				</div>
			</div>
		);
	}
}

WalkinQueryBuilder.propTypes = {
	fields: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			label: PropTypes.string,
		}).isRequired
	),
	controlElements: PropTypes.shape({
		valueEditor: PropTypes.func,
	}),
	onQueryChange: PropTypes.func,
	operators: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		}).isRequired
	),
};

WalkinQueryBuilder.defaultProps = {
	fields: [{ name: '', label: '' }],
	onQueryChange: () => {},
	valueEditor: () => {},
	operators: [
		{ name: 'EQUALS', label: 'Equal to' },
		{ name: 'NOT_EQUALS', label: 'Not equal to' },
		{ name: 'GREATER_THAN', label: 'Greater than' },
		{ name: 'LESS_THAN', label: 'Less than' },
		{ name: 'LESS_THAN_OR_EQUAL', label: 'Less than or equal to' },
		{ name: 'GREATER_THAN_OR_EQUAL', label: 'Greater than or equal to' },
	],
};

export default WalkinQueryBuilder;
