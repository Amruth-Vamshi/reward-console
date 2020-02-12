import * as React from 'react';
import { Col, Row } from 'antd';
import FormHeader from '../FormHeader';
import QuestionForm from '../QuestionForm';
import ChoiceForm from '../ChoiceForm';

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
  questionType?: any;
  choiceToAddQuestion?: any;
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
  questionType,
  choiceToAddQuestion,
  submitChoice,
  isChoiceLoading,
  questionnaire,
  onLinkChoiceToQuestion,
  showButton,
  onQuestionTypeEdit,
}) => {
  console.log('new question addition', submitChoice);
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
            style={{ marginTop: '4%' }}
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
};

export default ShowQuestion;
