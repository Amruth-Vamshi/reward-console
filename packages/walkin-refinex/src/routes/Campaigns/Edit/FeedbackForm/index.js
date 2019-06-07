import React, { Component } from "react";
import { Tabs } from "antd";
import Build from "./BuildQuestionnaire";
import Design from "./DesignQuesitonnaire";

const { TabPane } = Tabs;

class FeedbackFormConfig extends Component {
  callback = key => {
    console.log(key);
  };
  render() {
    return (
      <Tabs
        size="large"
        animated={{
          tabPane: false
        }}
        defaultActiveKey="1"
        onChange={this.callback}
      >
        <TabPane tab="Build" key="1">
          <Build />
        </TabPane>
        <TabPane tab="Design" key="2">
          <Design />
        </TabPane>
      </Tabs>
    );
  }
}

export default FeedbackFormConfig;
