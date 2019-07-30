import React, { Component } from "react";
import { Row, Col, Input, Empty, Spin, Icon, Button } from "antd";
import UserCard from "./UserCard";

const Search = Input.Search;

export default class UserInfo extends Component {
  render() {
    return (
      <div>
        <div style={{ height: 40, marginBottom: 20 }}>
          <div className="gx-d-inline-flex divCenterVertical userCt">
            {this.props.data.length} Users
          </div>
          {/* <div
            className="gx-d-inline-flex gx-pointer divCenterVertical"
            style={{ float: "right", flexFlow: "right" }}
          >
            <Search placeholder="Search" style={{ marginBottom: 0 }} />
            <span style={{ width: 100, marginLeft: 35, fontSize: 17 }}>
              Filter <Icon type="filter" />
            </span>
          </div> */}
        </div>

        <Row className="userHeaderRow">
          <Col span={7}>Name & Role</Col>
          <Col span={4}>Email</Col>
          <Col span={4}>Org Level</Col>
          <Col span={3}>Status</Col>
          <Col span={3}>Creator</Col>
        </Row>

        {this.props.spin ?
          <div> <br /> <br /> <div className="divCenter">  <Spin size="large" /> </div> <br /> <br /> <br />  </div>
          : (this.props.data && this.props.data.length) ?
            this.props.data.map((user, key) => <UserCard key={key} data={user} />)
            : <Empty />}


      </div>
    );
  }
}
