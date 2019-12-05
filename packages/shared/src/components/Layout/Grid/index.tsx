import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import "antd/dist/antd.css";

export default class CustomGrid extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col style={{ backgroundColor: "#FF34" }} span={12}>
            col-12
          </Col>
          <Col style={{ backgroundColor: "#FA34" }} span={12}>
            col-12
          </Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </div>
    );
  }
}
