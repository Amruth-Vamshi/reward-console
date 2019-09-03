import React, { Component } from "react";

import { Row, Col } from "antd";
import { ManageCampaignCard } from "@walkinsole/walkin-components";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { GET_CAMPAIGNS } from "../../../../containers/Query";
class CampaignOverviewGrid extends Component {
  campaignList = campaigns => {
    const { history } = this.props;

    return campaigns ? (
      campaigns.map(campaign => {

        return (
          <Col span={6} key={campaign.id}>
            <ManageCampaignCard campaign={campaign} history={history} />
          </Col>
        )


      })
    ) : (
        <Col span={24} offset={10}>
          <h3>No Campaigns created</h3>
        </Col>
      );
  };

  render() {
    const { campaigns, auth, history } = this.props;
    return (
      <div>
        <Row>
          <Col>
            <h1>Campaigns</h1>
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
            console.log(data)
            if (loading) {
              return <span>Loading</span>;
            } else if (error) {
              console.log(error);
              return <span>No Campaign Found</span>;
            } else if (data.user) {
              return (
                <Row gutter={6}>
                  {this.campaignList(data.user.createdCampaigns)}
                </Row>
              );
            } else {
              return (
                <Row gutter={6}>
                  <Col>No Campaigns</Col>
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
