import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import "antd/dist/antd.css";
import "./index.css";

export default class FlexLayoutGrid extends React.Component {
  render() {
    return (
      <div>
        <p>sub-element align left</p>
        <Row type="flex" justify="start">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <p>sub-element align center</p>
        <Row type="flex" justify="center">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <p>sub-element align right</p>
        <Row type="flex" justify="end">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <p>sub-element monospaced arrangement</p>
        <Row type="flex" justify="space-between">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>

        <p>sub-element align full</p>
        <Row type="flex" justify="space-around">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
      </div>
    );
  }
}
