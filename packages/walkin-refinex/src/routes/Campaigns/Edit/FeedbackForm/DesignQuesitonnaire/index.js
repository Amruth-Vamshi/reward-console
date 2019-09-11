
import React, { Component } from "react";

import { Col, Row, Spin } from 'antd';
import Preview from "./Preview"
import Controls from "./Controls"

import Feedback from "../../../../../../../feedback-form-web/src/App"
class FormDesign extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      isLastQuestion: false
    }
  }

  nextQuestion = () => {
    const { counter } = this.state;
    const { questionnaire } = this.props;
    const totalQuestion = questionnaire.length;
    const newCounter = counter + 1;
    if (newCounter >= totalQuestion) {
      this.setState({ isLastQuestion: true })
    } else {
      this.setState({ counter: newCounter })
    }


  }
  render() {
    const { questionnaire } = this.props;
    const { counter, isLastQuestion } = this.state;
    return (

      questionnaire && questionnaire[counter] ? (
        <Row>
          <Col span={17}>
            <Preview question={questionnaire[counter]} nextQuestion={this.nextQuestion} isLastQuestion={isLastQuestion} />
          </Col>

          <Col span={6}>
            <Controls />
          </Col>
        </Row>) : <Spin />


    )
  }
}
export default FormDesign;
