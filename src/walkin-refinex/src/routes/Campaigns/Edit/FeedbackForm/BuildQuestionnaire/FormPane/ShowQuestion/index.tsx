import * as React from "react";
import { Col, Row } from "antd";
import FormHeader from "../FormHeader";
import QuestionForm from "../QuestionForm";
import ChoiceForm from "../ChoiceForm";

interface ShowQuestionProps {
  onQuestionTypeEdit?: any;
  showButton?: any;
  questionnaire?: any;
  onQuestionEdited?: any;
  onQuestionSubmitted?: any;
  onChoiceEdited?: any;
  questionToEdit?: any;
  addChoice?: any;
  removeChoice?: any;
  addNewQuestion?: any;
  choiceData?: any;
  submitChoice?: any;
  isChoiceLoading?: any;
  isQuestionLoading?: any;
  onLinkChoiceToQuestion?: any;
}

const ShowQuestion: React.FC<ShowQuestionProps> = ({
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
}) => {
  console.log(questionnaire);
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
};

export default ShowQuestion;
