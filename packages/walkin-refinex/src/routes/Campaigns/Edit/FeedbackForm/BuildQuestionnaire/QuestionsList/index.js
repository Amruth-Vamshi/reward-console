import React, { Component } from "react";
import AutorSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import { ErrorBoundary, CardBox } from "@walkinsole/walkin-components";

export default class QuestionsList extends Component {
  constructor() {
    super();
  }

  toggleClick = index => {
    const { questionnaire } = this.props;
    this.props.onQuestionSelected(questionnaire[index]);
  };

  getRow = (index, style) => {
    const { questionnaire } = this.props;
    console.log(questionnaire);

    return (
      <div style={style}>
        <div style={{ margin: "1%" }}>
          <CardBox>
            <div
              onClick={() => {
                this.toggleClick(index);
              }}
              style={{
                cursor: "pointer"
              }}
            >
              {questionnaire[index].questionText}
            </div>
          </CardBox>
        </div>
      </div>
    );
  };

  render() {
    const { addNewQuestion, questionnaire } = this.props;
    console.log(questionnaire);
    return (
      <ErrorBoundary>
        <AutorSizer>
          {({ height, width }) => (
            <List
              height={height}
              itemCount={questionnaire.length}
              itemSize={100}
              width={width}
            >
              {({ index, style }) => {
                return this.getRow(index, style);
              }}
            </List>
          )}
        </AutorSizer>
      </ErrorBoundary>
    );
  }
}
