import * as React from "react";
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
  isChoiceLoading,
  questionnaire,
  onLinkChoiceToQuestion,
  showButton,
  onQuestionTypeEdit
}) {
  console.log(questionnaire)
  return (
    <React.Fragment>
      <Row>
        <Col span={24}>
          <FormHeader
            onQuestionTypeEdit={onQuestionTypeEdit}
            onQuestionEdited={onQuestionEdited}
            questionToEdit={questionToEdit}
            questionType={questionToEdit.type}
          />
        </Col>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <QuestionForm
                showButton={showButton}
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
                questionnaire={questionnaire}
                questionToEdit={questionToEdit}
                onChoiceEdited={onChoiceEdited}
                addChoice={addChoice}
                removeChoice={removeChoice}
                addNewQuestion={addNewQuestion}
                choiceData={choiceData}
                submitChoice={submitChoice}
                isChoiceLoading={isChoiceLoading}
                onLinkChoiceToQuestion={onLinkChoiceToQuestion}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}
