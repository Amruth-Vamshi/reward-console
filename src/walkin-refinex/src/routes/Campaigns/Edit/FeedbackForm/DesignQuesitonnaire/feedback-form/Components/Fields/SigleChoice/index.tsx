import * as React from "react";
import { Radio } from "antd";

const SingleAnswer = ({ question, value, radioStyle, onChange }) => {
  return (
    <Radio.Group onChange={onChange} value={value}>
      {question.choices.map(choice => {
        return (
          <Radio style={radioStyle} key={choice.id} value={choice.id}>
            {choice.choiceText}
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

export default SingleAnswer;
