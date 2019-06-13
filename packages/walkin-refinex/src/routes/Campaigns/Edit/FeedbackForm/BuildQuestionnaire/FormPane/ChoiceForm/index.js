import React, { Component } from "react";
import ChoiceInput from "./ChoiceInput";
import { ErrorBoundary, CardBox } from "@walkinsole/walkin-components";
import { Row, Col } from "antd";

const ChoiceMap = {
  SINGLE_ANSWER: true,
  MULTIPLE_ANSWER: true,
  RATING_SCALE: true,
  OPINION_SCALE: true,
  RANKING: true,
  DICHOTOMOUS: true
};

export default class ChoiceForm extends Component {
  showChoices = () => {
    if (this.state.showChoices) {
      return (
        <Row>
          <Col span={24}>
            <Row>
              <Col span={24}>
                <h2>Choices</h2>
              </Col>
            </Row>
            {this.getChoiceRows()}
            <Row>
              <Col span={24}>
                <Row type="flex" justify="center">
                  <Col>
                    <Button type="dashed" onClick={this.addChoice}>
                      <Icon type="plus" /> Add Choice
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      );
    } else {
      return null;
    }
  };

  render() {
    console.log(this.props.questionToEdit.type);

    if (ChoiceMap[this.props.questionToEdit.type]) {
      return (
        <ErrorBoundary>
          <Row gutter={12}>
            <Col span={8}>
              <CardBox>
                <ChoiceInput questionType={this.props.questionToEdit.type} />
              </CardBox>
            </Col>
          </Row>
        </ErrorBoundary>
      );
    }
    return null;
  }
}
