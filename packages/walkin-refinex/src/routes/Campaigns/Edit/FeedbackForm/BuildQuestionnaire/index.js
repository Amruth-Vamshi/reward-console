import "./BuildQuestionnaire.css";
import React, { Component } from "react";
import SearchTree from "./TreePane";
import FormPane from "./FormPane";
import { Query, graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { Row, Col } from "antd";
import QuestionsList from "./QuestionsList";

class Questionnaire extends Component {
  constructor() {
    super();
    this.state = {
      questionnaire: [],
      questionToEdit: null,
      loading: true
    };
  }

  onQuestionSelected = question => {
    this.setState({
      questionToEdit: question
    });
  };

  onQuestionEdited = editedQuestion => {
    // GQL to edit the question and update questionnaire in state
    const questionToSave = {
      id: this.state.questionToEdit.id,
      ...editedQuestion
    };
    console.log(questionToSave);

    this.props
      .editQuestion({
        variables: {
          editQuestionInput: questionToSave
        }
      })
      .then(data => {
        console.log(data);
        this.props.refetchQuestionnaire();
      })
      .catch(err => {
        console.log(err);
      });
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

    return (
      <Row className="QuestionnaireArea">
        <Col span={8}>
          <QuestionsList
            questionnaire={this.props.questionnaire}
            onQuestionSelected={this.onQuestionSelected}
            addNewQuestion={this.addNewQuestion}
          />
        </Col>
        <Col span={16}>
          {this.state.questionToEdit ? (
            <FormPane
              questionToEdit={questionToEdit}
              onQuestionEdited={questionData => {
                this.onQuestionEdited(questionData);
              }}
            />
          ) : null}
        </Col>
      </Row>
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

const EDIT_QUESTION = gql`
  mutation editQuestion($editQuestionInput: EditQuestionInput) {
    editQuestion(input: $editQuestionInput) {
      id
      questionText
      rangeMin
      rangeMax
      type
    }
  }
`;

export default compose(
  graphql(EDIT_QUESTION, { name: "editQuestion" }),
  graphql(CREAT_BLANK_QUESITON, {
    name: "createQuestionnaire"
  })
)(Questionnaire);
