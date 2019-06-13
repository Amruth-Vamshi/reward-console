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
    console.log(this.props);
    const { match } = this.props;
    const campaignId = match.params.id;
    console.log(campaignId);

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
      >
        {({
          client,
          data: campaignData,
          loading,
          error,
          refetch: refetchFeedbackForm
        }) => {
          console.log("campaignData", campaignData);
          if (loading) {
            return <div>Loading...</div>;
          } else if (campaignData && campaignData.campaign) {
            const feedbackForm =
              campaignData.campaign && campaignData.campaign.feedbackForm
                ? campaignData.campaign.feedbackForm
                : {};
            console.log("feedbackFormId", feedbackForm);

            return (
              <Query
                query={GET_QUESTIONNAIRE}
                variables={{ questionId: feedbackForm.questionnaireRoot.id }}
                displayName="questionnaire"
              >
                {({
                  data: questionnaireData,
                  refetch: refetchQuestionnaire
                }) => (
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
                        refetchQuestionnaire={() => {
                          refetchQuestionnaire().catch(err => {
                            console.log(err);
                          });
                        }}
                        questionnaire={
                          questionnaireData.questionHierarchy
                            ? questionnaireData.questionHierarchy
                            : []
                        }
                      />
                    </TabPane>
                    <TabPane tab="Design" key="2">
                      <Design
                        feedbackForm={campaignData.campaign.feedbackForm}
                        refetchQuestionnaire={() => {
                          refetchQuestionnaire();
                        }}
                        questionnaire={
                          questionnaireData.questionHierarchy
                            ? questionnaireData.questionHierarchy
                            : []
                        }
                      />
                    </TabPane>
                  </Tabs>
                )}
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
