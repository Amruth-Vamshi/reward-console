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
      questionToEdit: null,
      loading: true,
      questionIndex: null
    };
  }

  onQuestionSelected = questionIndex => {
    this.setState({
      questionToEdit: this.props.questionnaire[questionIndex],
      questionIndex
    });
  };

  onQuestionSubmitted = async editedQuestion => {
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
      this.props.refetchFeedbackForm();
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
        this.props.refetchQuestionnaire();
      })
      .catch(err => {
        console.log(err);
      });
  };

  removeChoice = choice => {
    console.log("removing choice", choice);
    this.props
      .removeChoice({
        variables: {
          id: choice.id
        }
      })
      .then(mutationData => {
        console.log(mutationData);
        this.props.refetchQuestionnaire();
      });
  };

  render() {
    console.log(this.props);

    const { questionIndex } = this.state;
    console.log(questionIndex);

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
          {questionIndex !== null ? (
            <FormPane
              questionToEdit={this.props.questionnaire[questionIndex]}
              onQuestionSubmitted={this.onQuestionSubmitted}
              addChoice={this.addChoice}
              removeChoice={this.removeChoice}
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

const REMOVE_CHOICE = gql`
  mutation removeChoice($id: ID!) {
    removeChoice(id: $id) {
      choiceText
    }
  }
`;

export default compose(
  graphql(EDIT_QUESTION, { name: "editQuestion" }),
  graphql(CREAT_BLANK_QUESITON, {
    name: "createQuestionnaire"
  }),
  graphql(ADD_CHOICE, { name: "addChoice" }),
  graphql(REMOVE_CHOICE, { name: "removeChoice" })
)(Questionnaire);
