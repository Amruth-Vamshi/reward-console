import React, { Component } from "react";
import { Widget } from "@walkinsole/walkin-components";
import { Tabs, Modal, Form, Input, Button, Select } from "antd";
import { data, data1 } from "./data";
import UserInfo from "./UserInfo";
import jwt from "jsonwebtoken";
import { withApollo } from "react-apollo";
import "./users.css";
import { GET_ALL_USERS_OF_ORGANIZATION } from "@walkinsole/walkin-components/src/PlatformQueries";
import CreateUser from "./CreateUser";

const TabPane = Tabs.TabPane;

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      spin: false,
      loading: false,
      errors: {},
      userList: []
    };
  }

  componentWillMount() {
    this.setState({ spin: true });
    const { id, org_id } = jwt.decode(localStorage.getItem("jwt"));

    if (org_id) {
      this.props.client
        .query({
          query: GET_ALL_USERS_OF_ORGANIZATION,
          variables: { id: org_id },
          fetchPolicy: "network-only"
        })
        .then(res => {
          var users = [];
          let org = res.data.organization;

          function recOrg(org, users) {
            if (org && org.users)
              org.users.map(user =>
                users.push({
                  id: user.id,
                  org_id: org.id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  orgLevel: org.name,
                  role: user.roles ? user.roles.name ? user.roles.name : '' : '',
                  status: user.status,
                  email: user.email,
                  Assign: false,
                  creator: 'ADMIN'
                })
              );
            if (org && org.children) org.children.map(ch => recOrg(ch, users));
          }

          recOrg(org, users);
          this.setState({ userList: users, spin: false });
        })
        .catch(err => {
          this.setState({ spin: false });
          message.error("ERROR");

          console.log("Failed to get User Details" + err);
        });
    } else {
      this.setState({ spin: false });
      console.log("Error getting JwtData");
    }
  }

  showModal = () => this.setState({ visible: true });
  handleCancel = () => this.setState({ visible: false })

  render() {
    console.log(this.state.userList);
    let data1 = this.state.userList
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

          <UserInfo spin={this.state.spin} data={this.state.userList} />


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

export default withApollo(Users);