import React, { Component, Fragment } from 'react';
import { Input, Button, Alert, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import { withApollo, graphql, compose, mutate } from 'react-apollo';
import { attributes, createRule, createSegment } from '../../Query';
import './style.css';
import { SEGMENT_LIST } from '../../../Utils';
import get from 'lodash/get';
import { WalkinQueryBuilder, CampaignHeader } from '@walkinsole/walkin-components';
import jwt from "jsonwebtoken";
import { GET_ALL_APPS_OF_ORGANIZATION } from "@walkinsole/walkin-components/src/PlatformQueries";

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
		this.setState({
			query: query,
			newSegmentError: false,
		});
	};
	onChange = e => {
		this.setState({ value: e.target.value });
	};

	displayError = state => {
		this.setState({ [state]: true }, () => {
			setTimeout(() => {
				this.setState({ [state]: false });
			}, 4000);
		});
	};

	onNewSegment = () => {
		const { value, query } = this.state;
		if (value === '') {
			this.displayError('newSegmentError');
		}
		let { client } = this.props;
		console.log(this.props.allApplications.organization.applications[0])
		console.log(jwt.decode(localStorage.getItem("jwt")))
		let org_id = jwt.decode(localStorage.getItem("jwt")).org_id;
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
				console.log('rule', data);
				client
					.mutate({
						mutation: createSegment,
						variables: {
							name: this.state.value,
							segmentType: 'CUSTOM',
							organization_id: org_id,
							application_id: this.props.allApplications.organization.applications[0].id, // remove Hardcoding get it from context
							rule_id: data.createRule.id,
							status: 'ACTIVE',
						},
					})
					.then(({ data }) => {
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
		const { location, match } = this.props;
		if (location && location.state) {
			if (location.state.segmentSelected) {
				let str = location.state.segmentSelected.rule.ruleConfiguration;
				var mapObj = {
					attributeName: 'field',
					attributeValue: 'value',
					expressionType: 'operator',
				};
				str = str.replace(/attributeName|attributeValue|expressionType/gi, function (matched) {
					return mapObj[matched];
				});
				this.setState({ query: JSON.parse(str) });
				if (location.state.segmentSelected.name !== '') {
					if (location.state.segmentSelected.name.includes('copy')) {
						this.setState({ value: segmentNameCopy, isDuplicateSegment: true });
					} else {
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
		return (
			<Fragment>
				<div style={{ margin: '-32px -32px 0px' }}>
					<CampaignHeader
						children={
							<Col span={12}>
								<h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">
									{isDuplicateSegment ? 'Duplicate segment' : 'New Segment'}
								</h3>
							</Col>
						}
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
		compose(
			graphql(attributes, {
				props: ({ data: { loading, error, ruleAttributes } }) => ({
					loading,
					ruleAttributes,
					error,
				}),

			}),
			graphql(GET_ALL_APPS_OF_ORGANIZATION, {
				name: "allApplications",
				options: props => {
					return {
						variables: {
							id: jwt.decode(localStorage.getItem("jwt")).org_id
						},
						fetchPolicy: "cache-and-network"
					};
				}
			})

		)(NewSegment)
	)
);
