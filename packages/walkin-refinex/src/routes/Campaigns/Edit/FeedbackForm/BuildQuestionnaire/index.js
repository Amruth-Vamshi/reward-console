import "./BuildQuestionnaire.css";
import React, { Component } from "react";
import FormPane from "./FormPane";
import { Query, graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { Row, Col, Spin, Icon } from "antd";
import QuestionsList from "./QuestionsList";
import QuestionTypeSelector from "./QuestionTypeSelection";
import {
  CREAT_BLANK_QUESITON,
  EDIT_QUESTION,
  ADD_CHOICE,
  REMOVE_CHOICE,
  ADD_QUESTION,
  EDIT_CHOICE
} from "../../../../../containers/Query";
import { Card } from "antd";
import { isEmptyStatement } from "@babel/types";
import isEmpty from "lodash/isEmpty"
class Questionnaire extends Component {
  constructor() {
    super();
    this.state = {
      questionToEdit: null,
      loading: true,
      questionIndex: null,
      addQuestion: false,
      choiceToAddQuestion: null,
      questionTypeSelector: null,
      choiceData: null,
      questionnaire: null,
      isChoiceLoading: false,
      isQuestionLoading: false
    };
  }

  onQuestionSelected = questionIndex => {
    console.log("this.props.questionnaire", this.props.questionnaire)
    this.setState(prevState => ({
      questionToEdit: this.props.questionnaire[questionIndex],
      questionIndex,
      addQuestion: false,
      choiceData: null,
      choiceToAddQuestion: null,
      questionTypeSelector: null
    }));
  };

  onNewQuestionAdd = () => {
    const { choiceToAddQuestion } = this.state;
    this.props.addQuestion({
      variables: {
        choiceId: choiceToAddQuestion.id,
        input: {
          questionText: "click here to edit",
          type: questionType,
          rangeMax: 0,
          rangeMin: 10
        }
      }
    }).then(async data => {
      console.log(data)
      this.setState({
        questionTypeSelector: questionType,
        addQuestion: false,
        questionToEdit: data.data.addQuestion
      });
      await this.props.refetchFeedbackForm();
      this.onQuestionSelected(this.state.questionIndex)
    }).catch(err => {
      console.log("Error creating the question", err)
    })
  }

  onQuestionTypeSelector = questionType => {
    this.setState({ isQuestionLoading: true })
    const { choiceToAddQuestion } = this.state;
    this.props.addQuestion({
      variables: {
        choiceId: choiceToAddQuestion.id,
        input: {
          questionText: "click here to edit",
          type: questionType,
          rangeMax: 0,
          rangeMin: 10
        }
      }
    }).then(async data => {
      console.log(data)
      this.setState({
        questionTypeSelector: questionType,
        addQuestion: false,
        questionData: data,
        questionToEdit: data.data.addQuestion
      });
      await this.props.refetchFeedbackForm();
      this.onQuestionSelected(this.state.questionIndex)
      this.setState({ isQuestionLoading: false })
    }).catch(err => {
      this.setState({ isQuestionLoading: false })
      console.log("Error creating the question", err)
    })
  };


  createRootQuestionnaire = async (questionData) => {
    this.setState({ isQuestionLoading: true })
    const { feedbackForm } = this.props;
    try {
      const data = await this.props.createQuestionnaire({
        variables: {
          feedbackFormId: feedbackForm.id,
          questionnaireInput: {
            questionText: questionData.questionText,
            type: questionData.type
          }
        }
      });
      console.log(data);
      await this.props.refetchFeedbackForm();
      this.onQuestionSelected(0)
      this.setState({ isQuestionLoading: false })
    } catch (e) {
      this.setState({ isQuestionLoading: false })
      console.log("Error in creating questionnaire", e);
      console.log(e);
    }
  }

  onNewQuestionAdded = questionData => {
    questionData.type = this.state.questionTypeSelector;
    this.props.addQuestion({
      variables: {
        choiceId: "",
        input: {
          questionText: "  ",
          type: questionType,
          rangeMax: "",
          rangeMin: "",
          choices: []
        }
      }
    }).then(data => {
      console.log(data)
      this.setState({
        questionTypeSelector: questionType,
        addQuestion: false,
        questionData: questionData,
        questionToEdit: data.data.addQuestion
      });
      this.props.refetchFeedbackForm();
    }).catch(err => {
      console.log("Error creating the question", err)
    })
  };

  onNewChoiceAdd = choiceData => {
    this.setState({
      choiceData: choiceData
    });
  };

  // onNewQuestionAdd = questionData => {
  //   this.setState({
  //     questionData: questionData
  //   });
  // };

  onChoiceSubmitted = editedChoice => {
    console.log("editedChoice", editedChoice)
    this.setState({ isChoiceLoading: true })
    this.props.editChoice({
      variables: {
        input: {
          id: editedChoice.id,
          choiceText: editedChoice.choiceText,
          rangeStart: editedChoice.rangeStart,
          rangeEnd: editedChoice.rangeEnd
        }
      }
    })
      .then(async data => {
        console.log(data)
        await this.props.refetchQuestionnaire();
        this.onQuestionSelected(this.state.questionIndex)
        this.setState({ isChoiceLoading: false })
      })
      .catch(err => {
        console.log(err)
      })
  }

  onQuestionSubmitted = async editedQuestion => {
    // GQL to edit the question and update questionnaire in state
    this.setState({ isQuestionLoading: true })
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
      .then(async data => {
        await this.props.refetchQuestionnaire();
        this.setState({ isQuestionLoading: false })
      })
      .catch(err => {
        this.setState({ isQuestionLoading: false })
        console.log(err);
      });
  };

  addNewQuestion = async (choiceId = null) => {
    const { feedbackForm } = this.props;
    this.setState({ addQuestion: true, choiceToAddQuestion: choiceId });
  };

  addChoice = () => {
    this.setState({ isChoiceLoading: true })
    this.props
      .addChoice({
        variables: {
          questionId: this.state.questionToEdit.id,
          input: {
            choiceText: "  ",
            rangeStart: 0,
            rangeEnd: 10
          }
        }
      })
      .then(async data => {
        console.log(data);
        this.setState({ choiceData: data.data.addChoice })
        await this.props.refetchQuestionnaire();
        this.onQuestionSelected(this.state.questionIndex)
        this.setState({ isChoiceLoading: false })
      })
      .catch(err => {
        console.log(err);
      });
  };

  removeChoice = choice => {
    console.log("removing choice", choice);
    this.setState({ isChoiceLoading: true })
    this.props
      .removeChoice({
        variables: {
          id: choice.id
        }
      })
      .then(async mutationData => {
        console.log(mutationData);
        await this.props.refetchQuestionnaire();
        this.onQuestionSelected(this.state.questionIndex)
        this.setState({ isChoiceLoading: false })
      });
  };

  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 50 }} spin />;
    const {
      questionIndex,
      addQuestion,
      choiceData,
      questionTypeSelector,
      choiceToAddQuestion,
      questionToEdit,
      isChoiceLoading,
      isQuestionLoading
    } = this.state;
    return (
      <Row className="QuestionnaireArea">
        <Col span={8}>
          {isQuestionLoading ? (<div className="divCenter"><Spin size="large" indicator={antIcon} /> </div>) : <QuestionsList
            createRootQuestionnaire={this.createRootQuestionnaire}
            questionnaire={this.props.questionnaire}
            onQuestionSelected={this.onQuestionSelected}
            addNewQuestion={this.addNewQuestion}
            isQuestionLoading={isQuestionLoading}
          />}
        </Col>
        <Col span={16}>
          {
            (this.props.questionnaire.length > 0 ? !isEmpty(questionToEdit) && !addQuestion ? (
              <FormPane
                questionToEdit={questionToEdit}
                onQuestionSubmitted={this.onQuestionSubmitted}
                addChoice={this.addChoice}
                removeChoice={this.removeChoice}
                addNewQuestion={this.addNewQuestion}
                choiceData={choiceData}
                questionType={questionTypeSelector}
                choiceToAddQuestion={choiceToAddQuestion}
                onChoiceSubmitted={this.onChoiceSubmitted}
                isChoiceLoading={isChoiceLoading}
                isQuestionLoading={isQuestionLoading}
              />
            ) : (
                <QuestionTypeSelector
                  onQuestionTypeSelector={this.onQuestionTypeSelector}
                />
              ) :
              !addQuestion && !isEmpty(questionToEdit) ? (
                <FormPane
                  questionToEdit={questionToEdit}
                  onQuestionSubmitted={this.createRootQuestionnaire}
                  addChoice={this.addChoice}
                  removeChoice={this.removeChoice}
                  addNewQuestion={this.addNewQuestion}
                  choiceData={choiceData}
                  questionType={questionTypeSelector}
                  choiceToAddQuestion={choiceToAddQuestion}
                  onChoiceSubmitted={this.onChoiceSubmitted}
                  isChoiceLoading={isChoiceLoading}
                  isQuestionLoading={isQuestionLoading}
                />
              ) : (
                  <QuestionTypeSelector
                    onQuestionTypeSelector={this.onQuestionTypeSelector}
                  />
                ))}
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
  graphql(ADD_QUESTION, {
    name: "addQuestion"
  }),
  graphql(ADD_CHOICE, { name: "addChoice" }),
  graphql(REMOVE_CHOICE, { name: "removeChoice" }),
  graphql(EDIT_CHOICE, { name: "editChoice" })
)(Questionnaire);
