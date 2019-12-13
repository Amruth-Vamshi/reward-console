import { campaignOverview as Overview, WHeader } from '@walkinsole/shared';
import { message, Spin } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { ApolloProviderProps, compose, graphql, withApollo } from 'react-apollo';
import { RouteChildrenProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { ABANDON_CAMPAIGN, PAUSE_CAMPAIGN, PREPROCESS_LAUNCH_CAMPAIGN, UNPAUSE_CAMPAIGN, VIEW_CAMPAIGN } from '../../../query/campaign';
import { TOTAL_AUDIENCE_COUNT } from '../../../query/audience';


interface IProps extends RouteChildrenProps<any>, ApolloProviderProps<any> {
    pauseCampaign: (variables: any) => any
    launchCampaign: (variables: any) => any
    abandonCampaign: (variables: any) => any
    unpauseCampaign: (variables: any) => any
    campaign: {}
    totalAudienceCount: any
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

    UNSAFE_componentWillMount() {
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
            // moment().isBetween(this.props.location.state.campaignSelected.startTime, this.props.location.state.campaignSelected.endTime) ?
            //     this.props.history.push('/hyperx/campaigns')
            //     : this.props.history.push({
            //         pathname: '/hyperx/campaigns', //tabKey: "2"
            //         state: { tabKey: "2" }
            //     })
            this.props.history.push({
                pathname: '/hyperx/campaigns', //tabKey: "2"
                state: { tabKey: "2" }
            })
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
            this.props.history.push({
                pathname: '/hyperx/campaigns', //tabKey: "5"
                state: { tabKey: "5" }
            })
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
                : this.props.history.push({
                    pathname: '/hyperx/campaigns', //tabKey: "2" 
                    state: { tabKey: "2" }
                })
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
            this.props.history.push({
                pathname: '/hyperx/campaigns', //tabKey: "6" 
                state: { tabKey: "6" }
            })
        }).catch(err => {
            console.log("Error Update campaign", err)
            this.setState({ loading1: false })
        });
    }

    disableCampaign = () => { }

    render() {

        // let audiences = this.props.allAudiences.audiences;

        let { totalAudienceCount } = this.props
        let totalAudience = totalAudienceCount.totalAudienceCountForCampaign ? totalAudienceCount.totalAudienceCountForCampaign.count : 0
        let { campaign, audiences, offers, communications, loading, loading1 } = this.state
        return (
            <div>
                <WHeader title='Campaign Dashboard' />
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
                                    totalAudienceCount={totalAudience}
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
        graphql(TOTAL_AUDIENCE_COUNT, {
            name: "totalAudienceCount",
            options: (props: IProps) => ({
                variables: { campaignId: props.match.params.id },
                fetchPolicy: "network-only"
            })
        }),
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
