import "./BuildQuestionnaire.css";
import React, { Component } from "react";
import SearchTree from "./TreePane";
import FormPane from "./FormPane";
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";
import { Row, Col } from "antd";
import QuestionsList from "./QuestionsList";

class Questionnaire extends Component {
  constructor() {
    super();
    this.state = {
      questionnaire: [],
      questionToEdit: null
    };
  }

  onQuestionSelected = question => {
    this.setState({
      questionToEdit: question
    });
  };

  onQuestionEdited = editedQuestion => {
    // GQL to edit the question and update questionnaire in state
  };

  addNewQuestion = async parent => {
    const { feedbackForm } = this.props;
    if (!parent) {
      try {
        const data = await this.props.createQuestionnaire({
          variables: {
            feedbackFormId: feedbackForm.id,
            questionnaireRootInput: {
              questionText: "Enter question details",
              type: "SINGLE_ANSWER"
            }
          }
        });
        // if (data.data.createQuestionnaire.id) {
        //   this.props.refetchQuestionnaire();
        // }
      } catch (e) {
        console.log("Error in creating questionnaire");
        console.log(e);
      }
    }
  };

  render() {
    const { questionToEdit } = this.state;
    const { feedbackForm } = this.props;
    const questionId = feedbackForm.questionnaireRoot
      ? feedbackForm.questionnaireRoot.id
      : null;
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
      <Query query={GET_QUESTIONNAIRE} variables={{ questionId }}>
        {({ data, loading, error }) => {
          if (loading) {
            return <div>loading...</div>;
          }
          const questionnaire = data ? data.questionHierarchy : [];
          return (
            <Row
              style={{
                height: "calc(100vh - 240px)"
              }}
            >
              <Col span={8}>
                {/* <SearchTree
                  questionnaire={questionnaire}
                  onQuestionSelected={this.onQuestionSelected}
                  addNewQuestion={this.addNewQuestion}
                /> */}

                <QuestionsList
                  questionnaire={questionnaire}
                  onQuestionSelected={this.onQuestionSelected}
                  addNewQuestion={this.addNewQuestion}
                />
              </Col>
              <Col span={16}>
                {this.state.questionToEdit ? (
                  <FormPane
                    questionToEdit={questionToEdit}
                    onQuestionEdited={this.onQuestionEdited}
                  />
                ) : null}
              </Col>
            </Row>
          );
        }}
      </Query>
    );
  }
}

const CREAT_BLANK_QUESITON = gql`
  mutation createQuestionnaire(
    $feedbackFormId: ID!
    $questionnaireRootInput: QuestionInput
  ) {
    createQuestionnaire(
      feedbackFormId: $feedbackFormId
      input: $questionnaireRootInput
    ) {
      id
      questionText
      type
      rangeMin
      rangeMax
    }
  }
`;

export default graphql(CREAT_BLANK_QUESITON, {
  name: "createQuestionnaire"
})(Questionnaire);
