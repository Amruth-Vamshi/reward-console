import React, { Component } from "react";
import ChoiceInput from "./ChoiceInput";
import { ErrorBoundary, CardBox } from "@walkinsole/walkin-components";
import { Row, Col, Button, Icon } from "antd";

const ChoiceMap = {
  SINGLE_ANSWER: true,
  MULTIPLE_ANSWER: true,
  RATING_SCALE: true,
  OPINION_SCALE: true,
  RANKING: true,
  DICHOTOMOUS: true
};

export default class ChoiceForm extends Component {
  getChoiceRows = () => {
    return this.props.questionToEdit.choices.map(choice => {
      return (
        <Row
          gutter={12}
          style={{
            marginTop: "1%"
          }}
          key={choice.id}
        >
          <Col span={24}>
            <CardBox>
              <ChoiceInput
                choice={choice}
                questionType={this.props.questionToEdit.type}
                removeChoice={this.props.removeChoice}
                addNewQuestion={this.props.addNewQuestion}
                onChoiceEdited={this.props.onChoiceEdited}
              />
            </CardBox>
          </Col>
        </Row>
      );
    });
  };

  render() {
    if (ChoiceMap[this.props.questionToEdit.type]) {
      return (
        <ErrorBoundary>
          <Row>
            <Col>
              <h2>Configure choices</h2>
            </Col>
          </Row>
          {this.getChoiceRows()}
          <Row>
            <Col span={24}>
              <Row type="flex" justify="center">
                <Col>
                  <Button
                    type="dashed"
                    onClick={e => {
                      e.preventDefault();
                      this.props.addChoice();
                    }}
                  >
                    <Icon type="plus" /> Add Choice
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </ErrorBoundary>
      );
    }
    return null;
  }
}
