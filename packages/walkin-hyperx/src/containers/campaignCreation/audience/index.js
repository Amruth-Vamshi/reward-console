import React, { Component, Fragment } from 'react';
import WalkinQueryBuilder from '../../../components/atoms/queryBuilder';
import { Divider, Button, Upload } from 'antd';
import './style.css';
import AddAndDeleteSelectDynamically from '../../../components/atoms/addAndDeleteSelect';
import { allSegments, attributes } from '../../../query/audience';
import { withApollo, graphql, compose } from 'react-apollo';

class Audience extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	logQuery = query => {
		console.log('quu', query);
	};

	render() {
		const { formValues, current, rows, values } = this.state;

		let attributeData = this.props.allAttributes.ruleAttributes.map(el => ({
			name: el.attributeName,
			id: el.id,
			label: el.attributeName,
		}));
		console.log('attributeData', this.props.allAttributes.ruleAttributes);
		const props = {
			name: 'file',
			action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
			headers: {
				authorization: 'authorization-text',
			},
		};
		return (
			<div className="marginStyle">
				<div className="marginStyle">
					{' '}
					<h3 className="gx-text-grey">Audience</h3>
					<div>
						<p style={{ paddingTop: '20px' }} className="gx-text-grey gx-mb-1">
							Segments
						</p>
						<AddAndDeleteSelectDynamically
							onValuesSelected={this.onValuesSelected}
							segmentSelectionData={this.props.segmentList.segments}
						/>
						<span>
							or
							<Upload {...props}>
								<Button style={{ marginBottom: '0px' }} type="link">
									Upload CSV
								</Button>
							</Upload>
						</span>
					</div>
					<div style={{ marginTop: '50px' }}>
						<Divider orientation="left">
							<p className="gx-text-grey gx-mb-1">Filter</p>
						</Divider>
						<p className="gx-text-grey gx-mb-1">Campaign applies to :</p>
						<WalkinQueryBuilder fields={attributeData} onQueryChange={this.logQuery} />
					</div>
				</div>
			</div>
		);
	}
}

export default withApollo(
	compose(
		graphql(allSegments, {
			name: 'segmentList',
		}),
		graphql(attributes, {
			name: 'allAttributes',
		})
	)(Audience)
);
