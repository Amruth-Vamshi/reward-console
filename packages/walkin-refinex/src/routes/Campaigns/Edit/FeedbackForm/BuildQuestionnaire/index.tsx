import "./BuildQuestionnaire.css";
import * as React from "react";
import FormPane from "./FormPane";
import { Query, graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { Row, Col, Spin, Icon, message } from "antd";
import QuestionsList from "./QuestionsList";
import QuestionTypeSelector from "./QuestionTypeSelection";
import {
  CREAT_BLANK_QUESITON,
  EDIT_QUESTION,
  ADD_CHOICE,
  REMOVE_CHOICE,
  ADD_QUESTION,
  EDIT_CHOICE,
  LINK_CHOICE_TO_QUESTION
} from "../../../../../containers/Query";
import { Card } from "antd";
import { isEmptyStatement } from "@babel/types";
import isEmpty from "lodash/isEmpty"

interface QuestionnaireProps {
  questionnaire?: any
  linkChoieToQuestion?: any
  refetchQuestionnaire?: any
  addQuestion?: any
  editChoice?: any
  feedbackForm?: any
  createQuestionnaire?: any
  refetchFeedbackForm?: any
  editQuestion?: any
  addChoice?: any
  removeChoice?: any
}

interface QuestionnaireState {
  questionToEdit: any,
  loading: boolean,
  questionIndex: any,
  addQuestion: boolean,
  choiceToAddQuestion: any,
  questionTypeSelector: any,
  choiceData: any,
  questionnaire: any,
  isChoiceLoading: boolean,
  isQuestionLoading: boolean,
  questionData: any
}

class Questionnaire extends React.Component<QuestionnaireProps, QuestionnaireState> {
  private listRef: any = React.createRef();
  constructor(props: QuestionnaireProps) {
    super(props);
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
      isQuestionLoading: false,
      questionData: null
    };
  }

  componentDidUpdate(prevProps) {
    console.log("prevProps", prevProps, this.props);
  }
  success = (message1) => {
    message.success(message1, 5);
  };

  error = (message1) => {
    message.error(message1, 5);
  };


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

  onLinkChoiceToQuestion = (questionId, choiceId) => {
    this.setState({ isChoiceLoading: true, isQuestionLoading: true })
    console.log("choiceId,QuestionId", choiceId, questionId)
    this.props.linkChoieToQuestion({
      variables: {
        choiceId: choiceId,
        questionId: questionId
      }
    }).then(async data => {
      this.success("Choice successfully linked to question ")
      await this.props.refetchQuestionnaire();
      console.log("questionnaire", this.props.questionnaire)
      this.setState({ isChoiceLoading: false, isQuestionLoading: false, questionToEdit: this.props.questionnaire[this.state.questionIndex] })
    }).catch(err => {
      this.error("Some error occured while linking! Please try again")
      this.setState({ isChoiceLoading: false, isQuestionLoading: false })
    })
  }

  onNewQuestionAdd = (questionType) => {
    const { choiceToAddQuestion } = this.state;
    this.props.addQuestion({
      variables: {
        choiceId: choiceToAddQuestion.id,
        input: {
          questionText: "click here to edit",
          type: questionType,
          rangeMax: 10,
          rangeMin: 1
        }
      }
    }).then(async data => {
      console.log(data)
      this.setState({
        questionTypeSelector: questionType,
        addQuestion: false,
        questionToEdit: data.data.addQuestion
      });
      await this.props.refetchQuestionnaire();
      this.onQuestionSelected(this.state.questionIndex)
    }).catch(err => {
      console.log("Error creating the question", err)
    })
  }

  onQuestionTypeSelector = questionType => {
    this.setState({ isQuestionLoading: true })
    if (this.props.questionnaire.length !== 0) {
      const { choiceToAddQuestion } = this.state;
      this.props.addQuestion({
        variables: {
          choiceId: choiceToAddQuestion.id,
          input: {
            questionText: "click here to edit",
            type: questionType,
            rangeMax: 10,
            rangeMin: 1
          }
        }
      }).then(async data => {
        console.log(data)
        await this.props.refetchQuestionnaire();
        if (questionType == "TEXT") {

          this.addChoice(data.addQuestion.id, null)
        } else {
          this.setState({
            isQuestionLoading: false,
            addQuestion: false
          })
        }

      }).catch(err => {
        this.setState({ isQuestionLoading: false })
        console.log("Error creating the question", err)
      })
    } else {
      this.createRootQuestionnaire(questionType)
    }

  };


  createRootQuestionnaire = async (questionType) => {
    this.setState({ isQuestionLoading: true })
    const { feedbackForm } = this.props;
    try {
      const data = await this.props.createQuestionnaire({
        variables: {
          feedbackFormId: feedbackForm.id,
          questionnaireInput: {
            questionText: "Click here to edit",
            type: questionType,
            rangeMax: 10,
            rangeMin: 1
          }
        }
      });
      console.log(data);
      await this.props.refetchFeedbackForm();
      if (questionType == "TEXT") {

        this.addChoice(data.createQuestionnaire.id, null)
      } else {
        this.setState({ isQuestionLoading: false })
      }

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
          type: questionData.type,
          rangeMax: 10,
          rangeMin: 1,
          choices: []
        }
      }
    }).then(data => {
      console.log(data)
      this.props.refetchQuestionnaire();

      this.setState({
        questionTypeSelector: questionData.type,
        addQuestion: false,
        questionData: questionData,
        questionToEdit: data.data.addQuestion
      });
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
        this.listRef.current.resetAfterIndex(this.state.questionIndex, true);
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

  addChoice = (id, range) => {
    this.setState({ isChoiceLoading: true })
    let rangeStart = 1;
    let rangeEnd = 10;
    if (range) {
      rangeStart = range.rangeStart;
      rangeEnd = range.rangeEnd;
    }
    this.props
      .addChoice({
        variables: {
          questionId: this.state.questionToEdit ? this.state.questionToEdit.id : id,
          input: {
            choiceText: "  ",
            rangeStart: rangeStart,
            rangeEnd: rangeEnd
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
        this.setState({ isChoiceLoading: false })
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
            reference={this.listRef}
          />}
        </Col>
        <Col span={16}>
          {
            (this.props.questionnaire.length > 0 ? !isEmpty(questionToEdit) && !addQuestion ? (
              <FormPane
                questionnaire={this.props.questionnaire}
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
                onLinkChoiceToQuestion={this.onLinkChoiceToQuestion}
              />
            ) : null :
              !addQuestion && !isEmpty(questionToEdit) ? (
                <FormPane
                  questionnaire={this.props.questionnaire}
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
                  onLinkChoiceToQuestion={this.onLinkChoiceToQuestion}
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
  graphql(EDIT_CHOICE, { name: "editChoice" }),
  graphql(LINK_CHOICE_TO_QUESTION, { name: "linkChoieToQuestion" })
)(Questionnaire);
