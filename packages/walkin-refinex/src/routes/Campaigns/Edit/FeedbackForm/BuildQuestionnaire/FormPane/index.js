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
      questionToEdit: null
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
    const { questionToEdit, addChoice, removeChoice } = this.props;
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
                onQuestionEdited={() => this.onQuestionEdited}
                onQuestionSubmitted={() => this.onQuestionSubmitted}
                questionToEdit={questionToEdit}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <ChoiceForm
                questionToEdit={questionToEdit}
                addChoice={addChoice}
                removeChoice={removeChoice}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default QuestionnaireFormPane;
