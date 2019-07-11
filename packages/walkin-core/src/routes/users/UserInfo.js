import React, { Component } from "react";
import { Row, Col, Input, Icon, Button } from "antd";
import UserCard from "./UserCard";

const Search = Input.Search;

export default class UserInfo extends Component {
  render() {
    return (
      <div>
        <div style={{ height: 40, marginBottom: 20 }}>
          <div className="gx-d-inline-flex divCenterVertical userCt">
            75 Users
          </div>
          <div
            className="gx-d-inline-flex divCenterVertical"
            style={{ float: "right", flexFlow: "right" }}
          >
            <Search placeholder="Search" style={{ marginBottom: 0 }} />
            <span style={{ width: 100, marginLeft: 35, fontSize: 17 }}>
              Filter <Icon type="filter" />
            </span>
          </div>
        </div>

        <Row className="userHeaderRow">
          <Col span={7}>Name & Role</Col>
          <Col span={4}>Email</Col>
          <Col span={4}>Org Level</Col>
          <Col span={3}>Status</Col>
          <Col span={4}>Creator</Col>
        </Row>
        {(this.props.data && this.props.data.length) ?
          this.props.data.map(user => <UserCard data={user} />)
          : ''}

      </div>
    );
  }
}
