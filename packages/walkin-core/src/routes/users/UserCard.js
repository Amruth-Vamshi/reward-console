import React, { Component } from "react";
import { Col, Row, Dropdown, Menu, Avatar, Button, Divider } from "antd";

const options = [
  "Edit"
  // 'Delete',
];
export default class UserCard extends Component {
  menus = () => (
    <Menu
      onClick={e => {
        if (e.key === "Edit") {
          sessionStorage.setItem("placeId", JSON.stringify(this.props.data.id));
          this.props.history.push("/nearx/places/createplace/manually");
        } else {
          // this.onDeleteContact(this.props.contact)
        }
      }}
    >
      {" "}
      {options.map(option => (
        <Menu.Item key={option}> {option} </Menu.Item>
      ))}
    </Menu>
  );

  random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
    return bgColor;
  }

  status_bg(status) {
    switch (status) {
      case "pending":
        return "#cea500";
      case "blocked":
        return "red";
      // case 'active': return 'green'
      default:
        return "";
    }
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <Row>
          <Col span={7}>
            <div className="divCenterVertical">
              <div style={{ float: "left", marginRight: 15 }}>
                {data.image === null ||
                data.image === "" ||
                data.image === undefined ? (
                  <Avatar
                    style={{ backgroundColor: `${this.random_bg_color()}` }}
                    size="large"
                  >
                    {" "}
                    <span style={{ fontSize: 25 }}>
                      {data.firstName
                        ? data.firstName.charAt(0).toUpperCase()
                        : data.email.charAt(0).toUpperCase()}
                    </span>{" "}
                  </Avatar>
                ) : (
                  <Avatar size="large" alt={data.firstName} src={data.image} />
                )}
              </div>

              <div>
                <Row>
                  <span style={{ color: "black", marginBottom: 5 }}>
                    {data.firstName}&nbsp; {data.lastName ? data.lastName : ""}{" "}
                  </span>
                </Row>
                <Row>
                  <span style={{ color: "#999999" }}>{data.role}</span>
                </Row>
              </div>
            </div>
          </Col>
          <Col span={4}>
            {" "}
            <div className="divCenterVertical wordBk">
              <span>{data.email}</span>
            </div>
          </Col>

          <Col span={4}>
            <div className="divCenterVertical">
              <div>
                <Row>
                  <span style={{ marginBottom: 5 }}>{data.orgLevel}</span>
                </Row>
                {data.Assign ? (
                  <Row>
                    <i className="gx-pointer gx-text-primary">Assign</i>
                  </Row>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Col>

          <Col span={3}>
            {" "}
            <div className="divCenterVertical">
              <span
                style={{
                  color: `${this.status_bg(data.status.toLowerCase())}`
                }}
              >
                {data.status}
              </span>
            </div>
          </Col>

          <Col span={4}>
            <div className="divCenterVertical">
              <span>{data.creator}</span>
            </div>
          </Col>

          <Col span={2}>
            <div className="gx-module-contact-right divCenter">
              {/* <Dropdown overlay={this.menus()} placement="bottomRight" trigger={['click']}>
                <i className="gx-icon-btn icon icon-ellipse-v" />
              </Dropdown> */}
            </div>
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}
