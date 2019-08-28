import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query, graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import {
  Form,
  Slider,
  Button,
  Input,
  TreeSelect,
  Row,
  Col,
  Popconfirm,
  message,
  List,
  Card
} from "antd";
import { QUESTION_TYPES } from "../../../../../../containers/Query";

class QuestionTypeSelection extends Component {
  static propTypes = {
    prop: PropTypes
  };

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getTreeNodes = questionTypes => {
    const { TreeNode } = TreeSelect;
    const data = [];
    for (const questionType in questionTypes) {
      let node = null;
      if (questionTypes.hasOwnProperty(questionType)) {
        if (typeof questionTypes[questionType] === "object") {
          node = this.getTreeNodes(questionTypes[questionType]);
        } else {
          node = questionType;
        }
        data.push(node);
      }
    }
    return data;
  };

  componentDidMount() {
    const {
      questionTypesQuery: { questionTypes }
    } = this.props;
    const data = this.getTreeNodes(questionTypes).flat(5);
    this.setState({ data: data });
  }

  render() {
    const { data } = this.state;
    return (
      <Row
        style={{
          height: "-webkit-fill-available",
          overflowX: "scroll"
        }}
      >
        <Col style={{ margin: "1rem" }} span={22}>
          Question Type
        </Col>
        <Col span={22}>
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card
                  style={{
                    cursor: "pointer"
                  }}
                  onClick={e => this.props.onQuestionTypeSelector(item)}
                >
                  {item.replace("_", " ")}
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    );
  }
}

QuestionTypeSelection.PropTypes = {};

export default graphql(QUESTION_TYPES, {
  name: "questionTypesQuery",
  options: {
    fetchPolicy: "cache-first"
  }
})(QuestionTypeSelection);
