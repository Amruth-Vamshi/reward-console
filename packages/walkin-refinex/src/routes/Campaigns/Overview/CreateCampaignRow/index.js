import React, { Component } from "react";
import { Row, Col, Button, Card, Empty } from "antd";
import { CardBox, ErrorBoundary } from "@walkinsole/walkin-components";
import SelectApplicationModal from "../SelectApplicationModal";
import { compose, graphql } from "react-apollo";
import { CREATE_FEEDBACK_FORM } from "../../../../containers/Query";
import gql from "graphql-tag";
class CreateCampaignRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      formName: null
    }
  }

  // onCancel = async () => {
  //   this.setState({
  //     showModal: false
  //   });
  // };

  createFeedbackCampaign = (formName, e) => {
    this.props.setFeedbackForm(formName)
  };

  // onConfirm = async selectedApplication => {
  //   console.log(selectedApplication);
  //   const { formName } = this.state;
  //   const { history } = this.props;
  //   this.setState({
  //     showModal: false
  //   });
  //   const { createDraftCampaign, createFeedbackForm } = this.props;

  //   const campaign = await createDraftCampaign({
  //     variables: { applicationId: selectedApplication.id, formName: formName }
  //   });

  //   console.log(campaign);

  //   const feedbackForm = await createFeedbackForm({
  //     variables: {
  //       campaignId: campaign.data.createDraftCampaign.id
  //     }
  //   });
  //   console.log(feedbackForm);

  //   history.push(
  //     "/refinex/campaign/" + campaign.data.createDraftCampaign.id + "/edit"
  //   );
  // };

  render() {
    const { auth } = this.props;

    return (
      <ErrorBoundary>
        <div>
          <Row>
            <Col span={24}>
              <Row gutter={12} type="flex" justify="space-around">
                <Col span={4} onClick={this.createFeedbackCampaign.bind(
                  this,
                  "default"
                )}>
                  <CardBox style={{
                    cursor: "pointer"
                  }} styleName="gx-card-full">
                    <Row type="flex" style={{ height: "8rem" }} justify="center">
                      <Empty description="Blank Feedback" />

                    </Row>
                  </CardBox>
                </Col>
                <Col span={4} onClick={this.createFeedbackCampaign.bind(
                  this,
                  "product_feedback"
                )}>
                  <CardBox style={{
                    cursor: "pointer"
                  }} styleName="gx-card-full" heading={""}>
                    <Row type="flex" style={{ height: "8rem" }} justify="center">
                      <Empty description="Product Feedback" />

                    </Row>
                  </CardBox>
                </Col>
                <Col span={4} onClick={this.createFeedbackCampaign.bind(
                  this,
                  "customer survey"
                )}>
                  <CardBox style={{
                    cursor: "pointer"
                  }} styleName="gx-card-full" heading={""}>
                    <Row type="flex" style={{ height: "8rem" }} justify="center">
                      <Empty description="Customer Survey" />

                    </Row>
                  </CardBox>
                </Col>
                <Col span={4} onClick={this.createFeedbackCampaign.bind(
                  this,
                  "employee feedback"
                )}>
                  <CardBox style={{
                    cursor: "pointer"
                  }} styleName="gx-card-full" heading={""}>
                    <Row type="flex" style={{ height: "8rem" }} justify="center">
                      <Empty description="Employee Feedback" />

                    </Row>
                  </CardBox>
                </Col>
                <Col span={4} onClick={this.createFeedbackCampaign.bind(
                  this,
                  "user feedback"
                )}>
                  <CardBox style={{
                    cursor: "pointer"
                  }} styleName="gx-card-full" heading={""}>
                    <Row type="flex" style={{ height: "8rem" }} justify="center">
                      <Empty description="User Feedback" />

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

export default compose(
  graphql(CREATE_FEEDBACK_FORM, {
    name: "createFeedbackForm"
  })
)(CreateCampaignRow);
