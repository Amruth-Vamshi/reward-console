import React, { Component } from "react";

import { Row, Col } from "antd";
import { ManageCampaignCard } from "@walkinsole/walkin-components";
import gql from "graphql-tag";
import { Query } from "react-apollo";

class CampaignOverviewGrid extends Component {
  campaignList = campaigns => {
    const { history } = this.props;

    return campaigns ? (
      campaigns.map(campaign => (
        <Col span={6} key={campaign.id}>
          <ManageCampaignCard campaign={campaign} history={history} />
        </Col>
      ))
    ) : (
      <Col span={24} offset={10}>
        <h3>No Campaigns created</h3>
      </Col>
    );
  };

  render() {
    const { campaigns, auth, history } = this.props;

    const GET_CAMPAIGNS = gql`
      query getCampaign($userId: ID!) {
        user(id: $userId) {
          createdCampaigns {
            id
            name
            description
            startTime
            endTime
            status
            campaignType
            organization {
              name
            }
            application {
              name
              platform
            }
          }
        }
      }
    `;
    return (
      <div>
        <Row>
          <Col>
            <h1>Draft Campaigns</h1>
          </Col>
        </Row>
        <Query
          query={GET_CAMPAIGNS}
          variables={{
            userId: auth.auth.userId
          }}
          fetchPolicy="cache-and-network"
        >
          {({ loading, error, data }) => {
            if (loading) {
              return <span>Loading</span>;
            } else if (error) {
              return <span>Error</span>;
            } else if (data) {
              console.log(data);
              return (
                <Row gutter={6}>
                  {this.campaignList(data.user.createdCampaigns)}
                </Row>
              );
            }
          }}
        </Query>
      </div>
    );
  }
}

export default CampaignOverviewGrid;
