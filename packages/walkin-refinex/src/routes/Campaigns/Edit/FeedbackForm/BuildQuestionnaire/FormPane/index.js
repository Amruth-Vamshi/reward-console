import "./FormPane.css";
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
  Input,
  TreeSelect
} from "antd";
import React, { Component } from "react";
import { CardBox } from "@walkinsole/walkin-components";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
const { Option } = Select;

class QuestionnaireFormPane extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.form.getFieldsValue());
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  getQuestionTypes = () => {
    const { questionTypesQuery } = this.props;
    const { TreeNode } = TreeSelect;
    const { questionTypes } = questionTypesQuery;
    console.log(questionTypes);
    for (const questionType in questionTypes) {
      if (questionTypes.hasOwnProperty(questionType)) {
        console.log(questionType);
      }
    }
    return (
      <TreeNode value="parent 1" title="parent 1" key="0-1">
        <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
          <TreeNode value="leaf1" title="my leaf" key="random" />
          <TreeNode value="leaf2" title="your leaf" key="random1" />
        </TreeNode>
        <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
          <TreeNode
            value="sss"
            title={<b style={{ color: "#08c" }}>sss</b>}
            key="random3"
          />
        </TreeNode>
      </TreeNode>
    );
  };

  render() {
    const { questionToEdit, form } = this.props;
    const { getFieldDecorator } = form;
    const { Item } = Form;
    console.log(this.props);
    return (
      <Row>
        <Col span={22}>
          <CardBox>
            <Form
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
              onSubmit={this.handleSubmit}
            >
              <Item label="Question Text">
                {getFieldDecorator("questionText")(<Input />)}
              </Item>
              <Item label="Type">
                {getFieldDecorator("type")(
                  <TreeSelect
                    showSearch
                    dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                    placeholder="Please select"
                    allowClear
                    treeDefaultExpandAll
                    onChange={this.onChange}
                  >
                    {this.getQuestionTypes()}
                  </TreeSelect>
                )}
              </Item>
              <Item label="Range Min">
                {getFieldDecorator("rangeMin")(<Input />)}
              </Item>
              <Item label="Range Max">
                {getFieldDecorator("rangeMax")(<Input />)}
              </Item>
              <Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Item>
            </Form>
          </CardBox>
        </Col>
      </Row>
    );
  }
}

const FormPane = Form.create({ name: "Questionnaire Form" })(
  QuestionnaireFormPane
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
