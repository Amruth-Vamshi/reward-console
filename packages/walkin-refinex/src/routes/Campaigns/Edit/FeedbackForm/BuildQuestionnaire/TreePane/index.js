import "./TreePane.css";
import { Tree, Input, Button, Icon, Row, Col } from "antd";
import React, { Component } from "react";
const { TreeNode } = Tree;
const Search = Input.Search;

class SearchTree extends React.Component {
  state = {
    expandedKeys: [],
    searchValue: "",
    autoExpandParent: true
  };

  onExpand = expandedKeys => {
    this.setState({
      expandedKeys,
      autoExpandParent: false
    });
  };

  questionSelected = selectedKeys => {
    if (selectedKeys && selectedKeys.length > 0) {
      const selectedQuestionId = selectedKeys[0];
      const question = this.props.questionnaire.find(question => {
        console.log(question);
        return (question.id = selectedQuestionId);
      });
      this.props.onQuestionSelected(question);
    } else {
      this.props.onQuestionSelected(null);
    }
  };

  onChange = e => {
    const value = e.target.value;
    const expandedKeys = dataList
      .map(item => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, gData);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true
    });
  };

  loopChoice = choices => {
    choices.forEach(choice => {
      return this.loopQuestions(choice.toQuestion);
    });
  };

  loopQuestions = questions => {
    const { searchValue } = this.state;
    const quesionnaireTree = questions.map(question => {
      const index = question.questionText.indexOf(searchValue);
      const beforeStr = question.questionText.substr(0, index);
      const afterStr = question.questionText.substr(index + searchValue.length);
      const questionText =
        index > -1 ? (
          <span>
            {beforeStr}
            <span style={{ color: "#f50" }}>{searchValue}</span>
            {afterStr}
            <Icon type="plus-circle" />
          </span>
        ) : (
          <span>{question.questionText}</span>
        );
      if (question.choices && question.choices.length > 0) {
        return (
          <TreeNode key={question.id} title={question.questionText}>
            {this.loopChoice(question.choices)}
          </TreeNode>
        );
      }
      return <TreeNode key={question.id} title={question.questionText} />;
    });
    return quesionnaireTree;
  };

  render() {
    const { searchValue, expandedKeys, autoExpandParent } = this.state;
    const { addNewQuestion, questionnaire } = this.props;

    return (
      <div className="TreePane">
        <Row>
          <Col span={24}>
            <Search
              style={{ marginBottom: 8 }}
              placeholder="Search"
              onChange={this.onChange}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="QuestionnaireTree">
              <Tree
                onExpand={this.onExpand}
                expandedKeys={expandedKeys}
                autoExpandParent={autoExpandParent}
                onSelect={this.questionSelected}
                multiple={false}
              >
                {this.loopQuestions(questionnaire)}
              </Tree>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "2%"
          }}
          type="flex"
          justify="center"
        >
          <Col>
            <Button
              type="dashed"
              onClick={() => {
                this.props.addNewQuestion(null);
              }}
            >
              Add Question
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchTree;
