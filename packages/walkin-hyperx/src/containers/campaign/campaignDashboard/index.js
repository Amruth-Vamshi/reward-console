import React, { Component, Fragment } from 'react'
import { CampaignHeader } from '@walkinsole/walkin-components'
import { Button, Row, Col, message } from 'antd'
import Overview from '@walkinsole/walkin-components/src/components/molecules/campaignOverview'
import { CAMPAIGN_DASHBOARD, GET_CAMPAIGN_DASHBOARD, UPDATE_CAMPAIGN, LAUNCH_CAMPAIGN } from '../../../query/campaign'
import { withApollo, graphql, compose, mutate } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

class CampaignDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
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

    render() {
        console.log(this.props)
        let { loading } = this.state
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
                            view={true} loading={loading}
                            campaign={this.props.location.state ? this.props.location.state.campaignSelected : ''}
                            launchCampaign={this.launchCampaign}
                        // audience={this.state.audience}
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
            }), graphql(LAUNCH_CAMPAIGN, {
                name: "launchCampaign"
            }),
        )(CampaignDashboard)
    )
);
