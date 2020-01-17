import * as React from "react";
import { Tabs, Row } from "antd";
import Build from "./BuildQuestionnaire";
import Design from "./DesignQuesitonnaire";
import gql from "graphql-tag";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Query, compose, ApolloProviderProps, QueryResult } from "react-apollo";
import { CircularProgress } from "walkin-components";
import { CustomScrollbars } from "walkin-components"
import {
  GET_QUESTIONNAIRE,
  GET_FEEDBACK_FORM
} from "../../../../containers/Query";
import { ApolloQueryResult, ApolloCurrentQueryResult } from "apollo-client";
const { TabPane } = Tabs;

interface RouteParams {
  id?: string
}

interface apolloProps extends ApolloProviderProps<any> {

}
interface FeedbackFormConfigProps extends RouteComponentProps<RouteParams>, Partial<apolloProps> {
  campaign?: any
  feedbackForm?: any
}

interface FeedbackFormConfigState {

}

class FeedbackFormConfig extends React.Component<FeedbackFormConfigProps, FeedbackFormConfigState> {
  constructor(props: FeedbackFormConfigProps) {
    super(props);
  }
  render() {
    const { match, campaign } = this.props;
    const campaignId = match.params.id ? match.params.id : campaign.id;
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
        }: QueryResult<any>) => {

          if (loading) {
            return <CircularProgress />;
          } else if (campaignData && campaignData.campaign) {


            const feedbackForm =
              campaignData.campaign && campaignData.campaign.feedbackForm
                ? campaignData.campaign.feedbackForm
                : {};


            return (
              <Query
                query={GET_QUESTIONNAIRE}
                variables={
                  feedbackForm.questionnaireRoot
                    ? { questionId: feedbackForm.questionnaireRoot.id }
                    : { questionId: "" }
                }
                displayName="questionnaire"
                fetchPolicy="network-only"
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
                        inkBar: false,
                        tabPane: true
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
            return <CircularProgress />;
          }
        }}
      </Query>
    );
  }
}

export default withRouter(FeedbackFormConfig);
