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
  onChoiceEdited,
  submitChoice,
  isChoiceLoading
}) {
  return (
    <React.Fragment>
      <Col span={24}>
        <FormHeader
          onQuestionEdited={onQuestionEdited}
          questionToEdit={questionToEdit}
          questionType={questionToEdit.type}
        />
      </Col>
      <Col span={22}>
        <Row>
          <Col span={24}>
            <QuestionForm
              onQuestionEdited={onQuestionEdited}
              onQuestionSubmitted={onQuestionSubmitted}
              questionToEdit={questionToEdit}
              style={{ marginTop: "4%" }}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ChoiceForm
              questionToEdit={questionToEdit}
              onChoiceEdited={onChoiceEdited}
              addChoice={addChoice}
              removeChoice={removeChoice}
              addNewQuestion={addNewQuestion}
              choiceData={choiceData}
              submitChoice={submitChoice}
              isChoiceLoading={isChoiceLoading}
            />
          </Col>
        </Row>
      </Col>
    </React.Fragment>
  );
}
