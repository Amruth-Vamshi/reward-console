import React, { Component, Fragment } from 'react';
import { Input, Button, Alert, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import { withApollo, graphql, compose, mutate } from 'react-apollo';
import { RULE_ATTRIBUTES, CREATE_RULE, createRule, createSegment } from '../../../query/audience';
import './style.css';
import { SEGMENT_LIST } from '../../../utils/RouterConstants';
import { WalkinQueryBuilder, CampaignHeader } from '@walkinsole/shared';
import jwt from "jsonwebtoken";
import { GET_ALL_APPS_OF_ORGANIZATION } from "@walkinsole/walkin-core/src/PlatformQueries";

class NewSegment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			query: { id: '1', combinator: 'and', rules: [] },
			newSegmentError: false,
			isDuplicateSegment: false,
			errors: {},
			loading: false
		};
	}
	logQuery = query => {
		this.state.errors.rule = ''
		this.setState({
			query: query,
			newSegmentError: false,
		});
	};
	onChange = e => {
		this.state.errors.name = ''
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
		let errors = {}
		const { value, query } = this.state;
		let { client } = this.props;
		if (!this.state.value || this.state.value.trim() == '') errors.name = "* this field is mandatory"
		if (!this.state.query.rules || this.state.query.rules.length < 1) errors.rule = "* this field is mandatory"
		else if (!this.state.query.rules[0] || this.state.query.rules[0].attributeValue == '') errors.rule = "* enter rule value"

		if (Object.keys(errors).length !== 0) {
			this.setState({ errors });
			return
		}


		console.log(this.props.allApplications.organization.applications[0])
		let org_id = jwt.decode(localStorage.getItem("jwt")).org_id;
		this.setState({ loading1: true })
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
						this.setState({ loading1: false })

						history.push({
							pathname: SEGMENT_LIST,
						});
					})
					.catch(error => {
						this.displayError('newSegmentError');
						this.setState({ loading1: false })
					});
			})
			.catch(error => {
				console.log('error', error);
				this.displayError('newSegmentError');
				this.setState({ loading1: false })
			});
	};

	componentWillMount = () => {
		const { location, match } = this.props;
		if (location && location.state) {
			if (location.state.segmentSelected) {
				let str = location.state.segmentSelected.rule.ruleConfiguration;
				var mapObj = {
					ruleAttributeId: 'field',
					attributeValue: 'value',
					expressionType: 'operator',
				};
				str = str.replace(/ruleAttributeId|attributeValue|expressionType/gi, function (matched) {
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
		const { loading1, value, newSegmentError, query, isDuplicateSegment } = this.state;
		const { loading, error, ruleAttributes } = this.props;
		if (loading) {
			return <p>Please wait...</p>;
		}
		// if (error) {
		// 	return <p>{error}</p>;
		// }
		let attributeData = []
		if (ruleAttributes)
			attributeData = ruleAttributes &&
				ruleAttributes.length > 0 &&
				ruleAttributes.map(el => ({
					name: el.attributeName,
					key: el.id,
					label: el.attributeName,
				}));
		else this.state.errors.rule = 'you dont have any rule attributes'
		return (
			<Fragment>
				<div>
					<CampaignHeader>
						<Col span={12}>
							<h3 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">
								{isDuplicateSegment ? 'Duplicate segment' : 'New Segment'}
							</h3>
						</Col>
					</CampaignHeader>
				</div>
				<div style={{ margin: '32px' }}>
					<div style={{ width: '50%', marginBottom: '40px' }}>
						<div style={{ marginBottom: '10px' }}>
							<p className="gx-mb-1">Segment Name</p>
							<Input
								defaultValue={isDuplicateSegment ? value : 'Enter segment name'}
								value={value} placeholder="Enter Segment Name"
								onChange={this.onChange}
							/>
						</div>
						<span style={{ color: "Red" }}> {this.state.errors.name} </span>
					</div>
					<div style={{ marginTop: 10, marginBottom: 10 }}>Segment selection criteria</div>
					<WalkinQueryBuilder fields={attributeData} onQueryChange={this.logQuery} query={query} />
					<p style={{ color: "Red", marginTop: 10 }}> {this.state.errors.rule} </p>
				</div>
				{newSegmentError && <Alert style={{ margin: '0px 35px' }} message="Not a valid Segment" type="error" />}
				<div className="segmentFooterButton">
					<Button type="primary" loading={loading1} className="campaignFooterStyle" onClick={this.onNewSegment}>
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
			graphql(RULE_ATTRIBUTES, {
				options: props => {
					return {
						variables: {
							input: {
								entityName: "CustomerSearch",
								status: "ACTIVE",
								organizationId: jwt.decode(localStorage.getItem("jwt")).org_id,
							}
						}
					}
				},
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
