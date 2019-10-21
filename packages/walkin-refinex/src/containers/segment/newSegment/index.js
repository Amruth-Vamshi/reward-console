import React, { Component, Fragment } from 'react';
import { Input, Button, Alert, Col, Icon, Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import { withApollo, graphql, compose, mutate } from 'react-apollo';
import { attributes, createRule, createSegment } from '../../Query';
import './style.css';
import { SEGMENT_LIST, DEFAULT_ACTIVE_STATUS } from '../../../Utils';
import get from 'lodash/get';
import { WalkinQueryBuilder, CampaignHeader } from '@walkinsole/shared';
import { ErrorBoundary } from '@walkinsole/walkin-components';
import jwt from "jsonwebtoken";
import { GET_ALL_APPS_OF_ORGANIZATION } from "@walkinsole/walkin-core/src/PlatformQueries";
import { toNumber } from '@walkinsole/walkin-components/src/util/common';
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
                    input: {
                        name: Math.random()
                            .toString(36)
                            .substring(7),
                        description: '',
                        type: 'SIMPLE',
                        organizationId: org_id,
                        status: 'ACTIVE',
                        ruleConfiguration: JSON.stringify(query),
                    }
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
                        const segmentNew = location.state.segmentSelected.name.split('-', 2);
                        console.log(Number(segmentNew[1]) + 1)
                        const segmentNameCopy = segmentNew[0] + ' ' + (Number(segmentNew[1]) + 1)
                        this.setState({ value: segmentNameCopy, isDuplicateSegment: true });
                    } else {
                        this.setState({
                            value: location.state.segmentSelected.name + ' ' + 'copy-1',
                            isDuplicateSegment: true,
                        });
                    }
                }
            }
        }
    };

    render() {
        console.log(this.props)
        const { value, newSegmentError, query, isDuplicateSegment } = this.state;
        const { loading, error, ruleAttributes } = this.props.attributes;
        const antIcon = <Icon type="loading" style={{ fontSize: 100 }} spin />;
        if (loading) {
            return (<div style={{ minHeight: "100vh" }}> <br /> <br /> <br /> <br />
                <div className="divCenter">
                    <Spin size="large" indicator={antIcon} />
                </div> <br /> <br /> <br />
            </div>)
        }
        if (error) {
            return <p>{error.message}</p>;
        }
        let attributeData =
            ruleAttributes.length > 0 &&
            ruleAttributes.map(el => ({
                name: el.attributeName,
                key: el.id,
                label: el.attributeName,
            }));
        return (
            <ErrorBoundary>
                <div style={{ minHeight: "100vh" }}>
                    <div style={{ margin: '1 32px' }}>
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
                </div >
            </ErrorBoundary >
        );
    }
}

export default withRouter(
    withApollo(
        compose(
            graphql(attributes, {
                name: "attributes",
                options: props => {
                    return {
                        variables: {
                            input: {
                                organizationId: jwt.decode(localStorage.getItem("jwt")).org_id,
                                status: DEFAULT_ACTIVE_STATUS
                            }

                        },
                        fetchPolicy: "cache-and-network"
                    };
                }

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
