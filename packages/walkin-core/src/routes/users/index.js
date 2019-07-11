import React, { Component } from "react";
import { Widget } from "@walkinsole/walkin-components";
import { Tabs, Button } from "antd";
import { data, data1 } from "./data";
import UserInfo from "./UserInfo";
import "./users.css";

const TabPane = Tabs.TabPane;

export default class Users extends Component {
  showModal = () => { };

  render() {

    return (
      <div>
        <Widget
          title={<p style={{ fontSize: 23 }}>User Info</p>}
          styleName="gx-card-tabs UsersTabs"
          extra={
            <Button onClick={this.showModal} type="primary">
              Create User
            </Button>
          }
        >
          <Tabs
            defaultActiveKey="1"
            // activeKey={this.state.tab}
            onChange={c => this.onTabChange(c)}
          >
            <TabPane tab="NearX" key="1">
              <UserInfo data={data} />
            </TabPane>
            <TabPane tab="HyperX" key="2">
              <UserInfo data={data1} />
            </TabPane>
          </Tabs>
        </Widget>
      </div>
    );
  }
}
