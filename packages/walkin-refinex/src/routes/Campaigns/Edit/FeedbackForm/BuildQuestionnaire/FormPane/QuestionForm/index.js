import React, { Component } from "react";
import { CardBox, ErrorBoundary } from "@walkinsole/walkin-components";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  Form,
  Slider,
  Button,
  Input,
  TreeSelect,
  Row,
  Col,
  Popconfirm,
  message
} from "antd";

const QUESTION_WITH_SLIDER = {
  RATING_SCALE: "RATING_SCALE",
  OPINION_SCALE: "OPINION_SCALE"
};

class QuestionForm extends Component {
  constructor() {
    super();
    this.state = {
      popUpVisible: false,
      newTypeValue: null,
      validationStatus: "success"
    };
  }
  componentDidMount() {
    const {
      questionText,
      type,
      rangeMax,
      rangeMin
    } = this.props.questionToEdit;

    this.props.form.setFieldsValue({
      questionText,
      type,
      range: [rangeMin, rangeMax]
    });
  }

  getTreeNodes = questionTypes => {
    const { TreeNode } = TreeSelect;
    const treeNodes = [];
    for (const questionType in questionTypes) {
      let node = null;
      if (questionTypes.hasOwnProperty(questionType)) {
        if (typeof questionTypes[questionType] === "object") {
          node = (
            <TreeNode
              title={questionType}
              value={questionType}
              key={questionType}
              selectable={false}
            >
              {this.getTreeNodes(questionTypes[questionType])}
            </TreeNode>
          );
        } else {
          node = (
            <TreeNode
              value={questionType}
              title={questionType}
              key={questionType}
            />
          );
        }
        treeNodes.push(node);
      }
    }
    return treeNodes;
  };

  getQuestionTypes = () => {
    const { questionTypesQuery } = this.props;
    const { questionTypes } = questionTypesQuery;

    return this.getTreeNodes(questionTypes);
  };

  submitQuestion = e => {
    e.preventDefault();
    this.props.onQuestionSubmitted();
  };

  triggerPopup = (_, __, { preValue, triggerValue }) => {
    this.props.form.setFieldsValue({
      type: triggerValue
    });
    if (preValue && preValue.value !== triggerValue) {
      this.setState({
        popUpVisible: true,
        newTypeValue: triggerValue
        // validationStatus: "validating"
      });
    }
  };

  confirmTypeChange = () => {
    const { newTypeValue } = this.state;
    this.props.form.setFieldsValue({
      type: newTypeValue
    });
    this.closeTypeChange();
  };

  closeTypeChange = () => {
    this.setState({
      popUpVisible: false,
      newTypeValue: null,
      validationStatus: "success"
    });
  };

  render() {
    const { questionToEdit, form } = this.props;
    const { getFieldDecorator } = form;
    const { Item } = Form;
    return (
      <ErrorBoundary>
        <Row>
          <Col>
            <h2>Configure Question</h2>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "1%"
          }}
        >
          <Col span={24}>
            <CardBox>
              <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                onSubmit={this.submitQuestion}
              >
                <Item label="Question Text">
                  {getFieldDecorator("questionText", {
                    rules: [
                      {
                        required: true
                      }
                    ]
                  })(<Input />)}
                </Item>
                <Popconfirm
                  title="Changin question type will delete the existing choices, continue?"
                  visible={this.state.popUpVisible}
                  onConfirm={this.confirmTypeChange}
                  onCancel={this.closeTypeChange}
                  okText="Yes"
                  cancelText="No"
                >
                  <Item
                    label="Type"
                    validateStatus={this.state.validationStatus}
                  >
                    {getFieldDecorator("type", {
                      rules: [
                        {
                          required: true
                        }
                      ],
                      getValueFromEvent: this.triggerPopup
                    })(
                      <TreeSelect placeholder="Please select">
                        {this.getQuestionTypes()}
                      </TreeSelect>
                    )}
                  </Item>
                </Popconfirm>

                <Item
                  label="Range Min"
                  style={
                    QUESTION_WITH_SLIDER[this.props.questionToEdit.type]
                      ? {}
                      : {
                          display: "none"
                        }
                  }
                >
                  {getFieldDecorator("range", {
                    initialValue: [0, 10]
                  })(<Slider range />)}
                </Item>
                <Item wrapperCol={{ offset: 18 }}>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Item>
              </Form>
            </CardBox>
          </Col>
        </Row>
      </ErrorBoundary>
    );
  }
}

const onValuesChange = ({ onQuestionEdited }, __, formValue) => {
  onQuestionEdited(formValue);
};

const FormPane = Form.create({ name: "QuestionForm", onValuesChange })(
  QuestionForm
);

const QUESTION_TYPES = gql`
  query questionTypes {
    questionTypes
  }
`;

export default graphql(QUESTION_TYPES, {
  name: "questionTypesQuery",
  options: {
    fetchPolicy: "cache-first"
  }
})(FormPane);
