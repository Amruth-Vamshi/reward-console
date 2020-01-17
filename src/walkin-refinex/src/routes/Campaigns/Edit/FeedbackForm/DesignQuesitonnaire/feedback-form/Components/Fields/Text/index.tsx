import * as React from "react";
import { Input } from "antd";

const { TextArea } = Input;

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
  onChange
}) => {
  return (
    <TextArea
      value={value}
      onChange={onChange}
      autosize={{ minRows: 3, maxRows: 5 }}
    />
  );
};

export default SingleAnswer;
