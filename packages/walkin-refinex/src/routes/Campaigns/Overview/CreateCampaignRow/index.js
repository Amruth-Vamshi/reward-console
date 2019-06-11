import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import { CardBox, ErrorBoundary } from "@walkinsole/walkin-components";
import SelectApplicationModal from "../SelectApplicationModal";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";
class CreateCampaignRow extends Component {
  state = {
    showModal: false
  };
  onCancel = async () => {
    this.setState({
      showModal: false
    });
  };

  createFeedbackCampaign = () => {
    this.setState({
      showModal: true
    });
  };

  onConfirm = async selectedApplication => {
    console.log(selectedApplication);

    const { history } = this.props;
    this.setState({
      showModal: false
    });
    const { createDraftCampaign, createFeedbackForm } = this.props;

    const campaign = await createDraftCampaign({
      variables: { applicationId: selectedApplication.id }
    });

    console.log(campaign);

    const feedbackForm = await createFeedbackForm({
      variables: {
        campaignId: campaign.data.createDraftCampaign.id
      }
    });
    console.log(feedbackForm);

    history.push(
      "/refinex/campaign/" + campaign.data.createDraftCampaign.id + "/edit"
    );
  };

  render() {
    const { auth } = this.props;

    return (
      <ErrorBoundary>
        <div>
          <SelectApplicationModal
            visible={this.state.showModal}
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}
            organizationId={auth.auth.organizationId}
          />
          <Row>
            <Col span={24}>
              <Row style={{ marginBottom: "1%" }}>
                <Col span={24}>
                  <h1>Create Feedback Campaign</h1>
                </Col>
              </Row>
              <Row gutter={12} type="flex" justify="space-around">
                <Col span={4}>
                  <CardBox styleName="gx-card-full">
                    <Row type="flex" justify="center">
                      <Col>
                        <Button
                          onClick={this.createFeedbackCampaign.bind(
                            this,
                            "blank"
                          )}
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
                          onClick={this.createFeedbackCampaign.bind(
                            this,
                            "blank"
                          )}
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
                          onClick={this.createFeedbackCampaign.bind(
                            this,
                            "blank"
                          )}
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
                          onClick={this.createFeedbackCampaign.bind(
                            this,
                            "blank"
                          )}
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
            </Col>
          </Row>
        </div>
      </ErrorBoundary>
    );
  }
}

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
  graphql(CREATE_DRAFT_CAMPAIGN, {
    name: "createDraftCampaign"
  }),
  graphql(CREATE_FEEDBACK_FORM, {
    name: "createFeedbackForm"
  })
)(CreateCampaignRow);
