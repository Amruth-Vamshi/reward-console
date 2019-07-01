import React, { Component, Fragment } from 'react';
import { Input, Button, Alert } from 'antd';
import WalkinQueryBuilder from '../../../components/atoms/queryBuilder';
import { withRouter } from 'react-router-dom';
import CampaignHeader from '../../../components/molecules/campaignHeader';
import { withApollo, graphql, compose, mutate } from 'react-apollo';
import { attributes, createRule, createSegment } from '../../../query/audience';
import './style.css';
import { SEGMENT_LIST } from '../../../utils/RouterConstants';
import get from 'lodash/get';

class NewSegment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			query: { id: '1', combinator: 'and', rules: [] },
			newSegmentError: false,
			isDuplicateSegment: false,
		};
	}
	logQuery = query => {
		console.log('quu', query);
		this.setState({
			query: query,
			newSegmentError: false,
		});
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
		console.log('this.state.value', this.state.value);
		if (value === '') {
			this.displayError('newSegmentError');
		}
		let { client } = this.props;
		let org_id = get(client, 'cache.data.data["$ROOT_QUERY.auth"].organizationId');
		client
			.mutate({
				mutation: createRule,
				variables: {
					name: Math.random()
						.toString(36)
						.substring(7),
					description: '',
					type: 'SIMPLE',
					organizationId: org_id,
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
							segmentType: 'CUSTOM',
							organization_id: org_id,
							application_id: '1',
							rule_id: data.createRule.id,
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

	componentWillMount = () => {
		const { location } = this.props;
		if (location && location.state) {
			if (location.state.segmentSelected) {
				let str = location.state.segmentSelected.rule.ruleConfiguration;
				var mapObj = {
					attributeName: 'field',
					attributeValue: 'value',
					expressionType: 'operator',
				};
				str = str.replace(/attributeName|attributeValue|expressionType/gi, function(matched) {
					return mapObj[matched];
				});
				this.setState({ query: JSON.parse(str) });
				if (location.state.segmentSelected.name !== '') {
					if (location.state.segmentSelected.name.includes('copy')) {
						this.setState({ value: segmentNameCopy, isDuplicateSegment: true });
					} else {
						console.log('nocopy');
						this.setState({
							value: location.state.segmentSelected.name + ' ' + 'copy 1',
							isDuplicateSegment: true,
						});
					}
				}
			}
		}
	};

	render() {
		const { value, newSegmentError, query, isDuplicateSegment } = this.state;
		const { loading, error, ruleAttributes } = this.props;
		if (loading) {
			return <p>Please wait...</p>;
		}
		if (error) {
			return <p>{error}</p>;
		}
		let attributeData =
			ruleAttributes.length > 0 &&
			ruleAttributes.map(el => ({
				name: el.attributeName,
				key: el.id,
				label: el.attributeName,
			}));
		console.log('checkckeck', this.state.value, this.state.segmentName);
		return (
			<Fragment>
				<div style={{ margin: '-32px -32px 0px' }}>
					<CampaignHeader
						text={isDuplicateSegment ? 'Duplicate segment' : 'New Segment'}
						onCampaignHeaderButtonClick={this.onNewSegment}
						isTitleOnly={true}
					/>
				</div>
				<div style={{ margin: '32px' }}>
					<p className="gx-text-grey gx-mb-1">Segment Name</p>
					<Input
						defaultValue={isDuplicateSegment ? value : 'Enter segment name'}
						style={{ width: '50%', marginBottom: '40px' }}
						value={value}
						onChange={this.onChange}
					/>
					<WalkinQueryBuilder fields={attributeData} onQueryChange={this.logQuery} query={query} />
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
