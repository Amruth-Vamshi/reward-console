import React, { Component } from "react";
import { ErrorBoundary, CardBox } from "@walkinsole/walkin-components";
import { Row, Col, Button } from "antd";

const getMultiChoice = () => {
  return <span>Multi Choice</span>;
};

const getRatingChoice = () => {
  return <span>Rating Choice</span>;
};

const ChoiceInput = ({ questionType, removeChoice, choice }) => {
  const ChoiceMap = {
    SINGLE_ANSWER: getMultiChoice(),
    MULTIPLE_ANSWER: getMultiChoice(),
    RATING_SCALE: getRatingChoice(),
    OPINION_SCALE: getRatingChoice(),
    RANKING: getMultiChoice(),
    DICHOTOMOUS: getMultiChoice()
  };

  console.log("choice", choice);

  return (
    <ErrorBoundary>
      <Row>
        <Col span={22}>{ChoiceMap[questionType]}</Col>
        <Col span={2}>
          <Button
            onClick={() => removeChoice(choice)}
            type="ghost"
            shape="circle"
            icon="close"
          />
        </Col>
      </Row>
    </ErrorBoundary>
  );
};

export default ChoiceInput;
