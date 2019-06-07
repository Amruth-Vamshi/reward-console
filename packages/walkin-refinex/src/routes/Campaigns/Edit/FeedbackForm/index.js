import React, { Component } from "react";
import { Tabs } from "antd";
import Build from "./BuildQuestionnaire";
import Design from "./DesignQuesitonnaire";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
const { TabPane } = Tabs;

class FeedbackFormConfig extends Component {
  callback = key => {
    console.log(key);
  };
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

    return (
      <Query query={GET_FEEDBACK_FORM} variables={{ campaignId }}>
        {({ client, data, loading, error, refetch }) => {
          console.log("data.campaign.feedbackForm.id", data);
          if (loading) {
            return <div>Loading...</div>;
          }
          const feedbackForm =
            data.campaign && data.campaign.feedbackForm
              ? data.campaign.feedbackForm
              : {};
          return (
            <Tabs
              size="large"
              animated={{
                tabPane: false
              }}
              defaultActiveKey="1"
              onChange={this.callback}
            >
              <TabPane tab="Build" key="1">
                <Build
                  feedbackForm={data.campaign.feedbackForm}
                  refetchQuestionnaire={() => {
                    refetch();
                  }}
                />
              </TabPane>
              <TabPane tab="Design" key="2">
                <Design
                  feedbackForm={data.campaign.feedbackForm}
                  refetchQuestionnaire={() => {
                    refetch();
                  }}
                />
              </TabPane>
            </Tabs>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(FeedbackFormConfig);
