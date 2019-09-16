import React, { Component } from "react";
import ChoiceInput from "./ChoiceInput";
import { ErrorBoundary, CardBox } from "@walkinsole/walkin-components";
import { Row, Col, Button, Icon, Spin } from "antd";
import "./index.css"
const ChoiceMap = {
  SINGLE_ANSWER: true,
  MULTIPLE_ANSWER: true,
  RATING_SCALE: true,
  OPINION_SCALE: true,
  RANKING: true,
  DICHOTOMOUS: true,
  TEXT: true
};

export default class ChoiceForm extends Component {
  getChoiceRows = () => {
    this.props.questionToEdit.choices ? this.props.questionToEdit.choices = this.props.questionToEdit.choices : this.props.questionToEdit.choices = []
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
                questionnaire={this.props.questionnaire}
                questionType={this.props.questionToEdit.type}
                removeChoice={this.props.removeChoice}
                addNewQuestion={this.props.addNewQuestion}
                onChoiceEdited={this.props.onChoiceEdited}
                submitChoice={this.props.submitChoice}
                onLinkChoiceToQuestion={this.props.onLinkChoiceToQuestion}
              />
            </CardBox>
          </Col>
        </Row>
      );
    });
  };

  render() {
    const { isChoiceLoading } = this.props;
    const antIcon = <Icon type="loading" style={{ fontSize: 50 }} spin />;
    if (ChoiceMap[this.props.questionToEdit.type]) {
      return (
        <ErrorBoundary>
          <Row>
            <Col span={24}>
              <h2>Configure choices</h2>
            </Col>
          </Row>
          {isChoiceLoading ? (<div className="divCenter"><Spin size="large" indicator={antIcon} /> </div>) : this.getChoiceRows()}
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
