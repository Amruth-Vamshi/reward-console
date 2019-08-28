import React, { Component } from "react";
import { ErrorBoundary, CardBox } from "@walkinsole/walkin-components";
import { Row, Col, Button, Tooltip, Form, Input } from "antd";

const getMultiChoice = () => {
  return <span>Multi Choice</span>;
};

const getRatingChoice = () => {
  return <span>Rating Choice</span>;
};

class ChoiceInput extends Component {
  setFieldValues = () => {
    const { choice } = this.props;
    this.props.form.setFieldsValue({
      choiceText: choice.choiceText
    });
  };

  componentDidMount() {
    this.setFieldValues();
  }
  render() {
    const {
      questionType,
      removeChoice,
      choice,
      addNewQuestion,
      form
    } = this.props;
    const ChoiceMap = {
      SINGLE_ANSWER: getMultiChoice(),
      MULTIPLE_ANSWER: getMultiChoice(),
      RATING_SCALE: getRatingChoice(),
      OPINION_SCALE: getRatingChoice(),
      RANKING: getMultiChoice(),
      DICHOTOMOUS: getMultiChoice()
    };
    const { getFieldDecorator } = form;

    const { Item } = Form;
    console.log("choice", choice);

    return (
      <ErrorBoundary>
        <Row>
          <Col span={20}>
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 12 }}>
              <Item>
                {getFieldDecorator("choiceText", {
                  rules: [
                    {
                      required: true
                    }
                  ]
                })(<Input />)}
              </Item>
            </Form>
          </Col>
          <Col span={2}>
            <Tooltip title="Remove choice">
              <Button
                onClick={() => removeChoice(choice)}
                type="ghost"
                shape="circle"
                icon="close"
              />
            </Tooltip>
          </Col>
          <Col span={2}>
            <Tooltip title="Add Question for this choice">
              <Button
                onClick={() => addNewQuestion(choice)}
                type="ghost"
                shape="circle"
                icon="plus"
              />
            </Tooltip>
          </Col>
        </Row>
      </ErrorBoundary>
    );
  }
}

const choiceForm = Form.create({
  name: "ChoiceInput",
  onFieldsChange(props, value) {
    props.onChoiceEdited(value);
  }
})(ChoiceInput);

export default choiceForm;
