import React, { Component } from "react";
import { Col, Row, Button, Select, Modal } from "antd";
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
import SelectApplicationModal from "./SelectApplicationModal";
class CampaignOverview extends Component {
  state = {
    showModal: false
  };

  onConfirm = async selectedApplication => {
    const { history } = this.props;
    this.setState({
      showModal: false
    });
    const { createDraftCampaign, createFeedbackForm } = this.props;

    const campaign = await createDraftCampaign({
      variables: { applicationId: selectedApplication.id }
    });

    const feedbackForm = await createFeedbackForm({
      variables: {
        campaignId: campaign.data.createDraftCampaign.id
      }
    });

    history.push(
      "/refinex/campaign/" + campaign.data.createDraftCampaign.id + "/edit"
    );
  };

  onCancel = async () => {
    this.setState({
      showModal: false
    });
  };

  createFeedbackCampaign() {
    this.setState({
      showModal: true
    });
  }

  render() {
    const { history, match, auth } = this.props;
    const { showModal } = this.state;
    return (
      <Auxiliary>
        <SelectApplicationModal
          visible={showModal}
          onConfirm={this.onConfirm}
          onCancel={this.onCancel}
          organizationId={auth.auth.organizationId}
        />
        <h1>Create Campaign</h1>
        <Row type="flex" justify="space-around">
          <Col span={4}>
            <CardBox styleName="gx-card-full">
              <Row type="flex" justify="center">
                <Col>
                  <Button
                    onClick={this.createFeedbackCampaign.bind(this, "blank")}
                    type="ghost"
                    icon="plus"
                    shape="round"
                  />
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
  query auth {
    auth {
      userId
      organizationId
    }
  }
`;
const CREATE_DRAFT_CAMPAIGN = gql`
  mutation createDraftCampaign($applicationId: ID!) {
    createDraftCampaign(applicationId: $applicationId) {
      id
    }
  }
`;

const CREATE_FEEDBACK_FORM = gql`
  mutation createFeedbackForm($campaignId: ID!) {
    createFeedbackForm(campaignId: $campaignId, input: { title: "default" }) {
      campaign {
        id
        name
      }
      title
    }
  }
`;

export default compose(
  graphql(GET_USER_IDENTITY, {
    name: "auth"
  }),
  graphql(CREATE_DRAFT_CAMPAIGN, {
    name: "createDraftCampaign"
  }),
  graphql(CREATE_FEEDBACK_FORM, {
    name: "createFeedbackForm"
  })
)(CampaignOverview);
