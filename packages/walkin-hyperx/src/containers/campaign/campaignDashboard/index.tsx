import React, { Component, Fragment } from 'react'
import { CampaignHeader } from '@walkinsole/walkin-components'
import { Button, Row, Col, Spin, message } from 'antd'
import { campaignOverview as Overview } from "@walkinsole/shared";
import { GET_CAMPAIGN_DASHBOARD, UPDATE_CAMPAIGN, LAUNCH_CAMPAIGN, PAUSE_CAMPAIGN, UNPAUSE_CAMPAIGN, ABANDON_CAMPAIGN, VIEW_CAMPAIGN, PREPROCESS_LAUNCH_CAMPAIGN } from '../../../query/campaign'
import { withApollo, graphql, compose, ApolloProviderProps } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import * as moment from 'moment';
import * as jwt from "jsonwebtoken";
import { RouteChildrenProps, RouteComponentProps } from "react-router";


interface IProps extends RouteChildrenProps<any>, ApolloProviderProps<any> {
    pauseCampaign: (variables: any) => any
    launchCampaign: (variables: any) => any
    abandonCampaign: (variables: any) => any
    unpauseCampaign: (variables: any) => any
    campaign: {}

}

// this.props.history.push({ pathname: '/hyperx/campaigns', tabKey: "2" })

interface IState {
    loading: boolean;
    loading1: boolean;
    spin: boolean;
    campaign: {};
    audiences: {}
    offers: {},
    communications: {}
}

class CampaignDashboard extends Component<IProps, Partial<IState>> {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            loading1: false,
            spin: false,
            campaign: {}
        }
    }

    componentWillMount() {
        this.setState({ spin: true })
        this.props.client.query({
            query: VIEW_CAMPAIGN,
            variables: { campaignId: this.props.match.params.id },
            // fetchPolicy: 'network-only'
        }).then(res => {
            console.log('res', res.data.viewCampaignForHyperX);
            let { campaign, audiences, offers, communications } = res.data.viewCampaignForHyperX
            this.setState({ spin: false, campaign, audiences, offers, communications });
        }).catch(err => {
            this.setState({ spin: false });
            console.log("Failed to get Campaign Details" + err);
        });

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

    disableCampaign = () => { }

    render() {
        console.log("this.props....", this.props)
        console.log("this.state....", this.state)

        // let audiences = this.props.allAudiences.audiences;

        let { loading, loading1 } = this.state
        let { campaign, audiences, offers, communications } = this.state
        return (
            <div>

                <CampaignHeader
                    children={
                        <Col span={12}>
                            <h2 className="gx-text-grey paddingLeftStyle campaignHeaderTitleStyle">Campaign Dashboard</h2>
                        </Col>
                    }
                />
                {console.log('>>', this.props.campaign)}
                {
                    this.state.spin ?
                        <div>
                            <br /> <br /> <br /> <br />
                            <div className="divCenter">
                                <Spin size="large" />
                            </div> <br /> <br /> <br />
                        </div> :
                        <div className="gx-card" style={{ margin: 22 }}>
                            <div className="gx-card-body">
                                <Overview
                                    view={true} loading={loading} loading1={loading1}
                                    campaign={campaign}
                                    audience={audiences}
                                    offer={offers[0]}
                                    launchCampaign={this.launchCampaign}
                                    pauseCampaign={this.pauseCampaign}
                                    unpauseCampaign={this.unpauseCampaign}
                                    disableCampaign={this.disableCampaign}
                                    abandonCampaign={this.abandonCampaign}
                                    communication={communications[0] ? communications[0].messageTemplate ?
                                        `${communications[0].messageTemplate.messageFormat} - ${communications[0].messageTemplate.templateSubjectText}` : '' : ''}
                                />
                            </div></div>
                }

            </div>
        )
    }
}
export default withRouter(
    compose(
        // graphql(VIEW_CAMPAIGN, {
        //     name: "campaign",
        //     options: props => ({
        //         variables: { campaignId: props.match.params.id },
        //         fetchPolicy: "network-only"
        //     })
        // }),
        // graphql(GET_CAMPAIGN_DASHBOARD, {
        //     name: "campaign",
        //     options: props => {
        //         return {
        //             variables: { id: props.match.params.id },
        //             fetchPolicy: "cache-and-network"
        //         };
        //     }
        // }), 
        graphql(PREPROCESS_LAUNCH_CAMPAIGN, {
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
        // graphql(GET_AUDIENCES, {
        //     name: "allAudiences",
        //     options: props => ({
        //         variables: {
        //             status: "ACTIVE",
        //             campaign_id: props.match.params.id,
        //             // organization_id: jwt.decode(localStorage.getItem("jwt")).org_id,
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
    )(withApollo(CampaignDashboard))
);
