import React, { Component } from "react";
import { ErrorBoundary, CardBox } from "@walkinsole/walkin-components";
import { Row, Col, Button, Tooltip, Form, Input, Select, Divider, Icon } from "antd";
const { Option } = Select;

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

  onSubmit = e => {
    e.preventDefault()
    console.log("here", this.props.choice)
    this.props.submitChoice()
  }

  onChange = (choiceId, questionId) => {
    console.log("choiceId,questionId", choiceId, questionId)
    this.props.onLinkChoiceToQuestion(questionId, choiceId)
  }

  componentDidMount() {
    this.setFieldValues();
  }
  render() {
    const {
      questionType,
      removeChoice,
      choice,
      addNewQuestion,
      form,
      questionnaire
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

    return (
      <ErrorBoundary>
        <Row>
          <Col span={10}>
            <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} onSubmit={this.onSubmit}>
              <Item>
                {getFieldDecorator("choiceText", {
                  rules: [
                    {
                      required: true
                    }
                  ]
                })(<Input size="large" />)}
              </Item>
            </Form>
          </Col>
          <Col span={10}>
            <Tooltip title="Add Question for this choice">
              <Select defaultValue={choice.toQuestion ? choice.toQuestion.id : null} onChange={this.onChange.bind(this, choice.id)} style={{ width: "100%" }} size="large" style={{ width: "100%" }}
                dropdownRender={menu => (
                  <div>
                    <div style={{ padding: '8px', cursor: 'pointer' }}>
                      <Button style={{ marginLeft: "15px" }} onClick={() => addNewQuestion(choice)}> <Icon type="plus" /> Add new Question </Button>
                    </div>
                    <Divider style={{ margin: '4px 0' }} />
                    {menu}
                  </div>
                )}>
                {
                  questionnaire.map(question => {
                    return (

                      <Option style={{ marginTop: "2px" }} key={question.id} value={question.id}>{question.questionText}</Option>



                    )
                  })
                }


              </Select>
              { /*  <Button
                onClick={() => addNewQuestion(choice)}
                type="ghost"
                shape="circle"
                icon="plus"
           /> */}
            </Tooltip>
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
        </Row>
      </ErrorBoundary>
    );
  }
}

const choiceForm = Form.create({
  name: "ChoiceInput",
  onValuesChange(props, value) {
    props.onChoiceEdited(value, props.choice);
  }
})(ChoiceInput);

export default choiceForm;
