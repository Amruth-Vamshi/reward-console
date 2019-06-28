import React, { Component } from "react";
import AutorSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import { ErrorBoundary, CardBox } from "@walkinsole/walkin-components";
import { Icon, Row, Col, Button } from "antd";

export default class QuestionsList extends Component {
  constructor() {
    super();
  }

  toggleClick = index => {
    const { questionnaire } = this.props;
    this.props.onQuestionSelected(index);
  };

  getRow = (index, style) => {
    const { questionnaire } = this.props;
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
    return (
      <ErrorBoundary>
        <AutorSizer>
          {({ height, width }) =>
            questionnaire.length > 0 ? (
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
            ) : (
              <Row
                style={{
                  height,
                  width
                }}
              >
                <Col span={24}>
                  <Row type="flex" justify="center">
                    <Col>
                      <Button
                        type="dashed"
                        onClick={e => {
                          e.preventDefault();
                          this.props.addNewQuestion();
                        }}
                      >
                        <Icon type="plus" /> CreateQuestionnaire
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            )
          }
        </AutorSizer>
      </ErrorBoundary>
    );
  }
}
