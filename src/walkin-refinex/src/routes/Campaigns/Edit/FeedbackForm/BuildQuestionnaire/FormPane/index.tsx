import "./FormPane.css";
import { Form, Slider, Button, Icon, Row, Col, TreeSelect, Card } from "antd";
import * as React from "react";
import FormHeader from "./FormHeader";
import ChoiceForm from "./ChoiceForm";
import QuestionForm from "./QuestionForm";
import ShowQuestion from "./ShowQuestion";
import CreateQuestion from "./CreateQuestion";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const questionWithSlider = {
  RATING_SCALE: "RATING_SCALE",
  OPINION_SCALE: "OPINION_SCALE"
};

interface QuestionnaireFormPaneProps {
  questionToEdit?: any;
  onQuestionSubmitted?: any;
  onChoiceSubmitted?: any;
  addChoice?: any;
  removeChoice?: any;
  choiceData?: any;
  addNewQuestion?: any;
  questionType?: any;
  choiceToAddQuestion?: any;
  isChoiceLoading?: any;
  isQuestionLoading?: any;
  questionnaire?: any;
  onLinkChoiceToQuestion?: any;
}

interface QuestionnaireFormPaneState {
  questionToEdit: any;
  choiceToEdit: any;
  showButton: boolean;
}

class QuestionnaireFormPane extends React.Component<
  QuestionnaireFormPaneProps,
  QuestionnaireFormPaneState
> {
  constructor(props: QuestionnaireFormPaneProps) {
    super(props);
    this.state = {
      questionToEdit: {},
      choiceToEdit: {},
      showButton: false
    };
  }

  onChoiceEdited = (values, choice) => {
    console.log("values of choices", values);
    if (questionWithSlider[values.type]) {
      values.rangeStart = values.range[0];
      values.rangeEnd = values.range[1];
    }
    delete values.range;
    const assignedValue = {
      ...choice,
      ...values
    };
    this.setState({
      choiceToEdit: Object.assign(this.state.choiceToEdit, assignedValue)
    });
  };

  onQuestionTypeEdit = value => {
    console.log("this.state.questionToEdit", this.state.questionToEdit);
    const values = {
      ...this.props.questionToEdit,
      type: value
    };
    if (questionWithSlider[values.type]) {
      values.rangeMin = 1;
      values.rangeMax = 10;
    } else {
      delete values.range;
    }

    this.setState({
      questionToEdit: values,
      showButton: true
    });
    this.props.onQuestionSubmitted(values);
  };

  onQuestionEdited = values => {
    if (values.range) {
      values.rangeMin = values.range[0];
      values.rangeMax = values.range[1];
    }
    this.setState({
      questionToEdit: Object.assign(this.state.questionToEdit, values),
      showButton: true
    });
  };

  onChoiceSubmitted = () => {
    const { choiceToEdit } = this.state;
    console.log("choiceToEdit", choiceToEdit);
    this.props.onChoiceSubmitted(choiceToEdit);
  };

  onQuestionSubmitted = () => {
    console.log("questionToEdit", this.state.questionToEdit);
    console.log(this.state.questionToEdit);
    this.props.onQuestionSubmitted(this.state.questionToEdit);
  };

  render() {
    const {
      questionToEdit,
      addChoice,
      removeChoice,
      choiceData,
      addNewQuestion,
      questionType,
      choiceToAddQuestion,
      isChoiceLoading,
      isQuestionLoading,
      questionnaire,
      onLinkChoiceToQuestion
    } = this.props;
    return (
      <Row
        style={{
          height: "100%",
          overflowX: "scroll"
        }}
      >
        <Col span={24}>
          {questionType != null && choiceToAddQuestion != null ? (
            <CreateQuestion
              onQuestionTypeEdit={this.onQuestionTypeEdit}
              showButton={this.state.showButton}
              questionnaire={questionnaire}
              onQuestionEdited={this.onQuestionEdited}
              onQuestionSubmitted={this.onQuestionSubmitted}
              onChoiceEdited={this.onChoiceEdited}
              questionToEdit={questionToEdit}
              addChoice={addChoice}
              removeChoice={removeChoice}
              addNewQuestion={addNewQuestion}
              choiceData={choiceData}
              questionType={questionType}
              choiceToAddQuestion={choiceToAddQuestion}
              submitChoice={this.onChoiceSubmitted}
              isChoiceLoading={isChoiceLoading}
              isQuestionLoading={isQuestionLoading}
              onLinkChoiceToQuestion={onLinkChoiceToQuestion}
            />
          ) : (
            <ShowQuestion
              onQuestionTypeEdit={this.onQuestionTypeEdit}
              showButton={this.state.showButton}
              questionnaire={questionnaire}
              onQuestionEdited={this.onQuestionEdited}
              onQuestionSubmitted={this.onQuestionSubmitted}
              onChoiceEdited={this.onChoiceEdited}
              questionToEdit={questionToEdit}
              addChoice={addChoice}
              removeChoice={removeChoice}
              addNewQuestion={addNewQuestion}
              choiceData={choiceData}
              submitChoice={this.onChoiceSubmitted}
              isChoiceLoading={isChoiceLoading}
              isQuestionLoading={isQuestionLoading}
              onLinkChoiceToQuestion={onLinkChoiceToQuestion}
            />
          )}
        </Col>

        {/* <Col span={24}>
          <FormHeader
            onQuestionEdited={() => this.onQuestionEdited}
            questionToEdit={questionToEdit}
            questionType={questionToEdit.type}
          />
        </Col>
        <Col span={22}>
          <Row>
            <Col span={24}>
              <QuestionForm
                onQuestionEdited={() => this.onQuestionEdited}
                onQuestionSubmitted={() => this.onQuestionSubmitted}
                questionToEdit={questionToEdit}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <ChoiceForm
                questionToEdit={questionToEdit}
                addChoice={addChoice}
                removeChoice={removeChoice}
                addNewQuestion={addNewQuestion}
                choiceData={choiceData}
              />
            </Col>
          </Row>
        </Col> */}
      </Row>
    );
  }
}

export default QuestionnaireFormPane;
