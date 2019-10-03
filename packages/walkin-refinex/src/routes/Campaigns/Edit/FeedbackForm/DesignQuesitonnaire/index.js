
import React, { Component } from "react";

import { Col, Row, Spin } from 'antd';
import Preview from "./Preview"
import Controls from "./Controls"

class FormDesign extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      isLastQuestion: false,
      isFirstQuestion: false,
      color: "#891732"
    }
  }

  goTopreviousQuestion = () => {
    const { counter } = this.state;
    const newCounter = counter - 1;
    if (newCounter < 0) {
      this.setState({ isFirstQuestion: true })
    } else {
      this.setState({ counter: newCounter, isFirstQuestion: false, isLastQuestion: false })
    }

  }

  onColorUpdate = (hex) => {
    this.setState({ color: hex })
  }

  nextQuestion = () => {
    const { counter } = this.state;
    const { questionnaire } = this.props;
    const totalQuestion = questionnaire.length;
    const newCounter = counter + 1;
    if (newCounter >= totalQuestion) {
      this.setState({ isLastQuestion: true })
    } else {
      this.setState({ counter: newCounter, isLastQuestion: false, isFirstQuestion: false })
    }


  }
  render() {
    const { questionnaire } = this.props;
    const { counter, isLastQuestion, isFirstQuestion, color } = this.state;
    return (

      questionnaire && questionnaire[counter] ? (
        <Row >
          <Col span={17} style={{ height: "800px" }}>
            <Preview
              color={color}
              isFirstQuestion={isFirstQuestion}
              question={questionnaire[counter]}
              nextQuestion={this.nextQuestion}
              goTopreviousQuestion={this.goTopreviousQuestion}
              isLastQuestion={isLastQuestion} />
          </Col>
          <Col span={7} style={{ height: "inherit", overflow: "scroll" }} >
            <Controls
              onCOlorUpdate={this.onColorUpdate} />
          </Col>

        </Row>) : <Spin />


    )
  }
}
export default FormDesign;
