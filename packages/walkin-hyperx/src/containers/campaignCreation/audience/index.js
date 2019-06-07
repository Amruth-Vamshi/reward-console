import React, { Component, Fragment } from 'react';
import WalkinQueryBuilder from '../../../components/atoms/queryBuilder';

const fields = [{ name: '', label: '' }];

class Audience extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	logQuery = query => {
		console.log('quu', query);
	};

	render() {
		const { formValues, current } = this.state;
		return (
			<div>
				<WalkinQueryBuilder fields={fields} handleQueryChange={this.logQuery} />
			</div>
		);
	}
}

export default Audience;
