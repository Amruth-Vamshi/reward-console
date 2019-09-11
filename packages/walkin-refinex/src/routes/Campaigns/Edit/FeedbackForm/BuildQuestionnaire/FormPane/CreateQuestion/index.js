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
  isChoiceLoading
}) {
  console.log(
    "new question addition",
    submitChoice
  );
  return (
    <React.Fragment>
      <Col span={24}>
        <FormHeader
          onQuestionEdited={() => onQuestionEdited}
          questionToEdit={questionToEdit}
          questionType={questionType}
        />
      </Col>

      <Col span={22}>
        <Col span={24}>
          <QuestionForm
            onQuestionEdited={onQuestionEdited}
            onQuestionSubmitted={onQuestionSubmitted}
            questionToEdit={questionToEdit}
            style={{ marginTop: "4%" }}
          />
        </Col>

        <Col span={24}>
          <ChoiceForm
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
