import "./BuildQuestionnaire.css";
import React, { Component } from "react";
import FormPane from "./FormPane";
import { Query, graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { Row, Col } from "antd";
import QuestionsList from "./QuestionsList";
import QuestionTypeSelector from "./QuestionTypeSelection";
import {
  CREAT_BLANK_QUESITON,
  EDIT_QUESTION,
  ADD_CHOICE,
  REMOVE_CHOICE
} from "../../../../../containers/Query";
import { Card } from "antd";
class Questionnaire extends Component {
  constructor() {
    super();
    this.state = {
      questionToEdit: null,
      loading: true,
      questionIndex: null,
      addQuestion: false,
      choiceToAddQuestion: null,
      questionTypeSelector: null
    };
  }

  onQuestionSelected = questionIndex => {
    this.setState(prevState => ({
      questionToEdit: this.props.questionnaire[questionIndex],
      questionIndex,
      addQuestion: false,
      choiceData: null,
      choiceToAddQuestion: null,
      questionTypeSelector: null
    }));
  };

  onQuestionTypeSelector = questionType => {
    this.setState({
      questionTypeSelector: questionType,
      addQuestion: false,
      questionToEdit: {
        questionText: "",
        type: questionType,
        rangeMax: "",
        rangeMin: "",
        choices: []
      }
    });
  };

  onNewQuestionAdded = questionData => {
    questionData.type = this.state.questionTypeSelector;
    this.setState({
      questionData: questionData
    });
  };

  onNewChoiceAdd = choiceData => {
    this.setState({
      choiceData: choiceData
    });
  };

  onNewQuestionAdd = questionData => {
    this.setState({
      questionData: questionData
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

  addNewQuestion = async (choiceId = null) => {
    const { feedbackForm } = this.props;
    this.setState({ addQuestion: true, choiceToAddQuestion: choiceId });
    // try {
    //   const data = await this.props.createQuestionnaire({
    //     variables: {
    //       feedbackFormId: feedbackForm.id,
    //       questionnaireInput: {
    //         questionText: "Enter question details",
    //         type: "SINGLE_ANSWER"
    //       }
    //     }
    //   });
    //   console.log(data);
    //   this.props.refetchFeedbackForm();
    // } catch (e) {
    //   console.log("Error in creating questionnaire");
    //   console.log(e);
    // }
  };

  addChoice = () => {
    this.props
      .addChoice({
        variables: {
          questionId: this.state.questionToEdit.id,
          input: this.state.choiceData
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
    const {
      questionIndex,
      addQuestion,
      choiceData,
      questionTypeSelector,
      choiceToAddQuestion,
      questionToEdit
    } = this.state;
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
          {questionIndex !== null && !addQuestion ? (
            <FormPane
              questionToEdit={questionToEdit}
              onQuestionSubmitted={this.onQuestionSubmitted}
              addChoice={this.addChoice}
              removeChoice={this.removeChoice}
              addNewQuestion={this.addNewQuestion}
              choiceData={choiceData}
              questionType={questionTypeSelector}
              choiceToAddQuestion={choiceToAddQuestion}
            />
          ) : (
            <QuestionTypeSelector
              onQuestionTypeSelector={this.onQuestionTypeSelector}
            />
          )}
        </Col>
      </Row>
    );
  }
}

export default compose(
  graphql(EDIT_QUESTION, { name: "editQuestion" }),
  graphql(CREAT_BLANK_QUESITON, {
    name: "createQuestionnaire"
  }),
  graphql(ADD_CHOICE, { name: "addChoice" }),
  graphql(REMOVE_CHOICE, { name: "removeChoice" })
)(Questionnaire);
