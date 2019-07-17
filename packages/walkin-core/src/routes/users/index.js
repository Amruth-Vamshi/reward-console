import React, { Component } from "react";
import { Widget } from "@walkinsole/walkin-components";
import { Tabs, Modal, Form, Input, Button, Select } from "antd";
import { data, data1 } from "./data";
import UserInfo from "./UserInfo";
import "./users.css";
import CreateUser from "./CreateUser";

const TabPane = Tabs.TabPane;

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      spin: false,
      loading: false,
      errors: {}
    };
  }

  showModal = () => this.setState({ visible: true });
  handleCancel = () => this.setState({ visible: false })

  render() {

    return (
      <div>
        <Widget
          title={<p style={{ fontSize: 23 }}>User Info</p>}
          styleName="gx-card-tabs UsersTabs"
          extra={<Button onClick={() => this.showModal()} type="primary"> Create User </Button>}
        >
          <hr style={{ marginTop: 0 }} />
          {/* <Tabs
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
          </Tabs> */}

          <UserInfo data={data} />

        </Widget>


        <Modal
          width="450px"
          key="model"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          title={null} footer={null}
        >

          <CreateUser handleCancel={this.handleCancel} />
        </Modal>
      </div>
    );
  }
}
