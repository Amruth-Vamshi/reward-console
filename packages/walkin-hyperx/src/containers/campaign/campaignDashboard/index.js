import React, { Component, Fragment } from 'react'
import { CampaignHeader } from '@walkinsole/walkin-components'
import { Button, Row, Col, message } from 'antd'
import { campaignOverview as Overview } from "@walkinsole/shared";
import { CAMPAIGN_DASHBOARD, GET_CAMPAIGN_DASHBOARD, UPDATE_CAMPAIGN, LAUNCH_CAMPAIGN, PAUSE_CAMPAIGN, UNPAUSE_CAMPAIGN, ABANDON_CAMPAIGN, AUDIENCES, GET_OFFER_FOR_CAMPAIGN, PREPROCESS_LAUNCH_CAMPAIGN } from '../../../query/campaign'
import { withApollo, graphql, compose, mutate } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import jwt from "jsonwebtoken";


class CampaignDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            loading1: false
        }
    }
    launchCampaign = () => {
        this.setState({ loading: true })
        this.props.launchCampaign({
            variables: { id: this.props.location.state.campaignSelected.id }
        }).then(data => {
            console.log("campaign data..", data);
            message.success('Campaign Launched')
            moment().isBetween(this.props.location.state.campaignSelected.startTime, this.props.location.state.campaignSelected.endTime) ?
                this.props.history.push('/hyperx/campaigns')
                : this.props.history.push({ pathname: '/hyperx/campaigns', tabKey: "2" })
        }).catch(err => {
            console.log("Error Update campaign", err)
            this.setState({ loading: false })
        });
    }
    pauseCampaign = () => {
        console.log("Pause calling")
        this.setState({ loading: true })
        this.props.pauseCampaign({
            variables: { id: this.props.location.state.campaignSelected.id }
        }).then(data => {
            console.log("campaign data..", data);
            message.success('Campaign Paused')
            this.props.history.push({ pathname: '/hyperx/campaigns', tabKey: "5" })
        }).catch(err => {
            console.log("Error Update campaign", err)
            this.setState({ loading: false })
        });
    }
    unpauseCampaign = () => {
        console.log("Pause calling")
        this.setState({ loading: true })
        this.props.unpauseCampaign({
            variables: { id: this.props.location.state.campaignSelected.id }
        }).then(data => {
            console.log("campaign data..", data);
            message.success('Campaign unPaused')
            moment().isBetween(this.props.location.state.campaignSelected.startTime, this.props.location.state.campaignSelected.endTime) ?
                this.props.history.push('/hyperx/campaigns')
                : this.props.history.push({ pathname: '/hyperx/campaigns', tabKey: "2" })
        }).catch(err => {
            console.log("Error Update campaign", err)
            this.setState({ loading: false })
        });
    }
    abandonCampaign = () => {
        console.log("Abandon calling")
        this.setState({ loading1: true })
        this.props.abandonCampaign({
            variables: { id: this.props.location.state.campaignSelected.id }
        }).then(data => {
            console.log("campaign data..", data);
            message.success('Abandon campaign')
            this.props.history.push({ pathname: '/hyperx/campaigns', tabKey: "6" })
        }).catch(err => {
            console.log("Error Update campaign", err)
            this.setState({ loading1: false })
        });
    }

    render() {
        console.log("this.props....", this.props)
        console.log("this.state....", this.state)

        let audiences = this.props.allAudiences.audiences;


        let { loading, loading1 } = this.state
        return (
            <div>

                <CampaignHeader
                    children={
                        <Col span={12}>
                            <h2 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">Campaign Dashboard</h2>
                        </Col>
                    }
                />

                <div className="gx-card" style={{ margin: 22 }}>
                    <div className="gx-card-body">
                        <Overview
                            view={true} loading={loading} loading1={loading1}
                            campaign={this.props.location.state ? this.props.location.state.campaignSelected : ''}
                            launchCampaign={this.launchCampaign}
                            pauseCampaign={this.pauseCampaign}
                            unpauseCampaign={this.unpauseCampaign}
                            disableCampaign={this.disableCampaign}
                            abandonCampaign={this.abandonCampaign}
                            audience={audiences}
                        // communication={this.state.communication.messageTemplate ?
                        //     `${communicationSelected} - ${this.state.communication.messageTemplate.templateSubjectText}` : ''}
                        />
                    </div></div>

            </div>
        )
    }
}
export default withRouter(
    withApollo(
        compose(
            graphql(GET_CAMPAIGN_DASHBOARD, {
                name: "campaign",
                options: props => {
                    return {
                        variables: { id: props.match.params.id },
                        fetchPolicy: "cache-and-network"
                    };
                }
            }), graphql(PREPROCESS_LAUNCH_CAMPAIGN, {
                name: "launchCampaign"
            }),
            graphql(PAUSE_CAMPAIGN, {
                name: "pauseCampaign"
            }),
            graphql(UNPAUSE_CAMPAIGN, {
                name: "unpauseCampaign"
            }),
            graphql(ABANDON_CAMPAIGN, {
                name: "abandonCampaign"
            }),
            graphql(AUDIENCES, {
                name: "allAudiences",
                options: props => ({
                    variables: {
                        status: "ACTIVE",
                        campaign_id: props.match.params.id,
                        // organization_id: jwt.decode(localStorage.getItem("jwt")).org_id,
                        status: "Active"
                    },
                    fetchPolicy: "network-only"
                })
            }),
            // graphql(communications, {
            //     name: "allCommunications",
            //     options: props => ({
            //         variables: {
            //             entityId: props.match.params.id,
            //             entityType: "Campaign",
            //             organization_id: jwt.decode(localStorage.getItem("jwt")).org_id,
            //             status: "Active"
            //         },
            //         fetchPolicy: "network-only"
            //     })
            // }),
            // graphql(GET_OFFER_FOR_CAMPAIGN, {
            //     name: "getOfferForACampaign",
            //     options: props => ({
            //         variables: {
            //             campaignId: props.match.params.id,
            //             organizationId: jwt.decode(localStorage.getItem("jwt")).org_id,
            //         }
            //     })
            // })
        )(CampaignDashboard)
    )
);
