import React, { Component } from "react";
import { ErrorBoundary, CardBox } from "@walkinsole/walkin-components";

const getMultiChoice = () => {
  return <ErrorBoundary>Multi Choice</ErrorBoundary>;
};

const getRatingChoice = () => {
  return <ErrorBoundary>Rating Choice</ErrorBoundary>;
};

const ChoiceInput = ({ questionType }) => {
  const ChoiceMap = {
    SINGLE_ANSWER: getMultiChoice(),
    MULTIPLE_ANSWER: getMultiChoice(),
    RATING_SCALE: getRatingChoice(),
    OPINION_SCALE: getRatingChoice(),
    RANKING: getMultiChoice(),
    DICHOTOMOUS: getMultiChoice()
  };

  return ChoiceMap[questionType];
};

export default ChoiceInput;
