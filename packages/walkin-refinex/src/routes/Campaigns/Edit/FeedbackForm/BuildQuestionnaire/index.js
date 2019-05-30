import "./BuildQuestionnaire.css";
import React, { Component } from "react";
import { Tree, Divider, Drawer, Button, Row, Col } from "antd";
import SearchTree from "./TreePane";
import FormPane from "./FormPane";

class Questionnaire extends Component {
  constructor() {
    super();
    this.state = { visible: false };
  }
  onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { TreeNode } = Tree;
    return (
      <div className="BuildPane">
        <SearchTree />
        <FormPane />
      </div>
    );
  }
}
export default Questionnaire;
