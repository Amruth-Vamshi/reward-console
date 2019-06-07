import "./BuildQuestionnaire.css";
import React, { Component } from "react";
import { Tree, Divider, Drawer, Button, Row, Col } from "antd";
import SearchTree from "./TreePane";
import FormPane from "./FormPane";
import { Query } from "react-apollo";

class Questionnaire extends Component {
  constructor() {
    super();
    this.state = {
      questionnaire: [],
      questionToEdit: null
    };
  }

  onQuestionSelected = question => {
    this.setState({
      questionToEdit: question
    });
  };

  onQuestionEdited = editedQuestion => {
    // GQL to edit the question and update questionnaire in state
  };

  render() {
    const { TreeNode } = Tree;
    const { questionnaire, questionToEdit } = this.state;
    return (
      <div className="BuildPane">
        <SearchTree
          questionnaire={questionnaire}
          onQuestionSelected={this.onQuestionSelected}
        />
        <FormPane
          questionToEdit={questionToEdit}
          onQuestionEdited={this.onQuestionEdited}
        />
      </div>
    );
  }
}
export default Questionnaire;
