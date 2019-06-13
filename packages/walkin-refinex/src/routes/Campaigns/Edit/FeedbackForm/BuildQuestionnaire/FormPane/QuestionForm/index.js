import React, { Component } from "react";
import { CardBox } from "@walkinsole/walkin-components";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Form, Slider, Button, Input, TreeSelect } from "antd";

const questionWithSlider = {
  RATING_SCALE: "RATING_SCALE",
  OPINION_SCALE: "OPINION_SCALE"
};

class QuestionForm extends Component {
  constructor() {
    super();
    this.state = {
      showSlider: false
    };
  }

  componentDidMount() {
    const {
      questionText,
      type,
      rangeMax,
      rangeMin
    } = this.props.questionToEdit;
    if (questionWithSlider[type]) {
      this.setState({
        showSlider: true
      });
    }
    this.props.form.setFieldsValue({
      questionText,
      type,
      range: [rangeMin, rangeMax]
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Received values of form: ", values);
        if (questionWithSlider[values.type]) {
          values.rangeMin = values.range[0];
          values.rangeMax = values.range[1];
        }
        delete values.range;
        this.props.onQuestionSubmitted(values);
      }
    });
  };

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

  onChange = questionType => {
    if (questionWithSlider[questionType]) {
      this.setState({
        showSlider: true
      });
    } else {
      this.setState({
        showSlider: false
      });
    }
    this.setState({
      questionType
    });
  };

  render() {
    const { questionToEdit, form } = this.props;
    const { getFieldDecorator } = form;
    const { Item } = Form;
    return (
      <CardBox>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
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
          <Item label="Type">
            {getFieldDecorator("type", {
              rules: [
                {
                  required: true
                }
              ]
            })(
              <TreeSelect placeholder="Please select" onChange={this.onChange}>
                {this.getQuestionTypes()}
              </TreeSelect>
            )}
          </Item>
          <Item
            label="Range Min"
            style={
              this.state.showSlider
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
    );
  }
}

const FormPane = Form.create({ name: "QuestionForm" })(QuestionForm);

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
