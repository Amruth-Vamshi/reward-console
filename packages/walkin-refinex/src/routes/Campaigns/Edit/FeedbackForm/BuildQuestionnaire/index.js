import "./BuildQuestionnaire.css";
import React, { Component } from "react";
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

  onQuestionSubmitted = editedQuestion => {
    // GQL to edit the question and update questionnaire in state
    const { type, questionText, rangeMax, rangeMin } = editedQuestion;
    const questionToSave = {
      id: this.state.questionToEdit.id,
      type,
      questionText,
      rangeMax,
      rangeMin
    };
    this.props
      .editQuestion({
        variables: {
          editQuestionInput: questionToSave
        }
      })
      .then(data => {
        this.props.refetchQuestionnaire();
      })
      .catch(err => {
        console.log(err);
      });
  };

  addNewQuestion = async () => {
    const { feedbackForm } = this.props;
    console.log("fetching");
    try {
      const data = await this.props.createQuestionnaire({
        variables: {
          feedbackFormId: feedbackForm.id,
          questionnaireInput: {
            questionText: "Enter question details",
            type: "SINGLE_ANSWER"
          }
        }
      });
      console.log(data);

      // if (data.data.createQuestionnaire.id) {
      //   this.props.refetchQuestionnaire();
      // }
    } catch (e) {
      console.log("Error in creating questionnaire");
      console.log(e);
    }
  };

  addChoice = () => {
    this.props
      .addChoice({
        variables: {
          questionId: this.state.questionToEdit.id
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
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
              onQuestionSubmitted={this.onQuestionSubmitted}
              addChoice={this.addChoice}
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
    $questionnaireInput: QuestionInput
  ) {
    createQuestionnaire(
      feedbackFormId: $feedbackFormId
      input: $questionnaireInput
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

const ADD_CHOICE = gql`
  mutation addChoice($questionId: ID!) {
    addChoice(questionId: $questionId) {
      id
    }
  }
`;

export default compose(
  graphql(EDIT_QUESTION, { name: "editQuestion" }),
  graphql(CREAT_BLANK_QUESITON, {
    name: "createQuestionnaire"
  }),
  graphql(ADD_CHOICE, { name: "addChoice" })
)(Questionnaire);
