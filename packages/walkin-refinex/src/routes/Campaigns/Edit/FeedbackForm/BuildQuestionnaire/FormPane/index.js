import "./FormPane.css";
import { Form, Slider, Button, Icon, Row, Col, TreeSelect } from "antd";
import React, { Component } from "react";

import ChoiceForm from "./ChoiceForm";
import QuestionForm from "./QuestionForm";

class QuestionnaireFormPane extends Component {
  constructor() {
    super();
    this.state = {
      questionToEdit: this.props.questionToEdit
    };
  }
  onQuestionEdited = () => {};
  onQuestionSubmitted = () => {};
  render() {
    return (
      <Row
        style={{
          height: "-webkit-fill-available",
          overflowX: "scroll"
        }}
      >
        <Col span={22}>
          <Row>
            <Col span={24}>
              <QuestionForm
                onQuestionEdited={this.onQuestionEdited}
                onQuestionSubmitted={this.onQuestionSubmitted}
                questionToEdit={this.state.questionToEdit}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <ChoiceForm questionToEdit={this.props.questionToEdit} />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default QuestionnaireFormPane;
