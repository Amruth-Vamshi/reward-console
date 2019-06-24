import React, { Component, Fragment } from 'react';
import { Input, Button, Alert } from 'antd';
import WalkinQueryBuilder from '../../../components/atoms/queryBuilder';
import { withRouter } from 'react-router-dom';
import CampaignHeader from '../../../components/molecules/campaignHeader';
import { withApollo, graphql, compose, mutate } from 'react-apollo';
import { attributes, createRule, createSegment } from '../../../query/audience';
import './style.css';
import { SEGMENT_LIST } from '../../../utils/RouterConstants';

class NewSegment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			query: {},
			newSegmentError: false,
		};
	}
	logQuery = query => {
		console.log('quu', query);
		this.setState({ query });
	};
	onChange = e => {
		console.log(e);
		this.setState({ value: e.target.value });
	};

	displayError = state => {
		console.log('state, error', state);
		this.setState({ [state]: true }, () => {
			setTimeout(() => {
				this.setState({ [state]: false });
			}, 4000);
		});
	};

	onNewSegment = () => {
		const { value, query } = this.state;
		console.log('query', query);
		if (value === '') {
			this.displayError('newSegmentError');
		}
		let { client } = this.props;
		client
			.mutate({
				mutation: createRule,
				variables: {
					name: Math.random()
						.toString(36)
						.substring(7),
					description: '',
					type: 'SIMPLE',
					organizationId: '7fe4e525-2457-4f19-980b-a0dd4a363eeb',
					status: 'ACTIVE',
					ruleConfiguration: JSON.stringify(query),
				},
			})
			.then(({ data }) => {
				console.log('data', data, data.createRule.id);
				client
					.mutate({
						mutation: createSegment,
						variables: {
							name: this.state.value,
							description: Math.random()
								.toString(36)
								.substr(2, 5),
							segmentType: 'customer',
							organization_id: '7fe4e525-2457-4f19-980b-a0dd4a363eeb',
							application_id: '1',
							rule_configurations_id: data.createRule.id,
							status: 'ACTIVE',
						},
					})
					.then(({ data }) => {
						console.log('data', data);
						const { history } = this.props;
						history.push({
							pathname: SEGMENT_LIST,
						});
					})
					.catch(error => {
						this.displayError('newSegmentError');
					});
			})
			.catch(error => {
				console.log('error', error);
				this.displayError('newSegmentError');
			});
	};

	render() {
		const { value, newSegmentError } = this.state;
		console.log('ruleAttributes', this.props.ruleAttributes, this.props.error);
		let attributeData =
			this.props.ruleAttributes.length > 0 &&
			this.props.ruleAttributes.map(el => ({
				name: el.attributeName,
				id: el.id,
				label: el.attributeName,
			}));
		return (
			<Fragment>
				<div style={{ margin: '-32px -32px 0px' }}>
					<CampaignHeader
						text="New Segment"
						onCampaignHeaderButtonClick={this.onNewSegment}
						isTitleOnly={true}
					/>
				</div>
				<div style={{ margin: '32px' }}>
					<p className="gx-text-grey gx-mb-1">Segment Name</p>
					<Input
						defaultValue="Enter segment name"
						style={{ width: '50%', marginBottom: '40px' }}
						value={value}
						onChange={this.onChange}
					/>
					<WalkinQueryBuilder fields={attributeData} onQueryChange={this.logQuery} />
				</div>
				{newSegmentError && <Alert message="Not a valid Segment" type="error" />}
				<div className="segmentFooterButton">
					<Button type="primary" className="campaignFooterStyle" onClick={this.onNewSegment}>
						Create segment
					</Button>
				</div>
			</Fragment>
		);
	}
}

export default withRouter(
	withApollo(
		graphql(attributes, {
			props: ({ data: { loading, error, ruleAttributes } }) => ({
				loading,
				ruleAttributes,
				error,
			}),
		})(NewSegment)
	)
);
