import React, { Component } from "react";
import { Tabs } from "antd";
import Build from "./BuildQuestionnaire";
import Design from "./DesignQuesitonnaire";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";
import { Query, compose } from "react-apollo";
const { TabPane } = Tabs;

class FeedbackFormConfig extends Component {
  render() {
    const { match } = this.props;
    const campaignId = match.params.id;
    const GET_FEEDBACK_FORM = gql`
      query getFeedbackForm($campaignId: ID!) {
        campaign(id: $campaignId) {
          feedbackForm {
            id
            title
            questionnaireRoot {
              id
              questionText
              type
            }
          }
        }
      }
    `;

    const GET_QUESTIONNAIRE = gql`
      query getQuestionnaireHierarchy($questionId: ID!) {
        questionHierarchy(questionId: $questionId) {
          id
          questionText
          type
          rangeMax
          rangeMin
          feedbackCategory {
            id
            title
          }
          choices {
            id
            choiceText
            rangeStart
            rangeEnd
            toQuestion {
              id
              questionText
              type
              rangeMax
              rangeMin
              feedbackCategory {
                id
                title
              }
            }
          }
        }
      }
    `;

    return (
      <Query
        displayName="feedbackForm"
        query={GET_FEEDBACK_FORM}
        variables={{ campaignId }}
        fetchPolicy="network-only"
      >
        {({
          client,
          data: campaignData,
          loading,
          error,
          refetch: refetchFeedbackForm
        }) => {
          if (loading) {
            return <div>Loading...</div>;
          } else if (campaignData && campaignData.campaign) {
            console.log("campaignData", campaignData);

            const feedbackForm =
              campaignData.campaign && campaignData.campaign.feedbackForm
                ? campaignData.campaign.feedbackForm
                : {};
            console.log("feedbackForm", feedbackForm);

            return (
              <Query
                query={GET_QUESTIONNAIRE}
                variables={
                  feedbackForm.questionnaireRoot
                    ? { questionId: feedbackForm.questionnaireRoot.id }
                    : {}
                }
                displayName="questionnaire"
                fetchPolicy="cache-and-network"
              >
                {({
                  data: questionnaireData,
                  refetch: refetchQuestionnaire,
                  error: questionnaireDataError
                }) => {
                  return (
                    <Tabs
                      size="large"
                      animated={{
                        tabPane: false
                      }}
                      defaultActiveKey="1"
                    >
                      <TabPane tab="Build" key="1">
                        <Build
                          feedbackForm={campaignData.campaign.feedbackForm}
                          refetchFeedbackForm={refetchFeedbackForm}
                          questionnaire={
                            questionnaireData &&
                            questionnaireData.questionHierarchy
                              ? questionnaireData.questionHierarchy
                              : []
                          }
                          refetchQuestionnaire={refetchQuestionnaire}
                        />
                      </TabPane>
                      <TabPane tab="Design" key="2">
                        <Design
                          feedbackForm={campaignData.campaign.feedbackForm}
                          refetchFeedbackForm={refetchFeedbackForm}
                          questionnaire={
                            questionnaireData &&
                            questionnaireData.questionHierarchy
                              ? questionnaireData.questionHierarchy
                              : []
                          }
                          refetchQuestionnaire={refetchQuestionnaire}
                        />
                      </TabPane>
                    </Tabs>
                  );
                }}
              </Query>
            );
          } else {
            return <div>Loading...</div>;
          }
        }}
      </Query>
    );
  }
}

export default withRouter(FeedbackFormConfig);
