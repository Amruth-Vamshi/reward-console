import * as React from "react";

import { Row, Col } from "antd";
import { ManageCampaignCard } from "@walkinsole/shared";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { GET_CAMPAIGNS } from "../../../../containers/Query";
import { RouteChildrenProps } from "react-router";

interface CampaignOverviewGridProps extends RouteChildrenProps {
  campaigns?: any,
  auth?: any
}
class CampaignOverviewGrid extends React.Component<Partial<CampaignOverviewGridProps>, {}> {
  constructor(props: CampaignOverviewGridProps) {
    super(props)
  }
  campaignList = (campaigns: any) => {
    const { history } = this.props;

    return campaigns ? (
      campaigns.map((campaign: any) => {

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
          {({ loading, error, data }: any) => {
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
