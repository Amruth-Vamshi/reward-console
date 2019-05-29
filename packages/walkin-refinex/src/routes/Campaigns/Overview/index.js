import React, { Component } from "react";
import { Col, Row, Button } from "antd";
import { withRouter, Redirect } from "react-router-dom";
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import {
  ChartCard,
  Auxiliary,
  Portfolio,
  BalanceHistory,
  SendMoney,
  RewardCard,
  CurrencyCalculator,
  CryptoNews,
  DownloadMobileApps,
  OrderHistory,
  CardBox
} from "@walkinsole/walkin-components";
import { increamentData, lineData } from "../../Dashboard/data";
import gql from "graphql-tag";
import { compose, withApollo, Mutation, graphql } from "react-apollo";

class CampaignOverview extends Component {
  createFeedbackCampaign = (type, event) => {
    const { history, client } = this.props;
    // this.createCampaign();
    history.push("/refinex/edit?campaignId=");
  };

  Overview() {
    return;
  }

  render() {
    const CREATE_DRAFT_CAMPAIGN = gql`
      mutation createDraftCampaign {
        createDraftCampaign(applicationId: "2") {
          id
        }
      }
    `;
    console.log(this.props);
    const { history, match } = this.props;
    return (
      <Auxiliary>
        <h1>Create Campaign</h1>
        <Row type="flex" justify="space-around">
          <Col span={4}>
            <CardBox styleName="gx-card-full" heading={""}>
              <Row type="flex" justify="center">
                <Col>
                  <Mutation mutation={CREATE_DRAFT_CAMPAIGN}>
                    {createCampaign => (
                      <Button
                        onClick={async () => {
                          const { data } = await createCampaign();
                          const { createDraftCampaign } = data;
                          history.push(
                            match.url + "/" + createDraftCampaign.id + "/edit"
                          );
                        }}
                        type="ghost"
                        icon="plus"
                        shape="round"
                      />
                    )}
                  </Mutation>
                </Col>
              </Row>
              <Row type="flex" justify="center">
                <Col>
                  <span>Blank Feedback</span>
                </Col>
              </Row>
            </CardBox>
          </Col>
          <Col span={4}>
            <CardBox styleName="gx-card-full" heading={""}>
              <Row type="flex" justify="center">
                <Col>
                  <Button
                    onClick={this.createFeedbackCampaign.bind(this, "blank")}
                    type="ghost"
                    icon="shopping-cart"
                    shape="round"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center">
                <Col>
                  <span>Customer Survey</span>
                </Col>
              </Row>
            </CardBox>
          </Col>
          <Col span={4}>
            <CardBox styleName="gx-card-full" heading={""}>
              <Row type="flex" justify="center">
                <Col>
                  <Button
                    onClick={this.createFeedbackCampaign.bind(this, "blank")}
                    type="ghost"
                    icon="team"
                    shape="round"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center">
                <Col>
                  <span>Employee Feedback</span>
                </Col>
              </Row>
            </CardBox>
          </Col>
          <Col span={4}>
            <CardBox styleName="gx-card-full" heading={""}>
              <Row type="flex" justify="center">
                <Col>
                  <Button
                    onClick={this.createFeedbackCampaign.bind(this, "blank")}
                    type="ghost"
                    icon="user"
                    shape="round"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center">
                <Col>
                  <span>User Feedback</span>
                </Col>
              </Row>
            </CardBox>
          </Col>
        </Row>
      </Auxiliary>
    );
  }
}

const GET_USER_IDENTITY = gql`
  query loggedInUser {
    loggedInUser @client {
      id
      org_id
    }
  }
`;

export default compose(
  graphql(GET_USER_IDENTITY, {
    name: "loggedInUser"
  })
)(CampaignOverview);
