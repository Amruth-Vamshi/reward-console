import "./FormPane.css";
import { Form, Slider, Button, Icon, Row, Col, TreeSelect, Card } from "antd";
import React, { Component } from "react";
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

class QuestionnaireFormPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionToEdit: {},
      choiceToEdit: {}
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
    }
    this.setState({
      choiceToEdit: Object.assign(this.state.choiceToEdit, assignedValue)
    });
  };

  onQuestionEdited = (values) => {
    console.log("values", values);
    if (questionWithSlider[values.type]) {
      values.rangeMin = values.rangeMin;
      values.rangeMax = values.rangeMax;
    }
    delete values.range;
    this.setState({
      questionToEdit: Object.assign(this.state.questionToEdit, values)
    });
  };

  onChoiceSubmitted = () => {
    const { choiceToEdit } = this.state;
    console.log("choiceToEdit", choiceToEdit)
    this.props.onChoiceSubmitted(choiceToEdit)
  };

  onQuestionSubmitted = () => {
    console.log("questionToEdit", this.state.questionToEdit)
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
      questionnaire
    } = this.props;
    console.log("questionToEdit", questionnaire)
    return (
      <Row
        style={{
          height: "-webkit-fill-available",
          overflowX: "scroll"
        }}
      >
        <Col span={24}>
          {questionType != null && choiceToAddQuestion != null ? (
            <CreateQuestion
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
            />
          ) : (
              <ShowQuestion
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
