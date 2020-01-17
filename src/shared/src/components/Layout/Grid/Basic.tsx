import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import "./index.css";

export default class BasicGrid extends React.Component {
  render() {
    return (
      <div className="basic-main">
        <Row>
          <Col className="basic-box" span={12}>
            col-12
          </Col>
          <Col className="basic-box" span={12}>
            col-12
          </Col>
        </Row>
        <Row>
          <Col className="basic-box" span={8}>
            col-8
          </Col>
          <Col className="basic-box" span={8}>
            col-8
          </Col>
          <Col className="basic-box" span={8}>
            col-8
          </Col>
        </Row>
        <Row>
          <Col className="basic-box" span={6}>
            col-6
          </Col>
          <Col className="basic-box" span={6}>
            col-6
          </Col>
          <Col className="basic-box" span={6}>
            col-6
          </Col>
          <Col className="basic-box" span={6}>
            col-6
          </Col>
        </Row>
      </div>
    );
  }
}
