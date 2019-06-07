import QueryBuilder from 'react-querybuilder';
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

// function renameQueryProperties(query) {
// 	console.log('q', query);
// 	let str = JSON.stringify(query);
// 	var mapObj = {
// 		field: 'attributeName',
// 		value: 'attributeValue',
// 		operator: 'expressionType',
// 	};
// 	str = str.replace(/field|value|operator/gi, function(matched) {
// 		return mapObj[matched];
// 	});
// 	query = JSON.parse(str);
// 	console.log('new', query);
// }

const WalkinQueryBuilder = ({ translations, operators, fields, handleQueryChange }) => {
	return (
		<div className="flex-box-outer">
			<hr />
			<div className="flex-box">
				<div className="scroll">
					<QueryBuilder
						fields={fields}
						controlClassnames={{ fields: 'form-control' }}
						onQueryChange={handleQueryChange}
						operators={operators}
					/>
				</div>
			</div>
		</div>
	);
};

WalkinQueryBuilder.propTypes = {
	fields: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		}).isRequired
	),
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
