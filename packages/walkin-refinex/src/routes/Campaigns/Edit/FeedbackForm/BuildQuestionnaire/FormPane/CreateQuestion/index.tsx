import React from "react";
import { Col, Row } from "antd";
import FormHeader from "../FormHeader";
import QuestionForm from "../QuestionForm";
import ChoiceForm from "../ChoiceForm";

export default function ShowQuestion({
  onQuestionEdited,
  onQuestionSubmitted,
  questionToEdit,
  addChoice,
  removeChoice,
  addNewQuestion,
  choiceData,
  questionType,
  choiceToAddQuestion,
  submitChoice,
  isChoiceLoading,
  questionnaire,
  onLinkChoiceToQuestion,
  showButton,
  onQuestionTypeEdit
}) {
  console.log(
    "new question addition",
    submitChoice
  );
  return (
    <React.Fragment>
      <Col span={24}>
        <FormHeader
          onQuestionTypeEdit={() => onQuestionTypeEdit}
          onQuestionEdited={() => onQuestionEdited}
          questionToEdit={questionToEdit}
          questionType={questionType}
        />
      </Col>

      <Col span={22}>
        <Col span={24}>
          <QuestionForm
            showButton={showButton}
            onQuestionEdited={onQuestionEdited}
            onQuestionSubmitted={onQuestionSubmitted}
            questionToEdit={questionToEdit}
            style={{ marginTop: "4%" }}
          />
        </Col>

        <Col span={24}>
          <ChoiceForm
            onLinkChoiceToQuestion={onLinkChoiceToQuestion}
            questionnaire={questionnaire}
            questionToEdit={questionToEdit}
            addChoice={addChoice}
            removeChoice={removeChoice}
            addNewQuestion={addNewQuestion}
            choiceData={choiceData}
            submitChoice={submitChoice}
            isChoiceLoading={isChoiceLoading}
          />
        </Col>
      </Col>
    </React.Fragment>
  );
}
