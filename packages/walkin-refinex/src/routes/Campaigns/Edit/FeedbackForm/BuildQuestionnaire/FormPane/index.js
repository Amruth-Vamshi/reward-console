import "./FormPane.css";
import { Form, Slider, Button, Icon, Row, Col, TreeSelect } from "antd";
import React, { Component } from "react";

import ChoiceForm from "./ChoiceForm";
import QuestionForm from "./QuestionForm";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const questionWithSlider = {
  RATING_SCALE: "RATING_SCALE",
  OPINION_SCALE: "OPINION_SCALE"
};

class QuestionnaireFormPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionToEdit: props.questionToEdit
    };
  }

  onQuestionEdited = values => {
    if (questionWithSlider[values.type]) {
      values.rangeMin = values.range[0];
      values.rangeMax = values.range[1];
    }
    delete values.range;
    this.setState({
      questionToEdit: Object.assign(this.state.questionToEdit, values)
    });
  };

  onQuestionSubmitted = () => {
    this.props.onQuestionSubmitted(this.state.questionToEdit);
  };

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
              <ChoiceForm
                questionToEdit={this.state.questionToEdit}
                addChoice={this.props.addChoice}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default QuestionnaireFormPane;
