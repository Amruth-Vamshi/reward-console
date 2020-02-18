import * as React from 'react';
import { Checkbox } from 'antd';

interface SingleAnswerProps {
  question?: any;
  value?: any;
  radioStyle?: any;
  onChange?: any;
}

const SingleAnswer: React.FC<SingleAnswerProps> = ({
  question,
  value,
  radioStyle,
  onChange,
}) => {
  return (
    <Checkbox.Group onChange={onChange} value={value}>
      {question.choices.map(choice => {
        return (
          <Checkbox style={radioStyle} key={choice.id} value={choice.id}>
            {choice.choiceText}
          </Checkbox>
        );
      })}
    </Checkbox.Group>
  );
};

export default SingleAnswer;
